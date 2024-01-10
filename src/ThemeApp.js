import React from "react";
import {
  StyledEngineProvider,
  createTheme,
  ThemeProvider,
} from "@mui/material/styles";
import "./App.css";
import App from "./App";

function ThemeApp() {
  const theme = createTheme({
    typography: {
      allVariants:{
        fontFamily: "PoppinsRegular",
      },
      subtitle1:{
        fontFamily: "PoppinsRegular",
        fontSize:'12px'
      },
      subtitle2:{
        fontFamily: "PoppinsMedium",
        fontSize:'14px'
      },
      body:{
        fontFamily: "PoppinsMedium",
        fontSize:'12px'
      },
      h5:{
        fontFamily: "PoppinsSemiBold",
      },
      h6:{
        fontFamily: "PoppinsMedium",
      },

     button: {
      textTransform:'none'
    },
    components: {
      MuiTypography: {
        defaultProps: {
          variantMapping: {
            // Map the new variant to render a <h1> by default
            body: 'h6',
          },
        },
      },
    },
    },
  });

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default ThemeApp;
