import React from "react";
import { AppBar, Toolbar } from "@material-ui/core";
import { Link } from "gatsby";
import logo from "../images/supercamp.svg";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  container: {
    alignItems: "center",
    display: "flex",
    justifyContent: "space-between",
    "& header": {
      backgroundColor: "#ffffff"
    }
  },
  plainLink: {
    color: "inherit",
    textDecoration: "none"
  },
  logo: {
    width: "150px"
  }
}));

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar style={{ backgroundColor: "white" }} position="sticky">
      <Toolbar className={classes.container}>
        <Link to="/" className={classes.plainLink}>
          <img alt="Logo" className={classes.logo} src={logo} />
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
