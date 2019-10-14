import React from "react";
import Layout from "../components/layout";
import { Box, Typography } from "@material-ui/core";
import homeStyles from "./index.module.scss";
import Alert from "../components/alert";
import SiteInformation from "../components/siteInformation";
import StaffInformation from "../components/staffInformation";
import Loading from "../components/loading";
import Status from "../components/status";

const HomePage = () => {
  return (
    <Layout>
      <Box className={homeStyles.container}>
        <Typography className={homeStyles.title} variant="h1">
          Payroll Form
        </Typography>
        <Alert />
        <SiteInformation />
        <StaffInformation />
        <Loading />
        <Status />
      </Box>
    </Layout>
  );
};

export default HomePage;
