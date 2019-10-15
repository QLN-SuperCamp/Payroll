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
import styled from "styled-components";

const StyledContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 10px;
  width: 25%;
`;

const StyledItalics = styled.i`
  margin-top: 10px;
`;

const CampField = ({ errors, handleChange, values }) => {
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
          <StyledItalics>Please select a site</StyledItalics>
        )}
      </FormControl>
    </StyledContainer>
  );
};

const mapStateToProps = ({ data }) => ({ camp: data.camp, site: data.site });

export default connect(mapStateToProps)(CampField);
