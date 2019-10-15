import React from "react";
import Header from "./header";
import Footer from "./footer";
import layoutStyles from "./layout.module.scss";
import "../styles/index.scss";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";
import { Provider } from "react-redux";
import store from "../redux/store/store";

const theme = createMuiTheme({
  typography: {
    fontFamily: ["Source Sans Pro"]
  }
});

const Layout = props => {
  return (
    <Provider store={store}>
      <MuiThemeProvider theme={theme}>
        <MuiPickersUtilsProvider utils={MomentUtils}>
          <div className={layoutStyles.container}>
            <div className={layoutStyles.content}>
              <Header />
              {props.children}
            </div>
            <Footer />
          </div>
        </MuiPickersUtilsProvider>
      </MuiThemeProvider>
    </Provider>
  );
};

export default Layout;
