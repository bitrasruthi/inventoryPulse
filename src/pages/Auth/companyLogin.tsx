import {
  Box,
  Dialog,
  DialogContent,
  Divider,
  Typography,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import LoginIcon from "@mui/icons-material/Login";
import LogoImg from "../../assets/logo.png";

interface IProps {
  open: boolean;
  onClose: () => void;
}

function CompanyLogin({ open, onClose }: IProps) {
  const companyList = [
    {
      role: "clerk",
      name: "Company 1",
      id: "1",
    },
    {
      role: "manager",
      name: "Company 2",
      id: "2",
    },
    {
      role: "admin",
      name: "Company 3",
      id: "3",
    },
  ];

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogContent>
        <Box sx={{ position: "relative", minHeight: "500px" }}>
          <IconButton
            onClick={onClose}
            sx={{
              position: "absolute",
              top: 8,
              right: 8,
              zIndex: 1,
            }}
          >
            <CloseIcon />
          </IconButton>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
            }}
          >
            <img
              src={LogoImg}
              alt="Logo-img"
              style={{
                width: "60%",
                height: "90px",
                padding: "18px",
              }}
            />
          </Box>
          {companyList.map((company, index) => (
            <Box key={company.id} sx={{ width: "100%" }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "90%",
                  margin: "auto",
                  padding: "20px",
                }}
              >
                <Box>
                  <Typography variant="h6" fontFamily={"roboto-bold"}>
                    {company.name}
                  </Typography>
                  <Typography
                    sx={{ opacity: 0.7, fontSize: "18px" }}
                    fontFamily={"roboto-medium"}
                  >
                    {company.role}
                  </Typography>
                </Box>
                <LoginIcon fontSize="medium" />
              </Box>
              {index !== companyList.length - 1 && (
                <Divider sx={{ width: "90%", margin: "auto" }} />
              )}
            </Box>
          ))}
        </Box>
      </DialogContent>
    </Dialog>
  );
}

export default CompanyLogin;
