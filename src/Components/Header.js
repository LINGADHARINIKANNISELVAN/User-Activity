import React, { useState } from "react";
//import Login from "./Login";
import Home from "./Home";
import {
  AppBar,
  Toolbar,
  Tabs,
  Tab,
  Typography,
  Button,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import CorporateFareIcon from "@mui/icons-material/CorporateFare";
//import CloseIcon from '@mui/icons-material/Close';
import DrawerComp from "./DrawerComp";

const Pages = ["Login", "Products","UserList","Services", "Contact Us", "About Us"];

export default function Header() {
  const [value, setValue] = useState();
  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  console.log(isMatch);

  return (
    <React.Fragment>
      <AppBar>
        <Toolbar>
          <CorporateFareIcon sx={{ fontSize: 40 }} href="/Home"/>

          {isMatch ? (
            <>
              <Typography sx={{ fontSize: "1.5rem", paddingLeft: "10%" }}>
                Hello
              </Typography>

              <DrawerComp />
            </>
          ) : (
            <>
              <Tabs
                sx={{ marginLeft: "auto" }}
                textColor="inherit"
                value={value}
                onChange={(e, value) => setValue(value)}
                indicatorColor="secondary"
              >
                <Tab label="Login" href="/Login" />
                <Tab label="Products" href="/Cardview" />
                <Tab label="UserList" href="/Table"/>
                <Tab label="Services" href="/Login" />
                <Tab label="Contact Us" href="/Contact" />
                <Tab label="About Us" href="/About" />
              </Tabs>

              <Button
                sx={{ marginLeft: "auto" }}
                variant="contained"
                href="/Login"
              >
                Login
              </Button>
              <Button
                sx={{ marginLeft: "10px" }}
                variant="contained"
                href="/Registration"
              >
                Signup
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
