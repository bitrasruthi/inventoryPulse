import { useEffect, useRef, useState } from "react";
import {
  IconButton,
  Collapse,
  Box,
  Radio,
  Grid2,
  useMediaQuery,
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
import ReportsStyles from "../../../styles/reportsStyles";

const Reports = () => {
  const [openSections, setOpenSections] = useState<any>({});
  const matches = useMediaQuery((_theme: any) =>
    _theme?.breakpoints?.down("sm")
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
        const tolerance = 1;

        const left = scrollLeft > 0;
        const right = scrollLeft < scrollWidth - offsetWidth - tolerance;
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
      {reportsParentActionIcons.map((icon, index) => (
        <Grid2
          size={12}
          sx={{
            borderLeft: "1px solid  #e0e0e0",
            justifyContent: "center",
            display: "flex",
            alignItems: "center",
            pb: { xs: 1, sm: 0 },
          }}
        >
          <icon.icon sx={{ width: 16, height: 16 }} />
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
            <icon.icon sx={{ width: 16, height: 16 }} />
          </Grid2>
        ))}
      </Grid2>
    ) : (
      <>
        {reportsChildActionIcons.map((icon, index) => (
          <Grid2
            size={12}
            sx={{
              borderLeft: index === 0 ? "" : "1px solid  #e0e0e0",

              justifyContent: "center",
              display: "flex",
              alignItems: "center",
              height: 110,
            }}
          >
            <icon.icon sx={{ width: 16, height: 16 }} />
          </Grid2>
        ))}
      </>
    );

  return (
    <ReportsStyles>
      {Object.values(tableDataDummy2.rooms).map((section: any, key: number) => (
        <Box key={key} pb={3}>
          <Grid2 container spacing={0} className="parent-container">
            <Grid2
              size={{ xs: 1, sm: 0.3 }}
              sx={{
                backgroundColor: `${
                  inspectionColors2[key % inspectionColors2.length]
                }`,
              }}
              className="expand-collapse-grid"
              onClick={() => toggleSection(section.uuid)}
            >
              <IconButton disableRipple>
                {openSections[section.uuid] ? <ExpandLess /> : <ExpandMore />}
              </IconButton>
            </Grid2>
            <Grid2 size={{ xs: 11, sm: 11.7 }}>
              <Grid2
                container
                spacing={0}
                display={{
                  xs: "flex",
                  sm: "none",
                }}
                sx={{
                  borderBottom: "1px solid #ddd",
                }}
              >
                <Grid2
                  className="parent-index-grid"
                  sx={{ display: "none !important" }}
                >
                  {key + 1}
                </Grid2>
                <Grid2 className="parent-content-grid">
                  <OutlinedTextField
                    variant="outlined"
                    placeholder={section.name?.value}
                    value={section.name?.value}
                    type={"pagination"}
                  />
                </Grid2>
                <Grid2
                  className="parent-icons-grid"
                  sx={{ display: "block !important" }}
                >
                  {parentActionsIcons()}
                </Grid2>
              </Grid2>
              <Grid2 container spacing={0} display={{ xs: "none", sm: "flex" }}>
                <Grid2 className="parent-index-grid">{key + 1}</Grid2>
                <Grid2 className="parent-content-grid">
                  <OutlinedTextField
                    variant="outlined"
                    placeholder={section.name?.value}
                    value={section.name?.value}
                    type={"pagination"}
                  />
                </Grid2>
                <Grid2 className="parent-icons-grid">
                  {parentActionsIcons()}
                </Grid2>
              </Grid2>

              <Collapse
                in={openSections[section.uuid]}
                timeout="auto"
                unmountOnExit
              >
                <Grid2
                  display={{ xs: "none", sm: "flex" }}
                  container
                  spacing={0}
                  className="collapse-parent-grid"
                >
                  <Box
                    className="collapse-box"
                    id="scroll-container"
                    ref={scrollContainerRef}
                  >
                    {Object.values(section.items)?.map(
                      (_item: any, _childIndex: number) => (
                        <>
                          {_childIndex === 0 && (
                            <Grid2 container spacing={0}>
                              <Grid2
                                className="left-positioned-grid"
                                sx={{
                                  backgroundColor: "#f4f4f4",
                                  minHeight: 31,
                                }}
                              ></Grid2>
                              <Grid2 className="scrollable-content-grid">
                                {Object.values(section?.fields)?.map(
                                  (field: any, _rowIndex: number) => (
                                    <Box
                                      key={_childIndex}
                                      sx={{
                                        borderRight:
                                          _rowIndex ===
                                          Object.values(section?.fields)
                                            .length -
                                            1
                                            ? "none"
                                            : "1px solid #ddd",
                                        backgroundColor: "#f4f4f4",
                                      }}
                                      className="scrollable-box"
                                    >
                                      {field.name.includes("-")
                                        ? ""
                                        : field.name}
                                    </Box>
                                  )
                                )}
                              </Grid2>
                              <Grid2
                                className="right-positioned-grid"
                                sx={{ backgroundColor: "#f4f4f4" }}
                              ></Grid2>
                            </Grid2>
                          )}
                          <Grid2 container spacing={0}>
                            <Grid2
                              className="left-positioned-grid"
                              sx={{
                                background: "#fff",
                                minHeight:
                                  _childIndex ===
                                  Object.values(section?.items).length - 1
                                    ? 110
                                    : 100,
                                boxShadow:
                                  scrollPosition.left ||
                                  scrollPosition.bothShadows
                                    ? "2px 2px 10px #ddd"
                                    : "none",
                                borderBottom:
                                  _childIndex ===
                                  Object.values(section?.items).length - 1
                                    ? "none !important"
                                    : "1px solid #ddd",
                                borderTop:
                                  _childIndex ===
                                  Object.values(section?.items).length - 1
                                    ? "1px solid #ddd"
                                    : "none !important",
                              }}
                            >
                              {key + 1}.{_childIndex + 1}
                            </Grid2>

                            <Grid2 className="scrollable-content-grid">
                              {Object.values(section?.fields)?.map(
                                (field: any, _rowIndex: number) => (
                                  <Box
                                    key={_childIndex}
                                    className="scrollable-box"
                                    sx={{
                                      paddingRight:
                                        _rowIndex ===
                                        Object.values(section?.fields).length -
                                          1
                                          ? 3
                                          : 1,
                                      borderRight:
                                        _rowIndex ===
                                        Object.values(section?.fields).length -
                                          1
                                          ? "none"
                                          : "1px solid #ddd",
                                      borderBottom: "none !important",
                                      borderTop:
                                        _childIndex ===
                                        Object.values(section?.items).length - 1
                                          ? "1px solid #ddd"
                                          : "none !important",
                                    }}
                                  >
                                    {getBodyByType(field)}
                                  </Box>
                                )
                              )}
                            </Grid2>
                            <Grid2
                              className="right-positioned-grid"
                              sx={{
                                background: "#fff",
                                boxShadow:
                                  scrollPosition.right ||
                                  scrollPosition.bothShadows
                                    ? "-2px 2px 10px #ddd"
                                    : "none",
                                borderBottom:
                                  _childIndex ===
                                  Object.values(section?.items).length - 1
                                    ? "none !important"
                                    : "1px solid #ddd",
                                borderTop:
                                  _childIndex ===
                                  Object.values(section?.items).length - 1
                                    ? "1px solid #ddd"
                                    : "none !important",
                                height: 110,
                              }}
                            >
                              {childActionsIcons()}
                            </Grid2>
                          </Grid2>
                        </>
                      )
                    )}
                  </Box>
                </Grid2>

                {Object.values(section.items)?.map(
                  (_item: any, childIndex: number) => (
                    <Grid2
                      container
                      spacing={0}
                      display={{ xs: "flex", sm: "none" }}
                    >
                      <Grid2 size={12} p={1} textAlign={"center"}>
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
                      <Grid2
                        size={12}
                        sx={{
                          borderBottom:
                            Object.values(section.items).length - 1 ===
                            childIndex
                              ? ""
                              : "1px solid #ddd",
                        }}
                      >
                        {" "}
                        {childActionsIcons()}
                      </Grid2>
                    </Grid2>
                  )
                )}
              </Collapse>
            </Grid2>
          </Grid2>
        </Box>
      ))}
    </ReportsStyles>
  );
};

export default Reports;
