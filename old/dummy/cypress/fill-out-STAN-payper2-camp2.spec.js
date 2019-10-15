/// <reference types="Cypress" />

Cypress.Commands.add("fillSiteInfo", (site, camp, month, day) => {
    cy.visit('/');
    cy.get('#firstName').type("CypressTest");
    cy.get('#lastName').type("CypressTest");
    cy.get(`#${site}`).check({
        force: true
    });
    cy.get(`#${camp}`).check({
        force: true
    });
    cy.get('#date-month').select(month);
    cy.get('#date-day').select(day);
    cy.get('#site-info-continue-button').click();
});

Cypress.Commands.add("fillSiteInfoBecca", (site, camp, month, day) => {
    cy.visit('/');
    cy.get('#firstName').type("Becca");
    cy.get('#lastName').type("Kang-Gray");
    cy.get(`#${site}`).check({
        force: true
    });
    cy.get(`#${camp}`).check({
        force: true
    });
    cy.get('#date-month').select(month);
    cy.get('#date-day').select(day);
    cy.get('#site-info-continue-button').click();
});

// Start Tests
/*
context("Verify Staff Members", function () {
	testCamp("Southwestern University", 1);
	testCamp("Southwestern University", 2);
	testCamp("Stanford University", 1);
	testCamp("Stanford University", 2);
	testCamp("Stanford University", 3);
	testCamp("Stanford University", 4);
	testCamp("Stanford University", 5);
	testCamp("Stanford University", 6);
	testCamp("University of Central Florida", 1);
	testCamp("University of Central Florida", 2);
	testCamp("Villanova University", 1);
	testCamp("Villanova University", 2);
});
*/
context("Generate Stanford Data", function () {
    var tlsToUncheck = [];
    var tlExceptionHourInputs = [];
    var tlExceptionMinuteInputs = [];
    var tlExceptionHourValues = [];
    var tlExceptionMinuteValues = [];
    var lcwpsToUncheck = [];
    var lcwpExceptionHourInputs = [];
    var lcwpExceptionMinuteInputs = [];
    var lcwpExceptionHourValues = [];
    var lcwpExceptionMinuteValues = [];
    var ocsToUncheck = [];
    var ocExceptionHourInputs = [];
    var ocExceptionMinuteInputs = [];
    var ocExceptionHourValues = [];
    var ocExceptionMinuteValues = [];

    function addStaff(fullName, positionType, hourValue, minuteValue) {
        var uncheckArray = "";
        var hourInputArray = "";
        var minuteInputArray = "";
        var hourValueArray = "";
        var minuteValueArray = "";
        if (positionType === "TL") {
            uncheckArray = tlsToUncheck;
            hourInputArray = tlExceptionHourInputs;
            minuteInputArray = tlExceptionMinuteInputs;
            hourValueArray = tlExceptionHourValues;
            minuteValueArray = tlExceptionMinuteValues;
        } else if (positionType === "OC") {
            uncheckArray = ocsToUncheck;
            hourInputArray = ocExceptionHourInputs;
            minuteInputArray = ocExceptionMinuteInputs;
            hourValueArray = ocExceptionHourValues;
            minuteValueArray = ocExceptionMinuteValues;
        } else if (positionType === "LCWP") {
            uncheckArray = lcwpsToUncheck;
            hourInputArray = lcwpExceptionHourInputs;
            minuteInputArray = lcwpExceptionMinuteInputs;
            hourValueArray = lcwpExceptionHourValues;
            minuteValueArray = lcwpExceptionMinuteValues;
        }

        var nameArray = fullName.split(" ");
        var firstName = nameArray[0];
        var firstNameLower = firstName.toLowerCase();
        var lastName = nameArray[1];
        var lastNameLower = lastName.toLowerCase();
        var smushedName = firstName.concat(lastName);

        uncheckArray.push(`#${firstNameLower}-${lastNameLower}`);
        hourInputArray.push(`#exception-hours-${smushedName}`);
        minuteInputArray.push(`#exception-minutes-${smushedName}`);
        hourValueArray.push(hourValue.toString());
        minuteValueArray.push(minuteValue.toString());
    }

    function uncheckStaff() {
        tlsToUncheck.forEach(function (tlCheckbox) {
            cy.get(tlCheckbox).uncheck({
                force: true
            });
        });
        lcwpsToUncheck.forEach(function (lcwpCheckbox) {
            cy.get(lcwpCheckbox).uncheck({
                force: true
            });
        });
        ocsToUncheck.forEach(function (ocCheckbox) {
            cy.get(ocCheckbox).uncheck({
                force: true
            });
        });
    }

    function writeStaffValues() {
        tlExceptionHourInputs.forEach(function (hourInput) {
            var thisIndex = tlExceptionHourInputs.indexOf(hourInput);
            var valueToWrite = tlExceptionHourValues[thisIndex];
            cy.get(hourInput).type(valueToWrite);
        });
        tlExceptionMinuteInputs.forEach(function (minuteInput) {
            var thisIndex = tlExceptionMinuteInputs.indexOf(minuteInput);
            var valueToWrite = tlExceptionMinuteValues[thisIndex];
            cy.get(minuteInput).type(valueToWrite);
        });
        lcwpExceptionHourInputs.forEach(function (hourInput) {
            var thisIndex = lcwpExceptionHourInputs.indexOf(hourInput);
            var valueToWrite = lcwpExceptionHourValues[thisIndex];
            cy.get(hourInput).type(valueToWrite);
        });
        lcwpExceptionMinuteInputs.forEach(function (minuteInput) {
            var thisIndex = lcwpExceptionMinuteInputs.indexOf(minuteInput);
            var valueToWrite = lcwpExceptionMinuteValues[thisIndex];
            cy.get(minuteInput).type(valueToWrite);
        });
        ocExceptionHourInputs.forEach(function (hourInput) {
            var thisIndex = ocExceptionHourInputs.indexOf(hourInput);
            var valueToWrite = ocExceptionHourValues[thisIndex];
            cy.get(hourInput).type(valueToWrite);
        });
        ocExceptionMinuteInputs.forEach(function (minuteInput) {
            var thisIndex = ocExceptionMinuteInputs.indexOf(minuteInput);
            var valueToWrite = ocExceptionMinuteValues[thisIndex];
            cy.get(minuteInput).type(valueToWrite);
        });
    }

    function clearArrays() {
        tlsToUncheck = [];
        tlExceptionHourInputs = [];
        tlExceptionMinuteInputs = [];
        tlExceptionHourValues = [];
        tlExceptionMinuteValues = [];
        lcwpsToUncheck = [];
        lcwpExceptionHourInputs = [];
        lcwpExceptionMinuteInputs = [];
        lcwpExceptionHourValues = [];
        lcwpExceptionMinuteValues = [];
        ocsToUncheck = [];
        ocExceptionHourInputs = [];
        ocExceptionMinuteInputs = [];
        ocExceptionHourValues = [];
        ocExceptionHourValues = [];
    }

    context("Stanford University", function () {
        context("Camp 2", function () {
            it("July 7th (Day -2)", function () {
                cy.fillSiteInfoBecca("site-stan", "stan-camp2", "7", "7");

                addStaff("Flora Moore", "OC", 14, 0);

                uncheckStaff();
                writeStaffValues();
                
                cy.get('#preview-button').click();
                cy.get('#send-data-button').click();
                cy.wait(5000);
                cy.contains("Success");

                clearArrays();
            });
            it("July 8th (Day -1)", function () {
                cy.fillSiteInfoBecca("site-stan", "stan-camp2", "7", "8");

                addStaff("Raqqayah Simmons", "LCWP", 8, 0);

                uncheckStaff();
                writeStaffValues();
                        
                cy.get('#preview-button').click();
                cy.get('#send-data-button').click();
                cy.wait(5000);
                cy.contains("Success");

                clearArrays();
            });
            it("July 9th (Day 1)", function () {
                cy.fillSiteInfoBecca("site-stan", "stan-camp2", "7", "9");

                addStaff("Michael Andrade", "TL", 12, 0);
                addStaff("Isabella Borbolla", "TL", 0, 0);
                addStaff("Molly Brantingham", "TL", 13, 0);
                addStaff("Alina Briley", "TL", 12, 0);
                addStaff("Derrick Celestine", "TL", 12, 0);
                addStaff("Noah Fedler", "TL", 0, 0);
                addStaff("Lauren Ihle", "TL", 13, 0);
                addStaff("Claire Levenson", "TL", 12, 0);
                addStaff("Luis Luevanos", "TL", 12, 0);
                addStaff("James McDonald", "TL", 12, 30);
                addStaff("Divine Rolle", "TL", 12, 0);
                addStaff("Nikta Shahbaz", "TL", 12, 0);
                addStaff("Elise Simmons", "TL", 12, 0);
                addStaff("Kate Ward", "TL", 12, 30);
                addStaff("Raqqayah Simmons", "LCWP", 16, 0);
                addStaff("Flora Moore", "OC", 10, 0);

                uncheckStaff();
                writeStaffValues();
                
                cy.get('#preview-button').click();
                cy.get('#send-data-button').click();
                cy.wait(5000);
                cy.contains("Success");

                clearArrays();
            });
            it("July 10th (Day 2)", function () {
                cy.fillSiteInfoBecca("site-stan", "stan-camp2", "7", "10");

                addStaff("Isabella Borbolla", "TL", 0, 0);
                addStaff("Derrick Celestine", "TL", 11, 30);
                addStaff("Noah Fedler", "TL", 0, 0);
                addStaff("Lauren Ihle", "TL", 12, 0);
                addStaff("Claire Levenson", "TL", 9, 0);
                addStaff("Raqqayah Simmons", "LCWP", 15, 0);
                addStaff("Flora Moore", "OC", 11, 0);

                uncheckStaff();
                writeStaffValues();
                
                cy.get('#preview-button').click();
                cy.get('#send-data-button').click();
                cy.wait(5000);
                cy.contains("Success");

                clearArrays();
            });
            it("July 11th (Day 3)", function () {
                cy.fillSiteInfoBecca("site-stan", "stan-camp2", "7", "11");

                addStaff("Isabella Borbolla", "TL", 0, 0);
                addStaff("Molly Brantingham", "TL", 12, 0);
                addStaff("Noah Fedler", "TL", 0, 0);
                addStaff("Nina Fleck", "TL", 12, 0);
                addStaff("Lauren Ihle", "TL", 12, 0);
                addStaff("James McDonald", "TL", 11, 30);
                addStaff("Raqqayah Simmons", "LCWP", 13, 0);
                addStaff("Flora Moore", "OC", 11, 0);

                uncheckStaff();
                writeStaffValues();
                
                cy.get('#preview-button').click();
                cy.get('#send-data-button').click();
                cy.wait(5000);
                cy.contains("Success");

                clearArrays();
            });
            it("July 12th (Day 4)", function () {
                cy.fillSiteInfoBecca("site-stan", "stan-camp2", "7", "12");

                addStaff("Isabella Borbolla", "TL", 0, 0);
                addStaff("Molly Brantingham", "TL", 14, 0);
                addStaff("Noah Fedler", "TL", 0, 0);
                addStaff("Lauren Ihle", "TL", 12, 0);
                addStaff("Luis Luevanos", "TL", 11, 30);
                addStaff("Divine Rolle", "TL", 11, 30);
                addStaff("Nikta Shahbaz", "TL", 0, 0);
                addStaff("Raqqayah Simmons", "LCWP", 13, 30);
                addStaff("Flora Moore", "OC", 6, 0);

                uncheckStaff();
                writeStaffValues();
                
                cy.get('#preview-button').click();
                cy.get('#send-data-button').click();
                cy.wait(5000);
                cy.contains("Success");

                clearArrays();
            });
            it("July 13th (Day 5)", function () {
                cy.fillSiteInfoBecca("site-stan", "stan-camp2", "7", "13");

                addStaff("Michael Andrade", "TL", 11, 30);
                addStaff("Isabella Borbolla", "TL", 0, 0);
                addStaff("Molly Brantingham", "TL", 12, 0);
                addStaff("Alina Briley", "TL", 12, 30);
                addStaff("Derrick Celestine", "TL", 0, 0);
                addStaff("Noah Fedler", "TL", 0, 0);
                addStaff("Jamila Ford", "TL", 11, 30);
                addStaff("Lauren Ihle", "TL", 12, 0);
                addStaff("Luis Luevanos", "TL", 11, 0);
                addStaff("Nikta Shahbaz", "TL", 0, 0);
                addStaff("Elise Simmons", "TL", 12, 0);
                addStaff("Kate Ward", "TL", 0, 0);
                addStaff("Raqqayah Simmons", "LCWP", 13, 30);
                addStaff("Shayla Nary", "LCWP", 0, 0);
                addStaff("Flora Moore", "OC", 0, 0);

                uncheckStaff();
                writeStaffValues();
                
                cy.get('#preview-button').click();
                cy.get('#send-data-button').click();
                cy.wait(5000);
                cy.contains("Success");

                clearArrays();
            });
            it("July 14th (Day 6)", function () {
                cy.fillSiteInfoBecca("site-stan", "stan-camp2", "7", "14");

                addStaff("Isabella Borbolla", "TL", 0, 0);
                addStaff("Derrick Celestine", "TL", 0, 0);
                addStaff("Noah Fedler", "TL", 0, 0);
                addStaff("Luis Luevanos", "TL", 0, 0);
                addStaff("Nikta Shahbaz", "TL", 0, 0);
                addStaff("Elise Simmons", "TL", 0, 0);
                addStaff("Kate Ward", "TL", 0, 0);
                addStaff("Raqqayah Simmons", "LCWP", 12, 0);
                addStaff("Shayla Nary", "LCWP", 0, 0);
                addStaff("Flora Moore", "OC", 0, 0);

                uncheckStaff();
                writeStaffValues();
                
                cy.get('#preview-button').click();
                cy.get('#send-data-button').click();
                cy.wait(5000);
                cy.contains("Success");

                clearArrays();
            });
        });
    });
});




