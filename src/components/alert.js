import React from "react";
import { Link } from "gatsby";
import { SnackbarContent } from "@material-ui/core";
import InfoIcon from "@material-ui/icons/Info";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  message: {
    alignItems: "center",
    display: "flex",
    flexDirection: "row"
  },
  link: {
    marginLeft: "3px",
    marginRight: "3px"
  }
}));

const Alert = ({ submitting }) => {
  const classes = useStyles();

  if (submitting) {
    return null;
  } else {
    return (
      <SnackbarContent
        message={
          <span className={classes.message}>
            <InfoIcon style={{ marginRight: "10px" }} />
            Need help?{" "}
            <Link className={classes.link} to="/guide">
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
  }
};

const mapStateToProps = ({ data }) => ({ submitting: data.submitting });

export default connect(mapStateToProps)(Alert);
