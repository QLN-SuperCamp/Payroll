import React from "react";
import Layout from "../components/layout";
import { Box, Typography, Paper } from "@material-ui/core";
import Helmet from "../components/helmet";
import styled from "styled-components";

const StyledGuideContainer = styled(Box)`
  margin-bottom: 50px;
  margin-left: 10%;
  margin-right: 10%;
  margin-top: 50px;
`;

const StyledTextContainer = styled(Paper)`
  margin-top: 25px;
  padding: 25px;
`;

const StyledTitle = styled(Typography)`
  color: #495057;
  margin: 0;
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 2.5rem;
`;

const StyledH2 = styled(Typography)`
  color: #495057;
  font-size: 1.75re;
`;

const StyledH3 = styled(Typography)`
  color: #495057;
  font-size: 1.5rem;
`;

const StyledP = styled(Typography)`
  color: #495057;
  font-size: 1rem;
  margin-bottom: 1rem;
  margin-top: 1rem;
`;

const GuidePage = props => {
  return (
    <Layout>
      <Helmet title="Guide" />
      <StyledGuideContainer>
        <StyledTitle variant="h1">Guide</StyledTitle>
        <StyledTextContainer>
          <StyledH2 variant="h2">Introduction</StyledH2>
          <StyledP>
            This payroll form is meant to be a simple and easy process for
            logging staff member hours every day throughout camp. Most
            information is already filled in for you!
          </StyledP>
          <StyledH3 variant="h3">Site Information</StyledH3>
          <StyledP>
            Please be sure to enter all information in this section before
            clicking "continue". Enter your first and last name, as well as the
            site and camp you are inputting hours for. The date will
            automatically populate to the 1st day of that camp, and you will
            only be able to select days within the selected camp. Use the drop
            down menu to select the correct day.
          </StyledP>
          <StyledH3 variant="h3">Staff Information</StyledH3>
          <StyledP>
            Once you click "continue", sections with position information will
            become available to you. Each position section has the same
            information: Staff Members: A list of staff members is generated
            automatically. You will notice that each staff member has already
            been checked. Hours Worked: Depending on the day that was selected,
            the hours for that position have already been entered for you. You
            will not be able to alter this value. If you uncheck a staff member,
            a new section appears, asking you how many hours and minutes that
            staff member worked. This is to be used only if the staff member did
            not work the amount of time in the "Hours Worked" section. Pre-Camp:
            Days before a camp begins, be it staff training or break days
            in-between, fall under that camp. For example, to input hours for
            the 2 nd day of staff training, select "Camp 1", and you will find
            the correct dates in the dropdown menu. To input hours for the day
            before Camp 2 starts, select "Camp 2", and the dates will appear.
            Sick Staff: If there is a sick staff member, select the toggle, and
            check which staff member was sick. Uncheck the staff member from the
            regular section, and input "0" in the "hours" and "minutes" fields.
          </StyledP>
          <StyledH3 variant="h3">Submitting the Form</StyledH3>
          <StyledP>
            After entering in the information, you are able to preview before
            you officially submit. Hit the "Preview" button to see an overview
            of the information you entered. Once you have read through
            everything and verified the information is correct, click the
            "Submit" button. The information is sent over to QLN, and you are
            able to enter another form.
          </StyledP>
        </StyledTextContainer>
      </StyledGuideContainer>
    </Layout>
  );
};

export default GuidePage;
