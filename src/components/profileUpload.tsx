import { Box, Link, IconButton, Avatar } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import EditIcon from "../assets/icons/editIcon";
import AvatarIcon from "../assets/icons/avatarIcon";

interface IProps {
  title?: React.ReactNode;
  edit?: React.ReactNode;
  backgroundImage?: string;
  uploadImage?: string;
}

const ProfileUpload: React.FC<IProps> = (props) => {
  const { edit, backgroundImage, uploadImage, title } = props;
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
        //width: "300px",
        height: "180px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f6f2fc",
        borderRadius: "10px",
        padding: "20px",
        position: "relative",
      }}
    >
      {/* Background Image */}
      <Box
        sx={{
          width: "100%",
          height: "100%",
          backgroundImage: profilePicture ? `url(${profilePicture})` : "none",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          borderRadius: "10px",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 0,
        }}
      />

      {typeof uploadImage === "string" &&
        (profilePicture ? (
          <img
            src={profilePicture}
            alt="Profile"
            style={{ width: 60, height: 60, borderRadius: "50%" }}
          />
        ) : (
          <AvatarIcon />
        ))}

      {/* Title (Click to Upload) */}
      {title && (
        <Link
          component="button"
          sx={{
            color: "primary",
            fontSize: "14px",
            fontWeight: "bold",
            zIndex: 1,
            "&:hover": { textDecoration: "underline" },
          }}
          onClick={handleUploadClick}
        >
          {title}
        </Link>
      )}

      {/* Edit Button (Click to Upload) */}
      {edit && (
        <Box
          sx={{
            position: "absolute",
            bottom: 10,
            right: 10,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "black",
            padding: "5px",
            borderRadius: "5px",
            zIndex: 1,
          }}
        >
          <Link
            component="button"
            sx={{
              cursor: "pointer",
              color: "white",
              fontWeight: "bold",
              textDecoration: "none",
              "&:hover": { textDecoration: "underline" },
            }}
            onClick={handleUploadClick}
          >
            {edit}
          </Link>
          <IconButton
            onClick={handleUploadClick}
            sx={{ color: "white", ml: 1 }}
          >
            <EditIcon width={"10px"} height={"10px"} fill="white" />
          </IconButton>
        </Box>
      )}

      {/* Hidden File Input */}
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
