import React from "react";
import PropTypes from "prop-types";
import { Button, Grid, Typography } from "@mui/material";
import { Color } from "../../utils/Theme/Color";
import Steppers from "../../components/Steppers/Steppers";
import RadioButtonGroup from "../../components/RadioButtonGroup";

const FreeExpertBanner = ({ data = [1, 2, 3, 4] }) => {
  return (
    <Grid
      sx={{
        margin: "5rem",
        borderRadius: "24px",
        padding: "14px",
        boxShadow: "0px 0px 7.5px rgba(255,0,0,0.16 )",
        display: { xs: "none", md: "flex" }
      }}
    >
      <Grid
        container
        sx={{
          padding: "20px",
          backgroundColor: Color._dd121f,
          borderRadius: "24px",
        }}
      >
        <Grid item xs={12} sx={{ textAlign: "center" }}>
          <Typography
            variant={"h5"}
            sx={{ fontSize: "28px", fontWeight: "bold" }}
            color={Color.White}
          >
            We know what you are looking for!
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography
            sx={{ fontSize: "40px", ml: "10rem", p: 2 }}
            color={Color.White}
          >
            DilMaange Free Expert
          </Typography>
        </Grid>
        <Steppers steps={data} />
        <Grid item container xs={12} pr={12} pl={12} pt={3}>
          <Grid item xs={8}>
            <RadioButtonGroup
              sx={{width:'100%'}}
              row
              options={[
                {
                  parameterValue: 1,
                  displayName: "I don't have my BCA report",
                },
                { parameterValue: 2, displayName: "I have my BCA report" },
              ]}
            />
          </Grid>
          <Grid item xs={4} textAlign={'right'}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: Color.White,
                color: Color._dd121f,
                fontSize: "16px",
                fontWeight: "bold",
              }}
            >
              Get My Plan
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

FreeExpertBanner.propTypes = {
  data: PropTypes.array,
};

export default FreeExpertBanner;
