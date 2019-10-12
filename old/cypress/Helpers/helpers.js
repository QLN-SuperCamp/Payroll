function addStaff(fullName, positionType, hourValue, minuteValue, variablesObject) {
    let options = assignOptions(positionType, variablesObject);    

    let nameArray = fullName.split(" ");
    let firstName = nameArray[0];
    let firstNameLower = firstName.toLowerCase();
    let lastName = nameArray[1];
    let lastNameLower = lastName.toLowerCase();
    let smushedName = firstName.concat(lastName);

    options.uncheckArray.push(`#${firstNameLower}-${lastNameLower}`);
    options.hourInputArray.push(`#exception-hours-${smushedName}`);
    options.minuteInputArray.push(`#exception-minutes-${smushedName}`);
    options.hourValueArray.push(hourValue.toString());
    options.minuteValueArray.push(minuteValue.toString());
}

function assignVariables() {
    let variables = {
        tlsToUncheck: [],
        tlExceptionHourInputs: [],
        tlExceptionMinuteInputs: [],
        tlExceptionHourValues: [],
        tlExceptionMinuteValues: [],
        lcwpsToUncheck: [],
        lcwpExceptionHourInputs: [],
        lcwpExceptionMinuteInputs: [],
        lcwpExceptionHourValues: [],
        lcwpExceptionMinuteValues: [],
        ocsToUncheck: [],
        ocExceptionHourInputs: [],
        ocExceptionMinuteInputs: [],
        ocExceptionHourValues: [],
        ocExceptionMinuteValues: []
    };

    return variables;
}

