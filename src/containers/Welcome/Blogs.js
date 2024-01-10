import React from "react";
import VerticalCard from "../../components/VerticalCard";
import PropTypes from "prop-types";
import { Grid } from "@mui/material";

const Blogs = ({ data }) => {
  return (
    <Grid
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        margin: "5rem",
      }}
    >
      {data?.map((blog) => {
        return <VerticalCard key={blog?.cta} {...blog} />;
      })}
    </Grid>
  );
};

Blogs.propTypes = {
  data: PropTypes.array,
};

export default Blogs;
