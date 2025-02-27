import { useState } from "react";
import InspectionAddress from "../../../components/inspectionAddress";
import InspectionUploadCommon from "../../../components/inspectionUploadCommon";
import { Box } from "@mui/material";
import slide1 from "../../../assets/slide1.png";
const Uploads = () => {
  const [files, setFiles] = useState([
    { id: "1", name: "document.pdf" },
    { id: "2", name: "report.docx" },
  ]);

  const [images, setImages] = useState([
    { id: "4", name: "image2.jpg", url: slide1 },
    { id: "5", name: "image3.jpg", url: slide1 },
    { id: "3", name: "image1.jpg", url: slide1 },
  ]);

  const handleDelete = (ids) => {
    setFiles((prev) => prev.filter((file) => !ids.includes(file.id)));
    setImages((prev) => prev.filter((image) => !ids.includes(image.id)));
  };

  const handleAssign = (ids) => {
    console.log("Assigned Items:", ids);
  };
  return (
    <div>
      <InspectionAddress />
      <Box my={2}>
        <InspectionUploadCommon
          files={files}
          images={images}
          onDelete={handleDelete}
          onAssign={handleAssign}
        />
      </Box>
    </div>
  );
};

export default Uploads;
