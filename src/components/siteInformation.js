import React from "react";
import { Box, Paper, Typography, Button } from "@material-ui/core";
import NameField from "./nameField";
import SiteField from "./siteField";
import CampField from "./campField";
import DateField from "./dateField";
import { Formik } from "formik";
import { connect } from "react-redux";
import { setSiteInformation } from "../redux/actions/data";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  container: {
    marginTop: "20px"
  },
  topContainer: {
    borderBottom: "1px solid rgba(0, 40, 100, 0.12)",
    padding: "20px"
  },
  loadingContainer: {
    borderBottom: "1px solid rgba(0, 40, 100, 0.12)",
    padding: "20px",
    alignItems: "center",
    display: "flex",
    justifyContent: "center"
  },
  formContainer: {
    display: "flex",
    flexDirection: "row",
    padding: "20px"
  },
  tableContainer: {
    padding: "20px",
    width: "calc(100% - 40px)"
  },
  buttonContainer: {
    borderTop: "1px solid rgba(0, 40, 100, 0.12)",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    padding: "20px"
  },
  title: {
    fontSize: "1.125rem",
    lineHeight: 1.2,
    fontWeight: 400
  }
}));

const SiteInformation = ({
  handleSubmitSiteInformation,
  siteInformation,
  submitting
}) => {
  const classes = useStyles();
  if (submitting) {
    return null;
  } else {
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
            // alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
            handleSubmitSiteInformation(values);
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
            <Paper className={classes.container}>
              <Box className={classes.topContainer}>
                <Typography className={classes.title} variant="h2">
                  Site Information
                </Typography>
              </Box>
              <Box className={classes.formContainer}>
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

              {!siteInformation && (
                <Box className={classes.buttonContainer}>
                  <Button color="primary" type="submit" variant="contained">
                    Continue
                  </Button>
                </Box>
              )}
            </Paper>
          </form>
        )}
      </Formik>
    );
  }
};

const mapStateToProps = ({ data }) => ({
  siteInformation: data.siteInformation,
  submitting: data.submitting
});

const mapDispatchToProps = dispatch => ({
  handleSubmitSiteInformation: siteInformation =>
    dispatch(setSiteInformation(siteInformation))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SiteInformation);
