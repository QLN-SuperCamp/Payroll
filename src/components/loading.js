import React from "react";
import { Box, CircularProgress, Paper } from "@material-ui/core";
import { connect } from "react-redux";
import styled from "styled-components";

const StyledPaper = styled(Paper)`
  margin-top: 20px;
`;

const StyledContainer = styled(Box)`
  border-bottom: 1px solid rgba(0, 40, 100, 0.12);
  padding: 20px;
  align-items: center;
  display: flex;
  justify-content: center;
`;

const Loading = ({ submitting }) => {
  if (submitting) {
    return (
      <StyledPaper>
        <StyledContainer>
          <CircularProgress />
        </StyledContainer>
      </StyledPaper>
    );
  } else {
    return null;
  }
};

const mapStateToProps = ({ data }) => ({ submitting: data.submitting });

export default connect(mapStateToProps)(Loading);
