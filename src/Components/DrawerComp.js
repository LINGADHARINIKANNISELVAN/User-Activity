import React from "react";
import { useState } from "react";
import {Link} from "react-router-dom";
import Login from "./Login";
import {
  Drawer, 
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu"; 

const Pages = ["Login", "Products", "Services", "Contact Us", "About Us"];

const DrawerComp = () => {
  const [openDrawer, setopenDrawer] = useState(false);
  return (
    <React.Fragment>
      
      <Drawer open={openDrawer} onClose={() => setopenDrawer(false)}>
        <List>
          {Pages.map((page, index) => (
            <ListItemButton onClick={() => setopenDrawer(false)} key={index}>
              <ListItemIcon>
                
                <ListItemText href="/Login">{page}</ListItemText>
              </ListItemIcon>
            </ListItemButton>
          ))}
        </List>
      </Drawer>
      <IconButton
        sx={{ color: "white", marginleft: "auto" }}
        onClick={() => setopenDrawer(!openDrawer)}
      >
        <MenuIcon color="white" />
      </IconButton>
    </React.Fragment>
  );
};

export default DrawerComp;
