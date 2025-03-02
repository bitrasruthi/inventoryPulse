import React, { useEffect, useState } from "react";
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
import theme from "../../../styles/theme";
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
  onRotate: (id: string, rotatedImageUrl: string) => void;
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
  onRotate,
}) => {
  const [selectedFiles, setSelectedFiles] = useState<string[]>([]);
  const [selectedImages, setSelectedImages] = useState<string[]>([]);
  const [rotationAngles, setRotationAngles] = useState({});
  const [images, setImages] = useState<IUpload[]>([]);
  const [updatedUploads, setUpdatedUploads] = useState<IUpload[]>(uploads);
  useEffect(() => {
    const imageList = (uploads || []).filter((upload) =>
      /\.(jpg|jpeg|png|gif)$/i.test(upload.name)
    );
    setImages(imageList);
    setUpdatedUploads(uploads);
  }, [uploads]);

  var otherFiles = (uploads || []).filter(
    (upload) => !/\.(jpg|jpeg|png|gif)$/i.test(upload.name)
  );
  console.log({ images, uploads });

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

  const rotateImage = (imageUrl: string, angle: number): Promise<string> => {
    return new Promise((resolve) => {
      const img = new Image();
      img.src = imageUrl;
      img.crossOrigin = "anonymous"; // Ensure CORS is handled if needed
      img.onload = () => {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");

        if (!ctx) {
          resolve(imageUrl); // Fallback to original URL if canvas is not supported
          return;
        }

        // Adjust canvas size to fit the rotated image
        if (angle % 180 !== 0) {
          canvas.width = img.height;
          canvas.height = img.width;
        } else {
          canvas.width = img.width;
          canvas.height = img.height;
        }

        // Translate and rotate the canvas
        ctx.translate(canvas.width / 2, canvas.height / 2);
        ctx.rotate((angle * Math.PI) / 180);
        ctx.drawImage(img, -img.width / 2, -img.height / 2);

        // Convert canvas to data URL
        const rotatedImageUrl = canvas.toDataURL();
        resolve(rotatedImageUrl);
      };
    });
  };

  const handleRotate = async (imageId: string, direction: string) => {
    const currentAngle = rotationAngles[imageId] || 0;
    const newAngle =
      direction === "left" ? currentAngle - 90 : currentAngle + 90;

    // Find the image by ID
    const image = images.find((img) => img.id === imageId);
    if (!image || !image.url) return;

    // Rotate the image and get the new data URL
    const rotatedImageUrl = await rotateImage(image.url, newAngle);

    // Replace the original image URL with the rotated one
    updateUploadsWithRotatedImage(imageId, rotatedImageUrl);

    // Update the rotation angle
    setRotationAngles((prevAngles) => ({
      ...prevAngles,
      [imageId]: newAngle,
    }));
  };

  const updateUploadsWithRotatedImage = (
    imageId: string,
    rotatedImageUrl: string
  ) => {
    const updatedUploads = uploads.map((upload) =>
      upload.id === imageId ? { ...upload, url: rotatedImageUrl } : upload
    );
    setUpdatedUploads(updatedUploads); // 🔹 Update local state
    onRotate(imageId, rotatedImageUrl); // 🔹 Notify parent component of the rotation
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
        </StyledAccordion>
      )}

      {images.length > 0 && (
        <StyledAccordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            sx={{ flexDirection: "row-reverse", alignItems: "center" }} // Added alignItems: "center"
          >
            <StyledAccordionHeading sx={{ flex: 1 }}>
              Images ({images.length})
            </StyledAccordionHeading>
            <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
              <OutlinedCustomButton
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
                  selectedImages.forEach((imageId) =>
                    handleRotate(imageId, "left")
                  );
                }}
                startIcon={<RotateLeftIcon />}
                label="Image Rotate Left"
              ></OutlinedCustomButton>
              <OutlinedCustomButton
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
                startIcon={<RotateRightIcon />}
                label="Image Rotate Right"
                onClick={(event) => {
                  event.stopPropagation();
                  selectedImages.forEach((imageId) =>
                    handleRotate(imageId, "right")
                  );
                }}
              ></OutlinedCustomButton>
            </Box>
          </AccordionSummary>
          <AccordionDetails>
            <Grid2 container spacing={2}>
              {images.map((image) => (
                <Grid2 key={image.id} p={1}>
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
                        onChange={() => handleSelect(image.id, "image")}
                        size="small"
                        sx={{
                          "&.Mui-checked": {
                            color: theme.palette.primary.main,
                          },
                        }}
                        checked={selectedImages.includes(image.id)}
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
                          // transform: `rotate(${
                          //   rotationAngles[image.id] || 0
                          // }deg)`,
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
        </StyledAccordion>
      )}
    </Box>
  );
};

export default InspectionUploadCommon;
