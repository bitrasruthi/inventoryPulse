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
import OutlinedTextField from "../../../components/outlinedTextField";
import SelectField from "../../../components/selectField";
import {
  tableDataDummy2,
  inspectionColors2,
  userMenuList,
  radioDummyList,
} from "../../../constants/constants";
import ReportsStyles from "../../../styles/reportsStyles";
import theme from "../../../styles/theme";
import MuiRadioButton from "../../../components/MuiRadioButton";
import { useFormHook } from "../../../hooks/useFormHook";

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
  const { form } = useFormHook();
  const { control } = form;
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [fieldError, setFieldError] = useState<Record<string, boolean>>({});
  const [selectedValue, setSelectedValue] = useState<any>();

  const open = Boolean(anchorEl);
  const matches = useMediaQuery((_theme: any) =>
    _theme?.breakpoints?.down("sm")
  );

  useEffect(() => {
    updateTableData();
  }, []);

  const getFirstFieldOrderByRoomId = (roomId: string) => {
    const room = tableData.rooms[roomId];

    if (!room || !room.field_order || room.field_order.length === 0) {
      return null;
    }

    return room.field_order[0];
  };

  const handleBlurTextField = (
    event: React.FocusEvent<HTMLTextAreaElement | HTMLInputElement, Element>,
    room: any,
    item: any,
    field: any
  ) => {
    const newValue = event.target.value.trim();
    const existingValue = item.values?.[field.uuid]?.content?.trim() ?? "";
    const isDefaultRow = item.isDefault;
    if (isDefaultRow && newValue !== "" && field.required) {
      handleUpdateValue(room.uuid, item.uuid, field.uuid, newValue);
    }

    if (!existingValue && newValue !== "") {
      setFieldError((prev) => ({
        ...prev,
        [item.uuid + field.uuid]: false,
      }));
      handleUpdateValue(room.uuid, item.uuid, field.uuid, newValue);

      if (field.required && isDefaultRow) {
        updateTableData();
      }
    } else if (!isDefaultRow && field.required && newValue === "") {
      setFieldError((prev) => ({
        ...prev,
        [item.uuid + field.uuid]: true,
      }));
    }
  };

  const handleBlurTextFieldChildItem = (
    event: React.FocusEvent<HTMLTextAreaElement | HTMLInputElement, Element>,
    room: any,
    item?: any,
    field?: any,
    childItem?: any
  ) => {
    const newValue = event.target.value.trim();
    const existingValue = childItem.values?.[field.uuid]?.content?.trim() ?? "";
    const isChild = childItem.isChild;

    if (isChild && newValue !== "" && field.required) {
      handleUpdateValueChildItems(
        room.uuid,
        item.uuid,
        field.uuid,
        newValue,
        childItem.uuid
      );
    }
    if (!existingValue && !isChild && newValue !== "") {
      setFieldError((prev) => ({
        ...prev,
        [childItem.uuid + field.uuid]: false,
      }));
      handleUpdateValueChildItems(
        room.uuid,
        item.uuid,
        field.uuid,
        newValue,
        childItem.uuid
      );
    } else if (!isChild && field.required && newValue === "") {
      setFieldError((prev) => ({
        ...prev,
        [childItem.uuid + field.uuid]: true,
      }));
    }
  };

  const getBodyByType = (field: any, item: any, room: any) => {
    const firstField = getFirstFieldOrderByRoomId(room.uuid);
    const isDisabled = !item?.values[firstField]?.content?.trim();

    switch (field.type) {
      case "TEXT":
        return (
          <OutlinedTextField
            variant="outlined"
            placeholder={field.placeholder}
            value={
              selectedValue
                ? selectedValue[item.uuid + field.uuid]
                : item.values[field.uuid]
                ? item.values[field.uuid].content
                : ""
            }
            onBlur={(event) => {
              handleBlurTextField(event, room, item, field);
            }}
            onChange={(e) => {
              setSelectedValue((prev) => ({
                ...prev,
                [item.uuid + field.uuid]: e.target.value,
              }));
            }}
            error={field.required && fieldError[item.uuid + field.uuid]}
            helperText={
              field.required && fieldError?.[item.uuid + field.uuid]
                ? "This field is required"
                : ""
            }
          />
        );
      case "SELECT":
        return (
          <SelectField
            disabled={isDisabled}
            options={field.source.options}
            value={
              item.values[field.uuid] ? item.values[field.uuid].content : ""
            }
            onChange={(newValue) => {
              console.log("Updated Value ", newValue.target.value);
            }}
          />
        );
      case "SELECT_MULTI":
        return (
          <MuiAutocomplete
            disabled={isDisabled}
            options={field.source.options}
            selectedValues={
              item.values[field.uuid] ? item.values[field.uuid].content : []
            }
            onHandleChange={(_e, newValue) => {
              console.log("Updated Value", newValue);
            }}
            placeholder={field.placeholder}
          />
        );
      case "SCALE":
        return (
          <MuiRadioButton
            disabled={isDisabled}
            radioList={radioDummyList}
            control={control}
            onChange={(newValue) => {
              console.log("Updated Value", newValue.target.value);
            }}
            value={
              item.values[field.uuid] ? item.values[field.uuid].content : ""
            }
            labelPlacement={"bottom"}
          />
          // <MuiRating
          //  disabled={isDisabled}
          //   value={values[field.uuid] ? values[field.uuid].content : null}
          //   max={field.source?.option_set?.type === 2 ? 5 : 3}
          //   onChange={(_event, newValue) => {
          //     console.log("Updated Value:", newValue);
          //   }}
          // />
        );
      case "TEXTAREA":
        return (
          <OutlinedTextField
            variant="outlined"
            disabled={isDisabled}
            placeholder={field.placeholder}
            value={
              selectedValue
                ? selectedValue[item.uuid + field.uuid]
                : item.values[field.uuid]
                ? item.values[field.uuid].content
                : ""
            }
            multiline={true}
            minRows={2}
            onBlur={(event) => {
              handleBlurTextField(event, room, item, field);
            }}
            onChange={(e) => {
              setSelectedValue((prev) => ({
                ...prev,
                [item.uuid + field.uuid]: e.target.value,
              }));
            }}
            error={field.required && fieldError[item.uuid + field.uuid]}
            helperText={
              field.required && fieldError?.[item.uuid + field.uuid]
                ? "This field is required"
                : ""
            }
          />
        );
      default:
        break;
    }
  };

  const getBodyByTypeChildItem = (
    field: any,
    item?: any,
    room?: any,
    childItem?: any
  ) => {
    const firstField = getFirstFieldOrderByRoomId(room.uuid);
    const isDisabled = !childItem?.values[firstField]?.content?.trim();

    switch (field.type) {
      case "TEXT":
        return (
          <OutlinedTextField
            variant="outlined"
            placeholder={field.placeholder}
            value={
              selectedValue
                ? selectedValue[childItem.uuid + field.uuid]
                : childItem.values[field.uuid]
                ? childItem.values[field.uuid].content
                : ""
            }
            onChange={(e) => {
              setSelectedValue((prev) => ({
                ...prev,
                [childItem.uuid + field.uuid]: e.target.value,
              }));
            }}
            onBlur={(event) => {
              handleBlurTextFieldChildItem(event, room, item, field, childItem);
            }}
            error={field.required && fieldError[childItem.uuid + field.uuid]}
            helperText={
              field.required && fieldError?.[childItem.uuid + field.uuid]
                ? "This field is required"
                : ""
            }
          />
        );
      case "SELECT":
        return (
          <SelectField
            disabled={isDisabled}
            options={field.source.options}
            value={
              childItem.values[field.uuid]
                ? childItem.values[field.uuid].content
                : ""
            }
            onChange={(newValue) => {
              console.log("Updated Value ", newValue.target.value);
            }}
          />
        );
      case "SELECT_MULTI":
        return (
          <MuiAutocomplete
            disabled={isDisabled}
            options={field.source.options}
            selectedValues={
              childItem.values[field.uuid]
                ? childItem.values[field.uuid].content
                : []
            }
            onHandleChange={(_e, newValue) => {
              console.log("Updated Value", newValue);
            }}
            placeholder={field.placeholder}
          />
        );
      case "SCALE":
        return (
          <MuiRadioButton
            disabled={isDisabled}
            radioList={radioDummyList}
            control={control}
            onChange={(newValue) => {
              console.log("Updated Value", newValue.target.value);
            }}
            value={
              childItem.values[field.uuid]
                ? childItem.values[field.uuid].content
                : ""
            }
            labelPlacement={"bottom"}
          />
          // <MuiRating
          //  disabled={isDisabled}
          //   value={values[field.uuid] ? values[field.uuid].content : null}
          //   max={field.source?.option_set?.type === 2 ? 5 : 3}
          //   onChange={(_event, newValue) => {
          //     console.log("Updated Value:", newValue);
          //   }}
          // />
        );
      case "TEXTAREA":
        return (
          <OutlinedTextField
            variant="outlined"
            disabled={isDisabled}
            placeholder={field.placeholder}
            value={
              selectedValue
                ? selectedValue[childItem.uuid + field.uuid]
                : childItem.values[field.uuid]
                ? childItem.values[field.uuid].content
                : ""
            }
            onChange={(e) => {
              setSelectedValue((prev) => ({
                ...prev,
                [childItem.uuid + field.uuid]: e.target.value,
              }));
            }}
            multiline={true}
            minRows={2}
            onBlur={(event) => {
              handleBlurTextFieldChildItem(event, room, childItem, field);
            }}
            error={field.required && fieldError[childItem.uuid + field.uuid]}
            helperText={
              field.required && fieldError?.[childItem.uuid + field.uuid]
                ? "This field is required"
                : ""
            }
          />
        );
      default:
        break;
    }
  };

  console.log("Updated tableData:", tableData);

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
    }, [tableContainerRef.current]);

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
      const existingChildren =
        prevData.rooms[roomUUID]?.items[parentUUID]?.childItems || [];

      const hasDefaultRow = existingChildren?.some(
        (child: any) => child.isDefault
      );

      if (hasDefaultRow) return prevData;

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
                values: {
                  ...prevData.rooms[roomUUID].items[parentUUID].values,
                },
                childItems: [
                  ...existingChildren,
                  {
                    id: newUUID,
                    uuid: newUUID,
                    values: {},
                    isChild: true,
                    isDefault: false,
                  },
                ].map((child) => ({ ...child, values: { ...child.values } })),
              },
            },
          },
        },
      };
    });
  };

  const updateTableData = (roomUUID?: string) => {
    if (!tableData) return;

    setTableData((prevData: any) => {
      const defaultItemUUID = generateUUID();

      const updatedRooms = Object.entries(prevData.rooms).reduce(
        (acc, [currentRoomUUID, roomData]: any) => {
          if (roomUUID && currentRoomUUID !== roomUUID) {
            acc[currentRoomUUID] = roomData;
            return acc;
          }

          const firstField = getFirstFieldOrderByRoomId(currentRoomUUID);
          const existingItems = { ...roomData.items };

          const defaultItemEntry = Object.entries(existingItems).find(
            ([, item]: any) => item.isDefault
          );

          if (defaultItemEntry) {
            const [existingUUID, existingItem]: any = defaultItemEntry;

            if (existingItem.values[firstField]?.content?.trim()) {
              existingItem.isDefault = false;
            } else {
              delete existingItems[existingUUID];
            }
          }

          existingItems[defaultItemUUID] = {
            id: 0,
            uuid: defaultItemUUID,
            values: {},
            isDefault: true,
          };

          acc[currentRoomUUID] = {
            ...roomData,
            items: existingItems,
          };
          return acc;
        },
        {} as any
      );

      return {
        ...prevData,
        rooms: updatedRooms,
      };
    });
  };

  const handleUpdateValue = (
    roomUUID: string,
    itemUUID: string,
    fieldUUID: string,
    newValue: any
  ) => {
    setTableData((prevData: any) => {
      if (!prevData?.rooms) return prevData;

      return {
        ...prevData,
        rooms: {
          ...prevData.rooms,
          [roomUUID]: {
            ...prevData.rooms[roomUUID],
            items: {
              ...prevData.rooms[roomUUID]?.items,
              [itemUUID]: {
                ...prevData.rooms[roomUUID]?.items?.[itemUUID],
                values: {
                  ...prevData.rooms[roomUUID]?.items?.[itemUUID]?.values,
                  [fieldUUID]: {
                    ...(prevData.rooms[roomUUID]?.items?.[itemUUID]?.values?.[
                      fieldUUID
                    ] || {}),
                    content: newValue,
                  },
                },
              },
            },
          },
        },
      };
    });
  };

  const handleUpdateValueChildItems = (
    roomUUID: string,
    itemUUID: string,
    fieldUUID: string,
    newValue: any,
    childItemUUID: string
  ) => {
    setTableData((prevData: any) => {
      if (!prevData?.rooms) return prevData;
      return {
        ...prevData,
        rooms: {
          ...prevData.rooms,
          [roomUUID]: {
            ...prevData.rooms[roomUUID],
            items: {
              ...prevData.rooms[roomUUID]?.items,
              [itemUUID]: {
                ...prevData.rooms[roomUUID]?.items?.[itemUUID],
                values: {
                  ...prevData.rooms[roomUUID]?.items?.[itemUUID]?.values,
                },
                childItems:
                  prevData.rooms[roomUUID]?.items?.[itemUUID]?.childItems?.map(
                    (child: any) =>
                      child.uuid === childItemUUID
                        ? {
                            ...child,
                            values: {
                              ...child.values,
                              [fieldUUID]: {
                                ...(child.values?.[fieldUUID] || {}),
                                content: newValue,
                              },
                            },
                          }
                        : child
                  ) || [],
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
            width: "100%",
            cursor: "pointer",
            borderRight:
              reportsChildActionIcons.length - 1 === index
                ? ""
                : "1px solid #ddd",
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

                {/* <Collapse
                  in={openSections[section.uuid]}
                  timeout="auto"
                  unmountOnExit
                > */}
                <StyledTableContainer
                  ref={tableContainerRef}
                  onMouseLeave={() => {
                    setSelectedRowId("");
                  }}
                >
                  <StyledTable
                    stickyHeader
                    sx={{
                      height: "100% !important",
                    }}
                  >
                    <TableHead>
                      <TableRow>
                        <LeftStickyCell
                          sx={{ backgroundColor: "#f1f1f1" }}
                        ></LeftStickyCell>
                        {section?.items &&
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
                                  // setSelectedRowId(_item.uuid);
                                }}
                                onMouseOver={() => {
                                  const nonDefaultItems = Object.values(
                                    section.items
                                  ).filter((item: any) => !item.isDefault);

                                  if (
                                    Object.values(section.items).length - 1 !==
                                      _childIndex &&
                                    Object.values(nonDefaultItems).length -
                                      1 !==
                                      _childIndex
                                  ) {
                                    setSelectedRowId(_item.uuid);
                                  }
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
                                        ? "none"
                                        : "1px solid #ddd",
                                  }}
                                  width={"inherit"}
                                >
                                  {!_item.isDefault && (
                                    <Typography fontSize={12}>
                                      {key + 1}.{_childIndex + 1}
                                    </Typography>
                                  )}
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
                                          padding: "5px 10px 0 10px !important",
                                          width: `calc(100% - 140px)`,
                                          verticalAlign: "top",
                                          borderBottom:
                                            Object.values(section.items)
                                              .length -
                                              1 ===
                                            _childIndex
                                              ? "none"
                                              : "1px solid #ddd",
                                        }}
                                        className="scrollable-box"
                                      >
                                        {getBodyByType(field, _item, section)}{" "}
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
                                        ? "none"
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
                                    // paddingX={1}
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
                                  >
                                    <LeftStickyCell
                                      sx={{
                                        padding: "0px !important",
                                      }}
                                      width={"inherit"}
                                    >
                                      <Typography fontSize={12}>
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
                                            verticalAlign: "top",
                                            padding:
                                              "5px 10px 0 10px !important",
                                          }}
                                        >
                                          {getBodyByTypeChildItem(
                                            field,
                                            _item,
                                            section,
                                            childItem
                                          )}{" "}
                                        </RegularTableCell>
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
                                        padding: "0px !important",
                                      }}
                                      width={"inherit"}
                                    >
                                      <Box
                                        display={"flex"}
                                        height={"inherit"}
                                        justifyContent={"center"}
                                        sx={{ padding: "0px !important" }}
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
                                )
                              )}
                            </>
                          )
                        )}
                    </TableBody>
                  </StyledTable>
                </StyledTableContainer>
                {/* </Collapse> */}
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
