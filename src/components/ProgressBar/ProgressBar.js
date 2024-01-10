import * as React from "react";
import PropTypes from "prop-types";
import LinearProgress from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function LinearProgressWithLabel(props) {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Box sx={{ width: "100%", mr: 1 }}>
        <LinearProgress
          sx={{ height: 10, borderRadius: 8 }}
          variant="determinate"
          {...props}
        />
      </Box>

      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="text.secondary">{`${Math.round(
          props.value
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

const ProgressBar = (props) => {
  const { progress } = props;

  return (
    <Box sx={{ width: "100%", marginTop: 3, marginBottom: 3 }}>
      <LinearProgressWithLabel value={progress} />
    </Box>
  );
};

export default ProgressBar;