function testCamp(site, camp) {
    var fillParam1 = "";
    var fillParam2 = "";
    var campCode = "";
    var otherCampCode = "";
    var campCodeValue = "";

    if (camp === 1) {
        campCode = "Camp1Code";
        otherCampCode = "Camp1Code(2)";
    } else if (camp === 2) {
        campCode = "Camp2Code";
        otherCampCode = "Camp2Code(2)";
    } else if (camp === 3) {
        campCode = "Camp3Code";
    } else if (camp === 4) {
        campCode = "Camp4Code";
    } else if (camp === 5) {
        campCode = "Camp5Code";
    } else {
        campCode = "Camp6Code";
    }

    if (site === "Southwestern University") {
        fillParam1 = "site-sw";
        if (camp === 1) {
            campCodeValue = "TXS118 / TXJ118";
            fillParam2 = "sw-camp1";
        } else {
            campCodeValue = "TXQA118";
            fillParam2 = "sw-camp2";
        }
    } else if (site === "Stanford University") {
        fillParam1 = "site-stan";
        if (camp === 1) {
            campCodeValue = "STS118";
            fillParam2 = "stan-camp1";
        } else if (camp === 2) {
            campCodeValue = "STJ118";
            fillParam2 = "stan-camp2";
        } else if (camp === 3) {
            campCodeValue = "STS218";
            fillParam2 = "stan-camp3";
        } else if (camp === 4) {
            campCodeValue = "STJ218";
            fillParam2 = "stan-camp4";
        } else if (camp === 5) {
            campCodeValue = "STS318";
            fillParam2 = "stan-camp5";
        } else {
            campCodeValue = "STS418";
            fillParam2 = "stan-camp6";
        }
    } else if (site === "University of Central Florida") {
        fillParam1 = "site-ucf";
        if (camp === 1) {
            campCodeValue = "FLJ118";
            fillParam2 = "ucf-camp1";
        } else {
            campCodeValue = "FLS118";
            fillParam2 = "ucf-camp2";
        }
    } else {
        fillParam1 = "site-villa";
        if (camp === 1) {
            campCodeValue = "PAS118";
            fillParam2 = "villa-camp1";
        } else {
            campCodeValue = "PAJ118";
            fillParam2 = "villa-camp2";
        }
    }

    context(site, function () {
        context(campCodeValue, function () {
            // To verify the same number of staff on the page as in the array
            var numberOfCreatedStaff = 0;
            var numberOfReportStaff = 0;

            // Add a test for each confirmed staff member
            hourlyStaffReportArray.forEach(function (staffMember) {
                if (staffMember[`${campCode}`] === campCodeValue || staffMember[`${otherCampCode}`] === campCodeValue) {
                    it(`${staffMember["First Name"]}` + " " + `${staffMember["Last Name"]}` + " should appear on the page.", function () {
                        cy.fillSiteInfo(fillParam1, fillParam2);
                        cy.contains(`${staffMember["First Name"]}` + " " + `${staffMember["Last Name"]}`);
                    });
                    numberOfReportStaff++;
                }
            });

            staffMembersAll.forEach(function (staffMember) {
                if (staffMember.campsWorking.includes(fillParam2)) {
                    numberOfCreatedStaff++;
                }
            });

            it("There should be the same number of staff on the page and in the report", function () {
                expect(numberOfCreatedStaff).to.equal(numberOfReportStaff);
            });
        });
    });
}