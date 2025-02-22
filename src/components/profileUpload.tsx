import { Box, Link, IconButton } from "@mui/material";
import { set } from "lodash";
import React, { useEffect, useRef, useState } from "react";
import EditIcon from "../assets/icons/editIcon";

interface IProps {
  title?: React.ReactNode; // Title is now optional and can be ReactNode
  backgroundImage?: string;
}

const ProfileUpload: React.FC<IProps> = (props) => {
  const { title, backgroundImage } = props; // Default title to "Edit" if not provided
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [profilePicture, setProfilePicture] = useState<string | null>(null);

  useEffect(() => {
    if (backgroundImage) setProfilePicture(backgroundImage);
  }, []);
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
        width: "100%",
        height: "200px",
        position: "relative",
        backgroundImage: profilePicture ? `url(${profilePicture})` : "none",
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderRadius: 4,
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          bottom: 10,
          right: 10,
          display: "flex",
          alignItems: "center",
          color: "white",
          fontWeight: "bold",
          backgroundColor: "black",
          borderRadius: 2,
          paddingLeft: "2px",
          g: 0,
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
