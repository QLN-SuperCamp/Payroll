import React from "react";
import { Box, Button, Paper } from "@material-ui/core";
import { Link, useStaticQuery, graphql } from "gatsby";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  footer: {
    alignItems: "center",
    display: "flex",
    justifyContent: "space-between",
    padding: "25px"
  },
  copyright: {
    color: "#9aa0ac",
    fontSize: "14px",
    "& a": {
      color: "#6e7687",
      textDecoration: "none"
    },
    "& div": {
      flexGrow: 1
    }
  },
  plainLink: {
    color: "inherit",
    textDecoration: "none",
    "& span": {
      color: "#9aa0ac",
      fontSize: "14px",
      textTransform: "none"
    }
  },
  secondary: {
    "& span": {
      color: "#467fcf"
    }
  }
}));

const Footer = () => {
  const classes = useStyles();
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
    <Paper className={classes.footer}>
      <Box className={classes.copyright}>
        <span className={classes.copyright}>
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
        <Link className={classes.plainLink} to="/guide">
          <Button color="inherit">Guide</Button>
        </Link>
        <Button
          className={`${classes.plainLink} ${classes.secondary}`}
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
