import { Box, Grid2, IconButton, Menu } from "@mui/material";
import MuiAlert from "../../../components/MuiAlert";
import ReportsSettingsStyles from "../../../styles/reportSettingsStyles";
import Fieldset from "../../../components/fieldSet";
import MuiRadioButton from "../../../components/MuiRadioButton";
import LabelCommon from "../../../components/labelCommon";
import { useFormHook } from "../../../hooks/useFormHook";
import SwitchButton from "../../../components/switchButton";
import Slider from "react-slick";
import theme from "../../../styles/theme";
import { useState } from "react";
import CheckIcon from "@mui/icons-material/Check";
import OutlinedTextField from "../../../components/outlinedTextField";
import { HexColorPicker } from "react-colorful";
import PaletteIcon from "@mui/icons-material/Palette";

import {
  suggestedColors,
  layoutRadios1,
  layoutRadios2,
  coverImagesDummy,
  palettes,
  itemRadios1,
  properyRadios2,
  coverImgSettings,
} from "../../../constants/constants";

type Props = {};

const ReportSettings = (_props: Props) => {
  const [selectedCover, setSelectedCover] = useState<number>(0);
  const [isPaletteClicked, setIsPaletteClicked] = useState<boolean>(false);
  const [selectedPalette, setSelectedPalette] = useState<any>();
  const [selectedColor, setSelectedColor] = useState<{ [key: string]: string }>(
    { 1: suggestedColors[0], 2: suggestedColors[0], 3: suggestedColors[0] }
  );
  const [palette, setPalette] = useState<any>(palettes);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const { form } = useFormHook();
  const { control } = form;

  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement>,
    palette: any
  ) => {
    setAnchorEl(event.currentTarget);
    setIsPaletteClicked(true);
    setSelectedPalette(palette);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const colorGrid = (palette: any) => {
    return palette.colors.map((color: string) => (
      <>
        <Box
          className="color-circle"
          key={color}
          sx={{
            background: color,
            border:
              selectedColor[palette.id] === color
                ? "2px solid #fff"
                : color === "#fff"
                ? "1px solid #ececec"
                : "none",
            boxShadow:
              selectedColor[palette.id] === color
                ? "0 4px 10px rgba(0, 0, 0, 0.2)"
                : "none",
          }}
          onClick={() => {
            handleColorChange(palette.id, color);
          }}
        >
          {" "}
          {selectedColor[palette.id] === color && (
            <CheckIcon className="check-icon-palette" />
          )}
        </Box>
      </>
    ));
  };

  const handleColorChange = (paletteId: any, newColor: string) => {
    if (
      selectedPalette.id === paletteId &&
      !suggestedColors.includes(newColor)
    ) {
      const updatedPalette = {
        ...selectedPalette,
        colors: [newColor, ...selectedPalette.colors.slice(1)],
      };

      setSelectedPalette(updatedPalette);

      setPalette((prevPalette) =>
        prevPalette.map((p) => (p.id === paletteId ? updatedPalette : p))
      );
    }

    setSelectedColor((prev) => ({
      ...prev,
      [paletteId]: newColor,
    }));
  };

  return (
    <ReportsSettingsStyles>
      <MuiAlert
        label={
          "Apply the settings and click the ‘Preview’ button to view real-time updates. Clicking the Info icon will help you identify where the settings/changes are reflected."
        }
        sx={{ maxWidth: "80%" }}
      />
      <Grid2 container spacing={2} mt={4}>
        <Grid2 size={6}>
          <Fieldset title="Layout Settings" key={"layout_settings"}>
            <Box display={"flex"} justifyContent={"space-between"}>
              <Box>
                <LabelCommon fieldName={"Orientation"} />
                <MuiRadioButton control={control} radioList={layoutRadios1} />
              </Box>
              <Box>
                <LabelCommon fieldName={"Group"} />
                <MuiRadioButton control={control} radioList={layoutRadios2} />
              </Box>
            </Box>
            <Box width={550} mt={4}>
              <LabelCommon fieldName={"Cover Page"} />
              <Slider {...coverImgSettings}>
                {coverImagesDummy.map((img, index) => (
                  <Box
                    key={index}
                    className="slider-img"
                    onClick={() => {
                      setSelectedCover(img.id);
                    }}
                  >
                    {" "}
                    <img
                      src={img.imageUrl}
                      className="img"
                      style={{
                        border:
                          selectedCover === img.id
                            ? `1px solid ${theme.palette.primary.main}`
                            : "none",
                        boxShadow:
                          selectedCover === img.id
                            ? " rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
                            : "none",
                      }}
                    />
                    {selectedCover === img.id && (
                      <CheckIcon className="check-icon" />
                    )}
                  </Box>
                ))}
              </Slider>
            </Box>
          </Fieldset>
          <Grid2 size={12}>
            <Fieldset title="Item" key={"layout_settings"}>
              <Box display={"flex"}>
                <Box>
                  <LabelCommon fieldName={"Photo Size"} hasInfoIcon={true} />
                  <MuiRadioButton radioList={itemRadios1} control={control} />
                </Box>
                <Box>
                  <LabelCommon
                    fieldName={"Photo Position"}
                    hasInfoIcon={true}
                  />
                  <MuiRadioButton radioList={itemRadios1} control={control} />
                </Box>
              </Box>
            </Fieldset>

            <Fieldset title="Property" key={"layout_settings"}>
              {" "}
              <Box display={"flex"}>
                <Box>
                  <LabelCommon fieldName={"Photo Size"} hasInfoIcon={true} />
                  <MuiRadioButton radioList={itemRadios1} control={control} />
                </Box>
                <Box>
                  <LabelCommon
                    fieldName={"Photo Position"}
                    hasInfoIcon={true}
                  />
                  <MuiRadioButton
                    radioList={properyRadios2}
                    control={control}
                  />
                </Box>
              </Box>
            </Fieldset>
          </Grid2>
        </Grid2>
        <Grid2 size={6}>
          <Fieldset title="Settings" key={"settings"}>
            <SwitchButton
              label="Table of Content"
              hasInfoIcon={true}
              isBoldText={true}
            />
            <SwitchButton label="Numbering Modification" hasInfoIcon={true} />
            <SwitchButton label="Show Action Summary on Report" />
          </Fieldset>
          <Fieldset title="Table Format" key={"table_format"}>
            <MuiAlert label="Customise the color of your report table." />
            <Grid2 container spacing={2}>
              {palette.map((palette) => (
                <Grid2 size={6}>
                  <Box mt={2}>
                    <LabelCommon fieldName={palette.label} hasInfoIcon={true} />
                    <Box
                      display={"flex"}
                      alignItems={"center"}
                      gap={1}
                      onClick={() => {
                        setSelectedPalette(palette);
                      }}
                    >
                      {colorGrid(palette)}
                      <IconButton
                        onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
                          handleClick(e, palette.id)
                        }
                        sx={{ p: 0 }}
                      >
                        <PaletteIcon className="palette-icon" />
                      </IconButton>
                    </Box>

                    <OutlinedTextField
                      variant="outlined"
                      className="text-field"
                      value={selectedColor[palette.id]}
                      isnotboldtext={true}
                      key={palette.id}
                    />
                  </Box>
                </Grid2>
              ))}

              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                  sx: { padding: 0 },
                }}
                slotProps={{
                  paper: {
                    sx: {
                      padding: "0px !important",
                      margin: 0,
                      overflow: "hidden",
                    },
                  },
                }}
              >
                {isPaletteClicked && (
                  <HexColorPicker
                    color={selectedColor[selectedPalette.id]}
                    onChange={(newColor) =>
                      handleColorChange(selectedPalette.id, newColor)
                    }
                  />
                )}
              </Menu>
            </Grid2>
          </Fieldset>
          <Grid2 size={12}>
            <Fieldset title="Section" key={"layout_settings"}>
              {" "}
              <Box display={"flex"}>
                <Box>
                  <LabelCommon fieldName={"Photo Size"} hasInfoIcon={true} />
                  <MuiRadioButton radioList={itemRadios1} control={control} />
                </Box>
                <Box>
                  <LabelCommon
                    fieldName={"Photo Position"}
                    hasInfoIcon={true}
                  />
                  <MuiRadioButton radioList={itemRadios1} control={control} />
                </Box>
              </Box>
            </Fieldset>
          </Grid2>
        </Grid2>
      </Grid2>
    </ReportsSettingsStyles>
  );
};

export default ReportSettings;
