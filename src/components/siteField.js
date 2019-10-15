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
import styled from "styled-components";

const StyledContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 10px;
  width: 25%;
`;

const SiteField = ({ errors, handleChange, values }) => {
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
    <StyledContainer>
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
    </StyledContainer>
  );
};

const mapStateToProps = ({ data }) => ({ site: data.site });

export default connect(mapStateToProps)(SiteField);
