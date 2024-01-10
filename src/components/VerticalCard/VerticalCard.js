import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import PropTypes from "prop-types";

const VerticalCard = (props) => {
  const { title, author, subtitle, cta } = props;
  return (
    <Card sx={{ width: 300, height: 350, borderRadius: "24px" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://drive.google.com/uc?export=view&id=1mxp4nt9FCwOy0qIfybn3Rxz34fyUvuNO"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            {subtitle}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

VerticalCard.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  subtitle: PropTypes.string,
  cta: PropTypes.string,
};

export default VerticalCard;
