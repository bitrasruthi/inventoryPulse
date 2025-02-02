import { useEffect, useRef, useState } from "react";
import {
  TableCell,
  IconButton,
  Collapse,
  Box,
  styled,
  Radio,
  Grid2,
} from "@mui/material";
import { ExpandMore, ExpandLess, MoreVert } from "@mui/icons-material";
import OutlinedTextField from "../../../components/outlinedTextField";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import DescriptionIcon from "@mui/icons-material/Description";
import { tableDataDummy2, tabMenuList } from "../../../constants/constants";
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

  const parentActionsIcons = (parentId?: number) => (
    <>
      <Grid2
        size={12}
        sx={{
          borderRight: "1px solid  #e0e0e0",
          justifyContent: "center",
          display: "flex",
          alignItems: "center",
        }}
      >
        <CameraAltIcon />
      </Grid2>
      <Grid2
        size={12}
        sx={{
          borderRight: "1px solid  #e0e0e0",
          placeContent: "center",
          justifyContent: "center",
          display: "flex",
          alignItems: "center",
        }}
      >
        <DescriptionIcon />
      </Grid2>
      <Grid2
        size={12}
        sx={{
          justifyContent: "center",
          display: "flex",
          alignItems: "center",
        }}
      >
        <MoreVert />
      </Grid2>
    </>
  );

  const childActionsIcons = (childId?: number) => (
    <Grid2
      container
      spacing={0}
      sx={{
        height: 100,
        alignItems: "center",
      }}
    >
      <Grid2
        size={4}
        sx={{
          borderRight: "1px solid #ccc",
          borderLeft: "1px solid #ccc",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxSizing: "border-box",
        }}
      >
        {" "}
        <ReportProblemIcon />
      </Grid2>
      <Grid2
        size={4}
        sx={{
          borderRight: "1px solid #ccc",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxSizing: "border-box",
        }}
      >
        <DescriptionIcon />
      </Grid2>
      <Grid2
        size={4}
        sx={{
          borderRight: "1px solid #ccc",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxSizing: "border-box",
        }}
      >
        {" "}
        <MoreVert />
      </Grid2>
    </Grid2>
  );

  return (
    <Box sx={{ p: { xs: 2, lg: 3 } }}>
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
              <Grid2 container spacing={0}>
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
                <Grid2 container spacing={0}>
                  <Grid2 size={{ xs: 1.5, sm: 0.5, lg: 0.5 }}>
                    {Object.values(section.items)?.map(
                      (_item: any, childIndex: number) => (
                        <Grid2
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            position: "sticky",
                            top: 0,
                            zIndex: 2,
                            height: "100px",
                            backgroundColor: "#fff",
                            boxShadow:
                              scrollPosition.left || scrollPosition.bothShadows
                                ? "inset -8px 0 8px -7px rgba(0, 0, 0, 0.2)"
                                : "none",
                          }}
                        >
                          {key + 1}.{childIndex + 1}
                        </Grid2>
                      )
                    )}
                  </Grid2>

                  <Grid2
                    id="scroll-container"
                    ref={scrollContainerRef}
                    size={{ xs: 10.5, sm: 9.5, lg: 10 }}
                    sx={{
                      overflowX: "auto",
                      whiteSpace: "nowrap",
                      position: "relative",
                      display: "flex",
                      flexDirection: "column",
                      maxHeight: "calc(100vh - 100px)",
                      overflowY: "auto",
                    }}
                  >
                    {Object.values(section.items)?.map(
                      (_item: any, childIndex: number) => (
                        <Grid2
                          container
                          spacing={0}
                          sx={{
                            borderBottom: "1px solid #ddd",
                            alignItems: "center",
                            flexWrap: "nowrap",
                            flexShrink: 0,
                            height: "auto",
                            display: { xs: "block", sm: "flex" },
                          }}
                          key={childIndex}
                        >
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
                                  width: 200,
                                  height: "auto",
                                }}
                              >
                                {getBodyByType(field)}
                              </Box>
                            )
                          )}
                        </Grid2>
                      )
                    )}
                  </Grid2>

                  <Grid2 size={{ xs: 1.5, sm: 2, lg: 1.5 }}>
                    {Object.values(section.items)?.map(
                      (_item: any, childIndex: number) => (
                        <Box
                          key={childIndex}
                          sx={{
                            height: 100,
                            boxShadow:
                              scrollPosition.right || scrollPosition.bothShadows
                                ? "inset 10px 0 8px -8px rgba(0, 0, 0, 0.2)"
                                : "none",
                          }}
                        >
                          {childActionsIcons()}
                        </Box>
                      )
                    )}
                  </Grid2>
                </Grid2>
              </Collapse>
            </Grid2>
          </Grid2>
        </Box>
      ))}
    </Box>
  );
};

export default Reports;
