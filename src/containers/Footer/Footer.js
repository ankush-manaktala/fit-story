import React from "react";
import {
  Box,
  FooterContainer,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterComponents";
import { useSelector } from "react-redux";
import { Grid, Typography } from "@mui/material";
import { Color } from "../../utils/Theme/Color";

const Footer = () => {
  const footerData = useSelector((state) => state.welcome?.footer);
  const disclaimer = useSelector((state) => state.welcome?.disclaimer);
  console.log(disclaimer);
  return (
    <Box>
      <Typography
        variant="h3"
        sx={{
          color: "green",
          textAlign: "center",
          marginTop: "10px",
          marginBottom: "20px",
        }}
      >
        Create Your Fitness Story!
      </Typography>
      <FooterContainer>
        <Row>
          {footerData?.map(({ title, subelements }) => {
            return (
              <Column key={title}>
                <Heading variant="subtitle2">{title}</Heading>
                {subelements?.map(({ title, cta }) => {
                  return (
                    <FooterLink
                      variant="subtitle1"
                      isProp={"test"}
                      key={cta}
                      href="#"
                    >
                      {title}
                    </FooterLink>
                  );
                })}
              </Column>
            );
          })}
        </Row>
      </FooterContainer>
      <Grid
        sx={{
          padding: "20px",
          backgroundColor: Color.White,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Typography sx={{ color: Color._dd121f, mr: "3px" }} variant="body">
          {"Disclaimer:"}
        </Typography>
        <Typography sx={{ color: Color._292929 }} variant="body">
          {disclaimer}
        </Typography>
      </Grid>
    </Box>
  );
};
export default Footer;
