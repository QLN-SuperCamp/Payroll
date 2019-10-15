import React from "react";
import { connect } from "react-redux";
import { IconButton, Snackbar, SnackbarContent } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import { setSubmitted } from "../redux/actions/data";
import styled from "styled-components";

const StyledSnackbarContent = styled(SnackbarContent)`
  background-color: #43a047;
`;

const StyledSpan = styled.span`
  align-items: center;
  display: flex;
`;

const StyledCheckCircleIcon = styled(CheckCircleIcon)`
  margin-right: 10px;
`;

const Status = ({ handleClose, submitted }) => {
  return (
    <Snackbar
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left"
      }}
      autoHideDuration={6000}
      open={submitted}
      onClose={handleClose}
    >
      <StyledSnackbarContent
        action={[
          <IconButton
            key="close"
            aria-label="close"
            color="inherit"
            onClick={handleClose}
          >
            <CloseIcon />
          </IconButton>
        ]}
        message={
          <StyledSpan>
            <StyledCheckCircleIcon />
            Report sent successfully
          </StyledSpan>
        }
      />
    </Snackbar>
  );
};

const mapStateToProps = ({ data }) => ({ submitted: data.submitted });

const mapDispatchToProps = dispatch => ({
  handleClose: () => dispatch(setSubmitted(false))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Status);
