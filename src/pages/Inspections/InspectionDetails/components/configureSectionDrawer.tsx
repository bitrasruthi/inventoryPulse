import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Box,
  Grid2,
  Divider,
  IconButton,
  Typography,
  RadioGroup,
  Radio,
} from "@mui/material";
import OutlinedCustomButton from "../../../../components/outlinedCustomButton";
import AddIcon from "../../../../assets/icons/addIcon";
import OutlinedTextField from "../../../../components/outlinedTextField";
import Fieldset from "../../../../components/fieldSet";
import SwitchButton from "../../../../components/switchButton";
import CloseIcon from "@mui/icons-material/Close";
import TextIcon from "../../../../assets/icons/textIcon";
import TextAreaIcon from "../../../../assets/icons/textAreaIcon";
import NumberIcon from "../../../../assets/icons/numberIcon";
import DateTimeIcon from "../../../../assets/icons/dateTimeIcon";
import SingleSelect from "../../../../assets/icons/singleSelect";
import MultiSelect from "../../../../assets/icons/multiSelect";
import RatingIcon from "../../../../assets/icons/ratingIcon";
import SingleQuestion from "../../../../assets/icons/singleQuestion";
import MultiQuestion from "../../../../assets/icons/multiQuestion";
import { useState } from "react";
import theme from "../../../../styles/theme";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

interface AddConfigureSctionDialogProps {
  isConfigureSsctionDialogOpen: boolean;
  onClose: () => void;
}
function ConfigureSectionDrawer({
  isConfigureSsctionDialogOpen,
  onClose,
}: AddConfigureSctionDialogProps) {
  const [selectedField, setSelectedField] = useState("Text");

  const fieldTypes = [
    { name: "Text", icon: <TextIcon /> },
    { name: "Text Area", icon: <TextAreaIcon /> },
    { name: "Number", icon: <NumberIcon /> },
    { name: "Date Time", icon: <DateTimeIcon /> },
    { name: "Single Select", icon: <SingleSelect /> },
    { name: "Multi Select", icon: <MultiSelect /> },
    { name: "Ratings", icon: <RatingIcon /> },
    { name: "Single Question", icon: <SingleQuestion /> },
    { name: "Multi Question", icon: <MultiQuestion /> },
  ];
  return (
    <Dialog
      open={isConfigureSsctionDialogOpen}
      onClose={onClose}
      maxWidth="lg"
      fullWidth
    >
      <DialogTitle sx={{ m: 0, p: 2 }}>
        Configure Section
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <Divider />
      <DialogContent>
        <Grid2 container spacing={2}>
          <Grid2 size={{ xs: 12, md: 3 }} sx={{ backgroundColor: "#f3f3f3" }}>
            <OutlinedCustomButton
              label="Add"
              startIcon={<AddIcon width="12" height="12" />}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 9 }}>
            <Grid2 container spacing={2}>
              <Grid2 size={{ xs: 12, md: 6 }}>
                <OutlinedTextField
                  label="Field Name"
                  variant="outlined"
                  placeholder="Name"
                />
                <OutlinedTextField
                  label="Field Placeholder"
                  variant="outlined"
                  placeholder="Enter Placeholder"
                />
              </Grid2>
              <Grid2 size={{ xs: 12, md: 6 }}>
                <Fieldset title="Field Settings" key={"settings"}>
                  <SwitchButton label="Required" />
                  <SwitchButton label="Editable" />
                </Fieldset>
              </Grid2>
              <Grid2 size={{ xs: 12, md: 12 }}>
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{ fontFamily: "roboto-bold" }}
                >
                  Field Type
                </Typography>
                <RadioGroup
                  value={selectedField}
                  onChange={(e) => setSelectedField(e.target.value)}
                  sx={
                    {
                      //display: "grid",
                      //gridTemplateColumns: "repeat(5, 1fr)",
                      //gap: 2,
                    }
                  }
                >
                  <Grid2 container spacing={2}>
                    {fieldTypes.map((field, _index) => (
                      <Grid2 size={{ xs: 12, md: 2, lg: 3 }}>
                        <Box
                          key={field.name}
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: 2,
                            border:
                              selectedField === field.name
                                ? `2px solid ${theme.palette.primary.main}`
                                : "1px solid #ccc",
                            height: "100px",
                            cursor: "pointer",
                            position: "relative",
                            "&:hover": {
                              borderColor: theme.palette.primary.main,
                            },
                          }}
                          onClick={() => setSelectedField(field.name)}
                        >
                          <Typography
                            variant="body2"
                            sx={{
                              position: "absolute",
                              top: 8,
                              left: 10,
                              fontFamily: "roboto-bold",
                            }}
                          >
                            {field.name}
                          </Typography>
                          <Radio
                            value={field.name}
                            checked={selectedField === field.name}
                            icon={<span />}
                            checkedIcon={
                              <CheckCircleIcon
                                sx={{ color: theme.palette.primary.main }}
                              />
                            }
                            sx={{
                              position: "absolute",
                              top: 1,
                              right: 0,
                              "& .MuiSvgIcon-root": {
                                fontSize: 20,
                              },
                            }}
                          />
                          <Box sx={{ p: 2, mt: 1 }}>{field.icon}</Box>
                        </Box>
                      </Grid2>
                    ))}
                  </Grid2>
                </RadioGroup>
              </Grid2>
            </Grid2>
          </Grid2>
        </Grid2>
      </DialogContent>
      <DialogActions
        sx={{
          position: "sticky",
          px: 4,
          display: "flex",
          gap: 2,
          borderTop: 0.5,
          borderColor: "lightgray",
        }}
      >
        <Button onClick={onClose} variant="outlined">
          Exit
        </Button>
        <Button onClick={onClose} variant="contained">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default ConfigureSectionDrawer;
