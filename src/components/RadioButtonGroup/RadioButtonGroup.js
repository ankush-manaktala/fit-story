import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

const RadioButtonGroup = (props) => {
  const { options, value, onChange, row, sx } = props;
  const handleChange = (event) => {
    onChange(event?.target?.value);
  };

  return (
    <FormControl sx={{...sx}}>
      <RadioGroup
        row={row}
        aria-labelledby="demo-radio-buttons-group-label"
        name="radio-buttons-group"
        value={value || ""}
        onChange={handleChange}
      >
        {options?.map(({ displayName, parameterValue }) => {
          return (
            <FormControlLabel
              key={parameterValue}
              value={parameterValue}
              control={<Radio />}
              label={displayName}
            />
          );
        })}
      </RadioGroup>
    </FormControl>
  );
};

export default RadioButtonGroup;
