import React from "react";
import Header from "./header";
import Footer from "./footer";
import layoutStyles from "./layout.module.scss";
import "../styles/index.scss";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";

const theme = createMuiTheme({
  typography: {
    fontFamily: ["Source Sans Pro"]
  }
});

const Layout = props => {
  return (
    <MuiThemeProvider theme={theme}>
      <div className={layoutStyles.container}>
        <div className={layoutStyles.content}>
          <Header />
          {props.children}
        </div>
        <Footer />
      </div>
    </MuiThemeProvider>
  );
};

export default Layout;
