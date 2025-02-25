import React, { useState } from "react";
import {
  Box,
  Typography,
  Checkbox,
  Button,
  Grid2,
  FormGroup,
  FormControlLabel,
} from "@mui/material";
import theme from "../styles/theme";
import EditIcon from "../assets/icons/editIcon";
import RedDeleteIcon from "../assets/icons/redDeleteIcon";

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
  const [rotations, setRotations] = useState({});

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

  const handleRotate = (id, direction) => {
    setRotations((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + (direction === "left" ? -90 : 90),
    }));
  };

  return (
    <Box>
      <Box sx={{ border: "1px solid #E0E0E0", borderRadius: 2 }} p={2} my={3}>
        <Typography variant="h6" color="primary" p={1}>
          Files ({files.length})
        </Typography>
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

                {/* File Name (Centered) */}
                <Typography variant="body1" sx={{ mt: "auto", mb: "auto" }}>
                  {file.name}
                </Typography>
              </Box>
            </Grid2>
          ))}
        </Grid2>
      </Box>

      <Box sx={{ border: "1px solid #E0E0E0", borderRadius: 2 }} p={2}>
        <Typography variant="h6" color="primary" p={1}>
          Images ({images.length})
        </Typography>
        <Grid2 container spacing={2}>
          {images.map((image) => (
            <Grid2 key={image.id}>
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

                <Typography variant="body1" sx={{ mt: "auto", mb: "auto" }}>
                  {image.name}
                </Typography>
              </Box>
            </Grid2>
          ))}
        </Grid2>
      </Box>

      <Box sx={{ mt: 2, display: "flex", justifyContent: "space-between" }}>
        <Button
          variant="contained"
          color="error"
          onClick={() => onDelete([...selectedFiles, ...selectedImages])}
        >
          Delete Selected
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => onAssign([...selectedFiles, ...selectedImages])}
        >
          Assign Selected
        </Button>
      </Box>
    </Box>
  );
};

export default InspectionUploadCommon;
