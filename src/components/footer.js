import React from "react";
import { Box, Button, Paper } from "@material-ui/core";
import { Link, useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";

const StyledPaper = styled(Paper)`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 25px;
`;

const StyledCopyrightContainer = styled(Box)`
  color: #9aa0ac;
  font-size: 14px;
`;

const StyledCopyrightAnchor = styled.a`
  color: #6e7687;
  text-decoration: none;
`;

const StyledCopyrightSpan = styled.span`
  color: #9aa0ac;
  font-size: 14px;
`;

const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;
`;

const StyledFooterButton = styled(Button)`
  color: inherit;
  textdecoration: none;

  span {
    color: #467fcf;
  }
`;

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          company {
            link
            name
          }
        }
      }
    }
  `);

  return (
    <StyledPaper>
      <StyledCopyrightContainer>
        <StyledCopyrightSpan>
          Copyright © 2019{" "}
          <StyledCopyrightAnchor
            href={data.site.siteMetadata.company.link}
            rel="noopener noreferrer"
            target="_blank"
          >
            {data.site.siteMetadata.company.name}
          </StyledCopyrightAnchor>
          . All rights reserved.
        </StyledCopyrightSpan>
      </StyledCopyrightContainer>

      <Box>
        <StyledLink to="/guide">
          <Button color="inherit">Guide</Button>
        </StyledLink>
        <StyledFooterButton
          color="inherit"
          onClick={() => window.open("https://www.supercamp.com/", "_blank")}
          style={{ borderColor: "#467fcf", padding: "0.25rem 0.5rem" }}
          variant="outlined"
        >
          SuperCamp
        </StyledFooterButton>
      </Box>
    </StyledPaper>
  );
};

export default Footer;
