import { Drawer, Hidden } from "@mui/material";
import React from "react";
import { LeftbarStyle } from "./LeftbarStyle";

function Leftbar() {
  const classes = LeftbarStyle();

  return (
    <div>
      <nav className={classes.drawer}>
        <Hidden xsDown implementation='css'>
          <Drawer
            variant="permanent"
            open
            anchor="left"
            classes={{ paper: classes.drawerPaper }}
          >
            Hello
          </Drawer>
        </Hidden>
      </nav>
    </div>
  );
}

export default Leftbar;
