import React from "react";
import Header from "./components/Header";
import { Grid } from "@mui/material";

const Layout = (props) => {
    const {data,children}=props;
  return (
    <>
      <Grid
        container
        sx={{ justifyContent: "center", backgroundColor: "lightGrey" }}
      >
        <Header options={data}/>
      </Grid>
      {children}
    </>
  );
};

export default Layout;
