import React, { useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  Tab,
  Tabs,
  TextField,
  Typography,
} from "@mui/material";
import { login } from "../../resources";
import { Color } from "../../utils/Theme/Color";

const TabType = {
  LOGIN: "login",
  SIGNUP: "signup",
};

const CustomTabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

const Login = () => {
  const [selectedTab, setSelectedTab] = useState(TabType.LOGIN);
  const handleChange = (e, val) => {
    setSelectedTab(val);
  };

  return (
    <Container
      maxWidth={"xl"}
      sx={{
        display: "flex",
        justifyContent: "center",
        paddingTop: "30px",
        backgroundImage: `url(${login})`,
        backgroundSize:'contain'
      }}
    >
      <Box
        sx={{
          border: "1px solid rgb(223, 227, 232)",
          borderRadius: "16px",
          padding: "80px 30px",
          backgroundColor: Color.White,
          width: "350px",
          height: "400px",
          margin: "50px",
        }}
      >
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={selectedTab}
            onChange={handleChange}
            aria-label="login tabs"
          >
            <Tab label="Login" value={TabType.LOGIN} />
            <Tab label="Sign Up" value={TabType.SIGNUP} />
          </Tabs>
        </Box>
        <CustomTabPanel value={selectedTab} index={TabType.LOGIN}>
          {/* <Grid
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            mt: 2,
          }}
        >
          <Typography variant="subtitle">Already have an account?</Typography>
          <Button sx={{ padding: "0" }}>Sign In</Button>
        </Grid> */}
          <Grid container rowSpacing={2} sx={{ pt: "16px" }}>
            <Grid item xs={12}>
              <TextField fullWidth label="Mobile Number" variant="standard" />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Password"
                variant="standard"
                type="password"
              />
            </Grid>
            <Grid>
              <FormControlLabel
                control={<Checkbox value={false} />}
                label={<Typography variant="subtitle1" color={Color._292929}>Show Password</Typography>}
              />
            </Grid>
            <Grid item xs={12} sx={{mt:'16px'}}>
              <Button fullWidth variant="contained" sx={{backgroundColor:'black'}}>Login</Button>
            </Grid>
          </Grid>
        </CustomTabPanel>

        <CustomTabPanel value={selectedTab} index={TabType.SIGNUP}>
          <Grid container rowSpacing={2} sx={{ pt: "16px" }}>
            <Grid item xs={12}>
              <Typography variant="subtitle2">
                Your number is safe with us. We won't share your details with
                anyone.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth label="Mobile Number" variant="standard" />
            </Grid>
            <Grid item xs={12} sx={{mt:'16px'}}>
              <Button fullWidth variant="contained" sx={{backgroundColor:'black'}}>Send OTP</Button>
            </Grid>
          </Grid>
        </CustomTabPanel>
        {/* <Typography variant="h5">Let's start your journey with us!</Typography> */}
        {/* <Grid
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            mt: 2,
          }}
        >
          <Typography variant="subtitle">Already have an account?</Typography>
          <Button sx={{ padding: "0" }}>Sign In</Button>
        </Grid>
        <Grid container rowSpacing={2} sx={{pt:'16px'}}>
          <Grid item xs={12}>
            <Typography variant="subtitle2">
              Your number is safe with us. We won't share your details with
              anyone.
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth label="Mobile Number" variant="standard" />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Password"
              variant="standard"
              type="password"
            />
          </Grid>
          <Grid>
            <FormControlLabel
              control={<Checkbox value={false} />}
              label="Show Password"
            />
          </Grid>
        </Grid> */}
      </Box>
    </Container>
  );
};

export default Login;
