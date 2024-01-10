import styled from "@emotion/styled";
import { Grid, Link, Typography } from "@mui/material";
import { Color } from "../../utils/Theme/Color";

export const Box = styled(Grid)`
  padding: 5% 2.5%;
  background: ${Color._F2F2F2};
  bottom: 0;
`;

export const FooterContainer = styled(Grid)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1000px;
  margin: 0 auto;
`;

export const Column = styled(Grid)`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 60px;
`;

export const Row = styled(Grid)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(185px, 1fr));
  grid-gap: 20px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;

export const FooterLink = styled(Link)`
  color: ${Color._292929};
  margin-bottom: 20px;
  text-decoration: none;

  &:hover {
    color: green;
    transition: 200ms ease-in;
  }
`;

export const Heading = styled(Typography)`
  color: ${Color.Black};
  margin-bottom: 40px;
`;
