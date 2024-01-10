import React from "react";
import { CardContent, Grid, IconButton, Typography } from "@mui/material";
import CachedIcon from "@mui/icons-material/Cached";
import CardWrapper from "../StyledComponents/CardWrapper";
import "./DietCard.css";
import DietItem from "./DietItem";
import PropTypes from "prop-types";

const DietCard = (props) => {
  const { meal } = props;
  const { diet:mealItems } = meal;

  return (
    <CardWrapper className="cardContainer">
      <CardContent>
        <Grid
          container
          justifyContent={"space-between"}
          alignItems={"center"}
          mb={"10px"}
        >
          <Grid>
            <Typography className="foodHeader"> {meal?.mealType}</Typography>
            <Typography className="foodCalories"> 592 calories</Typography>
          </Grid>
          <IconButton aria-label="refresh">
            <CachedIcon />
          </IconButton>
        </Grid>
        {mealItems?.map((mealItem) => {
          return <DietItem diet={mealItem} />;
        })}
      </CardContent>
    </CardWrapper>
  );
};

DietCard.propTypes = {
  meal: PropTypes.array,
};

export default DietCard;
