import React from "react";
import { Box, CircularProgress, Paper } from "@material-ui/core";
import { connect } from "react-redux";
import siteInformationStyles from "./siteInformation.module.scss";

const Loading = ({ submitting }) => {
  if (submitting) {
    return (
      <Paper className={siteInformationStyles.container}>
        <Box className={siteInformationStyles.loadingContainer}>
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
