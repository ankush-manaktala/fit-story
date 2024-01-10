import React, { useEffect, useState } from "react";
import { Button, Grid, Tooltip, Typography } from "@mui/material";
import CachedIcon from "@mui/icons-material/Cached";
import InfoIcon from "@mui/icons-material/Info";
import DietCard from "../../components/DietCard";
import "./Diet.css";
import { useDiet } from "./Diet-hook";
import { Color } from "../../utils/Theme/Color";

const Diet = () => {
  const [open, setOpen] = useState(false);
  const { meals, getMealsList } = useDiet();
  const data = [1, 2];

  useEffect(() => {
    getMealsList();
  }, [getMealsList]);

  return (
    <Grid className="container">
      <Grid container>
        <Grid item xs={0} sm={0} md={4}></Grid>
        <Grid item xs={12} sm={12} md={4}>
          <Grid
            container
            alignItems={"center"}
            justifyContent={"space-between"}
            p={"10px"}
          >
            <Typography variant="subtitle1" className="todaysMeal">
              Today's Meal Plan
            </Typography>
            <Button
              className="regenerate"
              variant="text"
              endIcon={<CachedIcon />}
            >
              Regenerate
            </Button>
          </Grid>
          <Tooltip
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            title="Add"
          >
            <Grid container alignItems={"center"} className="calories">
              <Typography variant="subtitle1" className="caloriesFont">
                1793 Calories
              </Typography>
              <InfoIcon sx={{ color: Color._999999 }} />
              {open && (
                <Typography
                  variant="subtitle1"
                  className="caloriesFont"
                  sx={{ color: "#999999 !important", ml:'5px' }}
                >
                  Details
                </Typography>
              )}
            </Grid>
          </Tooltip>
          {meals.map((meal, index) => {
            return (
              <>
                <DietCard meal={meal} />
                {index !== data.length - 1 && <Grid mb={"10px"}></Grid>}
              </>
            );
          })}
        </Grid>
        <Grid item xs={0} sm={0}  md={4}></Grid>
      </Grid>
    </Grid>
  );
};

export default Diet;
