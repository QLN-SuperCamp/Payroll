/// <reference types="Cypress" />


Cypress.Commands.add("fillSiteInfoBecca", (site, camp, month, day) => {
    cy.visit('/index.html');
    cy.get('#firstName').type("Becca", {force: true});
    cy.get('#lastName').type("Kang-Gray", {force: true});
    cy.get(`#${site}`).check({
        force: true
    });
    cy.get(`#${camp}`).check({
        force: true
    });
    cy.get('#date-month').select(month, {force: true});
    cy.get('#date-day').select(day, {force: true});
    cy.get('#site-info-continue-button').click({force: true});
});

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

        console.log(dateObject);
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
        context("Camp 4", function () {
            // ! !!!
            it('July 30 (Day 6)', function () {
                cy.fillSiteInfoBecca('site-stan', 'stan-camp4', '7', '30');
                
                // TODO: ! INPUT DATA !
                
                uncheckStaff();
                writeStaffValues();
                
                cy.get('#preview-button').click();
                cy.get('#send-data-button').click();
                cy.wait(5000);
                cy.contains('Success');
                
                logDay(7, 30);
                clearArrays();
            });
            // ! !!!
        });
        context("Camp 5", function () {
            it('July 31 (Day -2)', function () {
                cy.fillSiteInfoBecca('site-stan', 'stan-camp5', '7', '31');
                
                addStaff('Elizabeth Fung', 'LCWP', 0, 0);
                
                uncheckStaff();
                writeStaffValues();
                
                cy.get('#preview-button').click();
                cy.get('#send-data-button').click();
                cy.wait(5000);
                cy.contains('Success');
                
                logDay(7, 31);
                clearArrays();
            });
            it('August 1 (Day -1)', function () {
                cy.fillSiteInfoBecca('site-stan', 'stan-camp5', '8', '1');
                
                addStaff('Elizabeth Fung', 'LCWP', 9, 0);
                addStaff('Yolanda Drew', 'LCWP', 6, 30);
                addStaff('Rebecca Goldsmith', 'TL', 0, 0);

                uncheckStaff();
                writeStaffValues();
                
                cy.get('#preview-button').click();
                cy.get('#send-data-button').click();
                cy.wait(5000);
                cy.contains('Success');
                
                logDay(8, 1);
                clearArrays();
            });
            it('August 2 (Day 1)', function () {
                cy.fillSiteInfoBecca('site-stan', 'stan-camp5', '8', '2');
                
                addStaff('Michael Andrade', 'TL', 11, 30);
                addStaff('Trenton Barnett', 'TL', 13, 30);
                addStaff('Noah Fedler', 'TL', 13, 45);
                addStaff('Jamila Ford', 'TL', 11, 30);
                addStaff('Alexis Hagan', 'TL', 12, 45);
                addStaff('Katrina Hoefflinger', 'TL', 12, 0);
                addStaff('Claire Levenson', 'TL', 11, 30);
                addStaff('Luis Luevanos', 'TL', 11, 30);
                addStaff('Casey Robinson', 'TL', 11, 45);
                addStaff('Divine Rolle', 'TL', 11, 30);
                addStaff('Nikta Shahbaz', 'TL', 12, 0);
                addStaff('Elise Simmons', 'TL', 13, 30);
                addStaff('Isabella Stenz', 'TL', 13, 30);
                addStaff('Nathan Tung', 'TL', 12, 30);
                addStaff('Kate Ward', 'TL', 13, 0);
                addStaff('Deja Washington', 'TL', 12, 0);
                addStaff('Desmond Yalom', 'TL', 11, 30);
                addStaff('Shayla Nary', 'LCWP', 12, 0);
                addStaff('Yolanda Drew', 'LCWP', 10, 15);
                addStaff('Rebecca Goldsmith', 'TL', 0, 0);

                uncheckStaff();
                writeStaffValues();
                
                cy.get('#preview-button').click();
                cy.get('#send-data-button').click();
                cy.wait(5000);
                cy.contains('Success');
                
                logDay(8, 2);
                clearArrays();
            });
            it('August 3 (Day 2)', function () {
                cy.fillSiteInfoBecca('site-stan', 'stan-camp5', '8', '3');
                
                addStaff('Michael Andrade', 'TL', 11, 30);
                addStaff('Trenton Barnett', 'TL', 9, 0);
                addStaff('Jamila Ford', 'TL', 11, 15);
                addStaff('Katrina Hoefflinger', 'TL', 11, 45);
                addStaff('Claire Levenson', 'TL', 10, 45);
                addStaff('Nathan Tung', 'TL', 12, 0);
                addStaff('Kate Ward', 'TL', 11, 30);
                addStaff('Yolanda Drew', 'LCWP', 12, 0);
                addStaff('Rebecca Goldsmith', 'TL', 0, 0);
                
                uncheckStaff();
                writeStaffValues();
                
                cy.get('#preview-button').click();
                cy.get('#send-data-button').click();
                cy.wait(5000);
                cy.contains('Success');
                
                logDay(8, 3);
                clearArrays();
            });
            it('August 4 (Day 3)', function () {
                cy.fillSiteInfoBecca('site-stan', 'stan-camp5', '8', '4');
                
                addStaff('Trenton Barnett', 'TL', 12, 15);
                addStaff('Noah Fedler', 'TL', 11, 15);
                addStaff('Alexis Hagan', 'TL', 11, 30);
                addStaff('Katrina Hoefflinger', 'TL', 11, 15);
                addStaff('Luis Luevanos', 'TL', 11, 15);
                addStaff('Casey Robinson', 'TL', 11, 15);
                addStaff('Nikta Shahbaz', 'TL', 11, 15);
                addStaff('Isabella Stenz', 'TL', 11, 15);
                addStaff('Nathan Tung', 'TL', 11, 15);
                addStaff('Deja Washington', 'TL', 13, 0);
                addStaff('Desmond Yalom', 'TL', 11, 30);
                addStaff('Shayla Nary', 'LCWP', 11, 0);
                addStaff('Elizabeth Fung', 'LCWP', 9, 0);
                addStaff('Rebecca Goldsmith', 'TL', 0, 0);
                // TODO: CHECK -- Divine, Elise

                uncheckStaff();
                writeStaffValues();
                
                cy.get('#preview-button').click();
                cy.get('#send-data-button').click();
                cy.wait(5000);
                cy.contains('Success');
                
                logDay(8, 4);
                clearArrays();
            });
            it('August 5 (Day 4)', function () {
                cy.fillSiteInfoBecca('site-stan', 'stan-camp5', '8', '5');
                
                addStaff('Michael Andrade', 'TL', 12, 0);
                addStaff('Alexis Hagan', 'TL', 11, 30);
                addStaff('Luis Luevanos', 'TL', 5, 0);
                addStaff('Divine Rolle', 'TL', 11, 30);
                addStaff('Nikta Shahbaz', 'TL', 8, 30);
                addStaff('Elise Simmons', 'TL', 8, 30);
                addStaff('Isabella Stenz', 'TL', 11, 30);
                addStaff('Nathan Tung', 'TL', 13, 0);
                addStaff('Kate Ward', 'TL', 11, 30);
                addStaff('Deja Washington', 'TL', 12, 30);
                addStaff('Desmond Yalom', 'TL', 11, 15);
                addStaff('Shayla Nary', 'LCWP', 11, 0);
                addStaff('Elizabeth Fung', 'OC', 9, 30);
                addStaff('Yolanda Drew', 'LCWP', 11, 30);
                addStaff('Rebecca Goldsmith', 'TL', 0, 0);

                uncheckStaff();
                writeStaffValues();
                
                cy.get('#preview-button').click();
                cy.get('#send-data-button').click();
                cy.wait(5000);
                cy.contains('Success');
                
                logDay(8, 5);
                clearArrays();
            });
            it('August 6 (Day 5)', function () {
                cy.fillSiteInfoBecca('site-stan', 'stan-camp5', '8', '6');
                
                addStaff('Michael Andrade', 'TL', 11, 30);
                addStaff('Noah Fedler', 'TL', 11, 30);
                addStaff('Jamila Ford', 'TL', 11, 30);
                addStaff('Alexis Hagan', 'TL', 12, 0);
                addStaff('Katrina Hoefflinger', 'TL', 11, 30);
                addStaff('Claire Levenson', 'TL', 4, 0);
                addStaff('Luis Luevanos', 'TL', 11, 0);
                addStaff('Casey Robinson', 'TL', 9, 45);
                addStaff('Divine Rolle', 'TL', 11, 30);
                addStaff('Isabella Stenz', 'TL', 12, 0);
                addStaff('Nathan Tung', 'TL', 12, 0);
                addStaff('Kate Ward', 'TL', 10, 15);
                addStaff('Deja Washington', 'TL', 11, 15);
                addStaff('Shayla Nary', 'LCWP', 7, 45);
                addStaff('Elizabeth Fung', 'OC', 9, 30);
                addStaff('Yolanda Drew', 'LCWP', 11, 30);
                addStaff('Rebecca Goldsmith', 'TL', 10, 30);
                
                uncheckStaff();
                writeStaffValues();
                
                cy.get('#preview-button').click();
                cy.get('#send-data-button').click();
                cy.wait(5000);
                cy.contains('Success');
                
                logDay(8, 6);
                clearArrays();
            });
            it('August 7 (Day 6)', function () {
                cy.fillSiteInfoBecca('site-stan', 'stan-camp5', '8', '7');
                
                addStaff('Michael Andrade', 'TL', 12, 0);
                addStaff('Jamila Ford', 'TL', 11, 45);
                addStaff('Jennifer Gerardi', 'TL', 11, 30);
                addStaff('Claire Levenson', 'TL', 0, 0);
                addStaff('Luis Luevanos', 'TL', 7, 30);
                addStaff('Casey Robinson', 'TL', 12, 45);
                addStaff('Divine Rolle', 'TL', 12, 15);
                addStaff('Elise Simmons', 'TL', 11, 45);
                addStaff('Isabella Stenz', 'TL', 12, 0);
                addStaff('Nathan Tung', 'TL', 12, 0);
                addStaff('Kate Ward', 'TL', 11, 45);
                addStaff('Deja Washington', 'TL', 12, 0);
                addStaff('Desmond Yalom', 'TL', 11, 45);
                addStaff('Shayla Nary', 'LCWP', 0, 0);
                addStaff('Elizabeth Fung', 'OC', 12, 0);
                addStaff('Yolanda Drew', 'LCWP', 11, 30);

                uncheckStaff();
                writeStaffValues();
                
                cy.get('#preview-button').click();
                cy.get('#send-data-button').click();
                cy.wait(5000);
                cy.contains('Success');
                
                logDay(8, 7);
                clearArrays();
            });
            it('August 8 (Day 7)', function () {
                cy.fillSiteInfoBecca('site-stan', 'stan-camp5', '8', '8');
                
                addStaff('Michael Andrade', 'TL', 11, 30);
                addStaff('Trenton Barnett', 'TL', 11, 30);
                addStaff('Jamila Ford', 'TL', 12, 0);
                addStaff('Jennifer Gerardi', 'TL', 11, 30);
                addStaff('Claire Levenson', 'TL', 0, 0);
                addStaff('Luis Luevanos', 'TL', 11, 30);
                addStaff('Nikta Shahbaz', 'TL', 11, 30);
                addStaff('Elise Simmons', 'TL', 11, 30);
                addStaff('Isabella Stenz', 'TL', 10, 30);
                addStaff('Nathan Tung', 'TL', 12, 0);
                addStaff('Deja Washington', 'TL', 11, 30);
                addStaff('Shayla Nary', 'LCWP', 0, 0);
                addStaff('Elizabeth Fung', 'OC', 13, 0);
                addStaff('Yolanda Drew', 'LCWP', 11, 30);
                addStaff('Rebecca Goldsmith', 'TL', 12, 0);
                // TODO: Check -- Casey, Divine

                uncheckStaff();
                writeStaffValues();
                
                cy.get('#preview-button').click();
                cy.get('#send-data-button').click();
                cy.wait(5000);
                cy.contains('Success');
                
                logDay(8, 8);
                clearArrays();
            });
            it('August 9 (Day 8)', function () {
                cy.fillSiteInfoBecca('site-stan', 'stan-camp5', '8', '9');
                
                addStaff('Michael Andrade', 'TL', 12, 0);
                addStaff('Trenton Barnett', 'TL', 12, 0);
                addStaff('Noah Fedler', 'TL', 11, 45);
                addStaff('Jennifer Gerardi', 'TL', 11, 30);
                addStaff('Katrina Hoefflinger', 'TL', 11, 30);
                addStaff('Claire Levenson', 'TL', 0, 0);
                addStaff('Luis Luevanos', 'TL', 3, 0);
                addStaff('Casey Robinson', 'TL', 11, 30);
                addStaff('Nikta Shahbaz', 'TL', 11, 30);
                addStaff('Elise Simmons', 'TL', 11, 30);
                addStaff('Isabella Stenz', 'TL', 12, 15);
                addStaff('Nathan Tung', 'TL', 12, 0);
                addStaff('Kate Ward', 'TL', 8, 0);
                addStaff('Deja Washington', 'TL', 11, 15);
                addStaff('Desmond Yalom', 'TL', 11, 45);
                addStaff('Shayla Nary', 'LCWP', 0, 0);
                addStaff('Elizabeth Fung', 'OC', 9, 30);
                addStaff('Yolanda Drew', 'LCWP', 11, 30);
                
                uncheckStaff();
                writeStaffValues();
                
                cy.get('#preview-button').click();
                cy.get('#send-data-button').click();
                cy.wait(5000);
                cy.contains('Success');
                
                logDay(8, 9);
                clearArrays();
            });
            it('August 10 (Day 9)', function () {
                cy.fillSiteInfoBecca('site-stan', 'stan-camp5', '8', '10');
                
                addStaff('Jamila Ford', 'TL', 11, 30);
                addStaff('Jennifer Gerardi', 'TL', 11, 30);
                addStaff('Katrina Hoefflinger', 'TL', 12, 0);
                addStaff('Claire Levenson', 'TL', 0, 0);
                addStaff('Luis Luevanos', 'TL', 0, 0);
                addStaff('Casey Robinson', 'TL', 11, 30);
                addStaff('Nikta Shahbaz', 'TL', 11, 30);
                addStaff('Isabella Stenz', 'TL', 11, 30);
                addStaff('Nathan Tung', 'TL', 12, 15);
                addStaff('Kate Ward', 'TL', 12, 0);
                addStaff('Deja Washington', 'TL', 13, 0);
                addStaff('Desmond Yalom', 'TL', 11, 30);
                addStaff('Shayla Nary', 'LCWP', 0, 0);
                addStaff('Elizabeth Fung', 'OC', 12, 30);
                addStaff('Yolanda Drew', 'LCWP', 12, 15);
                addStaff('Rebecca Goldsmith', 'TL', 11, 30);

                uncheckStaff();
                writeStaffValues();
                
                cy.get('#preview-button').click();
                cy.get('#send-data-button').click();
                cy.wait(5000);
                cy.contains('Success');
                
                logDay(8, 10);
                clearArrays();
            });
            it('August 11 (Day 10)', function () {
                cy.fillSiteInfoBecca('site-stan', 'stan-camp5', '8', '11');
                
                // TODO: Check with Becca about this whole day really
                addStaff('Michael Andrade', 'TL', 9, 30);
                addStaff('Trenton Barnett', 'TL', 13, 0);
                addStaff('Noah Fedler', 'TL', 9, 30);
                addStaff('Jamila Ford', 'TL', 9, 30);
                addStaff('Jennifer Gerardi', 'TL', 13, 0);
                addStaff('Alexis Hagan', 'TL', 9, 0);
                addStaff('Katrina Hoefflinger', 'TL', 6, 30);
                addStaff('Claire Levenson', 'TL', 0, 0);
                addStaff('Luis Luevanos', 'TL', 0, 0);
                addStaff('Casey Robinson', 'TL', 9, 30);
                addStaff('Divine Rolle', 'TL', 13, 0);
                addStaff('Nikta Shahbaz', 'TL', 9, 30);
                addStaff('Elise Simmons', 'TL', 9, 30);
                addStaff('Isabella Stenz', 'TL', 9, 30);
                addStaff('Nathan Tung', 'TL', 13, 0);
                addStaff('Kate Ward', 'TL', 9, 30);
                addStaff('Deja Washington', 'TL', 11, 0);
                addStaff('Desmond Yalom', 'TL', 9, 30);
                addStaff('Shayla Nary', 'LCWP', 0, 0);
                addStaff('Elizabeth Fung', 'OC', 9, 30);
                addStaff('Yolanda Drew', 'LCWP', 11, 0);
                addStaff('Rebecca Goldsmith', 'TL', 7, 30);
                
                uncheckStaff();
                writeStaffValues();
                
                cy.get('#preview-button').click();
                cy.get('#send-data-button').click();
                cy.wait(5000);
                cy.contains('Success');
                
                logDay(8, 11);
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
    } else if (site === "villaford University") {
        fillParam1 = "site-villa";
        if (camp === 1) {
            campCodeValue = "STS118";
            fillParam2 = "villa-camp1";
        } else if (camp === 2) {
            campCodeValue = "STJ118";
            fillParam2 = "villa-camp2";
        } else if (camp === 3) {
            campCodeValue = "STS218";
            fillParam2 = "villa-camp3";
        } else if (camp === 4) {
            campCodeValue = "STJ218";
            fillParam2 = "villa-camp4";
        } else if (camp === 5) {
            campCodeValue = "STS318";
            fillParam2 = "villa-camp5";
        } else {
            campCodeValue = "STS418";
            fillParam2 = "villa-camp6";
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