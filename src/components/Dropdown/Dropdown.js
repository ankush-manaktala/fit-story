import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const Dropdown = (props) => {
  const { label, options, value, onChange } = props;

  const handleChange = (event) => {
    onChange(event?.target?.value);
  };

  return (
    <FormControl sx={{ minWidth: 200 }} size="small">
      <InputLabel id="demo-select-small-label">{label}</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={value || ""}
        label={label}
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>Select</em>
        </MenuItem>
        {options?.map(({ displayName, parameterValue }) => {
          return (
            <MenuItem key={parameterValue} value={parameterValue}>
              {displayName}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};

export default Dropdown;
