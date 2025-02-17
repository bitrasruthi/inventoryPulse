import { useEffect, useRef, useState } from "react";
import { IconButton, Collapse, Box, Grid2, useMediaQuery } from "@mui/material";
import { ExpandMore, ExpandLess, MoreVert } from "@mui/icons-material";
import OutlinedTextField from "../../../components/outlinedTextField";
import {
  inspectionColors2,
  radioDummyList,
  tableDataDummy2,
  tabMenuList,
} from "../../../constants/constants";
import SelectField from "../../../components/selectField";
import ReportsStyles from "../../../styles/reportsStyles";
import DetailsIcon from "../../../assets/icons/detailsIcon";
import CameraIcon from "../../../assets/icons/cameraIcon";
import ReportIcon from "../../../assets/icons/reportIcon";
import MenuCommon from "../../../components/menuCommon";
import { IMenuItemExtendProps } from "../../../helpers/Interfaces";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import MuiRadioButton from "../../../components/MuiRadioButton";
import { useFormHook } from "../../../hooks/useFormHook";

const Reports = () => {
  const [openSections, setOpenSections] = useState<any>({});
  const [selectedChildId, setSelectedChildId] = useState<any>(0);
  const [selectedRowId, setSelectedRowId] = useState<any>(0);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const { form } = useFormHook();
  const { control } = form;

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

  const getBodyByType = (row: any, values: any) => {
    switch (row.type) {
      case "TEXT":
        return (
          <OutlinedTextField
            variant="outlined"
            placeholder={row.name}
            value={values[row.uuid].content}
          />
        );
      case "SELECT":
        return (
          <SelectField
            options={tabMenuList}
            value={values[row.uuid].content}
            onChange={(newValue) => {
              console.log("Updated Value ", newValue.target.value);
            }}
          />
        );
      case "SELECT_MULTI":
        return (
          <SelectField
            options={tabMenuList}
            value={values[row.uuid].content}
            onChange={(newValue) => {
              console.log("Updated Value", newValue.target.value);
            }}
          />
        );
      case "SCALE":
        return (
          <MuiRadioButton
            radioList={radioDummyList}
            control={control}
            onChange={(newValue) => {
              console.log("Updated Value", newValue.target.value);
            }}
            value={values[row.uuid].content}
          />
        );
      case "TEXTAREA":
        return (
          <OutlinedTextField
            variant="outlined"
            placeholder={row.name}
            value={values[row.uuid].content}
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

  const parentActionsIcons = (parentId?: number) => (
    <>
      {reportsParentActionIcons.map((icon, index) => (
        <Grid2
          key={index}
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

  const handleChildMenuClick = (
    event: React.MouseEvent<HTMLButtonElement>,
    childId?: string
  ) => {
    console.log(selectedChildId, childId);

    if (selectedChildId === childId) {
      setAnchorEl(event.currentTarget);
    }
  };

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

  const childActionsIcons = (childId?: string) =>
    matches ? (
      <Grid2 container spacing={3} textAlign={"center"}>
        {reportsChildActionIcons.map((icon, index) => (
          <Grid2 key={index} size={4} pb={2}>
            <icon.icon sx={{ width: 16, height: 16 }} />
          </Grid2>
        ))}
      </Grid2>
    ) : (
      <>
        {reportsChildActionIcons.map((icon, index) => (
          <Grid2
            key={index}
            size={12}
            sx={{
              borderLeft: index === 0 ? "" : "1px solid  #e0e0e0",
              justifyContent: "center",
              display: "flex",
              alignItems: "center",
              height: 110,
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
          </Grid2>
        ))}
      </>
    );

  const handleClickView = () => {
    console.log("view", selectedChildId);
  };

  const handleClickEdit = () => {
    console.log("edit");
  };

  const handleClickDelete = () => {
    console.log("delete");
  };

  const userMenuList: IMenuItemExtendProps[] = [
    {
      key: 1,
      label: "View",
      onClick: (_e) => handleClickView(),
    },
    {
      key: 2,
      label: "Edit",
      onClick: (_e) => handleClickEdit(),
    },
    {
      key: 3,
      label: "Delete",
      onClick: (_e) => handleClickDelete(),
    },
  ];

  const [tableData, setTableData] = useState<any>(tableDataDummy2);
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

  return (
    <ReportsStyles>
      {Object.entries(tableData.rooms).map(([roomUUID, section]: any, key) => (
        <Box key={roomUUID} pb={3}>
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
                    {section.items &&
                      Object.values(section.items)?.map(
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

                            <Grid2
                              container
                              spacing={0}
                              onClick={() => {
                                setSelectedRowId(_item.uuid);
                              }}
                            >
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
                                <Box
                                  key={_childIndex}
                                  sx={{
                                    position: "absolute",
                                    top: 75,
                                    left: 10,
                                    zIndex: 1031,
                                  }}
                                  onClick={() =>
                                    handleAddRow(roomUUID, _item.uuid)
                                  }
                                >
                                  <AddCircleOutlineIcon />
                                </Box>

                                <Box sx={{ position: "relative", zIndex: 10 }}>
                                  {key + 1}.{_childIndex + 1}
                                </Box>
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
                                          Object.values(section?.fields)
                                            .length -
                                            1
                                            ? 3
                                            : 1,
                                        borderRight:
                                          _rowIndex ===
                                          Object.values(section?.fields)
                                            .length -
                                            1
                                            ? "none"
                                            : "1px solid #ddd",
                                        borderBottom: "none !important",
                                        borderTop:
                                          _childIndex ===
                                          Object.values(section?.items).length -
                                            1
                                            ? "1px solid #ddd"
                                            : "none !important",
                                      }}
                                    >
                                      {getBodyByType(field, _item.values)}
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
                                {childActionsIcons(_item.uuid)}
                              </Grid2>
                            </Grid2>
                            {_item?.childItems?.map(
                              (childItem: any, grandIndex: number) => (
                                <Grid2
                                  container
                                  spacing={0}
                                  key={childItem.uuid}
                                >
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
                                          ? ""
                                          : "1px solid #ddd",
                                    }}
                                  >
                                    <Box
                                      key={_childIndex}
                                      sx={{
                                        position: "absolute",
                                        top: 75,
                                        left: 10,
                                        zIndex: 1031,
                                      }}
                                      onClick={() =>
                                        handleAddRow(roomUUID, _item.uuid)
                                      }
                                    >
                                      <AddCircleOutlineIcon />
                                    </Box>
                                    <Box
                                      sx={{ position: "relative", zIndex: 10 }}
                                    >
                                      {key + 1}.{_childIndex + 1}.
                                      {grandIndex + 1}
                                    </Box>
                                  </Grid2>

                                  <Grid2 className="scrollable-content-grid">
                                    {Object.values(section?.fields)?.map(
                                      (field: any, _rowIndex: number) => (
                                        <Box
                                          key={_rowIndex}
                                          className="scrollable-box"
                                          sx={{
                                            paddingRight:
                                              _rowIndex ===
                                              Object.values(section?.fields)
                                                .length -
                                                1
                                                ? 3
                                                : 1,
                                            borderRight:
                                              _rowIndex ===
                                              Object.values(section?.fields)
                                                .length -
                                                1
                                                ? "none"
                                                : "1px solid #ddd",
                                            borderBottom: "none !important",
                                          }}
                                        >
                                          {getBodyByType(field, _item.values)}
                                        </Box>
                                      )
                                    )}
                                  </Grid2>

                                  <Grid2
                                    className="right-positioned-grid"
                                    sx={{
                                      background: "#f9f9f9",
                                      boxShadow:
                                        scrollPosition.right ||
                                        scrollPosition.bothShadows
                                          ? "-2px 2px 10px #ddd"
                                          : "none",
                                    }}
                                  >
                                    {childActionsIcons(childItem.uuid)}
                                  </Grid2>
                                </Grid2>
                              )
                            )}
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
                                flexShrink: 0,
                              }}
                            >
                              {getBodyByType(field, _item.values)}
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
                        {childActionsIcons(_item.id)}
                      </Grid2>
                    </Grid2>
                  )
                )}
              </Collapse>
            </Grid2>
          </Grid2>
        </Box>
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
