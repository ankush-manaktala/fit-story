import React from "react";
import { Button, Grid, IconButton } from "@mui/material";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Color } from "../../utils/Theme/Color";
import './Carousel.css'

const renderNextButton = ({ isDisabled }) => {
  return (
    <IconButton color={Color._C9C9C9} sx={{ position: "absolute", right: "-4rem", top: "45%" }}>
      <ArrowForwardIosIcon/>
    </IconButton>
  );
};
const renderPrevButton = ({ isDisabled }) => {
  return (
    <IconButton color={Color._C9C9C9} sx={{ position: "absolute", left: "-4rem", top: "45%" }}>
      <ArrowBackIosIcon />
    </IconButton>
  );
};

export const Carousel = (props) => {
  const {
    dots,
    infinite,
    autoplay,
    autoplaySpeed,
    responsive,
    renderDots,
    autoPlayStrategy,
    autoWidth,
    children,
  } = props;

  let settings = {
    dots: dots || true,
    infinite: infinite || false,
    autoplay: autoplay || false,
    autoplaySpeed: autoplaySpeed || 3000,
    responsive: responsive || {
      0: {
        items: 1,
        itemsFit: "contain",
      },
    },
    renderDots: renderDots || "",
    renderPrevButton: renderPrevButton || "",
    renderNextButton: renderNextButton || "",
    autoPlayStrategy: autoPlayStrategy || "none",
    autoWidth: autoWidth || false,
  };

  return (
    <Grid style={{ margin: "5rem" }}>
      <AliceCarousel
        {...settings}
        items={children}
        responsive={settings.responsive}
        disableDotsControls={settings.dots}
        autoPlay={settings.autoplay}
        autoPlayInterval={settings.autoplaySpeed}
        infinite={settings.infinite}
        renderPrevButton={renderPrevButton}
        renderNextButton={renderNextButton}
        renderDotsItem={settings.renderDots}
        autoPlayStrategy={settings.autoPlayStrategy}
        autoWidth={settings.autoWidth}
        //disableButtonsControls
        mouseTracking
        paddingLeft={100}
        paddingRight={100}
      />
    </Grid>
  );
};

export default Carousel;
