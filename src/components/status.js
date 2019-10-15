import React from "react";
import { connect } from "react-redux";
import { IconButton, Snackbar, SnackbarContent } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import { setSubmitted } from "../redux/actions/data";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  status: {
    backgroundColor: "#43a047"
  },
  message: {
    alignItems: "center",
    display: "flex"
  },
  icon: {
    marginRight: "10px"
  }
}));

const Status = ({ handleClose, submitted }) => {
  const classes = useStyles();
  return (
    <Snackbar
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left"
      }}
      autoHideDuration={6000}
      open={submitted}
      onClose={handleClose}
    >
      <SnackbarContent
        action={[
          <IconButton
            key="close"
            aria-label="close"
            color="inherit"
            onClick={handleClose}
          >
            <CloseIcon />
          </IconButton>
        ]}
        className={classes.status}
        message={
          <span className={classes.message}>
            <CheckCircleIcon className={classes.icon} />
            Report sent successfully
          </span>
        }
      />
    </Snackbar>
  );
};

const mapStateToProps = ({ data }) => ({ submitted: data.submitted });

const mapDispatchToProps = dispatch => ({
  handleClose: () => dispatch(setSubmitted(false))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Status);
