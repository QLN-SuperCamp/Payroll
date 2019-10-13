import React from "react";
import { Box, Paper, Typography } from "@material-ui/core";
import siteInformationStyles from "./siteInformation.module.scss";
import NameField from "./nameField";
import SiteField from "./siteField";
import CampField from "./campField";
import DateField from "./dateField";

const SiteInformation = () => {
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

export default SiteInformation;
