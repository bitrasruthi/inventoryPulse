import { Avatar, Box, Link } from "@mui/material";
import React, { useRef, useState } from "react";

interface IProps {
  title: React.ReactNode;
  image: string | React.ReactNode;
}

const ProfileUpload: React.FC<IProps> = (props) => {
  const { title, image } = props;
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [profilePicture, setProfilePicture] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfilePicture(imageUrl);
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <Box
      sx={{
        backgroundColor: "#f6f3fb",
        padding: 2,
        height: 150,
        mb: 2,
        borderRadius: 4,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: 2,
      }}
    >
      {typeof image === "string" ? (
        <Avatar src={profilePicture || image} sx={{ width: 60, height: 60 }} />
      ) : (
        image
      )}

      <Link
        sx={{ cursor: "pointer" }}
        onClick={(e) => {
          e.preventDefault();
          handleUploadClick();
        }}
      >
        {title}
      </Link>
      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        style={{ display: "none" }}
        onChange={handleFileChange}
      />
    </Box>
  );
};

export default ProfileUpload;
