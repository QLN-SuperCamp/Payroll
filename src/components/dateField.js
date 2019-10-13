import React, { useEffect } from "react";
import { Box, FormLabel, FormControl } from "@material-ui/core";
import { KeyboardDatePicker } from "@material-ui/pickers";
import siteInformationStyles from "./siteInformation.module.scss";
import moment from "moment";
import { connect } from "react-redux";
import { graphql, useStaticQuery } from "gatsby";
import { setDate } from "../redux/actions/data";

const DateField = ({ camp, date, handleSetDate, site }) => {
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

  const siteData = site
    ? data.allSitesJson.edges.find(edge => edge.node.name === site)
    : null;

  const campData = camp
    ? siteData.node.camps.find(jsonCamp => jsonCamp.name === camp)
    : null;

  useEffect(() => {
    if (campData) {
      handleSetDate(moment(campData.dates.min, "MM/DD/YYYY"));
    }
  }, [campData, handleSetDate]);

  return (
    <Box className={siteInformationStyles.dateContainer}>
      <FormControl component="fieldset" required>
        <FormLabel component="legend" required>
          Date
        </FormLabel>
        {camp ? (
          <KeyboardDatePicker
            maxDate={
              campData ? moment(campData.dates.max, "MM/DD/YYYY") : undefined
            }
            minDate={
              campData ? moment(campData.dates.min, "MM/DD/YYYY") : undefined
            }
            onChange={handleSetDate}
            value={date}
          />
        ) : (
          <i className={siteInformationStyles.noChoice}>Please select a camp</i>
        )}
      </FormControl>
    </Box>
  );
};

const mapStateToProps = ({ data }) => ({
  camp: data.camp,
  date: data.date,
  site: data.site
});

const mapDispatchToProps = dispatch => ({
  handleSetDate: date => dispatch(setDate(moment(date, "MM/DD/YYYY")))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DateField);
