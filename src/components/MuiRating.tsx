import { Rating, RatingProps } from "@mui/material";
import React, { useEffect, useState } from "react";

interface IProps extends RatingProps {
  value: number | null;
  onChange?: (event: React.ChangeEvent<{}>, newValue: number | null) => void;
}

const MuiRating: React.FC<IProps> = (props) => {
  const { value, onChange, ...ratingProps } = props;
  const [selectedValue, setSelectedValue] = useState<number | null>(
    value ?? null
  );

  useEffect(() => {
    setSelectedValue(value);
  }, [value]);

  const handleOnChange = (
    _event: React.ChangeEvent<{}>,
    newValue: number | null
  ) => {
    setSelectedValue(newValue);
    if (onChange) {
      onChange(_event, newValue);
    }
  };

  return (
    <Rating {...ratingProps} value={selectedValue} onChange={handleOnChange} />
  );
};

export default MuiRating;
