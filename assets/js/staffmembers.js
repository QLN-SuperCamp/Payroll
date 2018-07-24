// * "staffmembers.js" is a file to hold data for each staff member and what camps they are working.
// * This data is to be used in the creation of individual checkboxes in the Payroll Form
// * Note: This is different than the Payroll Admin, where staff data is pulled from "2018staff.csv".
// * "2018staff.csv" is used here to generate initial objects for each staff member


// CampMinder Report - All 2018 Staff Members
var allStaffReport = "admin/2018staff.csv";
var allStaffReportArray = [];
var staffMembersAll = [];
$.get(allStaffReport, function (data) {
    var csvDatasets = Papa.parse(data, {
        header: true
    });
    allStaffReportArray = csvDatasets;
    
    // Each staff member
    allStaffReportArray.data.forEach(function (staffMember) {
        var personObject = {};
        // Names
        personObject.firstName = staffMember["First Name"];
        personObject.lastName = staffMember["Last Name"];
        // Camps Working
        var camps = [staffMember.Camp1Code, staffMember["Camp1Code(2)"], staffMember.Camp2Code, staffMember["Camp2Code(2)"], staffMember.Camp3Code, staffMember.Camp4Code, staffMember.Camp5Code, staffMember.Camp6Code];
        var campsWorkingCodes = camps.filter(camp => camp.length > 0);
        var campsWorking = translateCampCodes(campsWorkingCodes);
        personObject.campsWorking = campsWorking;
        // Position(s)
        var position1 = getPosition(staffMember, 1);
        var position2 = getPosition(staffMember, 2);
        personObject.position1 = position1;
        personObject.position2 = position2;

        var fullName = personObject.firstName.concat(" ", personObject.lastName);
        checkSpecialCases(fullName);

        function getPosition(staffMember, positionNumber) {
            var positionDefinitions = {
                "Team Leader": "TL",
                "Senior Team Leader": "STL",
                "Logistics Coordinator": "LC",
                "Wellness Person": "WP",
                "Office Coordinator": "OC",
                "": ""
            };

            var positionProperty = "";
            var abbreviatedPosition = "";

            if (positionNumber === 1) {
                positionProperty = staffMember.Position;
            } else if (positionNumber === 2) {
                positionProperty = staffMember["Position 2"];
            }


            abbreviatedPosition = positionDefinitions[`${positionProperty}`];

            return abbreviatedPosition;
        }

        function translateCampCodes(campCodesArray) {
            var campCodeDefinitions = {
                "STS118": "stan-camp1",
                "STJ118": "stan-camp2",
                "STS218": "stan-camp3",
                "STJ218": "stan-camp4",
                "STS318": "stan-camp5",
                "STS418": "stan-camp6",
                "TXS118 / TXJ118": "sw-camp1",
                "TXQA118": "sw-camp2",
                "FLJ118": "ucf-camp1",
                "FLS118": "ucf-camp2",
                "PAS118": "villa-camp1",
                "PAJ118": "villa-camp2",
                "Canada": "Canada"
            };

            var translatedCampCodes = [];

            campCodesArray.forEach(function (campCode) {
                var translatedCampCode = campCodeDefinitions[`${campCode}`];
                translatedCampCodes.push(translatedCampCode);
            });

            return translatedCampCodes;
        }

        function checkSpecialCases(fullName) {
            var specialCaseStaff = [
                {
                    id: "Yolanda Drew",
                    camps: {
                        "sw-camp1": "LC",
                        "sw-camp2": "LC",
                        "villa-camp1": "TL"
                    }
                },
                {
                    id: "Nathan Tung",
                    camps: {
                        "stan-camp3": "Photo",
                        "stan-camp4": "TL",
                        "stan-camp5": "TL"
                    }
                },
                {
                    id: "Isabella Stenz",
                    camps: {
                        "villa-camp1": "STL",
                        "villa-camp2": "WP",
                        "stan-camp5": "TL",
                        "stan-camp6": "TL"
                    }
                }
            ];
        

            var specialStaffMember = specialCaseStaff.filter(person => (person.id === fullName));

            if (specialStaffMember.length > 0) {
                // There was a match with the specailCaseStaff
                personObject.specialStaffMember = specialStaffMember;
            }
        }

        staffMembersAll.push(personObject);
    });
});