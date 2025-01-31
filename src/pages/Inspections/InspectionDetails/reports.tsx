import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  Collapse,
  Box,
  styled,
  Radio,
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
        return <Radio />;
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

  return (
    <Box sx={{ p: 3 }}>
      <TableContainer sx={{ overflow: "auto", width: "100%" }}>
        <Table
          sx={{
            minWidth: 1200,
          }}
        >
          <TableBody>
            {Object.values(tableDataDummy2.rooms).map(
              (section: any, key: number) => (
                <Box key={key} sx={{ pb: 3 }}>
                  <TableRow>
                    <TableCell
                      width={"1%"}
                      sx={{
                        p: 0,

                        border: "1px solid #e0e0e0",
                        position: "sticky",
                        left: "-1px",
                        zIndex: 2,
                        backgroundColor: `${
                          inspectionColors2[key % inspectionColors2.length]
                        }`,
                      }}
                      rowSpan={section.item_order.length + 2}
                    >
                      <IconButton
                        disableRipple
                        sx={{
                          p: 0,
                        }}
                        onClick={() => toggleSection(section.uuid)}
                      >
                        {openSections[section.uuid] ? (
                          <ExpandLess />
                        ) : (
                          <ExpandMore />
                        )}
                      </IconButton>
                    </TableCell>
                    <TableCell
                      width={"2%"}
                      sx={{
                        border: "1px solid #e0e0e0",
                        position: "sticky",
                        left: "20px",
                        background: "white !important",
                        zIndex: 2,
                        top: 0,
                        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                        transition:
                          "box-shadow 200ms cubic-bezier(0.33, 1, 0.68, 1) !important",
                      }}
                    >
                      {key + 1}
                    </TableCell>
                    {section?.name?.value && (
                      <TableCell
                        // width={"90%"}
                        // colSpan={Object.values(section.items).length}
                        sx={{
                          border: "1px solid #e0e0e0",
                          position: "relative",
                          zIndex: 0,
                          padding: "8px",
                        }}
                      >
                        <OutlinedTextField
                          variant="outlined"
                          placeholder={section.name?.value}
                          value={section.name?.value}
                          type={"pagination"}
                        />
                      </TableCell>
                    )}
                    <TableCell
                      width={"2%"}
                      sx={{
                        border: "1px solid #e0e0e0",
                        position: "sticky",
                        right: "100px",
                        background: "white !important",
                        zIndex: 2,
                        boxShadow:
                          "0px 5px 10px 0px rgba(0, 0, 0, 0.20) !important",
                      }}
                    >
                      <Box>
                        <CameraAltIcon />
                      </Box>
                    </TableCell>
                    <TableCell
                      width={"2%"}
                      sx={{
                        border: "1px solid #e0e0e0",
                        position: "sticky",
                        right: "50px",
                        background: "white !important",
                        zIndex: 2,
                      }}
                    >
                      <DescriptionIcon />
                    </TableCell>
                    <TableCell
                      width={"2%"}
                      sx={{
                        border: "1px solid #e0e0e0",
                        position: "sticky",
                        right: "0px",
                        background: "white !important",
                        zIndex: 2,
                      }}
                    >
                      <MoreVert />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell colSpan={6} sx={{ padding: "0px !important" }}>
                      <Collapse
                        in={openSections[section.uuid]}
                        timeout="auto"
                        unmountOnExit
                      >
                        <Box>
                          <Table>
                            <TableHead
                              sx={{
                                backgroundColor: "#e0e0e0 !important",
                              }}
                            >
                              <TableRow>
                                {/* <TableCell
                                  sx={{
                                    position: "sticky",
                                    left: "0px",
                                    zIndex: 2,
                                    background: "white !important",
                                  }}
                                  width={"2%"}
                                >
                                  <Box
                                    height={"inherit"}
                                    sx={{
                                      background: `${
                                        inspectionColors2[
                                          key % inspectionColors2.length
                                        ]
                                      }44`,
                                    }}
                                  ></Box>
                                </TableCell> */}
                                <TableCell
                                  sx={{
                                    position: "sticky",
                                    left: "20px",
                                    zIndex: 2,
                                    background: "#e0e0e0 !important",
                                    border: "none",
                                  }}
                                  width={"2%"}
                                ></TableCell>

                                {Object.values(section?.fields)?.map(
                                  (field: any, _key: number) => (
                                    <>
                                      <TableCell
                                        sx={{
                                          p: 0,
                                          px: 1,
                                          borderLeft:
                                            "1px solid rgba(208, 208, 208, 1)",
                                          borderRight:
                                            "1px solid rgba(208, 208, 208, 1)",
                                        }}
                                      >
                                        <Typography
                                          textTransform={"capitalize"}
                                        >
                                          {!field?.name.includes("-")
                                            ? field?.name
                                            : ""}
                                        </Typography>
                                      </TableCell>
                                    </>
                                  )
                                )}
                                <TableCell colSpan={3}></TableCell>
                              </TableRow>
                            </TableHead>
                            {Object.values(section.items)?.map((item: any) => (
                              <TableBody key={item.uuid}>
                                <TableRow>
                                  {/* <TableCell
                                  sx={{
                                    position: "sticky",
                                    left: "0px",
                                    zIndex: 2,
                                    background: "white !important",
                                  }}
                                ></TableCell> */}
                                  <TableCell
                                    width={"2%"}
                                    sx={{
                                      position: "sticky",
                                      left: "20px",
                                      zIndex: 2,
                                      background: "white !important",
                                      px: 2.5,
                                    }}
                                  ></TableCell>
                                  {Object.values(section?.fields)?.map(
                                    (field: any, _rowIndex: number) => (
                                      <BorderTableCell sx={{ px: 1, py: 1 }}>
                                        {getBodyByType(field)}
                                      </BorderTableCell>
                                    )
                                  )}
                                  <TableCell
                                    width={"2%"}
                                    sx={{
                                      border: "1px solid #e0e0e0",
                                      position: "sticky",
                                      right: "100px",
                                      background: "white !important",
                                      zIndex: 2,
                                    }}
                                  >
                                    <ReportProblemIcon />
                                  </TableCell>
                                  <TableCell
                                    width={"2%"}
                                    sx={{
                                      border: "1px solid #e0e0e0",
                                      position: "sticky",
                                      right: "50px",
                                      background: "white !important",
                                      zIndex: 2,
                                    }}
                                  >
                                    <DescriptionIcon />
                                  </TableCell>
                                  <TableCell
                                    width={"2%"}
                                    sx={{
                                      border: "1px solid #e0e0e0",
                                      position: "sticky",
                                      right: "0px",
                                      background: "white !important",
                                      zIndex: 2,
                                    }}
                                  >
                                    <MoreVert />
                                  </TableCell>
                                </TableRow>
                              </TableBody>
                            ))}
                          </Table>
                        </Box>
                      </Collapse>
                    </TableCell>
                  </TableRow>
                </Box>
              )
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Reports;
