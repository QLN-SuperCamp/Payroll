import React from "react";
import { Box, CircularProgress, Paper } from "@material-ui/core";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  container: {
    marginTop: "20px"
  },
  topContainer: {
    borderBottom: "1px solid rgba(0, 40, 100, 0.12)",
    padding: "20px"
  },
  loadingContainer: {
    borderBottom: "1px solid rgba(0, 40, 100, 0.12)",
    padding: "20px",
    alignItems: "center",
    display: "flex",
    justifyContent: "center"
  },
  formContainer: {
    display: "flex",
    flexDirection: "row",
    padding: "20px"
  },
  tableContainer: {
    padding: "20px",
    width: "calc(100% - 40px)"
  },
  buttonContainer: {
    borderTop: "1px solid rgba(0, 40, 100, 0.12)",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    padding: "20px"
  },
  title: {
    fontSize: "1.125rem",
    lineHeight: 1.2,
    fontWeight: 400
  }
}));

const Loading = ({ submitting }) => {
  const classes = useStyles();
  if (submitting) {
    return (
      <Paper className={classes.container}>
        <Box className={classes.loadingContainer}>
          <CircularProgress />
        </Box>
      </Paper>
    );
  } else {
    return null;
  }
};

const mapStateToProps = ({ data }) => ({ submitting: data.submitting });

export default connect(mapStateToProps)(Loading);
