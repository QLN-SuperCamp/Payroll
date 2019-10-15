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
    cy.visit('/index.html');
    cy.get('#firstName').type("Brittany");
    cy.get('#lastName').type("Robertson");
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
context("Generate Southwestern Data", function () {
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
        if (positionType === "TL" || positionType === "PHOTO") {
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

    function logDay(month, day) {
        var dateObject = {
            tlsToUncheck: tlsToUncheck,
            tlExceptionHourInputs: tlExceptionHourInputs,
            tlExceptionMinuteInputs: tlExceptionMinuteInputs,
            tlExceptionHourValues: tlExceptionHourValues,
            tlExceptionMinuteValues: tlExceptionMinuteValues,
            lcwpsToUncheck: lcwpsToUncheck,
            lcwpExceptionHourInputs: lcwpExceptionHourInputs,
            lcwpExceptionMinuteInputs: lcwpExceptionMinuteInputs,
            lcwpExceptionHourValues: lcwpExceptionHourValues,
            lcwpExceptionMinuteValues: lcwpExceptionMinuteValues,
            ocsToUncheck: ocsToUncheck,
            ocExceptionHourInputs: ocExceptionHourInputs,
            ocExceptionMinuteInputs: ocExceptionMinuteInputs,
            ocExceptionHourValues: ocExceptionHourValues,
            ocExceptionMinuteValues: ocExceptionMinuteValues,
            month: month,
            day: day
        };

        console.log({
            dateObject
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
        ocExceptionMinuteValues = [];
    }

    context("Southwestern University", function () {
        context("Camp 1", function () {
            it('June 19 (Day -6)', function () {
                cy.fillSiteInfoBecca('site-sw', 'sw-camp1', '6', '19');

                addStaff('Yolanda Drew', 'LCWP', 6, 45);
                addStaff('Jordan Wesson', 'LCWP', 6, 45);

                uncheckStaff();
                writeStaffValues();

                cy.get('#preview-button').click();
                cy.get('#send-data-button').click();
                cy.wait(5000);
                cy.contains('Success');

                logDay(6, 19);
                clearArrays();
            });
            it('June 20 (Day -5)', function () {
                cy.fillSiteInfoBecca('site-sw', 'sw-camp1', '6', '20');

                addStaff('Yolanda Drew', 'LCWP', 6, 45);
                addStaff('Jordan Wesson', 'LCWP', 6, 45);

                uncheckStaff();
                writeStaffValues();

                cy.get('#preview-button').click();
                cy.get('#send-data-button').click();
                cy.wait(5000);
                cy.contains('Success');

                logDay(6, 20);
                clearArrays();
            });
            it('June 21 (Day -4)', function () {
                cy.fillSiteInfoBecca('site-sw', 'sw-camp1', '6', '21');

                addStaff('Yolanda Drew', 'LCWP', 10, 30);
                addStaff('Jordan Wesson', 'LCWP', 10, 30);
                addStaff('Alexis Hagan', 'TL', 0, 0);
                addStaff('Kayla Miller', 'TL', 3, 30);
                addStaff('Jules Damey-Fernandez', 'TL', 3, 30);
                addStaff('Gary Clack', 'TL', 3, 30);
                addStaff('Trace Craver', 'TL', 3, 30);

                uncheckStaff();
                writeStaffValues();

                cy.get('#preview-button').click();
                cy.get('#send-data-button').click();
                cy.wait(5000);
                cy.contains('Success');

                logDay(6, 21);
                clearArrays();
            });
            it('June 22 (Day -3)', function () {
                cy.fillSiteInfoBecca('site-sw', 'sw-camp1', '6', '22');

                addStaff('Yolanda Drew', 'LCWP', 11, 0);
                addStaff('Jordan Wesson', 'LCWP', 11, 0);
                addStaff('Alexis Hagan', 'TL', 10, 30);
                addStaff('Kayla Miller', 'TL', 10, 30);
                addStaff('Jules Damey-Fernandez', 'TL', 10, 30);
                addStaff('Gary Clack', 'TL', 10, 30);
                addStaff('Trace Craver', 'TL', 10, 30);

                uncheckStaff();
                writeStaffValues();

                cy.get('#preview-button').click();
                cy.get('#send-data-button').click();
                cy.wait(5000);
                cy.contains('Success');

                logDay(6, 22);
                clearArrays();
            });
            it('June 23 (Day -2)', function () {
                cy.fillSiteInfoBecca('site-sw', 'sw-camp1', '6', '23');

                addStaff('Yolanda Drew', 'LCWP', 11, 0);
                addStaff('Jordan Wesson', 'LCWP', 11, 0);
                addStaff('Alexis Hagan', 'TL', 10, 30);
                addStaff('Kayla Miller', 'TL', 11, 45);
                addStaff('Jules Damey-Fernandez', 'TL', 11, 15);
                addStaff('Gary Clack', 'TL', 11, 15);
                addStaff('Trace Craver', 'TL', 10, 30);

                uncheckStaff();
                writeStaffValues();

                cy.get('#preview-button').click();
                cy.get('#send-data-button').click();
                cy.wait(5000);
                cy.contains('Success');

                logDay(6, 23);
                clearArrays();
            });
            it('June 24 (Day -1)', function () {
                cy.fillSiteInfoBecca('site-sw', 'sw-camp1', '6', '24');

                addStaff('Yolanda Drew', 'LCWP', 12, 0);
                addStaff('Jordan Wesson', 'LCWP', 11, 45);
                addStaff('Alexis Hagan', 'TL', 9, 45);
                addStaff('Kayla Miller', 'TL', 9, 45);
                addStaff('Jules Damey-Fernandez', 'TL', 9, 45);
                addStaff('Gary Clack', 'TL', 9, 45);
                addStaff('Trace Craver', 'TL', 9, 45);

                uncheckStaff();
                writeStaffValues();

                cy.get('#preview-button').click();
                cy.get('#send-data-button').click();
                cy.wait(5000);
                cy.contains('Success');

                logDay(6, 24);
                clearArrays();
            });
            it('June 25 (Day 1)', function () {
                cy.fillSiteInfoBecca('site-sw', 'sw-camp1', '6', '25');

                addStaff('Alexis Hagan', 'TL', 13, 45);
                addStaff('Kayla Miller', 'TL', 13, 45);
                addStaff('Jules Damey-Fernandez', 'TL', 13, 45);
                addStaff('Gary Clack', 'TL', 13, 45);
                addStaff('Trace Craver', 'TL', 13, 45);
                addStaff('Yolanda Drew', 'LCWP', 11, 0);
                addStaff('Jordan Wesson', 'LCWP', 10, 45);

                uncheckStaff();
                writeStaffValues();

                cy.get('#preview-button').click();
                cy.get('#send-data-button').click();
                cy.wait(5000);
                cy.contains('Success');

                logDay(6, 25);
                clearArrays();
            });
            it('June 26 (Day 2)', function () {
                cy.fillSiteInfoBecca('site-sw', 'sw-camp1', '6', '26');

                addStaff('Alexis Hagan', 'TL', 14, 0);
                addStaff('Kayla Miller', 'TL', 14, 0);
                addStaff('Jules Damey-Fernandez', 'TL', 14, 0);
                addStaff('Gary Clack', 'TL', 14, 0);
                addStaff('Trace Craver', 'TL', 14, 0);
                addStaff('Yolanda Drew', 'LCWP', 11, 0);
                addStaff('Jordan Wesson', 'LCWP', 10, 45);

                uncheckStaff();
                writeStaffValues();

                cy.get('#preview-button').click();
                cy.get('#send-data-button').click();
                cy.wait(5000);
                cy.contains('Success');

                logDay(6, 26);
                clearArrays();
            });
            it('June 27 (Day 3)', function () {
                cy.fillSiteInfoBecca('site-sw', 'sw-camp1', '6', '27');

                addStaff('Alexis Hagan', 'TL', 13, 45);
                addStaff('Kayla Miller', 'TL', 13, 45);
                addStaff('Jules Damey-Fernandez', 'TL', 13, 45);
                addStaff('Gary Clack', 'TL', 13, 45);
                addStaff('Trace Craver', 'TL', 13, 45);
                addStaff('Yolanda Drew', 'LCWP', 10, 30);
                addStaff('Jordan Wesson', 'LCWP', 11, 0);

                uncheckStaff();
                writeStaffValues();

                cy.get('#preview-button').click();
                cy.get('#send-data-button').click();
                cy.wait(5000);
                cy.contains('Success');

                logDay(6, 27);
                clearArrays();
            });
            it('June 28 (Day 4)', function () {
                cy.fillSiteInfoBecca('site-sw', 'sw-camp1', '6', '28');

                addStaff('Alexis Hagan', 'TL', 14, 0);
                addStaff('Kayla Miller', 'TL', 14, 0);
                addStaff('Jules Damey-Fernandez', 'TL', 14, 0);
                addStaff('Gary Clack', 'TL', 14, 0);
                addStaff('Trace Craver', 'TL', 14, 0);
                addStaff('Yolanda Drew', 'LCWP', 11, 0);
                addStaff('Jordan Wesson', 'LCWP', 11, 0);

                uncheckStaff();
                writeStaffValues();

                cy.get('#preview-button').click();
                cy.get('#send-data-button').click();
                cy.wait(5000);
                cy.contains('Success');

                logDay(6, 28);
                clearArrays();
            });
            it('June 29 (Day 5)', function () {
                cy.fillSiteInfoBecca('site-sw', 'sw-camp1', '6', '29');

                addStaff('Alexis Hagan', 'TL', 14, 15);
                addStaff('Kayla Miller', 'TL', 14, 15);
                addStaff('Jules Damey-Fernandez', 'TL', 14, 15);
                addStaff('Gary Clack', 'TL', 14, 15);
                addStaff('Trace Craver', 'TL', 14, 15);
                addStaff('Yolanda Drew', 'LCWP', 11, 0);
                addStaff('Jordan Wesson', 'LCWP', 10, 30);

                uncheckStaff();
                writeStaffValues();

                cy.get('#preview-button').click();
                cy.get('#send-data-button').click();
                cy.wait(5000);
                cy.contains('Success');

                logDay(6, 29);
                clearArrays();
            });
            it('June 30 (Day 6)', function () {
                cy.fillSiteInfoBecca('site-sw', 'sw-camp1', '6', '30');

                addStaff('Alexis Hagan', 'TL', 9, 30);
                addStaff('Kayla Miller', 'TL', 9, 30);
                addStaff('Jules Damey-Fernandez', 'TL', 9, 30);
                addStaff('Gary Clack', 'TL', 9, 30);
                addStaff('Trace Craver', 'TL', 9, 30);
                addStaff('Yolanda Drew', 'LCWP', 11, 0);
                addStaff('Jordan Wesson', 'LCWP', 11, 0);

                uncheckStaff();
                writeStaffValues();

                cy.get('#preview-button').click();
                cy.get('#send-data-button').click();
                cy.wait(5000);
                cy.contains('Success');

                logDay(6, 30);
                clearArrays();
            });
        });
        context("Camp 2", function () {
            it('July 1 (Day -2)', function () {
                cy.fillSiteInfoBecca('site-sw', 'sw-camp2', '7', '1');

                addStaff('Kayla Miller', 'TL', 10, 0);
                addStaff('Jules Damey-Fernandez', 'TL', 10, 0);
                addStaff('Gary Clack', 'TL', 10, 0);
                addStaff('Yolanda Drew', 'TL', 0, 0);

                uncheckStaff();
                writeStaffValues();

                cy.get('#preview-button').click();
                cy.get('#send-data-button').click();
                cy.wait(5000);
                cy.contains('Success');

                logDay(7, 1);
                clearArrays();
            });
            it('July 2 (Day -1)', function () {
                cy.fillSiteInfoBecca('site-sw', 'sw-camp2', '7', '2');

                addStaff('Kayla Miller', 'TL', 10, 0);
                addStaff('Jules Damey-Fernandez', 'TL', 10, 0);
                addStaff('Gary Clack', 'TL', 10, 0);
                addStaff('Yolanda Drew', 'LCWP', 0, 0);

                uncheckStaff();
                writeStaffValues();

                cy.get('#preview-button').click();
                cy.get('#send-data-button').click();
                cy.wait(5000);
                cy.contains('Success');

                logDay(7, 1);
                clearArrays();
            });
            it('July 3 (Day 1)', function () {
                cy.fillSiteInfoBecca('site-sw', 'sw-camp2', '7', '3');
                
                addStaff('Kayla Miller', 'TL', 10, 0);
                addStaff('Jules Damey-Fernandez', 'TL', 10, 0);
                addStaff('Gary Clack', 'TL', 10, 0);
                addStaff('Yolanda Drew', 'LCWP', 12, 30);

                uncheckStaff();
                writeStaffValues();
                
                cy.get('#preview-button').click();
                cy.get('#send-data-button').click();
                cy.wait(5000);
                cy.contains('Success');
                
                logDay(7, 3);
                clearArrays();
            });
            it('July 4 (Day 2)', function () {
                cy.fillSiteInfoBecca('site-sw', 'sw-camp2', '7', '4');
                
                addStaff('Kayla Miller', 'TL', 10, 0);
                addStaff('Jules Damey-Fernandez', 'TL', 10, 0);
                addStaff('Gary Clack', 'TL', 10, 0);
                addStaff('Yolanda Drew', 'LCWP', 12, 30);
                
                uncheckStaff();
                writeStaffValues();
                
                cy.get('#preview-button').click();
                cy.get('#send-data-button').click();
                cy.wait(5000);
                cy.contains('Success');
                
                logDay(7, 4);
                clearArrays();
            });
            it('July 5 (Day 3)', function () {
                cy.fillSiteInfoBecca('site-sw', 'sw-camp2', '7', '5');
                
                addStaff('Kayla Miller', 'TL', 10, 0);
                addStaff('Jules Damey-Fernandez', 'TL', 10, 0);
                addStaff('Gary Clack', 'TL', 10, 0);
                addStaff('Yolanda Drew', 'LCWP', 12, 30);
                
                uncheckStaff();
                writeStaffValues();
                
                cy.get('#preview-button').click();
                cy.get('#send-data-button').click();
                cy.wait(5000);
                cy.contains('Success');
                
                logDay(7, 5);
                clearArrays();
            });
            it('July 6 (Day 4)', function () {
                cy.fillSiteInfoBecca('site-sw', 'sw-camp2', '7', '6');
                
                addStaff('Kayla Miller', 'TL', 10, 0);
                addStaff('Jules Damey-Fernandez', 'TL', 10, 0);
                addStaff('Gary Clack', 'TL', 10, 0);
                addStaff('Yolanda Drew', 'LCWP', 12, 30);

                uncheckStaff();
                writeStaffValues();
                
                cy.get('#preview-button').click();
                cy.get('#send-data-button').click();
                cy.wait(5000);
                cy.contains('Success');
                
                logDay(7, 6);
                clearArrays();
            });
            it('July 7 (Day 5)', function () {
                cy.fillSiteInfoBecca('site-sw', 'sw-camp2', '7', '7');
                
                addStaff('Kayla Miller', 'TL', 10, 0);
                addStaff('Jules Damey-Fernandez', 'TL', 10, 0);
                addStaff('Gary Clack', 'TL', 10, 0);
                addStaff('Yolanda Drew', 'LCWP', 12, 30);

                uncheckStaff();
                writeStaffValues();
                
                cy.get('#preview-button').click();
                cy.get('#send-data-button').click();
                cy.wait(5000);
                cy.contains('Success');
                
                logDay(7, 7);
                clearArrays();
            });
            it('July 8 (Day 6)', function () {
                cy.fillSiteInfoBecca('site-sw', 'sw-camp2', '7', '8');
                
                addStaff('Kayla Miller', 'TL', 10, 0);
                addStaff('Jules Damey-Fernandez', 'TL', 10, 0);
                addStaff('Gary Clack', 'TL', 10, 0);
                addStaff('Yolanda Drew', 'LCWP', 12, 30);
                                
                uncheckStaff();
                writeStaffValues();
                
                cy.get('#preview-button').click();
                cy.get('#send-data-button').click();
                cy.wait(5000);
                cy.contains('Success');
                
                logDay(7, 8);
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
            fillParam2 = "sw-camp1";
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