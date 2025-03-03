import React, { useEffect, useState } from "react";
import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
  RadioProps,
} from "@mui/material";
import { Controller, Control } from "react-hook-form";

interface IProps extends RadioProps {
  radioList: { label: string; value: number | string }[];
  control: Control<any>;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string | number;
  labelPlacement?: "end" | "start" | "top" | "bottom";
}

const MuiRadioButton: React.FC<IProps> = ({
  radioList,
  control,
  onChange,
  value,
  labelPlacement,
  ...radioProps
}) => {
  const [selectedValue, setSelectedValue] = useState<string | number>("");

  useEffect(() => {
    if (value !== undefined) {
      setSelectedValue(value);
    }
  }, [value]);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    _child: React.ReactNode
  ) => {
    const newValue = event.target.value as string | number;
    setSelectedValue(newValue);
    if (onChange) {
      onChange(event);
    }
  };

  return (
    <FormControl>
      <Controller
        name=""
        control={control}
        render={() => (
          <RadioGroup row value={selectedValue} onChange={handleChange}>
            {radioList.map((radioItem) => (
              <FormControlLabel
                key={radioItem.value}
                value={radioItem.value}
                label={
                  <Typography className="font14">{radioItem.label}</Typography>
                }
                labelPlacement={labelPlacement ? labelPlacement : "end"}
                control={
                  <Radio
                    size="small"
                    className="radio-check"
                    color="primary"
                    {...radioProps}
                  />
                }
              />
            ))}
          </RadioGroup>
        )}
      />
    </FormControl>
  );
};

export default MuiRadioButton;
