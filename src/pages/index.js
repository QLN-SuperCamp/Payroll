import React from "react";
import Layout from "../components/layout";
import { Box, SnackbarContent, Typography } from "@material-ui/core";
import homeStyles from "./index.module.scss";
import { Link } from "gatsby";

export default () => (
  <Layout>
    <Box className={homeStyles.container}>
      <Typography className={homeStyles.title} variant="h1">
        Payroll Form
      </Typography>
      <SnackbarContent
        message={
          <span>
            Need help? <Link to="/guide">Read our guide</Link> for more
            information.
          </span>
        }
        style={{
          backgroundColor: "#dae5f5",
          color: "#24426c",
          marginTop: '25px',
          padding: "0.75rem 1.25rem"
        }}
      />
    </Box>
  </Layout>
);