function assignOptions(positionType, variables) {
    let options = {
        uncheckArray: "",
        hourInputArray: "",
        minuteInputArray: "",
        hourValueArray: "",
        minuteValueArray: ""
    };

    if (positionType === "TL" || positionType === "PHOTO") {
        options.uncheckArray = variables.tlsToUncheck;
        options.hourInputArray = variables.tlExceptionHourInputs;
        options.minuteInputArray = variables.tlExceptionMinuteInputs;
        options.hourValueArray = variables.tlExceptionHourValues;
        options.minuteValueArray = variables.tlExceptionMinuteValues;
    } else if (positionType === "OC") {
        options.uncheckArray = variables.ocsToUncheck;
        options.hourInputArray = variables.ocExceptionHourInputs;
        options.minuteInputArray = variables.ocExceptionMinuteInputs;
        options.hourValueArray = variables.ocExceptionHourValues;
        options.minuteValueArray = variables.ocExceptionMinuteValues;
    } else if (positionType === "LCWP") {
        options.uncheckArray = variables.lcwpsToUncheck;
        options.hourInputArray = variables.lcwpExceptionHourInputs;
        options.minuteInputArray = variables.lcwpExceptionMinuteInputs;
        options.hourValueArray = variables.lcwpExceptionHourValues;
        options.minuteValueArray = variables.lcwpExceptionMinuteValues;
    }

    return options;
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

context("Generate Villanova Data", function () {
    

    

    

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

    context("Villanova University", function () {
        context("Camp 1", function () {
            it('July 1 (Day -6)', function () {
                cy.fillSiteInfoBecca('site-stan', 'stan-camp1', '6', '1');
                
                // ADD STAFF HERE
                
                uncheckStaff();
                writeStaffValues();
                
                cy.get('#preview-button').click();
                cy.get('#send-data-button').click();
                cy.wait(5000);
                cy.contains('Success');
                
                logDay(6, 1);
                clearArrays();
            });


            it('July 15 (Day -2)', function () {
                cy.fillSiteInfoBecca('site-ucf', 'ucf-camp2', '7', '15');
                                
                uncheckStaff();
                writeStaffValues();
                
                cy.get('#preview-button').click();
                cy.get('#send-data-button').click();
                cy.wait(5000);
                cy.contains('Success');
                
                logDay(7, 15);
                clearArrays();
            });
            it('July 16 (Day -1)', function () {
                cy.fillSiteInfoBecca('site-ucf', 'ucf-camp2', '7', '16');
                
                addStaff('Alex Abbott', 'TL', 3, 0);
                addStaff('Yolanda Drew', 'TL', 0, 0);
                addStaff('Charles Garza', 'TL', 3, 0);
                addStaff('Alexis Hagan', 'TL', 2, 0);
                addStaff('Kayla Sadler', 'TL', 2, 0);
                addStaff('Luzmaria Estala', 'LCWP', 0, 0);
                addStaff('Alicyn Kitamura', 'LCWP', 3, 0);
                
                uncheckStaff();
                writeStaffValues();
                
                cy.get('#preview-button').click();
                cy.get('#send-data-button').click();
                cy.wait(5000);
                cy.contains('Success');
                
                logDay(7, 16);
                clearArrays();
            });
            it('July 17 (Day 1)', function () {
                cy.fillSiteInfoBecca('site-ucf', 'ucf-camp2', '7', '17');
                
                addStaff('Alex Abbott', 'TL', 14, 0);
                addStaff('Yolanda Drew', 'TL', 14, 0);
                addStaff('Charles Garza', 'TL', 14, 0);
                addStaff('Alexis Hagan', 'TL', 14, 0);
                addStaff('Kayla Sadler', 'TL', 14, 0);
                addStaff('Luzmaria Estala', 'LCWP', 14, 0);
                addStaff('Alicyn Kitamura', 'LCWP', 14, 0);
                
                uncheckStaff();
                writeStaffValues();
                
                cy.get('#preview-button').click();
                cy.get('#send-data-button').click();
                cy.wait(5000);
                cy.contains('Success');
                
                logDay(7, 17);
                clearArrays();
            });
            it('July 18 (Day 2)', function () {
                cy.fillSiteInfoBecca('site-ucf', 'ucf-camp2', '7', '18');
                
                addStaff('Alex Abbott', 'TL', 14, 0);
                addStaff('Yolanda Drew', 'TL', 14, 0);
                addStaff('Charles Garza', 'TL', 14, 0);
                addStaff('Alexis Hagan', 'TL', 14, 0);
                addStaff('Kayla Sadler', 'TL', 14, 0);
                addStaff('Luzmaria Estala', 'LCWP', 11, 0);
                addStaff('Alicyn Kitamura', 'LCWP', 14, 0);

                uncheckStaff();
                writeStaffValues();
                
                cy.get('#preview-button').click();
                cy.get('#send-data-button').click();
                cy.wait(5000);
                cy.contains('Success');
                
                logDay(7, 18);
                clearArrays();
            });
            it('July 19 (Day 3)', function () {
                cy.fillSiteInfoBecca('site-ucf', 'ucf-camp2', '7', '19');
                
                addStaff('Alex Abbott', 'TL', 11, 0);
                addStaff('Yolanda Drew', 'TL', 11, 0);
                addStaff('Charles Garza', 'TL', 11, 0);
                addStaff('Alexis Hagan', 'TL', 11, 0);
                addStaff('Kayla Sadler', 'TL', 11, 0);
                addStaff('Luzmaria Estala', 'LCWP', 11, 0);
                addStaff('Alicyn Kitamura', 'LCWP', 14, 0);

                uncheckStaff();
                writeStaffValues();
                
                cy.get('#preview-button').click();
                cy.get('#send-data-button').click();
                cy.wait(5000);
                cy.contains('Success');
                
                logDay(7, 19);
                clearArrays();
            });
            it('July 20 (Day 4)', function () {
                cy.fillSiteInfoBecca('site-ucf', 'ucf-camp2', '7', '20');
                
                addStaff('Alex Abbott', 'TL', 14, 0);
                addStaff('Yolanda Drew', 'TL', 14, 0);
                addStaff('Charles Garza', 'TL', 14, 0);
                addStaff('Alexis Hagan', 'TL', 14, 0);
                addStaff('Kayla Sadler', 'TL', 14, 0);
                addStaff('Luzmaria Estala', 'LCWP', 11, 0);
                addStaff('Alicyn Kitamura', 'LCWP', 14, 0);

                uncheckStaff();
                writeStaffValues();
                
                cy.get('#preview-button').click();
                cy.get('#send-data-button').click();
                cy.wait(5000);
                cy.contains('Success');
                
                logDay(7, 20);
                clearArrays();
            });
            it('July 21 (Day 5)', function () {
                cy.fillSiteInfoBecca('site-ucf', 'ucf-camp2', '7', '21');
                
                addStaff('Alex Abbott', 'TL', 14, 0);
                addStaff('Yolanda Drew', 'TL', 14, 0);
                addStaff('Charles Garza', 'TL', 14, 0);
                addStaff('Alexis Hagan', 'TL', 14, 0);
                addStaff('Kayla Sadler', 'TL', 14, 0);
                addStaff('Luzmaria Estala', 'LCWP', 11, 0);
                addStaff('Alicyn Kitamura', 'LCWP', 14, 0);

                uncheckStaff();
                writeStaffValues();
                
                cy.get('#preview-button').click();
                cy.get('#send-data-button').click();
                cy.wait(5000);
                cy.contains('Success');
                
                logDay(7, 21);
                clearArrays();
            });
            it('July 22 (Day 6)', function () {
                cy.fillSiteInfoBecca('site-ucf', 'ucf-camp2', '7', '22');
                
                addStaff('Alex Abbott', 'TL', 14, 0);
                addStaff('Yolanda Drew', 'TL', 14, 0);
                addStaff('Charles Garza', 'TL', 14, 0);
                addStaff('Alexis Hagan', 'TL', 14, 0);
                addStaff('Kayla Sadler', 'TL', 14, 0);
                addStaff('Luzmaria Estala', 'LCWP', 11, 0);
                addStaff('Alicyn Kitamura', 'LCWP', 14, 0);

                uncheckStaff();
                writeStaffValues();
                
                cy.get('#preview-button').click();
                cy.get('#send-data-button').click();
                cy.wait(5000);
                cy.contains('Success');
                
                logDay(7, 22);
                clearArrays();
            });
        });
    });
});