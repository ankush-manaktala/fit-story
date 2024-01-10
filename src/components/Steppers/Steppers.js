import * as React from "react";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import SettingsIcon from "@mui/icons-material/Settings";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import VideoLabelIcon from "@mui/icons-material/VideoLabel";
import { Box, Container, Grid } from "@mui/material";
import PropTypes from "prop-types";
import { Img, StepperConnector } from "./StyledComponents";

const StepIcon = (props) => {
  const { active, completed, className } = props;
  const icons = {
    1: <SettingsIcon />,
    2: <GroupAddIcon />,
    3: <VideoLabelIcon />,
    4: <SettingsIcon />,
  };

  return (
    <Grid textAlign={'center'}>
      <Img
        alt=""
        src="https://drive.google.com/uc?export=view&id=1mxp4nt9FCwOy0qIfybn3Rxz34fyUvuNO"
        height={"149px"}
        width={"149px"}
      />
      <Box>{"test"}</Box>
    </Grid>
  );
};

StepIcon.propTypes = {
  active: PropTypes.bool,
  className: PropTypes.string,
  completed: PropTypes.bool,
  icon: PropTypes.node,
};

const Steppers = ({ steps }) => {
  return (
    <Container maxWidth={"xl"}>
      <Stepper
        alternativeLabel
        activeStep={steps?.length}
        connector={<StepperConnector />}
      >
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel StepIconComponent={StepIcon}></StepLabel>
          </Step>
        ))}
      </Stepper>
    </Container>
  );
};

Steppers.propTypes = {
  steps: PropTypes.array,
};
export default Steppers;
