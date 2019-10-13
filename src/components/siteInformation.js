import React, { useState } from "react";
import {
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  Paper,
  Radio,
  RadioGroup,
  TextField,
  Typography
} from "@material-ui/core";
import siteInformationStyles from "./siteInformation.module.scss";
import { useStaticQuery, graphql } from "gatsby";

const SiteInformaation = () => {
  const data = useStaticQuery(graphql`
    query {
      allSitesJson {
        edges {
          node {
            name
            camps
          }
        }
      }
    }
  `);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [site, setSite] = useState("");
  const [camp, setCamp] = useState("");

  return (
    <Paper className={siteInformationStyles.container}>
      <Box className={siteInformationStyles.topContainer}>
        <Typography className={siteInformationStyles.title} variant="h2">
          Site Information
        </Typography>
      </Box>
      <Box className={siteInformationStyles.formContainer}>
        <Box className={siteInformationStyles.nameContainer}>
          <TextField
            className={siteInformationStyles.textField}
            id="first-name"
            label="First Name"
            margin="normal"
            onChange={e => setFirstName(e.target.value)}
            placeholder="Jane"
            required
            value={firstName}
          />
          <TextField
            className={siteInformationStyles.textField}
            id="last-name"
            label="Last Name"
            margin="normal"
            onChange={e => setLastName(e.target.value)}
            placeholder="Doe"
            required
            value={lastName}
          />
        </Box>
        <Box className={siteInformationStyles.siteContainer}>
          <FormControl component="fieldset" required>
            <FormLabel component="legend" required>
              Site
            </FormLabel>
            <RadioGroup
              aria-label="site"
              name="site"
              value={site}
              onChange={e => setSite(e.target.value)}
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
                onChange={e => setCamp(e.target.value)}
              >
                {data.allSitesJson.edges
                  .find(({ node }) => node.name === site)
                  .node.camps.map(camp => (
                    <FormControlLabel
                      key={camp}
                      value={camp}
                      control={<Radio color="primary" />}
                      label={camp}
                    />
                  ))}
              </RadioGroup>
            ) : (
              <i className={siteInformationStyles.noChoice}>
                Please select a site
              </i>
            )}
          </FormControl>
        </Box>
      </Box>
    </Paper>
  );
};

export default SiteInformaation;
