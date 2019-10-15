import React from "react";
import Layout from "../components/layout";
import { Box, Typography, Paper } from "@material-ui/core";
import guideStyles from "./guide.module.scss";
import Helmet from "../components/helmet";

const HomePage = () => {
  return (
    <Layout>
      <Helmet title="Guide" />
      <Box className={guideStyles.container}>
        <Typography className={guideStyles.title} variant="h1">
          Guide
        </Typography>
        <Paper className={guideStyles.textContainer}>
          <Typography variant="h2">Introduction</Typography>
          <Typography>
            This payroll form is meant to be a simple and easy process for
            logging staff member hours every day throughout camp. Most
            information is already filled in for you!
          </Typography>
          <Typography variant="h3">Site Information</Typography>
          <Typography>
            Please be sure to enter all information in this section before
            clicking "continue". Enter your first and last name, as well as the
            site and camp you are inputting hours for. The date will
            automatically populate to the 1st day of that camp, and you will
            only be able to select days within the selected camp. Use the drop
            down menu to select the correct day.
          </Typography>
          <Typography variant="h3">Staff Information</Typography>
          <Typography>
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
          </Typography>
          <Typography variant="h3">Submitting the Form</Typography>
          <Typography>
            After entering in the information, you are able to preview before
            you officially submit. Hit the "Preview" button to see an overview
            of the information you entered. Once you have read through
            everything and verified the information is correct, click the
            "Submit" button. The information is sent over to QLN, and you are
            able to enter another form.
          </Typography>
        </Paper>
      </Box>
    </Layout>
  );
};

export default HomePage;
