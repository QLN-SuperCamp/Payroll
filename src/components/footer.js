import React from "react";
import { Box, Button, Paper } from "@material-ui/core";
import footerStyles from "./footer.module.scss";
import { Link, useStaticQuery, graphql } from "gatsby";

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
    <Paper className={footerStyles.footer}>
      <Box className={footerStyles.copyright}>
        <span className={footerStyles.copyright}>
          Copyright © 2019{" "}
          <a
            href={data.site.siteMetadata.company.link}
            rel="noopener noreferrer"
            target="_blank"
          >
            {data.site.siteMetadata.company.name}
          </a>
          . All rights reserved.
        </span>
      </Box>

      <Box>
        <Link className={footerStyles.plainLink} to="/guide">
          <Button color="inherit">Guide</Button>
        </Link>
        <Button
          className={`${footerStyles.plainLink} ${footerStyles.secondary}`}
          color="inherit"
          onClick={() => window.open("https://www.supercamp.com/", "_blank")}
          style={{ borderColor: "#467fcf", padding: "0.25rem 0.5rem" }}
          variant="outlined"
        >
          SuperCamp
        </Button>
      </Box>
    </Paper>
  );
};

export default Footer;
