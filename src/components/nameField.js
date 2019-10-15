import React from "react";
import { Box, TextField } from "@material-ui/core";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  nameContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    padding: "10px",
    width: "25%"
  }
}));

const NameField = ({ errors, handleChange, values }) => {
  const classes = useStyles();
  return (
    <Box className={classes.nameContainer}>
      <TextField
        error={errors.firstName && errors.firstName !== ""}
        helperText={errors.firstName && errors.firstName}
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
        error={errors.lastName && errors.lastName !== ""}
        helperText={errors.lastName && errors.lastName}
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
