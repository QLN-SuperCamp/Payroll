import React from "react";
import Layout from "../components/layout";
import { Box, Typography } from "@material-ui/core";
import Alert from "../components/alert";
import SiteInformation from "../components/siteInformation";
import StaffInformation from "../components/staffInformation";
import Loading from "../components/loading";
import Status from "../components/status";
import Helmet from "../components/helmet";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  title: {
    color: "#495057",
    margin: 0,
    fontSize: "1.5rem",
    fontWeight: 400,
    lineHeight: "2.5rem"
  },
  container: {
    marginBottom: "50px",
    marginLeft: "10%",
    marginRight: "10%",
    marginTop: "50px",
    "& a": {
      color: "#172b46",
      fontWeight: 600,
      textDecoration: "none"
    }
  }
}));

const HomePage = () => {
  const classes = useStyles();
  return (
    <Layout>
      <Helmet title="Payroll Form" />
      <Box className={classes.container}>
        <Typography className={classes.title} variant="h1">
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
