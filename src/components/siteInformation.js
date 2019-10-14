import React from "react";
import { Box, Paper, Typography, Button } from "@material-ui/core";
import siteInformationStyles from "./siteInformation.module.scss";
import NameField from "./nameField";
import SiteField from "./siteField";
import CampField from "./campField";
import DateField from "./dateField";
import { Formik } from "formik";

const SiteInformation = () => {
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        site: "",
        camp: "",
        date: ""
      }}
      onSubmit={(values, { setErrors, setSubmitting, submitForm }) => {
        const errors = {};
        Object.values(values).forEach((value, i) => {
          const key = Object.keys(values)[i];
          if (value === "") {
            errors[key] = "Required";
          }
        });

        if (Object.keys(errors).length > 0) {
          setErrors(errors);
        } else {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }
      }}
      validate={values => {
        const errors = {};

        Object.values(values).forEach((value, i) => {
          const key = Object.keys(values)[i];
          if (value.length <= 2 && value !== "") {
            errors[key] = "Must be more than 2 characters";
          }
        });

        return errors;
      }}
    >
      {({ values, errors, handleChange, handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <Paper className={siteInformationStyles.container}>
            <Box className={siteInformationStyles.topContainer}>
              <Typography className={siteInformationStyles.title} variant="h2">
                Site Information
              </Typography>
            </Box>
            <Box className={siteInformationStyles.formContainer}>
              <NameField
                errors={errors}
                handleChange={handleChange}
                values={values}
              />
              <SiteField
                errors={errors}
                handleChange={handleChange}
                values={values}
              />
              <CampField
                errors={errors}
                handleChange={handleChange}
                values={values}
              />
              <DateField
                errors={errors}
                handleChange={handleChange}
                values={values}
              />
            </Box>

            <Box className={siteInformationStyles.buttonContainer}>
              <Button color="primary" type="submit" variant="contained">
                Continue
              </Button>
            </Box>
          </Paper>
        </form>
      )}
    </Formik>
  );
};

export default SiteInformation;
