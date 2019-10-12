// * "staffmembers.js" is a file to hold data for each staff member and what camps they are working.
// * This data is to be used in the creation of individual checkboxes in the Payroll Form
// * Note: This is different than the Payroll Admin, where staff data is pulled from "2018staff.csv".
// * "2018staff.csv" is used here to generate initial objects for each staff member


// CampMinder Report - All 2018 Staff Members
var allStaffReport = '';
if(window.location.href.indexOf("admin") > -1) {
    allStaffReport = '2018staff.csv';
} else {
    allStaffReport = "admin/2018staff.csv";
}
var allStaffReportArray = [];
var staffMembersAll = [];
/**
 * Takes in the CampMinder report - "2018.csv" and works the data into a final array that then is used by the entire program.
 * @name buildCampMinderReportArray
 */
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
        
        // Fix to add Yolanda Drew to Villa Camp 2 for the 2 pre-camp days based on Leslie Braff's note
        if (personObject.firstName === "Yolanda" && personObject.lastName === "Drew") {
            camps.push("PAJ118");
        }
        
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

        /**
         * Gets information about the position of the current staff member, and translates it to something the form can work with.
         * @returns {string} An abbreviated position, from the list of positionDefinitions. (ex. "Team Leader" becomes "TL").
         * @param {object} staffMember - The current staff member in the csv of all working staff members.
         * @param {number} positionNumber - Refers to the first or second positon/title. Either "Team Leader", "Senior Team Leader", "Logistics Coordinator", "Wellness Person", "Office Coordinator", "Site Counselor", "Facilitator", "Lead Facilitator", or "Site Administrator".
         * @example <caption>Use getPosition to get an abbreviated value for a staff member only working as a Logistics Coordinator.</caption>
         * getPosition({staffMember}, 1);
         * // returns "LC";
         */
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

        /**
         * Translates the camp codes into a more human-readable format.
         * @returns {array} - An array containing strings of readable formats of the camp codes.
         * @example <caption>Translate an array of camp codes for someone working both camps at Texas.</caption>
         * translateCampCodes(["TXS118 / TXJ118", "TXQA118"]);
         * //returns ["sw-camp1", "sw-camp2"];
         * @param {Array} campCodesArray - An array of camp codes that the staff member is working.
         */
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

        /**
         * Checks to see if the staff member the program is working on is a "special case" staff member - someone who has something out of the ordinary going on with their position, pay, location, etc. If the person is in the array of special cases, the function pushes the value from the array of special cases.
         * @param {string} fullName - A string formed by concatonating the firstName and lastName of an employee.
         * 
         */
        function checkSpecialCases(fullName) {
            var specialCaseStaff = [
                {
                    id: "Lauren Ihle",
                    camps: {
                        "stan-camp2": "TL",
                        "stan-camp3": "TL",
                        "stan-camp4": "TL",
                        "stan-camp5": "FAC",
                        "stan-camp6": "FAC"
                    }
                },
                {
                    id: "Yolanda Drew",
                    camps: {
                        "sw-camp1": "LC",
                        "sw-camp2": "LC",
                        "villa-camp1": "TL",
                        "villa-camp2": "TL",
                        "ucf-camp2": "TL",
                        "stan-camp5": "LC",
                        "stan-camp6": "LC"
                    }
                },
                {
                    id: "Nathan Tung",
                    camps: {
                        "stan-camp3": "Photo",
                        "stan-camp4": "TL",
                        "stan-camp5": "TL",
                        "stan-camp6": "TL"
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
                },
                {
                    id: "Leslie Braff",
                    camps: {
                        "villa-camp1": "WP",
                        "villa-camp2": "SA",
                        "stan-camp4": "SC"
                    }
                },
                {
                    id: "Miguel Vieyra",
                    camps: {
                        "stan-camp1": "FAC",
                        "stan-camp2": "FAC",
                        "stan-camp3": "FAC",
                        "stan-camp4": "TL"
                    }
                },
                {
                    id: "Stephanie Fung",
                    camps: {
                        "stan-camp1": "FAC",
                        "stan-camp4": "OC"
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