import React from "react";
import { Box, TextField } from "@material-ui/core";
import siteInformationStyles from "./siteInformation.module.scss";
import { connect } from "react-redux";
import { setFirstName, setLastName } from "../redux/actions/data";

const NameField = ({
  firstName,
  handleSetFirstName,
  handleSetLastNaame,
  lastName
}) => {
  return (
    <Box className={siteInformationStyles.nameContainer}>
      <TextField
        className={siteInformationStyles.textField}
        id="first-name"
        label="First Name"
        margin="normal"
        onChange={e => handleSetFirstName(e.target.value)}
        placeholder="Jane"
        required
        value={firstName}
      />
      <TextField
        className={siteInformationStyles.textField}
        id="last-name"
        label="Last Name"
        margin="normal"
        onChange={e => handleSetLastNaame(e.target.value)}
        placeholder="Doe"
        required
        value={lastName}
      />
    </Box>
  );
};

const mapStateToProps = ({ data }) => ({
  firstName: data.firstName,
  lastName: data.lastName
});

const mapDispatchToProps = dispatch => ({
  handleSetFirstName: firstName => dispatch(setFirstName(firstName)),
  handleSetLastNaame: lastName => dispatch(setLastName(lastName))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NameField);
