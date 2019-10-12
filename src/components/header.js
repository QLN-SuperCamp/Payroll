import React from "react";
import { AppBar, Toolbar } from "@material-ui/core";
import headerStyles from "./header.module.scss";
import { Link } from "gatsby";
import logo from "../images/supercamp.svg";

const Header = () => {
  return (
    <AppBar style={{ backgroundColor: "white" }} position="sticky">
      <Toolbar className={headerStyles.container}>
        <Link to="/" className={headerStyles.plainLink}>
          <img alt="Logo" className={headerStyles.logo} src={logo} />
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
