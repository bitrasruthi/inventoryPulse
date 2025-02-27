import React, { useState } from "react";
import {
  Box,
  Typography,
  Checkbox,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Grid2,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import theme from "../styles/theme";
import EditIcon from "../assets/icons/editIcon";
import RedDeleteIcon from "../assets/icons/redDeleteIcon";
import PrimaryTickIcon from "../assets/icons/primaryTickIcon";
import RotateLeftIcon from "../assets/icons/rotateLeftIcon";
import RotateRightIcon from "../assets/icons/rotateRightIcon";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf"; // Import PDF icon
import DescriptionIcon from "@mui/icons-material/Description";
import PdfIcon from "../assets/icons/pdfIcon";
import WordDocIcon from "../assets/icons/wordDocIcon";
interface IUpload {
  name: string;
  id: string;
  url?: string;
}
interface IProps {
  files: IUpload[];
  images: IUpload[];
  onDelete: (ids: string[]) => void;
  onAssign: (ids: string[]) => void;
}
const InspectionUploadCommon: React.FC<IProps> = ({
  files,
  images,
  onDelete,
  onAssign,
}) => {
  const [selectedFiles, setSelectedFiles] = useState<string[]>([]);
  const [selectedImages, setSelectedImages] = useState<string[]>([]);
  const [rotationAngles, setRotationAngles] = useState({});

  const handleSelect = (id, type) => {
    if (type === "file") {
      setSelectedFiles((prev) =>
        prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
      );
    } else {
      setSelectedImages((prev) =>
        prev.includes(id) ? prev.filter((img) => img !== id) : [...prev, id]
      );
    }
  };

  const handleRotate = (imageId, direction) => {
    setRotationAngles((prevAngles) => {
      const currentAngle = prevAngles[imageId] || 0;
      const newAngle =
        direction === "left" ? currentAngle - 90 : currentAngle + 90;
      return { ...prevAngles, [imageId]: newAngle };
    });
  };
  return (
    <Box>
      <Box
        sx={{
          mt: 2,
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          gap: 1.5,
        }}
      >
        <Button
          variant="outlined"
          color="error"
          sx={{
            border: "1px solid #FF4565",
            color: "#FF4565",
            backgroundColor: "white",
            padding: "6px 16px",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            fontFamily: "roboto-regular",
            fontSize: "12px",
            fontWeight: 500,
            borderRadius: "8px",
          }}
        >
          <RedDeleteIcon />
          Delete Selected
        </Button>

        <Button
          variant="contained"
          color="primary"
          sx={{
            padding: "6px 16px",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            fontFamily: "roboto-regular",
            fontSize: "12px",
            fontWeight: 500,
            color: "#FFFFFF",
            borderRadius: "8px",
          }}
          onClick={() => onAssign([...selectedFiles, ...selectedImages])}
        >
          <PrimaryTickIcon />
          Assign Selected
        </Button>
      </Box>

      <Accordion
        sx={{
          boxShadow: "none",
          "&:before": { display: "none" },
          border: "1px solid #E0E0E0",
          my: 2,
          borderRadius: "10px",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          sx={{ flexDirection: "row-reverse" }}
        >
          <Typography
            variant="h6"
            color="primary"
            p={1}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              fontSize: "16px",
              fontWeight: 600,
              color: theme.palette.primary.dark,
              fontFamily: "roboto-bold",
            }}
          >
            Files ({files.length})
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid2 container spacing={2}>
            {files.map((file) => (
              <Grid2 key={file.id}>
                <Box
                  sx={{
                    position: "relative",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    p: 2,
                    width: "207px",
                    height: "171px",
                    border: "1px solid #E0E0E0",
                    borderRadius: 2,
                  }}
                >
                  <Box sx={{ position: "absolute", top: 8, left: 8 }}>
                    <Checkbox
                      onChange={() => handleSelect(file.id, "file")}
                      size="small"
                      sx={{
                        "&.Mui-checked": {
                          color: theme.palette.primary.main,
                        },
                      }}
                      checked={selectedFiles.includes(file.id)}
                    />
                  </Box>

                  <Box
                    sx={{
                      position: "absolute",
                      top: 15,
                      right: 15,
                      display: "flex",
                      gap: 1.5,
                    }}
                  >
                    <EditIcon height={18} width={18} />
                    <RedDeleteIcon />
                  </Box>

                  <Box
                    sx={{
                      flexGrow: 1,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mt: 3,
                    }}
                  >
                    {file.name.toLowerCase().endsWith(".pdf") ? (
                      <PdfIcon />
                    ) : file.name.toLowerCase().endsWith(".docx") ||
                      file.name.toLowerCase().endsWith(".doc") ? (
                      <WordDocIcon />
                    ) : null}
                  </Box>
                  <Typography
                    sx={{
                      mt: "auto",
                      mb: "auto",
                      fontFamily: "roboto-medium",
                      color: "#222222",
                    }}
                  >
                    {file.name}
                  </Typography>
                </Box>
              </Grid2>
            ))}
          </Grid2>
        </AccordionDetails>
      </Accordion>

      <Accordion
        sx={{
          boxShadow: "none",
          "&:before": { display: "none" },
          border: "1px solid #E0E0E0",
          my: 2,
          borderRadius: "10px",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          sx={{ flexDirection: "row-reverse", alignItems: "center" }} // Added alignItems: "center"
        >
          <Typography
            p={1}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              fontSize: "16px",
              fontWeight: 600,
              color: theme.palette.primary.dark,
              fontFamily: "roboto-bold",
              flexGrow: 1, // Added flexGrow to push buttons to the right
            }}
          >
            Images ({images.length})
          </Typography>
          <Box sx={{ display: "flex", gap: 1 }}>
            <Button
              variant="outlined"
              color="error"
              sx={{
                border: "1px solid #333333",
                color: "#333333",
                backgroundColor: "white",
                padding: "5px",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                fontFamily: "roboto-regular",
                fontSize: "12px",
                fontWeight: 500,
                borderRadius: "8px",
                maxHeight: "30px",
              }}
              onClick={(event) => {
                event.stopPropagation();
                selectedFiles.forEach((fileId) => handleRotate(fileId, "left"));
              }}
            >
              <RotateLeftIcon />
              Image Rotate Left
            </Button>
            <Button
              variant="outlined"
              color="error"
              sx={{
                border: "1px solid #333333",
                color: "#333333",
                backgroundColor: "white",
                padding: "5px",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                fontFamily: "roboto-regular",
                fontSize: "12px",
                fontWeight: 500,
                borderRadius: "8px",
                maxHeight: "30px",
              }}
              onClick={(event) => {
                event.stopPropagation();
                selectedFiles.forEach((fileId) =>
                  handleRotate(fileId, "right")
                );
              }}
            >
              <RotateRightIcon />
              Image Rotate Right
            </Button>
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          <Grid2 container spacing={2}>
            {images.map((image) => (
              <Grid2 key={image.id} p={2} mt={5}>
                <Box
                  sx={{
                    position: "relative",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    p: 2,
                    width: "207px",
                    height: "171px",
                    border: "1px solid #E0E0E0",
                    borderRadius: 2,
                  }}
                >
                  <Box sx={{ position: "absolute", top: 8, left: 8 }}>
                    <Checkbox
                      onChange={() => handleSelect(image.id, "file")}
                      size="small"
                      sx={{
                        "&.Mui-checked": {
                          color: theme.palette.primary.main,
                        },
                      }}
                      checked={selectedFiles.includes(image.id)}
                    />
                  </Box>

                  <Box
                    sx={{
                      position: "absolute",
                      top: 15,
                      right: 15,
                      display: "flex",
                      gap: 1.5,
                    }}
                  >
                    <EditIcon height={18} width={18} />
                    <RedDeleteIcon />
                  </Box>
                  <Box
                    sx={{
                      flexGrow: 1,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mt: 3,
                      py: 2,
                    }}
                  >
                    <img
                      src={image.url || ""} // Use image URL or empty string
                      alt={image.name}
                      style={{
                        width: "100%",
                        height: "90px",
                        objectFit: "cover",
                        transform: `rotate(${
                          rotationAngles[image.id] || 0
                        }deg)`,
                        transition: "transform 0.3s ease-in-out",
                      }}
                    />
                  </Box>
                  <Typography
                    sx={{
                      fontFamily: "roboto-medium",
                      color: "#222222",
                    }}
                  >
                    {image.name}
                  </Typography>
                </Box>
              </Grid2>
            ))}
          </Grid2>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default InspectionUploadCommon;
