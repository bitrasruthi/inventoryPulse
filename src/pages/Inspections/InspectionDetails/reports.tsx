import React, { useEffect, useRef, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Box,
  Grid2,
  IconButton,
  Collapse,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { styled } from "@mui/system";
import { ExpandLess, ExpandMore, MoreVert } from "@mui/icons-material";

import AddIcon from "@mui/icons-material/Add";
import CameraIcon from "../../../assets/icons/cameraIcon";
import DetailsIcon from "../../../assets/icons/detailsIcon";
import ReportIcon from "../../../assets/icons/reportIcon";
import MenuCommon from "../../../components/menuCommon";
import MuiAutocomplete from "../../../components/MuiAutocomplete";
import MuiRating from "../../../components/MuiRating";
import OutlinedTextField from "../../../components/outlinedTextField";
import SelectField from "../../../components/selectField";
import {
  tableDataDummy2,
  inspectionColors2,
  userMenuList,
} from "../../../constants/constants";
import ReportsStyles from "../../../styles/reportsStyles";
import theme from "../../../styles/theme";

const StyledTableContainer = styled(TableContainer)({
  position: "relative",
  maxWidth: "100%",
  overflowX: "auto",
  //   boxShadow: "0px 2px 10px rgba(0,0,0,0.1)",
});

const StyledTable = styled(Table)({
  minWidth: "900px",
});

const StickyTableCell = styled(TableCell)({
  position: "sticky",
  background: "#fff",
  zIndex: 2,
  fontWeight: "bold",
  borderRight: "1px solid #ddd",
  textAlign: "center",
  //   boxShadow: "2px 0 5px rgba(0,0,0,0.1)",
});

const LeftStickyCell = styled(StickyTableCell)({
  left: 0,
  width: "40px",
  maxWidth: "40px",
  zIndex: 3,
  whiteSpace: "normal",
  wordWrap: "break-word",
  fontSize: 12,
});

const RightStickyCell = styled(StickyTableCell)({
  right: 0,
  width: "100px",
  maxWidth: "100px",
  borderLeft: "1px solid #ddd",
  borderRight: "none",
  zIndex: 3,
  whiteSpace: "normal",
  wordWrap: "break-word",
});

const RegularTableCell = styled(TableCell)({
  minWidth: "200px",
  width: "200px",
});

const reportsParentActionIcons = [
  {
    id: 1,
    icon: CameraIcon,
  },
  {
    id: 2,
    icon: DetailsIcon,
  },
  {
    id: 3,
    icon: MoreVert,
  },
];

const reportsChildActionIcons = [
  {
    id: 1,
    icon: CameraIcon,
  },
  {
    id: 2,
    icon: ReportIcon,
  },
  {
    id: 3,
    icon: MoreVert,
    onClick: (childid: string) => {
      console.log(childid);
    },
  },
];

const Reports = () => {
  const [tableData, setTableData] = useState<any>(tableDataDummy2);
  const [openSections, setOpenSections] = useState<any>({});
  const [selectedChildId, setSelectedChildId] = useState<any>(0);
  const [selectedRowId, setSelectedRowId] = useState<any>(0);
  const [scrollPosition, setScrollPosition] = useState<any>(0);
  const tableContainerRef = useRef<any>(null);
  const [isScrolling, setIsScrolling] = useState(false);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);
  const matches = useMediaQuery((_theme: any) =>
    _theme?.breakpoints?.down("sm")
  );

  const getBodyByType = (row: any, values: any) => {
    switch (row.type) {
      case "TEXT":
        return (
          <OutlinedTextField
            variant="outlined"
            placeholder={row.placeholder}
            value={values[row.uuid] ? values[row.uuid].content : ""}
            handleChange={(newValue) => {
              console.log("Updated blured", newValue.target.value);
            }}
          />
        );
      case "SELECT":
        return (
          <SelectField
            options={row.source.options}
            value={values[row.uuid] ? values[row.uuid].content : ""}
            onChange={(newValue) => {
              console.log("Updated Value ", newValue.target.value);
            }}
          />
        );
      case "SELECT_MULTI":
        return (
          <MuiAutocomplete
            options={row.source.options}
            selectedValues={values[row.uuid] ? values[row.uuid].content : []}
            onHandleChange={(_e, newValue) => {
              console.log("Updated Value", newValue);
            }}
            placeholder={row.placeholder}
          />
        );
      case "SCALE":
        return (
          // <MuiRadioButton
          //   radioList={radioDummyList}
          //   control={control}
          //   onChange={(newValue) => {
          //     console.log("Updated Value", newValue.target.value);
          //   }}
          //   value={values[row.uuid] ? values[row.uuid].content : ""}
          // />
          <MuiRating
            value={values[row.uuid] ? values[row.uuid].content : null}
            max={row.source?.option_set?.type === 2 ? 5 : 3}
            onChange={(_event, newValue) => {
              console.log("Updated Value:", newValue);
            }}
          />
        );
      case "TEXTAREA":
        return (
          <OutlinedTextField
            variant="outlined"
            placeholder={row.placeholder}
            value={values[row.uuid] ? values[row.uuid].content : ""}
            multiline={true}
            minRows={2}
            handleChange={(newValue) => {
              console.log("Updated blured", newValue.target.value);
            }}
          />
        );
      default:
        break;
    }
  };

  const useHasHorizontalScrollbar = () => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const [hasHorizontalScrollbar, setHasHorizontalScrollbar] = useState(false);

    useEffect(() => {
      const checkHorizontalScrollbar = () => {
        if (!tableContainerRef.current) return;

        const element = tableContainerRef.current;
        setHasHorizontalScrollbar(element.scrollWidth > element.clientWidth);
      };

      checkHorizontalScrollbar();
      window.addEventListener("resize", checkHorizontalScrollbar);

      return () =>
        window.removeEventListener("resize", checkHorizontalScrollbar);
    }, []);

    return { hasHorizontalScrollbar };
  };

  const { hasHorizontalScrollbar } = useHasHorizontalScrollbar();

  useEffect(() => {
    const tableContainer = tableContainerRef.current;
    let scrollTimeout: NodeJS.Timeout;

    const handleScroll = () => {
      setScrollPosition(tableContainer.scrollLeft);
      setIsScrolling(true);

      clearTimeout(scrollTimeout);

      scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
      }, 250);
    };

    if (tableContainer) {
      tableContainer.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (tableContainer) {
        tableContainer.removeEventListener("scroll", handleScroll);
      }
      clearTimeout(scrollTimeout);
    };
  }, [tableContainerRef.current]);

  const parentActionsIcons = (parentId?: number) => (
    <>
      {reportsParentActionIcons.map((icon, index) => (
        <Box
          sx={{
            height: "inherit",
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
            borderRight:
              reportsParentActionIcons.length - 1 === index
                ? ""
                : "1px solid #ddd",
            width: "100%",
            cursor: "pointer",
            ":hover": {
              backgroundColor: "#f6f6f6",
            },
          }}
        >
          <IconButton disableRipple>
            <icon.icon sx={{ width: 16, height: 16 }} />
          </IconButton>
        </Box>
      ))}
    </>
  );

  const generateUUID = () => crypto.randomUUID();

  const handleAddRow = (roomUUID: string, parentUUID: string) => {
    setTableData((prevData: any) => {
      const newUUID = generateUUID();

      return {
        ...prevData,
        rooms: {
          ...prevData.rooms,
          [roomUUID]: {
            ...prevData.rooms[roomUUID],
            items: {
              ...prevData.rooms[roomUUID].items,
              [parentUUID]: {
                ...prevData.rooms[roomUUID].items[parentUUID],
                childItems: [
                  ...(prevData.rooms[roomUUID].items[parentUUID]?.childItems ||
                    []),
                  {
                    id: 0,
                    uuid: newUUID,
                    values: {},
                  },
                ],
              },
            },
          },
        },
      };
    });
  };

  const childActionsIcons = (childId?: string) => (
    <>
      {reportsChildActionIcons.map((icon, index) => (
        <Box
          sx={{
            height: "inherit",
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
            borderRight:
              reportsChildActionIcons.length - 1 === index
                ? ""
                : "1px solid #ddd",
            cursor: "pointer",
            width: "100%",
            ":hover": {
              backgroundColor: "#f6f6f6",
            },
          }}
        >
          <IconButton
            disableRipple
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
              if (icon.id === 3) {
                setAnchorEl(e.currentTarget);
                setSelectedChildId(childId);
              }
            }}
          >
            <icon.icon sx={{ width: 16, height: 16 }} />
          </IconButton>
        </Box>
      ))}
    </>
  );

  const toggleSection = (section: any) => {
    setOpenSections((prev: any) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <ReportsStyles>
      {Object.entries(tableData.rooms).map(([roomUUID, section]: any, key) => (
        <>
          <Box key={roomUUID} pb={3}>
            <Grid2 container spacing={0} className="parent-container">
              <Grid2
                size={{ xs: 1, sm: 0.2 }}
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
              <Grid2 size={{ xs: 11, sm: 11.8 }}>
                <StyledTableContainer>
                  <StyledTable stickyHeader sx={{ height: "100% !important" }}>
                    <TableRow>
                      <LeftStickyCell
                        sx={{
                          background: "#fff",
                          p: 0,
                          borderBottom: openSections[section.uuid]
                            ? "1px solid #ddd"
                            : "none",
                        }}
                      >
                        <Typography fontSize={12} width={"inherit"}>
                          {key + 1}
                        </Typography>
                      </LeftStickyCell>
                      <TableCell
                        sx={{
                          width: `calc(100% - 140px)`,
                          borderBottom: openSections[section.uuid]
                            ? "1px solid #ddd"
                            : "none",
                          padding: "8px 10px !important",
                        }}
                      >
                        <OutlinedTextField
                          variant="outlined"
                          placeholder={section.name?.value}
                          value={section.name?.value}
                          type={"pagination"}
                        />
                      </TableCell>
                      <RightStickyCell
                        sx={{
                          borderBottom: openSections[section.uuid]
                            ? "1px solid #ddd"
                            : "none",
                          height: "100% !important",
                          p: 0,
                        }}
                        width={"inherit"}
                      >
                        <Box
                          display={"flex"}
                          height={"inherit"}
                          justifyContent={"center"}
                        >
                          {parentActionsIcons()}
                        </Box>
                      </RightStickyCell>
                    </TableRow>
                  </StyledTable>
                </StyledTableContainer>

                <Collapse
                  in={openSections[section.uuid]}
                  timeout="auto"
                  unmountOnExit
                >
                  <StyledTableContainer ref={tableContainerRef}>
                    <StyledTable
                      stickyHeader
                      sx={{ height: "100% !important" }}
                    >
                      <TableHead>
                        <TableRow>
                          <LeftStickyCell
                            sx={{ backgroundColor: "#f1f1f1" }}
                          ></LeftStickyCell>
                          {section.items &&
                            Object.values(section.items)?.map(
                              (_item: any, _childIndex: number) =>
                                _childIndex === 0
                                  ? Object.values(section?.fields)?.map(
                                      (field: any, _rowIndex: number) => (
                                        <RegularTableCell
                                          key={_rowIndex}
                                          sx={{
                                            borderRight:
                                              _rowIndex ===
                                              Object.values(section?.fields)
                                                .length -
                                                1
                                                ? "none"
                                                : "1px solid #ddd",
                                            backgroundColor: "#f4f4f4",
                                            minWidth: "200px",
                                            fontFamily: "roboto-medium",

                                            padding: "5px 10px !important",
                                            width: `calc(100% - 140px)`,
                                          }}
                                        >
                                          {field.label.includes("-")
                                            ? ""
                                            : field.label}
                                        </RegularTableCell>
                                      )
                                    )
                                  : null
                            )}
                          <RightStickyCell
                            sx={{
                              height: "100% !important",
                              p: 0,
                              backgroundColor: "#f1f1f1",
                            }}
                            width={"inherit"}
                          ></RightStickyCell>
                        </TableRow>
                      </TableHead>

                      <TableBody>
                        {section.items &&
                          Object.values(section.items)?.map(
                            (_item: any, _childIndex: number) => (
                              <>
                                <TableRow
                                  key={_item.uuid}
                                  onClick={() => {
                                    setSelectedRowId(_item.uuid);
                                  }}
                                  onMouseOver={() => {
                                    if (
                                      Object.values(section.items).length -
                                        1 !==
                                      _childIndex
                                    ) {
                                      setSelectedRowId(_item.uuid);
                                    }
                                  }}
                                  onMouseLeave={() => {
                                    setSelectedRowId("");
                                  }}
                                  sx={{
                                    position: "relative",
                                  }}
                                >
                                  <LeftStickyCell
                                    sx={{
                                      p: 0,
                                      borderBottom:
                                        Object.values(section.items).length -
                                          1 ===
                                        _childIndex
                                          ? ""
                                          : "1px solid #ddd",
                                    }}
                                  >
                                    <Typography fontSize={12} width={"inherit"}>
                                      {key + 1}.{_childIndex + 1}
                                    </Typography>
                                  </LeftStickyCell>

                                  {Object.values(section?.fields)?.map(
                                    (field: any, _rowIndex: number) => (
                                      <>
                                        <RegularTableCell
                                          key={field.uuid}
                                          sx={{
                                            borderRight:
                                              _rowIndex ===
                                              Object.values(section?.fields)
                                                .length -
                                                1
                                                ? "none"
                                                : "1px solid #ddd",
                                            minWidth: "300px",
                                            textAlign:
                                              field.type === "SCALE"
                                                ? "center"
                                                : "inherit",
                                            padding:
                                              "5px 10px 0 10px !important",
                                            width: `calc(100% - 140px)`,
                                          }}
                                          className="scrollable-box"
                                        >
                                          {getBodyByType(field, _item.values)}{" "}
                                        </RegularTableCell>
                                      </>
                                    )
                                  )}

                                  <RightStickyCell
                                    sx={{
                                      background: "#fff",
                                      borderBottom:
                                        Object.values(section.items).length -
                                          1 ===
                                        _childIndex
                                          ? ""
                                          : "1px solid #ddd",
                                      height: "100% !important",
                                      p: 0,
                                    }}
                                  >
                                    <Box
                                      display={"flex"}
                                      height={"inherit"}
                                      justifyContent={"center"}
                                      paddingX={1}
                                    >
                                      {childActionsIcons(_item.uuid)}
                                    </Box>
                                  </RightStickyCell>
                                  <TableCell
                                    sx={{
                                      width: 0,
                                      padding: 0,
                                      border: "none",
                                    }}
                                  >
                                    {selectedRowId === _item.uuid &&
                                      !isScrolling && (
                                        <Box
                                          key={_item.uuid}
                                          sx={{
                                            position: "absolute",
                                            bottom: -10,
                                            left: hasHorizontalScrollbar
                                              ? `calc(0px + ${scrollPosition}px)`
                                              : 0,
                                            zIndex: 99999,
                                            cursor: "pointer",
                                            maxWidth: 30,
                                          }}
                                          onClick={() =>
                                            handleAddRow(roomUUID, _item.uuid)
                                          }
                                        >
                                          <AddIcon
                                            sx={{
                                              background:
                                                theme.palette.primary.main,
                                              color: "#fff",
                                              borderRadius: 1,
                                              height: 20,
                                              width: 20,
                                            }}
                                          />
                                        </Box>
                                      )}
                                  </TableCell>
                                </TableRow>

                                {_item?.childItems?.map(
                                  (childItem: any, grandIndex: number) => (
                                    <TableRow
                                      key={childItem.uuid}
                                      onMouseOver={() => {
                                        setSelectedRowId(childItem.uuid);
                                      }}
                                      sx={{ position: "relative" }}
                                      onMouseLeave={() => {
                                        setSelectedRowId("");
                                      }}
                                    >
                                      <LeftStickyCell
                                        sx={{
                                          p: 0,
                                        }}
                                      >
                                        <Typography
                                          fontSize={12}
                                          width={"inherit"}
                                        >
                                          {key + 1}.{_childIndex + 1}.
                                          {grandIndex + 1}
                                        </Typography>
                                      </LeftStickyCell>

                                      {Object.values(section?.fields)?.map(
                                        (field: any, _rowIndex: number) => (
                                          <RegularTableCell
                                            key={field.uuid}
                                            sx={{
                                              borderRight:
                                                _rowIndex ===
                                                Object.values(section?.fields)
                                                  .length -
                                                  1
                                                  ? "none"
                                                  : "1px solid #ddd",
                                              minWidth: "300px",
                                              textAlign:
                                                field.type === "SCALE"
                                                  ? "center"
                                                  : "inherit",
                                              padding:
                                                "5px 10px 0 10px !important",
                                            }}
                                          >
                                            {getBodyByType(
                                              field,
                                              childItem.values
                                            )}{" "}
                                          </RegularTableCell>
                                        )
                                      )}

                                      <RightStickyCell
                                        sx={{
                                          background: "#fff",
                                          borderBottom:
                                            Object.values(section.items)
                                              .length -
                                              1 ===
                                            _childIndex
                                              ? ""
                                              : "1px solid #ddd",
                                          height: "100% !important",
                                          p: 0,
                                        }}
                                        width={"inherit"}
                                      >
                                        <Box
                                          display={"flex"}
                                          height={"inherit"}
                                          justifyContent={"center"}
                                          padding={"0px 2px"}
                                        >
                                          {childActionsIcons(childItem.uuid)}
                                        </Box>
                                      </RightStickyCell>
                                      <TableCell
                                        sx={{
                                          width: 0,
                                          padding: 0,
                                          border: "none",
                                        }}
                                      >
                                        {selectedRowId === childItem.uuid &&
                                          !isScrolling && (
                                            <Box
                                              key={_item.uuid}
                                              sx={{
                                                position: "absolute",
                                                bottom: -10,
                                                left: hasHorizontalScrollbar
                                                  ? `calc(0px + ${scrollPosition}px)`
                                                  : 0,
                                                zIndex: 99999,
                                                cursor: "pointer",
                                                transition: "opacity 0.3s ease",
                                              }}
                                              onClick={() =>
                                                handleAddRow(
                                                  roomUUID,
                                                  _item.uuid
                                                )
                                              }
                                            >
                                              <AddIcon
                                                sx={{
                                                  background:
                                                    theme.palette.primary.main,
                                                  color: "#fff",
                                                  borderRadius: 1,
                                                  height: 20,
                                                  width: 20,
                                                }}
                                              />
                                            </Box>
                                          )}
                                      </TableCell>
                                    </TableRow>
                                  )
                                )}
                              </>
                            )
                          )}
                      </TableBody>
                    </StyledTable>
                  </StyledTableContainer>
                </Collapse>
              </Grid2>
            </Grid2>
          </Box>
        </>
      ))}
      <MenuCommon
        anchor={anchorEl}
        menuList={userMenuList}
        setAnchor={setAnchorEl}
        open={open}
      />
    </ReportsStyles>
  );
};

export default Reports;
