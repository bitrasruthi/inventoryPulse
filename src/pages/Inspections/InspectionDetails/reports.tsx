import { useEffect, useRef, useState } from "react";
import {
  TableCell,
  IconButton,
  Collapse,
  Box,
  styled,
  Radio,
  Grid2,
  useMediaQuery,
  Typography,
} from "@mui/material";
import { ExpandMore, ExpandLess, MoreVert } from "@mui/icons-material";
import OutlinedTextField from "../../../components/outlinedTextField";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import DescriptionIcon from "@mui/icons-material/Description";
import {
  inspectionColors2,
  tableDataDummy2,
  tabMenuList,
} from "../../../constants/constants";
import SelectField from "../../../components/selectField";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";

const BorderTableCell = styled(TableCell)({
  border: "1px solid #e0e0e0",
  zIndex: 1,
  minWidth: 200,
  padding: 0,
});

const Reports = () => {
  const [openSections, setOpenSections] = useState<any>({});
  const matches = useMediaQuery((_theme: any) =>
    _theme?.breakpoints?.down("700")
  );
  const [scrollPosition, setScrollPosition] = useState({
    left: false,
    right: false,
    bothShadows: false,
  });

  const scrollContainerRef = useRef<any>(null);

  useEffect(() => {
    const checkScrollPosition = () => {
      const container = scrollContainerRef?.current;
      if (container) {
        const scrollLeft = container.scrollLeft;
        const scrollWidth = container.scrollWidth;
        const offsetWidth = container.offsetWidth;

        const left = scrollLeft > 0;
        const right = scrollLeft < scrollWidth - offsetWidth;
        const bothShadows = left && right;

        setScrollPosition((prevState) => {
          if (
            prevState.left !== left ||
            prevState.right !== right ||
            prevState.bothShadows !== bothShadows
          ) {
            return { left, right, bothShadows };
          }
          return prevState;
        });
      }
    };

    const intervalId = setInterval(checkScrollPosition, 100);

    return () => clearInterval(intervalId);
  }, []);

  const toggleSection = (section: any) => {
    setOpenSections((prev: any) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const getBodyByType = (row: any) => {
    switch (row.type) {
      case "TEXT":
        return (
          <OutlinedTextField
            variant="outlined"
            placeholder={row.name}
            value={row.name}
          />
        );
      case "SELECT":
        return <SelectField options={tabMenuList} />;
      case "SELECT_MULTI":
        return <SelectField options={tabMenuList} />;
      case "SCALE":
        return (
          <>
            <Radio />
            <Radio />
            <Radio />
            <Radio />
          </>
        );
      case "TEXTAREA":
        return (
          <OutlinedTextField
            variant="outlined"
            placeholder={row.name}
            value={row.name}
            multiline={true}
            minRows={2}
          />
        );
      default:
        break;
    }
  };

  const reportsParentActionIcons = [
    {
      id: 1,
      icon: CameraAltIcon,
    },
    {
      id: 2,
      icon: DescriptionIcon,
    },
    {
      id: 3,
      icon: MoreVert,
    },
  ];

  const parentActionsIcons = (parentId?: number) => (
    <>
      {reportsParentActionIcons.map((icon) => (
        <Grid2
          size={12}
          sx={{
            borderRight: "1px solid  #e0e0e0",
            justifyContent: "center",
            display: "flex",
            alignItems: "center",
            pb: { xs: 1, lg: 0 },
          }}
        >
          <icon.icon />
        </Grid2>
      ))}
    </>
  );

  const reportsChildActionIcons = [
    {
      id: 1,
      icon: ReportProblemIcon,
    },
    {
      id: 2,
      icon: DescriptionIcon,
    },
    {
      id: 3,
      icon: MoreVert,
    },
  ];

  const childActionsIcons = (childId?: number) =>
    matches ? (
      <Grid2 container spacing={3} textAlign={"center"}>
        {reportsChildActionIcons.map((icon) => (
          <Grid2 size={4} pb={2}>
            <icon.icon />
          </Grid2>
        ))}
      </Grid2>
    ) : (
      <>
        {reportsChildActionIcons.map((icon, index) => (
          <Grid2
            size={12}
            sx={{
              borderRight:
                reportsChildActionIcons.length - 1 === index
                  ? ""
                  : "1px solid  #e0e0e0",
              justifyContent: "center",
              display: "flex",
              alignItems: "center",
            }}
          >
            <icon.icon />
          </Grid2>
        ))}
      </>
    );

  return (
    <Box sx={{ p: 3 }}>
      {Object.values(tableDataDummy2.rooms).map((section: any, key: number) => (
        <Box key={key} sx={{ pb: 3 }}>
          <Grid2
            container
            spacing={0}
            sx={{
              border: "1px solid #ddd",
              borderRadius: "4px",
            }}
          >
            <Grid2
              size={{ xs: 1, sm: 0.5, lg: 0.3 }}
              sx={{
                borderRight: "1px solid #ddd",
                backgroundColor: `${
                  inspectionColors2[key % inspectionColors2.length]
                }`,
                justifyContent: "center",
                alignItems: "flex-start",
                display: "flex",
                cursor: "pointer",
              }}
              onClick={() => toggleSection(section.uuid)}
            >
              <IconButton disableRipple sx={{}}>
                {openSections[section.uuid] ? <ExpandLess /> : <ExpandMore />}
              </IconButton>
            </Grid2>
            <Grid2 size={{ xs: 11, sm: 11.5, lg: 11.7 }}>
              <Grid2
                container
                spacing={0}
                sx={{ borderBottom: "1px solid #e0e0e0" }}
              >
                <Grid2
                  size={0.4}
                  sx={{
                    display: { xs: "none", lg: "flex" },
                    justifyContent: "center",
                    alignItems: "center",
                    borderRight: "1px solid #ddd",
                  }}
                >
                  {key + 1}
                </Grid2>
                <Grid2
                  size={{ xs: 12, sm: 10 }}
                  p={1}
                  sx={{ borderRight: "1px solid #ddd" }}
                >
                  <OutlinedTextField
                    variant="outlined"
                    placeholder={section.name?.value}
                    value={section.name?.value}
                    type={"pagination"}
                  />
                </Grid2>
                <Grid2
                  size={{ xs: 12, sm: 2, lg: 1.6 }}
                  sx={{
                    display: { xs: "flex", lg: "flex" },
                    flexGrow: 1,
                  }}
                >
                  {parentActionsIcons()}
                </Grid2>
              </Grid2>

              <Collapse
                in={openSections[section.uuid]}
                timeout="auto"
                unmountOnExit
              >
                {matches ? (
                  Object.values(section.items)?.map(
                    (_item: any, childIndex: number) => (
                      <Grid2 container spacing={0}>
                        <Grid2 size={12} p={1} textAlign={"center"}>
                          {" "}
                          {key + 1}.{childIndex + 1}
                        </Grid2>
                        <Grid2 size={12}>
                          {Object.values(section?.fields)?.map(
                            (field: any, _rowIndex: number) => (
                              <Box
                                key={_rowIndex}
                                sx={{
                                  px: 2,
                                  py: 1,
                                  borderRight:
                                    _rowIndex ===
                                    Object.values(section?.fields).length - 1
                                      ? "none"
                                      : "1px solid #ddd",
                                  flexShrink: 0,
                                }}
                              >
                                {getBodyByType(field)}
                              </Box>
                            )
                          )}
                        </Grid2>
                        <Grid2 size={12}> {childActionsIcons()}</Grid2>
                      </Grid2>
                    )
                  )
                ) : (
                  <>
                    <Grid2
                      container
                      spacing={0}
                      id="scroll-container"
                      ref={scrollContainerRef}
                      sx={{
                        overflow: "auto",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {Object.values(section.items)?.map(
                        (_item: any, childIndex: number) => (
                          <>
                            {/* Header row */}
                            {childIndex === 0 && (
                              <>
                                <Grid2
                                  size={0.4}
                                  sx={{
                                    display: { xs: "none", lg: "flex" },
                                    alignItems: "center",
                                    backgroundColor: "#f4f4f4",
                                    borderRight: "1px solid #e0e0e0",
                                    px: 1,
                                    fontWeight: "bold",
                                    borderBottom: "1px solid #e0e0e0",
                                  }}
                                ></Grid2>
                                <Grid2
                                  size={10}
                                  sx={{
                                    display: { xs: "none", lg: "flex" },
                                    backgroundColor: "#f4f4f4",
                                    zIndex: 3,
                                    borderBottom: "1px solid #e0e0e0",
                                  }}
                                >
                                  {Object.values(section?.fields)?.map(
                                    (field: any, _headerIndex: number) => (
                                      <Grid2
                                        size={
                                          Object.values(section?.fields)
                                            .length / 12
                                        }
                                        key={_headerIndex}
                                        sx={{
                                          px: 2,
                                          py: 1,
                                          borderRight:
                                            _headerIndex ===
                                            Object.values(section?.fields)
                                              .length -
                                              1
                                              ? "none"
                                              : "1px solid #ddd",
                                          textAlign: "center",
                                          fontWeight: "bold",
                                          flexGrow: 1,
                                        }}
                                      >
                                        {field.name.includes("-")
                                          ? ""
                                          : field.name}{" "}
                                      </Grid2>
                                    )
                                  )}
                                </Grid2>
                                <Grid2
                                  size={1.6}
                                  sx={{
                                    background: "#f4f4f4",
                                    display: { xs: "none", lg: "flex" },
                                    alignItems: "center",
                                    fontWeight: "bold",
                                    borderBottom: "1px solid #e0e0e0",
                                  }}
                                ></Grid2>
                              </>
                            )}

                            {/* Field rows */}
                            <Grid2
                              size={{ xs: 12, lg: 0.4 }}
                              sx={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                backgroundColor: "#fff !important",
                                borderRight: "1px solid #e0e0e0",
                                px: 1,
                                borderBottom:
                                  Object.values(section.items).length - 1 ==
                                  childIndex
                                    ? ""
                                    : "1px solid #e0e0e0",
                              }}
                            >
                              {key + 1}.{childIndex + 1}
                            </Grid2>

                            <Grid2
                              size={10}
                              sx={{
                                display: { xs: "block", lg: "flex" },
                                borderBottom:
                                  Object.values(section.items).length - 1 ==
                                  childIndex
                                    ? ""
                                    : "1px solid #e0e0e0",
                                overflow: "auto",
                                flexWrap: "nowrap",
                              }}
                            >
                              {Object.values(section?.fields)?.map(
                                (field: any, _rowIndex: number) => (
                                  <Grid2
                                    size={{
                                      xs: 12,
                                      lg:
                                        12 /
                                        Object.values(section?.fields).length,
                                    }}
                                    key={_rowIndex}
                                    sx={{
                                      px: 2,
                                      py: 1,

                                      borderRight: "1px solid #ddd",
                                      // borderRight:
                                      //   _rowIndex ===
                                      //   Object.values(section?.fields).length -
                                      //     1
                                      //     ? "none"
                                      //     : "1px solid #ddd",
                                      flexGrow: 1,
                                      height: "auto",
                                      flexWrap: "wrap",
                                    }}
                                  >
                                    {getBodyByType(field)}
                                  </Grid2>
                                )
                              )}
                            </Grid2>

                            <Grid2
                              size={1.6}
                              sx={{
                                background: "#fff",
                                display: "flex",
                                flexGrow: 1,
                                borderBottom:
                                  Object.values(section.items).length - 1 ==
                                  childIndex
                                    ? ""
                                    : "1px solid #e0e0e0",
                              }}
                            >
                              {childActionsIcons()}
                            </Grid2>
                          </>
                        )
                      )}
                    </Grid2>
                  </>
                )}
              </Collapse>
            </Grid2>
          </Grid2>
        </Box>
      ))}
    </Box>
  );
};

export default Reports;
