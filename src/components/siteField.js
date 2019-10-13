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
import siteInformationStyles from "./siteInformation.module.scss";
import { connect } from "react-redux";
import { setSite } from "../redux/actions/data";

const SiteField = ({ handleSetSite, site }) => {
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
    <Box className={siteInformationStyles.siteContainer}>
      <FormControl component="fieldset" required>
        <FormLabel component="legend" required>
          Site
        </FormLabel>
        <RadioGroup
          aria-label="site"
          name="site"
          value={site}
          onChange={e => handleSetSite(e.target.value)}
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

const mapDispatchToProps = dispatch => ({
  handleSetSite: site => dispatch(setSite(site))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SiteField);
