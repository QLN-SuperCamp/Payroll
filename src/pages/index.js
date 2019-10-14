import React from "react";
import Layout from "../components/layout";
import { Box, Typography } from "@material-ui/core";
import homeStyles from "./index.module.scss";
import Alert from "../components/alert";
import SiteInformaation from "../components/siteInformation";
import StaffInformation from "../components/staffInformation";

const HomePage = () => {
  return (
    <Layout>
      <Box className={homeStyles.container}>
        <Typography className={homeStyles.title} variant="h1">
          Payroll Form
        </Typography>
        <Alert />
        <SiteInformaation />
        <StaffInformation />
      </Box>
    </Layout>
  );
};

export default HomePage;
