import React, { useEffect, useState } from "react";
import { Box, Button, Paper, Typography } from "@material-ui/core";
import siteInformationStyles from "./siteInformation.module.scss";
import { graphql, useStaticQuery } from "gatsby";
import { connect } from "react-redux";
import moment from "moment";
import StaffInformationTable from "./staffInformationTable";
import { setStaffInformation } from "../redux/actions/data";

const StaffInformation = ({ handleSubmit, siteInformation }) => {
  const data = useStaticQuery(graphql`
    {
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
              hours {
                date
                positions {
                  Logistics_Coordinator
                  Office_Coordinator
                  Team_Leader
                  Wellness_Person
                }
              }
              staff {
                firstName
                lastName
                position
              }
            }
          }
        }
      }
    }
  `);

  const campData = siteInformation
    ? data.allSitesJson.edges
        .find(edge => edge.node.name === siteInformation.site)
        .node.camps.find(jsonCamp => jsonCamp.name === siteInformation.camp)
    : null;

  const hourData = campData
    ? campData.hours.find(
        ({ date }) => date === moment(siteInformation.date).format("MM/DD/YYYY")
      )
    : null;

  if (campData) {
    campData.staff.forEach(staffMember => {
      const { position } = staffMember;
      staffMember.hours = hourData.positions[position.replace(" ", "_")];
    });
  }

  const [tableData, setTableData] = useState(campData ? campData.staff : []);
  const [updatedData, setUpdatedData] = useState([]);

  useEffect(() => {
    if (campData) {
      setTableData(campData.staff);
    }
  }, [campData, tableData]);

  if (siteInformation) {
    return (
      <Paper className={siteInformationStyles.container}>
        <Box className={siteInformationStyles.topContainer}>
          <Typography className={siteInformationStyles.title} variant="h2">
            Staff Information
          </Typography>
        </Box>
        <Box className={siteInformationStyles.tableContainer}>
          <StaffInformationTable
            data={tableData}
            setUpdatedData={setUpdatedData}
          />
        </Box>

        <Box className={siteInformationStyles.buttonContainer}>
          <Button
            color="primary"
            onClick={() => handleSubmit(updatedData)}
            type="submit"
            variant="contained"
          >
            Submit
          </Button>
        </Box>
      </Paper>
    );
  } else {
    return null;
  }
};

const mapStateToProps = ({ data }) => ({
  siteInformation: data.siteInformation
});

const mapDispatchToProps = dispatch => ({
  handleSubmit: staffInformation =>
    dispatch(setStaffInformation(staffInformation))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StaffInformation);
