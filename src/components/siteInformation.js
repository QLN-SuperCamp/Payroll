import React, { useState, useEffect } from "react";
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
import { KeyboardDatePicker } from "@material-ui/pickers";
import siteInformationStyles from "./siteInformation.module.scss";
import { useStaticQuery, graphql } from "gatsby";
import moment from "moment";

const SiteInformation = () => {
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

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [site, setSite] = useState("");
  const [camp, setCamp] = useState("");
  const siteData = site
    ? data.allSitesJson.edges.find(edge => edge.node.name === site)
    : null;
  const campData = camp
    ? siteData.node.camps.find(jsonCamp => jsonCamp.name === camp)
    : null;
  const [date, setDate] = useState(moment());

  useEffect(() => {
    if (campData) {
      setDate(moment(campData.dates.min, "MM/DD/YYYY"));
    }
  }, [campData]);

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
              <i className={siteInformationStyles.noChoice}>
                Please select a site
              </i>
            )}
          </FormControl>
        </Box>

        <Box className={siteInformationStyles.dateContainer}>
          <FormControl component="fieldset" required>
            <FormLabel component="legend" required>
              Date
            </FormLabel>
            {camp ? (
              <KeyboardDatePicker
                maxDate={
                  campData
                    ? moment(campData.dates.max, "MM/DD/YYYY")
                    : undefined
                }
                minDate={
                  campData
                    ? moment(campData.dates.min, "MM/DD/YYYY")
                    : undefined
                }
                onChange={setDate}
                value={date}
              />
            ) : (
              <i className={siteInformationStyles.noChoice}>
                Please select a camp
              </i>
            )}
          </FormControl>
        </Box>
      </Box>
    </Paper>
  );
};

export default SiteInformation;
