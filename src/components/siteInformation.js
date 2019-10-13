import React from "react";
import { Box, Paper, Typography } from "@material-ui/core";
import siteInformationStyles from "./siteInformation.module.scss";
import NameField from "./nameField";
import SiteField from "./siteField";
import CampField from "./campField";
import DateField from "./dateField";
import { connect } from "react-redux";

const SiteInformation = ({ firstName, lastName, site, camp, date }) => {
  return (
    <Paper className={siteInformationStyles.container}>
      <Box className={siteInformationStyles.topContainer}>
        <Typography className={siteInformationStyles.title} variant="h2">
          Site Information
        </Typography>
      </Box>
      <Box className={siteInformationStyles.formContainer}>
        <NameField />
        <SiteField />
        <CampField />
        <DateField />
      </Box>
    </Paper>
  );
};

const mapStateToProps = ({ data }) => ({
  firstName: data.firstName,
  lastName: data.lastName,
  site: data.site,
  camp: data.camp,
  date: data.date
});

export default connect(mapStateToProps)(SiteInformation);
