import { useState } from "react";
import InspectionAddress from "../../../components/inspectionAddress";
import { Box } from "@mui/material";
import slide1 from "../../../assets/slide1.png";
import InspectionUploadCommon from "./inspectionUploadCommon";
import { FileUploadBox } from "../../../components/inspectionFileUploadBox";

const Uploads = () => {
  const [files, setFiles] = useState([
    { id: "1", name: "document.pdf" },
    { id: "2", name: "report.docx" },
    { id: "4", name: "image2.jpg", url: slide1 },
    { id: "5", name: "image3.jpg", url: slide1 },
    { id: "3", name: "image1.jpg", url: slide1 },
  ]);
  console.log({ files });

  const handleDelete = (ids) => {
    setFiles((prev) => prev.filter((file) => !ids.includes(file.id)));
  };

  const handleFilesUpload = (uploadedFiles) => {
    setFiles((prev) => [...prev, ...uploadedFiles]);
  };

  const handleAssign = (ids) => {
    console.log("Assigned Items:", ids);
  };

  const handleRotate = (id: string, rotatedImageUrl: string) => {
    setFiles((prev) =>
      prev.map((file) =>
        file.id === id ? { ...file, url: rotatedImageUrl } : file
      )
    );
  };
  return (
    <div>
      <InspectionAddress />
      <FileUploadBox onFilesDragEnd={handleFilesUpload} />
      <Box my={2}>
        <InspectionUploadCommon
          uploads={files}
          onDelete={handleDelete}
          onAssign={handleAssign}
          onRotate={handleRotate}
        />
      </Box>
    </div>
  );
};

export default Uploads;
