import { Box, Link, IconButton } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import EditIcon from "../assets/icons/editIcon";

interface IProps {
  title?: React.ReactNode;
  backgroundImage?: string;
}

const ProfileUpload: React.FC<IProps> = (props) => {
  const { title, backgroundImage } = props;
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [profilePicture, setProfilePicture] = useState<string | null>(
    backgroundImage || null
  );

  useEffect(() => {
    if (backgroundImage) setProfilePicture(backgroundImage);
  }, [backgroundImage]);

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
        height: "250px",
        position: "relative",
        overflow: "hidden",
        borderRadius: "10px",
      }}
    >
      <Box
        sx={{
          height: "100%",
          width: "100%",
          backgroundImage: profilePicture ? `url(${profilePicture})` : "none",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Foreground Content */}
      <Box
        sx={{
          position: "absolute",
          bottom: 5,
          right: 10,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          fontWeight: "bold",
          backgroundColor: "black",
          paddingX: "2px",
          borderRadius: "5px",
        }}
      >
        <Link
          component="button"
          sx={{
            cursor: "pointer",
            color: "inherit",
            fontWeight: "inherit",
            textDecoration: "none",
            "&:hover": { textDecoration: "underline" },
          }}
          onClick={(e) => {
            e.preventDefault();
            handleUploadClick();
          }}
        >
          {title}
        </Link>
        <IconButton
          onClick={(e) => {
            e.preventDefault();
            handleUploadClick();
          }}
          sx={{ color: "white" }}
        >
          <EditIcon width={"10px"} height={"10px"} fill="white" />
        </IconButton>
      </Box>
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
