import React from "react";
import { Link } from "gatsby";
import { SnackbarContent } from "@material-ui/core";
import InfoIcon from "@material-ui/icons/Info";
import alertStyles from "./alert.module.scss";

const Alert = () => {
  return (
    <SnackbarContent
      message={
        <span className={alertStyles.message}>
          <InfoIcon style={{ marginRight: "10px" }} />
          Need help?{" "}
          <Link className={alertStyles.link} to="/guide">
            Read our guide
          </Link>{" "}
          for more information.
        </span>
      }
      style={{
        backgroundColor: "#dae5f5",
        color: "#24426c",
        marginTop: "25px",
        padding: "0.75rem 1.25rem"
      }}
    />
  );
};

export default Alert;
