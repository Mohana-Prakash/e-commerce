import React, { useState } from "react";
import Drawer from "@mui/joy/Drawer";
import Button from "@mui/material/Button";
import LoginComp from "../auth/LoginComp";
import RegistrationForm from "../auth/registrationForm";

export default function AnchorTemporaryDrawer() {
  const [state, setState] = useState({
    Login: false,
    Register: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    setState({ [anchor]: open });
  };

  return (
    <div>
      {["Login", "Register"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button className="nav_menu_btn" onClick={toggleDrawer(anchor, true)}>
            {anchor}
          </Button>
          <Drawer
            size="md"
            anchor="right"
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}>
            {state.Login && <LoginComp />}
            {state.Register && <RegistrationForm />}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
