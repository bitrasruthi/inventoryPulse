import React, { useState } from "react";
import {
  Box,
  Typography,
  Checkbox,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Grid2,
  styled,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import EditIcon from "../../../assets/icons/editIcon";
import RedDeleteIcon from "../../../assets/icons/redDeleteIcon";
import RotateLeftIcon from "../../../assets/icons/rotateLeftIcon";
import RotateRightIcon from "../../../assets/icons/rotateRightIcon";
import PdfIcon from "../../../assets/icons/pdfIcon";
import WordDocIcon from "../../../assets/icons/wordDocIcon";
import OutlinedCustomButton from "../../../components/outlinedCustomButton";
import GradientButton from "../../../components/gradientButton";
interface IUpload {
  name: string;
  id: string;
  url?: string;
}
interface IProps {
  uploads: IUpload[];
  onDelete: (ids: string[]) => void;
  onAssign: (ids: string[]) => void;
}

const StyledAccordion = styled(Accordion)(() => ({
  boxShadow: "none",
  "&:before": { display: "none" },
  border: "1px solid #E0E0E0",
  marginTop: 18,
  borderRadius: "10px",
}));

const StyledAccordionHeading = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  display: "flex",
  alignItems: "center",
  gap: 1,
  fontFamily: "roboto-bold",
  paddingLeft: 8,
}));

const InspectionUploadCommon: React.FC<IProps> = ({
  uploads = [],
  onDelete,
  onAssign,
}) => {
  const [selectedFiles, setSelectedFiles] = useState<string[]>([]);
  const [selectedImages, setSelectedImages] = useState<string[]>([]);
  const [rotationAngles, setRotationAngles] = useState({});

  const images = (uploads || []).filter((upload) =>
    /\.(jpg|jpeg|png|gif)$/i.test(upload.name)
  );

  const otherFiles = (uploads || []).filter(
    (upload) => !/\.(jpg|jpeg|png|gif)$/i.test(upload.name)
  );

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

  const handleRotate = (imageId: string, direction: string) => {
    setRotationAngles((prevAngles) => {
      const currentAngle = prevAngles[imageId] || 0;
      const newAngle =
        direction === "left" ? currentAngle - 90 : currentAngle + 90;
      return { ...prevAngles, [imageId]: newAngle };
    });
  };

  return (
    <>
      <Box
        sx={{
          mt: 2,
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          gap: 1.5,
        }}
      >
        <OutlinedCustomButton
          sx={{
            border: "1px solid #FF4565",
            color: "#FF4565",
            backgroundColor: "white",
          }}
          startIcon={<RedDeleteIcon />}
          label="Delete Selected"
        ></OutlinedCustomButton>
        <GradientButton
          onClick={() => onAssign([...selectedFiles, ...selectedImages])}
          label="Assign Selected"
        ></GradientButton>
      </Box>
      {otherFiles.length > 0 && (
        <StyledAccordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            sx={{ flexDirection: "row-reverse" }}
          >
            <StyledAccordionHeading sx={{ p: 0.5 }}>
              Files ({otherFiles.length})
            </StyledAccordionHeading>
          </AccordionSummary>
          <AccordionDetails>
            <Grid2 container spacing={2}>
              {otherFiles.map((file) => (
                <Grid2 key={file.id} size={{ xs: 12, md: 2, lg: 2.3 }}>
                  <Box
                    sx={{
                      p: 1,
                      border: "1px solid #E0E0E0",
                      borderRadius: 2,
                    }}
                  >
                    <Box
                      display={"flex"}
                      justifyContent={"space-between"}
                      alignItems={"center"}
                    >
                      <Checkbox
                        onChange={() => handleSelect(file.id, "file")}
                        size="small"
                        checked={selectedFiles.includes(file.id)}
                      />
                      <Box
                        sx={{
                          display: "flex",
                          gap: 1.5,
                          cursor: "pointer",
                        }}
                      >
                        <EditIcon height={18} width={18} />
                        <RedDeleteIcon />
                      </Box>
                    </Box>

                    <Box
                      sx={{
                        flexGrow: 1,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "column",
                        mt: 1,
                        rowGap: 2,
                        height: "100px",
                      }}
                    >
                      {file.name.toLowerCase().endsWith(".pdf") ? (
                        <PdfIcon />
                      ) : file.name.toLowerCase().endsWith(".docx") ||
                        file.name.toLowerCase().endsWith(".doc") ? (
                        <WordDocIcon />
                      ) : null}

                      <Typography
                        sx={{
                          fontFamily: "roboto-medium",
                        }}
                      >
                        {file.name}
                      </Typography>
                    </Box>
                  </Box>
                </Grid2>
              ))}
            </Grid2>
          </AccordionDetails>
        </StyledAccordion>
      )}

      {images.length > 0 && (
        <StyledAccordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            sx={{ flexDirection: "row-reverse", alignItems: "center" }}
          >
            <StyledAccordionHeading sx={{ flex: 1 }}>
              Images ({images.length})
            </StyledAccordionHeading>
            <Box sx={{ display: "flex", gap: 1 }}>
              <OutlinedCustomButton
                onClick={(event) => {
                  event.stopPropagation();
                  selectedImages.forEach((fileId) =>
                    handleRotate(fileId, "left")
                  );
                }}
                label="Image Rotate Left"
                startIcon={<RotateLeftIcon />}
                sx={{
                  height: 35,
                }}
              />
              <OutlinedCustomButton
                onClick={(event) => {
                  event.stopPropagation();
                  selectedImages.forEach((fileId) =>
                    handleRotate(fileId, "right")
                  );
                }}
                label="Image Rotate Right"
                startIcon={<RotateRightIcon />}
                sx={{
                  height: 35,
                }}
              />
            </Box>
          </AccordionSummary>
          <AccordionDetails>
            <Grid2 container spacing={2}>
              {images.map((image) => (
                <Grid2 key={image.id} size={{ xs: 12, md: 2, lg: 2.3 }}>
                  <Box
                    sx={{
                      p: 1,
                      border: "1px solid #E0E0E0",
                      borderRadius: 2,
                    }}
                  >
                    <Box
                      display={"flex"}
                      justifyContent={"space-between"}
                      alignItems={"center"}
                    >
                      <Checkbox
                        onChange={() => handleSelect(image.id, "file")}
                        size="small"
                        checked={selectedFiles.includes(image.id)}
                      />

                      <Box
                        sx={{
                          display: "flex",
                          gap: 1.5,
                        }}
                      >
                        <EditIcon height={18} width={18} />
                        <RedDeleteIcon />
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        flexGrow: 1,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "column",
                        mt: 1,
                        rowGap: 2,
                        height: "150px",
                      }}
                    >
                      <img
                        src={image.url || ""} // Use image URL or empty string
                        alt={image.name}
                        style={{
                          width: "100%",
                          height: "80%",
                          objectFit: "contain",
                          transform: `rotate(${
                            rotationAngles[image.id] || 0
                          }deg)`,
                          transition: "transform 0.3s ease-in-out",
                        }}
                      />
                      <Typography
                        sx={{
                          fontFamily: "roboto-medium",
                        }}
                      >
                        {image.name}
                      </Typography>
                    </Box>
                  </Box>
                </Grid2>
              ))}
            </Grid2>
          </AccordionDetails>
        </StyledAccordion>
      )}
    </>
  );
};

export default InspectionUploadCommon;
