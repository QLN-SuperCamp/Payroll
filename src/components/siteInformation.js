import React from "react";
import { Box, Paper, Typography, Button } from "@material-ui/core";
import siteInformationStyles from "./siteInformation.module.scss";
import NameField from "./nameField";
import SiteField from "./siteField";
import CampField from "./campField";
import DateField from "./dateField";
import { connect } from "react-redux";
import { Formik } from "formik";

const SiteInformation = ({
  firstName,
  formState,
  lastName,
  site,
  camp,
  date
}) => {
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        site: "",
        camp: "",
        date: ""
      }}
      onSubmit={(values, { setSubmitting }) => {
        console.log({ values, setSubmitting });
        // setTimeout(() => {
        //   alert(JSON.stringify(values, null, 2));
        //   setSubmitting(false);
        // }, 400);
      }}
      validate={values => {
        console.log({ values });
      }}
    >
      {({
        values,
        // errors,
        // touched,
        handleChange,
        // handleBlur,
        handleSubmit
        // isSubmitting
        /* and other goodies */
      }) => (
        <form onSubmit={handleSubmit}>
          <Paper className={siteInformationStyles.container}>
            <Box className={siteInformationStyles.topContainer}>
              <Typography className={siteInformationStyles.title} variant="h2">
                Site Information
              </Typography>
            </Box>

            <Box className={siteInformationStyles.formContainer}>
              <NameField handleChange={handleChange} values={values} />
              <SiteField handleChange={handleChange} values={values} />
              <CampField handleChange={handleChange} values={values} />
              <DateField handleChange={handleChange} values={values} />
            </Box>

            <Box className={siteInformationStyles.buttonContainer}>
              <Button
                color="primary"
                // onClick={handleContinue}
                type="submit"
                variant="contained"
              >
                Continue
              </Button>
            </Box>
          </Paper>
        </form>
      )}
    </Formik>
  );
};

const mapStateToProps = ({ data }) => ({
  firstName: data.firstName,
  formState: data.formState,
  lastName: data.lastName,
  site: data.site,
  camp: data.camp,
  date: data.date
});

export default connect(mapStateToProps)(SiteInformation);
