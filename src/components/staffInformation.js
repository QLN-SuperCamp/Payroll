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
import styled from "styled-components";

const StyledPaper = styled(Paper)`
  margin-top: 20px;
`;

const StyledTopContainer = styled(Box)`
  border-bottom: 1px solid rgba(0, 40, 100, 0.12);
  padding: 20px;
`;

const StyledTableContainer = styled(Box)`
  padding: 20px;
  width: calc(100% - 40px);
`;

const StyledButtonContainer = styled(Box)`
  border-top: 1px solid rgba(0, 40, 100, 0.12);
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding: 20px;
`;

const StyledTitle = styled(Typography)`
  font-size: 1.125rem;
  line-height: 1.2;
  font-weight: 400;
`;

const StaffInformation = ({ handleSubmit, siteInformation, submitting }) => {
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
      <StyledPaper>
        <StyledTopContainer>
          <StyledTitle variant="h2">Staff Information</StyledTitle>
        </StyledTopContainer>
        <StyledTableContainer>
          <StaffInformationTable
            data={tableData}
            setUpdatedData={setUpdatedData}
          />
        </StyledTableContainer>

        <StyledButtonContainer>
          <Button
            color="primary"
            onClick={() => handleSubmit(updatedData)}
            type="submit"
            variant="contained"
          >
            Submit
          </Button>
        </StyledButtonContainer>
      </StyledPaper>
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
