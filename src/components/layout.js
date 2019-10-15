import React from "react";
import Header from "./header";
import Footer from "./footer";
// import "../styles/index.scss";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";
import { Provider } from "react-redux";
import store from "../redux/store/store";
import { makeStyles } from "@material-ui/core/styles";

const theme = createMuiTheme({
  typography: {
    fontFamily: ["Source Sans Pro"]
  }
});

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh"
  },
  content: {
    flexGrow: 1
  }
}));

const Layout = props => {
  const classes = useStyles();
  return (
    <Provider store={store}>
      <MuiThemeProvider theme={theme}>
        <MuiPickersUtilsProvider utils={MomentUtils}>
          <div className={classes.container}>
            <div className={classes.content}>
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
