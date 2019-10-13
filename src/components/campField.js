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
import siteInformationStyles from "./siteInformation.module.scss";
import { connect } from "react-redux";
import { setCamp } from "../redux/actions/data";

const CampField = ({ camp, handleSetCamp, site }) => {
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
    <Box className={siteInformationStyles.campContainer}>
      <FormControl component="fieldset" required>
        <FormLabel component="legend" required>
          Camp
        </FormLabel>
        {site !== "" ? (
          <RadioGroup
            aria-label="camp"
            name="camp"
            value={camp}
            onChange={e => handleSetCamp(e.target.value)}
          >
            {data.allSitesJson.edges
              .find(({ node }) => node.name === site)
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
          <i className={siteInformationStyles.noChoice}>Please select a site</i>
        )}
      </FormControl>
    </Box>
  );
};

const mapStateToProps = ({ data }) => ({ camp: data.camp, site: data.site });

const mapDispatchToProps = dispatch => ({
  handleSetCamp: camp => dispatch(setCamp(camp))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CampField);
