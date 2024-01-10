import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { Grid, IconButton, Menu, MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { ComponentRoutes } from "../../utils/Constants/component-routes";
import { appLogo } from "../../resources";
import { Color } from "../../utils/Theme/Color";
import './NavBar.css';

const NavBar = ({ tabs = [] }) => {
  const [selectedTab, setSelectedTab] = useState("Products");
  const [openNav, setOpenNav] = useState(false);
  const navigate = useNavigate();

  const handleOpenNavMenu = () => {
    setOpenNav(true);
  };

  const handleCloseNavMenu = () => {
    setOpenNav(false);
  };

  const handleNavigation=(page)=>{
    handleCloseNavMenu();
    handleClick(page)
  }

  const handleClick = (page) => {
    setSelectedTab(page);
    switch (page) {
      case ComponentRoutes.diet: {
        navigate(ComponentRoutes.diet);
        break;
      }
      case ComponentRoutes.login: {
        navigate(ComponentRoutes.login);
        break;
      }
      default: {
        navigate(ComponentRoutes.welcome);
      }
    }
  };

  const handleLogin = () => {
    navigate(ComponentRoutes.login);
  };

  return (
    <AppBar
      className="container"
      position="static"
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ maxHeight: "88px" }}>
          <Grid sx={{ mr: 8, display: { xs: "none", md: "flex" } }}>
            <img src={appLogo} alt="" width={150} height={100} />
          </Grid>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "space-between",
            }}
          >
            <Grid sx={{ display: "flex" }}>
              {tabs?.map((tab) => (
                <Button
                  key={tab?.title}
                  onClick={() => handleClick(tab?.cta)}
                  sx={{
                    my: 2,
                    color: selectedTab === tab?.title ? Color._52f8f8 : "black",
                    display: "block",
                    textTransform: "capitalize",
                  }}
                >
                  <Grid
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <img src={tab?.imageLink} alt="" width={"20px"} />
                    <Typography sx={{ fontSize: "1rem" }}>
                      {tab?.title}
                    </Typography>
                  </Grid>
                </Button>
              ))}
            </Grid>
            <Button
              onClick={handleLogin}
              variant="contained"
              sx={{ backgroundColor: "black", mt: "10px", mb: "10px" }}
            >
              Login / Signup
            </Button>
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              justifyContent: "space-between",
            }}
          >
            <Grid>
              <img src={appLogo} alt="" width={150} height={100} />
            </Grid>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="black"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={openNav}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(openNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {tabs.map((tab) => (
                <MenuItem key={tab?.title} onClick={()=>handleNavigation(tab?.cta)}>
                  <Typography textAlign="center">{tab?.title}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
NavBar.propTypes = {
  tabs: PropTypes.array,
};
export default NavBar;
