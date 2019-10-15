import React from "react";
import {
  Box,
  FormControlLabel,
  FormControl,
  FormLabel,
  RadioGroup,
  Radio
} from "@material-ui/core";
import { graphql, useStaticQuery } from "gatsby";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  campContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    padding: "10px",
    width: "25%"
  },
  noChoice: {
    marginTop: "10px"
  }
}));

const CampField = ({ errors, handleChange, values }) => {
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
    <Box className={classes.campContainer}>
      <FormControl
        component="fieldset"
        error={errors.camp && errors.camp !== ""}
        required
      >
        <FormLabel component="legend" required>
          Camp
        </FormLabel>
        {values.site !== "" ? (
          <RadioGroup
            aria-label="camp"
            name="camp"
            value={values.camp}
            onChange={handleChange}
          >
            {data.allSitesJson.edges
              .find(({ node }) => node.name === values.site)
              .node.camps.map(({ name }) => (
                <FormControlLabel
                  key={name}
                  value={name}
                  control={<Radio color="primary" />}
                  label={name}
                />
              ))}
          </RadioGroup>
        ) : (
          <i className={classes.noChoice}>Please select a site</i>
        )}
      </FormControl>
    </Box>
  );
};

const mapStateToProps = ({ data }) => ({ camp: data.camp, site: data.site });

export default connect(mapStateToProps)(CampField);
