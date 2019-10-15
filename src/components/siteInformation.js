import React from "react";
import { Box, Paper, Typography, Button } from "@material-ui/core";
import NameField from "./nameField";
import SiteField from "./siteField";
import CampField from "./campField";
import DateField from "./dateField";
import { Formik } from "formik";
import { connect } from "react-redux";
import { setSiteInformation } from "../redux/actions/data";
import styled from "styled-components";

const StyledPaper = styled(Paper)`
  margin-top: 20px;
`;

const StyledTopContainer = styled(Box)`
  border-bottom: 1px solid rgba(0, 40, 100, 0.12);
  padding: 20px;
`;

const StyledFormContainer = styled(Box)`
  display: flex;
  flex-direction: row;
  padding: 20px;
`;

const StyledButtonContainer = styled(Box)`
  border-top: 1px solid rgba(0, 40, 100, 0.12);
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding: 20px;
`;

const StyledTitle = styled(Typography)`
  font-size: 1.125rem;
  line-height: 1.2;
  font-weight: 400;
`;

const SiteInformation = ({
  handleSubmitSiteInformation,
  siteInformation,
  submitting
}) => {
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
            <StyledPaper>
              <StyledTopContainer>
                <StyledTitle variant="h2">Site Information</StyledTitle>
              </StyledTopContainer>
              <StyledFormContainer>
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
              </StyledFormContainer>

              {!siteInformation && (
                <StyledButtonContainer>
                  <Button color="primary" type="submit" variant="contained">
                    Continue
                  </Button>
                </StyledButtonContainer>
              )}
            </StyledPaper>
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
