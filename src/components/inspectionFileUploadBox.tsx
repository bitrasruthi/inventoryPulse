import { useState } from "react";
import { Box, Typography } from "@mui/material";
import UploadIcon from "../assets/icons/primaryUploadIcon";
export const FileUploadBox = ({ onFilesDragEnd }) => {
  const [isDragging, setIsDragging] = useState(false);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;
    const uploadedFiles = Array.from(event.target.files).map((file) => ({
      id: String(Date.now() + Math.random()),
      name: file.name,
      url: URL.createObjectURL(file),
    }));
    onFilesDragEnd(uploadedFiles); // 🔹 Call `onFilesDragEnd` directly with uploaded files
  };

  const handleDragEnter = (event: React.DragEvent) => {
    event.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (event: React.DragEvent) => {
    event.preventDefault();
    setIsDragging(false);
  };

  const handleDragOver = (event: React.DragEvent) => {
    event.preventDefault();
    setIsDragging(true);
  };

  const handleDrop = (event: React.DragEvent) => {
    event.preventDefault();
    setIsDragging(false);

    if (event.dataTransfer.files.length === 0) return;

    const droppedFiles = Array.from(event.dataTransfer.files).map(
      (file: File) => ({
        id: String(Date.now() + Math.random()),
        name: file.name,
        url: URL.createObjectURL(file),
      })
    );

    onFilesDragEnd(droppedFiles); // 🔹 Call `onFilesDragEnd` directly with dropped files
  };

  return (
    <Box
      sx={{
        border: "1px dashed #8542E9",
        display: "flex",
        justifyContent: "center",
        padding: "15px",
        backgroundColor: "#FBF9FF",
        my: 4,
        borderRadius: "10px",
        gap: 2,
        cursor: "pointer",
        transition: "filter 0.2s ease-in-out",
        filter: isDragging ? "blur(1px)" : "none",
      }}
      onClick={() => document.getElementById("fileInput")?.click()}
      onDragEnter={handleDragEnter}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <input
        type="file"
        id="fileInput"
        style={{ display: "none" }}
        accept=".jpeg,.jpg,.png,.pdf,.doc,.docx"
        onChange={handleFileChange}
      />
      <Box>
        <UploadIcon />
      </Box>
      <Box>
        <Typography
          fontFamily={"roboto-medium"}
          fontSize={"16px"}
          fontWeight={600}
        >
          Drag and drop file to upload or&nbsp;
          <span style={{ textDecoration: "underline", color: "#8542E9" }}>
            Browse File
          </span>
        </Typography>
        <Typography
          fontFamily={"roboto-regular"}
          fontSize={"14px"}
          fontWeight={400}
        >
          Each document must be no larger than 5MB and compatible file formats
          include JPEG, PNG, PDF, DOC, and DOCX
        </Typography>
      </Box>
    </Box>
  );
};
