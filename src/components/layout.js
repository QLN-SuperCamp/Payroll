import React from "react";
import Header from "./header";
import Footer from "./footer";
import "../styles/index.scss";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";
import { Provider } from "react-redux";
import store from "../redux/store/store";
import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const StyledContent = styled.div`
  flex-grow: 1;
`;

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
          <StyledContainer>
            <StyledContent>
              <Header />
              {props.children}
            </StyledContent>
            <Footer />
          </StyledContainer>
        </MuiPickersUtilsProvider>
      </MuiThemeProvider>
    </Provider>
  );
};

export default Layout;
