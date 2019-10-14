import React from "react";
import { Box, TextField } from "@material-ui/core";
import siteInformationStyles from "./siteInformation.module.scss";
import { connect } from "react-redux";

const NameField = ({ handleChange, values }) => {
  return (
    <Box className={siteInformationStyles.nameContainer}>
      <TextField
        className={siteInformationStyles.textField}
        id="first-name"
        label="First Name"
        margin="normal"
        name="firstName"
        onChange={handleChange}
        placeholder="Jane"
        required
        value={values.firstName}
      />
      <TextField
        className={siteInformationStyles.textField}
        id="last-name"
        label="Last Name"
        margin="normal"
        name="lastName"
        onChange={handleChange}
        placeholder="Doe"
        required
        value={values.lastName}
      />
    </Box>
  );
};

const mapStateToProps = ({ data }) => ({
  firstName: data.firstName,
  lastName: data.lastName
});

export default connect(mapStateToProps)(NameField);
