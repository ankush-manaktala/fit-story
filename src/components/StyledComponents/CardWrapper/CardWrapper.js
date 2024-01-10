import styled from "@emotion/styled";
import { Card } from "@mui/material";
import { Color } from "../../../utils/Theme/Color";

const CardWrapper = styled(Card)(({ theme },props) => ({
    backgroundColor:Color.White,
    boxShadow:'0 2px 2px 0 rgba(0, 0, 0, 0.12)',
    borderRadius: '5px',
    transition: 'box-shadow 0.15s ease-in-out'
  }));

  export default CardWrapper