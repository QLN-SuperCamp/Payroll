import React from "react";
import { Link } from "gatsby";
import { SnackbarContent } from "@material-ui/core";
import InfoIcon from "@material-ui/icons/Info";
import { connect } from "react-redux";
import styled from "styled-components";

const StyledAlert = styled.span`
  align-items: center;
  display: flex;
  flex-direction: row;
`;

const StyledLink = styled(Link)`
  margin-left: 3px;
  margin-right: 3px;
  color: #172b46;
  font-weight: 600;
  text-decoration: none;
`;

const Alert = ({ submitting }) => {
  if (submitting) {
    return null;
  } else {
    return (
      <SnackbarContent
        message={
          <StyledAlert>
            <InfoIcon style={{ marginRight: "10px" }} />
            Need help? <StyledLink to="/guide">Read our guide</StyledLink> for
            more information.
          </StyledAlert>
        }
        style={{
          backgroundColor: "#dae5f5",
          color: "#24426c",
          marginTop: "25px",
          padding: "0.75rem 1.25rem"
        }}
      />
    );
  }
};

const mapStateToProps = ({ data }) => ({ submitting: data.submitting });

export default connect(mapStateToProps)(Alert);
