import React from "react";
import { CardMedia, Grid, Tooltip, Typography } from "@mui/material";
import "./DietCard.css";
import PropTypes from "prop-types";
import TooltipContent from "./ToolTipContent";

const DietItem = (props) => {
  const { diet } = props;
  const { quantity } = diet;
  return (
    <Tooltip title={<TooltipContent data={diet?.item}/>} placement="right" arrow>
      <Grid container className="foodContainer">
        <Grid item xs={2} className="foodItemContainer">
          <CardMedia
            sx={{ borderRadius: "10px" }}
            component="img"
            height={50}
            image="https://drive.google.com/uc?export=view&id=1mxp4nt9FCwOy0qIfybn3Rxz34fyUvuNO"
            alt="green iguana"
          />
        </Grid>
        <Grid item xs={8}>
          <Typography className="foodName">{diet?.item?.name}</Typography>
          <Typography className="quantity">{`${parseInt(quantity?.value)} ${
            quantity?.unit
          }`}</Typography>
        </Grid>
      </Grid>
    </Tooltip>
  );
};
DietItem.propTypes = {
  item: PropTypes.object,
};

export default DietItem;
