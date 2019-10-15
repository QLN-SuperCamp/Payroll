import React from "react";
import Layout from "../components/layout";
import { Box, Typography } from "@material-ui/core";
import Alert from "../components/alert";
import SiteInformation from "../components/siteInformation";
import StaffInformation from "../components/staffInformation";
import Loading from "../components/loading";
import Status from "../components/status";
import Helmet from "../components/helmet";
import styled from "styled-components";

const StyledBox = styled(Box)`
  margin-bottom: 50px;
  margin-left: 10%;
  margin-right: 10%;
  margin-top: 50px;
`;

const StyledTypography = styled(Typography)`
  color: #495057;
  margin: 0;
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 2.5rem;
`;

const HomePage = () => {
  return (
    <Layout>
      <Helmet title="Payroll Form" />
      <StyledBox>
        <StyledTypography variant="h1">Payroll Form</StyledTypography>
        <Alert />
        <SiteInformation />
        <StaffInformation />
        <Loading />
        <Status />
      </StyledBox>
    </Layout>
  );
};

export default HomePage;
