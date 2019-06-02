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

        console.log({dateObject});
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

    context("Stanford University", function () {
        context("Camp 3", function () {
            it('July 15 (Day -2)', function () {
                cy.fillSiteInfoBecca('site-stan', 'stan-camp3', '7', '15');

                cy.get('#preview-button').click();
                cy.wait(3000);
                cy.get('#send-data-button').click();
                cy.wait(5000);
                cy.contains('Success');

                logDay(7, 15);
                clearArrays();
            });
            it('July 16 (Day -1)', function () {
                cy.fillSiteInfoBecca('site-stan', 'stan-camp3', '7', '16');

                addStaff("Flora Moore", "OC", 12, 0);

                uncheckStaff();
                writeStaffValues();

                cy.get('#preview-button').click();
                cy.wait(3000);
                cy.get('#send-data-button').click();
                cy.wait(5000);
                cy.contains('Success');

                logDay(7, 16);
                clearArrays();
            });
            it('July 17 (Day 1)', function () {
                cy.fillSiteInfoBecca('site-stan', 'stan-camp3', '7', '17');

                addStaff("Michael Andrade", 'TL', 11, 30);
                addStaff("Trenton Barnett", 'TL', 14, 15);
                addStaff("Isabella Borbolla", 'TL', 13, 30);
                addStaff("Molly Brantingham", 'TL', 13, 30);
                addStaff('Derrick Celestine', 'TL', 12, 30);
                addStaff('Noah Fedler', 'TL', 11, 30);
                addStaff('Nina Fleck', 'TL', 11, 30);
                addStaff('Jamila Ford', 'TL', 11, 30);
                addStaff('Jennifer Gerardi', 'TL', 13, 15);
                addStaff('Lauren Ihle', 'TL', 12, 30);
                addStaff('Erin Janov', 'TL', 13, 30);
                addStaff('Claire Levenson', 'TL', 10, 30);
                addStaff('Luis Luevanos', 'TL', 11, 30);
                addStaff('James McDonald', 'TL', 13, 15);
                addStaff('Divine Rolle', 'TL', 13, 30);
                addStaff('Nikta Shahbaz', 'TL', 11, 30);
                addStaff('Elise Simmons', 'TL', 11, 15);
                addStaff('Kate Ward', 'TL', 11, 30);
                addStaff('Desmond Yalom', 'TL', 12, 30);
                addStaff('Shayla Nary', 'LCWP', 10, 0);
                addStaff('Flora Moore', 'OC', 13, 30);
                addStaff('Nathan Tung', 'PHOTO', 11, 15);
                addStaff('Raqqayah Simmons', 'LCWP', 14, 0);

                uncheckStaff();
                writeStaffValues();

                cy.get('#preview-button').click();
                cy.wait(3000);
                cy.get('#send-data-button').click();
                cy.wait(5000);
                cy.contains('Success');

                logDay(7, 17);
                clearArrays();
            });
            it('July 18 (Day 2)', function () {
                cy.fillSiteInfoBecca('site-stan', 'stan-camp3', '7', '18');

                addStaff('Michael Andrade', 'TL', 13, 0);
                addStaff('Trenton Barnett', 'TL', 12, 0);
                addStaff('Isabella Borbolla', 'TL', 13, 0);
                addStaff('Molly Brantingham', 'TL', 12, 45);
                addStaff('Derrick Celestine', 'TL', 13, 0);
                addStaff('Noah Fedler', 'TL', 12, 45);
                addStaff('Nina Fleck', 'TL', 12, 0);
                addStaff('Jamila Ford', 'TL', 12, 30);
                addStaff('Jennifer Gerardi', 'TL', 13, 0);
                addStaff('Lauren Ihle', 'TL', 13, 0);
                addStaff('Erin Janov', 'TL', 13, 0);
                addStaff('Claire Levenson', 'TL', 13, 0);
                addStaff('Luis Luevanos', 'TL', 12, 0);
                addStaff('James McDonald', 'TL', 13, 0);
                addStaff('Divine Rolle', 'TL', 13, 15);
                addStaff('Nikta Shahbaz', 'TL', 13, 0);
                addStaff('Elise Simmons', 'TL', 9, 0);
                addStaff('Kate Ward', 'TL', 11, 45);
                addStaff('Desmond Yalom', 'TL', 12, 0);
                addStaff('Shayla Nary', 'LCWP', 13, 0);
                addStaff('Flora Moore', 'OC', 11, 0);
                addStaff('Nathan Tung', 'PHOTO', 12, 30);
                addStaff('Raqqayah Simmons', 'LCWP', 16, 0);

                uncheckStaff();
                writeStaffValues();

                cy.get('#preview-button').click();
                cy.wait(3000);
                cy.get('#send-data-button').click();
                cy.wait(5000);
                cy.contains('Success');

                logDay(7, 18);
                clearArrays();
            });
            it('July 19 (Day 3)', function () {
                cy.fillSiteInfoBecca('site-stan', 'stan-camp3', '7', '19');

                addStaff('Michael Andrade', 'TL', 11, 30);
                addStaff('Isabella Borbolla', 'TL', 11, 30);
                addStaff('Derrick Celestine', 'TL', 11, 30);
                addStaff('Jennifer Gerardi', 'TL', 11, 30);
                addStaff('Lauren Ihle', 'TL', 12, 0);
                addStaff('Claire Levenson', 'TL', 11, 30);
                addStaff('Luis Luevanos', 'TL', 11, 15);
                addStaff('Nikta Shahbaz', 'TL', 11, 15);
                addStaff('Kate Ward', 'TL', 11, 15);
                addStaff('Desmond Yalom', 'TL', 11, 15);
                addStaff('Shayla Nary', 'LCWP', 9, 0);
                addStaff('Flora Moore', 'OC', 9, 30);
                addStaff('Nathan Tung', 'PHOTO', 12, 0);
                addStaff('Raqqayah Simmons', 'LCWP', 14, 30);

                uncheckStaff();
                writeStaffValues();

                cy.get('#preview-button').click();
                cy.wait(3000);
                cy.get('#send-data-button').click();
                cy.wait(5000);
                cy.contains('Success');

                logDay(7, 19);
                clearArrays();
            });
            it('July 20 (Day 4)', function () {
                cy.fillSiteInfoBecca('site-stan', 'stan-camp3', '7', '20');

                addStaff('Isabella Borbolla', 'TL', 11, 30);
                addStaff('Molly Brantingham', 'TL', 10, 30);
                addStaff('Derrick Celestine', 'TL', 11, 45);
                addStaff('Lauren Ihle', 'TL', 11, 30);
                addStaff('James McDonald', 'TL', 11, 30);
                addStaff('Elise Simmons', 'TL', 11, 30);
                addStaff('Shayla Nary', 'LCWP', 11, 30);
                addStaff('Flora Moore', 'OC', 10, 30);
                addStaff('Nathan Tung', 'PHOTO', 13, 15);
                addStaff('Raqqayah Simmons', 'LCWP', 11, 30);

                uncheckStaff();
                writeStaffValues();

                cy.get('#preview-button').click();
                cy.wait(3000);
                cy.get('#send-data-button').click();
                cy.wait(5000);
                cy.contains('Success');

                logDay(7, 20);
                clearArrays();
            });
            it('July 21 (Day 5)', function () {
                cy.fillSiteInfoBecca('site-stan', 'stan-camp3', '7', '21');

                addStaff('Trenton Barnett', 'TL', 10, 30);
                addStaff('Isabella Borbolla', 'TL', 11, 30);
                addStaff('Lauren Ihle', 'TL', 13, 15);
                addStaff('Nikta Shahbaz', 'TL', 10, 30);
                addStaff('Elise Simmons', 'TL', 11, 15);
                addStaff('Kate Ward', 'TL', 9, 15);
                addStaff('Shayla Nary', 'LCWP', 10, 0);
                addStaff('Flora Moore', 'OC', 10, 30);

                uncheckStaff();
                writeStaffValues();

                cy.get('#preview-button').click();
                cy.wait(3000);
                cy.get('#send-data-button').click();
                cy.wait(5000);
                cy.contains('Success');

                logDay(7, 21);
                clearArrays();
            });
            it('July 22 (Day 6)', function () {
                cy.fillSiteInfoBecca('site-stan', 'stan-camp3', '7', '22');

                addStaff('Isabella Borbolla', 'TL', 11, 30);
                addStaff('Molly Brantingham', 'TL', 14, 15);
                addStaff('Derrick Celestine', 'TL', 13, 0);
                addStaff('Lauren Ihle', 'TL', 13, 0);
                addStaff('Luis Luevanos', 'TL', 13, 30);
                addStaff('Flora Moore', 'OC', 9, 45);

                uncheckStaff();
                writeStaffValues();

                cy.get('#preview-button').click();
                cy.wait(3000);
                cy.get('#send-data-button').click();
                cy.wait(5000);
                cy.contains('Success');

                logDay(7, 22);
                clearArrays();
            });
        });
        context("Camp 4", function () {
            it('July 23 (Day -2)', function () {
                cy.fillSiteInfoBecca('site-stan', 'stan-camp4', '7', '23');

                addStaff('Elizabeth Fung', 'OC', 0, 0);
                addStaff('Stephanie Fung', 'OC', 0, 0);
                addStaff('Flora Moore', 'OC', 0, 0);

                uncheckStaff();
                writeStaffValues();

                cy.get('#preview-button').click();
                cy.wait(3000);
                cy.get('#send-data-button').click();
                cy.wait(5000);
                cy.contains('Success');

                logDay(7, 23);
                clearArrays();
            });
            it('July 24 (Day -1)', function () {
                cy.fillSiteInfoBecca('site-stan', 'stan-camp4', '7', '24');

                addStaff('Trenton Barnett', 'TL', 0, 0);
                addStaff('Raqqayah Simmons', 'LCWP', 11, 30);
                addStaff('Flora Moore', 'OC', 11, 0);
                addStaff('Stephanie Fung', 'OC', 0, 0);
                addStaff('Elizabeth Fung', 'OC', 0, 0);

                uncheckStaff();
                writeStaffValues();

                cy.get('#preview-button').click();
                cy.wait(3000);
                cy.get('#send-data-button').click();
                cy.wait(5000);
                cy.contains('Success');

                logDay(7, 24);
                clearArrays();
            });
            it('July 25 (Day 1)', function () {
                cy.fillSiteInfoBecca('site-stan', 'stan-camp4', '7', '25');

                addStaff('Michael Andrade', 'TL', 13, 30);
                addStaff('Trenton Barnett', 'TL', 11, 30);
                addStaff('Derrick Celestine', 'TL', 0, 0);
                addStaff('Noah Fedler', 'TL', 13, 0);
                addStaff('Jamila Ford', 'TL', 12, 0);
                addStaff('Jennifer Gerardi', 'TL', 13, 0);
                addStaff('Lauren Ihle', 'TL', 12, 0);
                addStaff('Erin Janov', 'TL', 11, 30);
                addStaff('Claire Levenson', 'TL', 11, 30);
                addStaff('Luis Luevanos', 'TL', 13, 0);
                addStaff('Casey Robinson', 'TL', 12, 0);
                addStaff('Elise Simmons', 'TL', 13, 0);
                addStaff('Nathan Tung', 'TL', 13, 0);
                addStaff('Kate Ward', 'TL', 11, 15);
                addStaff('Shayla Nary', 'LCWP', 11, 30);
                addStaff('Elizabeth Fung', 'OC', 4, 0);
                addStaff('Stephanie Fung', 'OC', 9, 0);
                addStaff('Flora Moore', 'OC', 0, 0);

                uncheckStaff();
                writeStaffValues();

                cy.get('#preview-button').click();
                cy.wait(3000);
                cy.get('#send-data-button').click();
                cy.wait(5000);
                cy.contains('Success');

                logDay(7, 25);
                clearArrays();
            });
            it('July 26 (Day 2)', function () {
                cy.fillSiteInfoBecca('site-stan', 'stan-camp4', '7', '26');

                addStaff('Molly Brantingham', 'TL', 11, 30);
                addStaff('Derrick Celestine', 'TL', 0, 0);
                addStaff('Jamila Ford', 'TL', 12, 30);
                addStaff('Lauren Ihle', 'TL', 10, 45);
                addStaff('Erin Janov', 'TL', 11, 30);
                addStaff('Claire Levenson', 'TL', 11, 45);
                addStaff('Divine Rolle', 'TL', 9, 30);
                addStaff('Elise Simmons', 'TL', 11, 30);
                addStaff('Nathan Tung', 'TL', 13, 0);
                addStaff('Miguel Vieyra', 'TL', 11, 30);
                addStaff('Kate Ward', 'TL', 11, 45);
                addStaff('Desmond Yalom', 'TL', 11, 30);
                addStaff('Shayla Nary', 'LCWP', 11, 30);
                addStaff('Flora Moore', 'OC', 0, 0);
                addStaff('Elizabeth Fung', 'OC', 13, 0);
                addStaff('Stephanie Fung', 'OC', 0, 0);

                uncheckStaff();
                writeStaffValues();

                cy.get('#preview-button').click();
                cy.wait(3000);
                cy.get('#send-data-button').click();
                cy.wait(5000);
                cy.contains('Success');

                logDay(7, 26);
                clearArrays();
            });
            it('July 27 (Day 3)', function () {
                cy.fillSiteInfoBecca('site-stan', 'stan-camp4', '7', '27');

                addStaff('Michael Andrade', 'TL', 12, 15);
                addStaff('Trenton Barnett', 'TL', 12, 15);
                addStaff('Molly Brantingham', 'TL', 12, 30);
                addStaff('Derrick Celestine', 'TL', 0, 0);
                addStaff('Noah Fedler', 'TL', 12, 15);
                addStaff('Jamila Ford', 'TL', 12, 0);
                addStaff('Jennifer Gerardi', 'TL', 12, 15);
                addStaff('Lauren Ihle', 'TL', 12, 0);
                addStaff('Erin Janov', 'TL', 12, 15);
                addStaff('Claire Levenson', 'TL', 12, 15);
                addStaff('Luis Luevanos', 'TL', 12, 15);
                addStaff('Casey Robinson', 'TL', 11, 45);
                addStaff('Divine Rolle', 'TL', 12, 15);
                addStaff('Elise Simmons', 'TL', 12, 0);
                addStaff('Nathan Tung', 'TL', 12, 15);
                addStaff('Miguel Vieyra', 'TL', 12, 15);
                addStaff('Kate Ward', 'TL', 12, 15);
                addStaff('Raqqayah Simmons', 'LCWP', 14, 0);
                addStaff('Shayla Nary', 'LCWP', 12, 15);
                addStaff('Flora Moore', 'OC', 0, 0);
                addStaff('Elizabeth Fung', 'OC', 13, 0);
                addStaff('Stephanie Fung', 'OC', 0, 0);

                uncheckStaff();
                writeStaffValues();

                cy.get('#preview-button').click();
                cy.wait(3000);
                cy.get('#send-data-button').click();
                cy.wait(5000);
                cy.contains('Success');

                logDay(7, 27);
                clearArrays();
            });
            it('July 28 (Day 4)', function () {
                cy.fillSiteInfoBecca('site-stan', 'stan-camp4', '7', '28');

                addStaff('Trenton Barnett', 'TL', 11, 30);
                addStaff('Molly Brantingham', 'TL', 13, 0);
                addStaff('Derrick Celestine', 'TL', 0, 0);
                addStaff('Noah Fedler', 'TL', 11, 45);
                addStaff('Jennifer Gerardi', 'TL', 11, 30);
                addStaff('Lauren Ihle', 'TL', 11, 30);
                addStaff('Erin Janov', 'TL', 11, 30);
                addStaff('Luis Luevanos', 'TL', 12, 0);
                addStaff('Casey Robinson', 'TL', 8, 0);
                addStaff('Divine Rolle', 'TL', 11, 30);
                addStaff('Elise Simmons', 'TL', 11, 30);
                addStaff('Nathan Tung', 'TL', 12, 0);
                addStaff('Kate Ward', 'TL', 10, 0);
                addStaff('Raqqayah Simmons', 'LCWP', 14, 0);
                addStaff('Flora Moore', 'OC', 0, 0);
                addStaff('Elizabeth Fung', 'OC', 11, 0);
                addStaff('Stephanie Fung', 'OC', 0, 0);

                uncheckStaff();
                writeStaffValues();

                cy.get('#preview-button').click();
                cy.wait(3000);
                cy.get('#send-data-button').click();
                cy.wait(5000);
                cy.contains('Success');

                logDay(7, 28);
                clearArrays();
            });
            it('July 29 (Day 5)', function () {
                cy.fillSiteInfoBecca('site-stan', 'stan-camp4', '7', '29');

                addStaff('Trenton Barnett', 'TL', 9, 45);
                addStaff('Molly Brantingham', 'TL', 10, 45);
                addStaff('Derrick Celestine', 'TL', 0, 0);
                addStaff('Noah Fedler', 'TL', 9, 45);
                addStaff('Jennifer Gerardi', 'TL', 10, 45);
                addStaff('Lauren Ihle', 'TL', 10, 45);
                addStaff('Erin Janov', 'TL', 9, 45);
                addStaff('Claire Levenson', 'TL', 9, 45);
                addStaff('Luis Luevanos', 'TL', 9, 45);
                addStaff('Casey Robinson', 'TL', 10, 45);
                addStaff('Elise Simmons', 'TL', 10, 30);
                addStaff('Kate Ward', 'TL', 11, 15);
                addStaff('Desmond Yalom', 'TL', 10, 15);
                addStaff('Shayla Nary', 'TL', 10, 15);
                addStaff('Flora Moore', 'OC', 0, 0);
                addStaff('Elizabeth Fung', 'OC', 11, 0);
                addStaff('Stephanie Fung', 'OC', 0, 0);

                uncheckStaff();
                writeStaffValues();

                cy.get('#preview-button').click();
                cy.wait(3000);
                cy.get('#send-data-button').click();
                cy.wait(5000);
                cy.contains('Success');

                logDay(7, 29);
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