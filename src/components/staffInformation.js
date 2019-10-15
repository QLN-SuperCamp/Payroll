import React, { useEffect, useState } from "react";
import { Box, Button, Paper, Typography } from "@material-ui/core";
import { graphql, useStaticQuery } from "gatsby";
import { connect } from "react-redux";
import moment from "moment";
import StaffInformationTable from "./staffInformationTable";
import {
  setStaffInformation,
  setSubmitting,
  setSubmitted,
  setSiteInformation
} from "../redux/actions/data";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  container: {
    marginTop: "20px"
  },
  topContainer: {
    borderBottom: "1px solid rgba(0, 40, 100, 0.12)",
    padding: "20px"
  },
  loadingContainer: {
    borderBottom: "1px solid rgba(0, 40, 100, 0.12)",
    padding: "20px",
    alignItems: "center",
    display: "flex",
    justifyContent: "center"
  },
  formContainer: {
    display: "flex",
    flexDirection: "row",
    padding: "20px"
  },
  tableContainer: {
    padding: "20px",
    width: "calc(100% - 40px)"
  },
  buttonContainer: {
    borderTop: "1px solid rgba(0, 40, 100, 0.12)",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    padding: "20px"
  },
  title: {
    fontSize: "1.125rem",
    lineHeight: 1.2,
    fontWeight: 400
  }
}));

const StaffInformation = ({ handleSubmit, siteInformation, submitting }) => {
  const classes = useStyles();
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

  if (siteInformation && !submitting) {
    return (
      <Paper className={classes.container}>
        <Box className={classes.topContainer}>
          <Typography className={classes.title} variant="h2">
            Staff Information
          </Typography>
        </Box>
        <Box className={classes.tableContainer}>
          <StaffInformationTable
            data={tableData}
            setUpdatedData={setUpdatedData}
          />
        </Box>

        <Box className={classes.buttonContainer}>
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
  siteInformation: data.siteInformation,
  submitting: data.submitting
});

const mapDispatchToProps = dispatch => ({
  handleSubmit: staffInformation => {
    dispatch(setSubmitting(true));
    dispatch(setStaffInformation(staffInformation));
    setTimeout(() => {
      dispatch(setSiteInformation(null));
      dispatch(setStaffInformation(null));
      dispatch(setSubmitted(true));
      dispatch(setSubmitting(false));
    }, 5000);
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StaffInformation);
