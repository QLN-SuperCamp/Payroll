import React from "react";
import {
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  RadioGroup,
  Radio
} from "@material-ui/core";
import { graphql, useStaticQuery } from "gatsby";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  siteContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    padding: "10px",
    width: "25%"
  }
}));

const SiteField = ({ errors, handleChange, values }) => {
  const classes = useStyles();
  const data = useStaticQuery(graphql`
    query {
      allSitesJson {
        edges {
          node {
            name
            camps {
              name
              dates {
                max
                min
              }
            }
          }
        }
      }
    }
  `);

  return (
    <Box className={classes.siteContainer}>
      <FormControl
        component="fieldset"
        error={errors.site && errors.site !== ""}
        required
      >
        <FormLabel component="legend" required>
          Site
        </FormLabel>
        <RadioGroup
          aria-label="site"
          name="site"
          value={values.site}
          onChange={handleChange}
        >
          {data.allSitesJson.edges.map(({ node }) => (
            <FormControlLabel
              key={node.name}
              value={node.name}
              control={<Radio color="primary" />}
              label={node.name}
            />
          ))}
        </RadioGroup>
      </FormControl>
    </Box>
  );
};

const mapStateToProps = ({ data }) => ({ site: data.site });

export default connect(mapStateToProps)(SiteField);
