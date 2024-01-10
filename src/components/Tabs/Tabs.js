import * as React from "react";
import {useNavigate}from 'react-router-dom'
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import PhoneIcon from "@mui/icons-material/Phone";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonPinIcon from "@mui/icons-material/PersonPin";
import {Color} from '../../utils/Theme/Color'
import { ComponentRoutes } from "../../utils/Constants/component-routes";

const NavTabs = () => {
  const [value, setValue] = React.useState(0);
  const navigate=useNavigate();

  const handleChange = (event, newValue) => {
    setValue(newValue);
   if(newValue === 1){
     navigate(ComponentRoutes.login)
   }else{
    navigate(ComponentRoutes.welcome)
   }
    
  };

  return (
    <Tabs
    sx={{'& .css-kuw07b-MuiButtonBase-root-MuiTab-root.Mui-selected':{
        color:Color._30D5C8
    }}}
      value={value}
      onChange={handleChange}
      aria-label="icon label tabs example"
    >
      <Tab
        icon={<PhoneIcon />}
        label="RECENTS"
      />
      <Tab icon={<FavoriteIcon />} label="FAVORITES" />
      <Tab icon={<PersonPinIcon />} label="NEARBY" />
    </Tabs>
  );
};

export default NavTabs;
