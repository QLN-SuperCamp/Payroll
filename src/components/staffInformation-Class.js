import React, { Component } from "react";
import { Box, Paper, Typography } from "@material-ui/core";
import siteInformationStyles from "./siteInformation.module.scss";
import MaterialTable from "material-table";
import AddBox from "@material-ui/icons/AddBox";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import Check from "@material-ui/icons/Check";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import Clear from "@material-ui/icons/Clear";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import Edit from "@material-ui/icons/Edit";
import FilterList from "@material-ui/icons/FilterList";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import Remove from "@material-ui/icons/Remove";
import SaveAlt from "@material-ui/icons/SaveAlt";
import Search from "@material-ui/icons/Search";
import ViewColumn from "@material-ui/icons/ViewColumn";
import { forwardRef } from "react";
import { graphql, StaticQuery } from "gatsby";
import { connect } from "react-redux";
import moment from "moment";

const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => (
    <ChevronRight {...props} ref={ref} />
  )),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => (
    <ChevronLeft {...props} ref={ref} />
  )),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowUpward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
};

class StaffInformation extends Component {
  state = {};
  render() {
    const { siteInformation } = this.props;

    if (siteInformation) {
      return (
        <StaticQuery
          query={graphql`
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
          `}
          render={data => {
            const campData = siteInformation
              ? data.allSitesJson.edges
                  .find(edge => edge.node.name === siteInformation.site)
                  .node.camps.find(
                    jsonCamp => jsonCamp.name === siteInformation.camp
                  )
              : null;

            const hourData = campData
              ? campData.hours.find(
                  ({ date }) =>
                    date === moment(siteInformation.date).format("MM/DD/YYYY")
                )
              : null;

            if (campData) {
              campData.staff.forEach(staffMember => {
                const { position } = staffMember;
                staffMember.hours =
                  hourData.positions[position.replace(" ", "_")];
              });
            }

            return (
              <Paper className={siteInformationStyles.container}>
                <Box className={siteInformationStyles.topContainer}>
                  <Typography
                    className={siteInformationStyles.title}
                    variant="h2"
                  >
                    Staff Information
                  </Typography>
                  {console.log(data)}
                </Box>
                <Box className={siteInformationStyles.tableContainer}>
                  <MaterialTable
                    columns={[
                      { title: "First Name", field: "firstName" },
                      { title: "Last Name", field: "lastName" },
                      { title: "Position", field: "position" },
                      { title: "Hours", field: "hours" }
                    ]}
                    // data={campData ? campData.staff : []}
                    data={campData.staff}
                    editable={{
                      onRowUpdate: (newData, oldData) =>
                        new Promise((resolve, reject) => {
                          setTimeout(() => {
                            {
                              newData.hours = Number(newData.hours);
                              const data = campData.staff;
                              const index = data.indexOf(oldData);
                              data[index] = newData;

                              console.log("-----");
                              console.log({ newData, oldData, data, index });

                              // setTableData(data);
                            }
                            resolve();
                          }, 1000);
                        })
                    }}
                    icons={tableIcons}
                    title="Staff Members"
                  />
                </Box>

                <Box className={siteInformationStyles.buttonContainer}></Box>
              </Paper>
            );
          }}
        />
      );
    } else {
      return null;
    }
  }
}

// const StaffInformation = ({ siteInformation }) => {

//   const [tableData, setTableData] = useState(campData ? campData.staff : []);

//   useEffect(() => {
//     if (campData) {
//       setTableData(campData.staff);
//     }
//   }, [campData, tableData]);

//   console.log({ campData, hourData });

// };

const mapStateToProps = ({ data }) => ({
  siteInformation: data.siteInformation
});

export default connect(mapStateToProps)(StaffInformation);
