import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { Color } from "../../utils/Theme/Color";

const TooltipContent = (props) => {
  const { data } = props;
  return (
    <Box className='toolTipContainer'>
      <Box className={'toolTipHeader'}>
        <Typography variant="subtitle2" fontSize={'18px'}>{data?.name}</Typography>
      </Box>
      <Box className={'toolTipHeader'}>
      <Typography variant="subtitle2" >{`per ${data?.serving?.value} ${data?.serving?.unit}`}</Typography>
      <Grid container className="itemsRow">
       
        <Typography variant="subtitle2">Calories</Typography>
        <Typography variant="subtitle2">{`${data?.caloriesPerServing?.value}${data?.caloriesPerServing?.unit}`}</Typography>
      </Grid>
      <Grid container className="itemsRow">
        <Typography variant="subtitle2" sx={{color:Color._Yellow}}>Carbs</Typography>
        <Typography variant="subtitle2">{`${data?.carbsPerServing?.value}${data?.carbsPerServing?.unit}`}</Typography>
      </Grid>
      <Grid container className="itemsRow">
        <Typography variant="subtitle2" sx={{color:Color._TEAL}}>Fat</Typography>
        <Typography variant="subtitle2">{`${data?.fatsPerServing?.value}${data?.fatsPerServing?.unit}`}</Typography>
      </Grid>
      <Grid container className="itemsRow">
        <Typography variant="subtitle2" sx={{color:Color._purple}}>Protein</Typography>
        <Typography variant="subtitle2">{`${data?.proteinPerServing?.value}${data?.proteinPerServing?.unit}`}</Typography>
      </Grid>
      </Box>
      <Box p={'5px'}>
      <Typography variant="subtitle2">{`${data?.serving?.value} ${data?.serving?.unit} ${data?.name}`}</Typography>
      </Box>
    </Box>
  );
};

export default TooltipContent;
