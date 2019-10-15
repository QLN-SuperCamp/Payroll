import React from "react";
import { AppBar, Toolbar } from "@material-ui/core";
import { Link } from "gatsby";
import logo from "../images/supercamp.svg";
import styled from "styled-components";

const StyledContainer = styled(Toolbar)`
  align-items: center;
  display: flex;
  justify-content: space-between;
`;

const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;
`;

const StyledImage = styled.img`
  width: 150px;
`;

const Header = () => {
  return (
    <AppBar style={{ backgroundColor: "white" }} position="sticky">
      <StyledContainer>
        <StyledLink to="/">
          <StyledImage alt="Logo" src={logo} />
        </StyledLink>
      </StyledContainer>
    </AppBar>
  );
};

export default Header;
