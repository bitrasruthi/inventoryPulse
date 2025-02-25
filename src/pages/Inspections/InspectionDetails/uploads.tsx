import { useState } from "react";
import InspectionAddress from "../../../components/inspectionAddress";
import InspectionUploadCommon from "../../../components/inspectionUploadCommon";

const Uploads = () => {
  const [files, setFiles] = useState([
    { id: "1", name: "document.pdf" },
    { id: "2", name: "report.docx" },
  ]);

  const [images, setImages] = useState([
    { id: "4", name: "image2.jpg", url: "/images/image2.jpg" },
    { id: "5", name: "image3.jpg", url: "/images/image3.jpg" },
    { id: "3", name: "image1.jpg", url: "/images/image1.jpg" },
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
      <InspectionUploadCommon
        files={files}
        images={images}
        onDelete={handleDelete}
        onAssign={handleAssign}
      />
    </div>
  );
};

export default Uploads;
