import styled from "@emotion/styled";
import {  StepConnector, stepConnectorClasses } from "@mui/material";
import { Color } from "../../utils/Theme/Color";

export const Img = styled('img')`
  padding:5px;
  border:2px solid #ffffff;
  border-radius: 50%;
`;

export const StepperConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 80,
    left: "-24.2%",
    right: "75.7%",
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 1,
    border: 0,
    backgroundColor:Color.White,
    borderRadius: 1,
  },
}));
