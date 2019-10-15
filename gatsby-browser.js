import React from "react";
import { StylesProvider } from "@material-ui/core/styles";
// import { Provider } from "react-redux";
// import store from "./src/store";

export const wrapRootElement = ({ element }) => {
  return <StylesProvider>{element}</StylesProvider>;
};
