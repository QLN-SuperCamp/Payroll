/// <reference types="Cypress" />

var staffHours = [
    {
        id: "June 25th (Day -2)",
        staff: [
            {
                id: "Trenton Barnett",
                day1: 9.5,
                day2: 12.5,
                day3: 11,
                day4: 11,
                day5: 11,
                day6: 11,
                day7: 11
            },
            {
                id: "Alina Briley",
                day1: 9.5,
                day2: 12.5,
                day3: 11,
                day4: 10,
                day5: 12,
                day6: 11,
                day7: 11
            },
            {
                id: 'Derrick Celestine',
                day1: 9.5,
                day2: 12.5,
                day3: 12,
                day4: 11,
                day5: 11,
                day6: 11,
                day7: 11
            },
            {
                id: 'Frederique Desrosiers',
                day1: 9.5,
                day2: 12.5,
                day3: 11,
                day4: 11,
                day5: 11.5,
                day6: 12,
                day7: 11
            },
            {
                id: 'Alexandra Desrosiers',
                day1: 9.5,
                day2: 12.5,
                day3: 13.5,
                day4: 11.5,
                day5: 13.5,
                day6: 11,
                day7: 11
            },
            {
                id: 'Noah Fedler',
                day1: 9.5,
                day2: 12.5,
                day3: 11,
                day4: 11,
                day5: 11,
                day6: 11,
                day7: 11
            },
            {
                id: 'Nina Fleck',
                day1: 9.5,
                day2: 12.5,
                day3: 12.5,
                day4: 11,
                day5: 12,
                day6: 11,
                day7: 11
            },
            {
                id: 'Jamila Ford',
                day1: 9.5,
                day2: 12.5,
                day3: 11.25,
                day4: 11,
                day5: 10.50,
                day6: 11,
                day7: 11.5
            },
            {
                id: 'Douglas Hearns',
                day1: 9.5,
                day2: 12.5,
                day3: 12.5,
                day4: 11.5,
                day5: 11,
                day6: 13.25,
                day7: 12.5
            },
            {
                id: 'Erin Janov',
                day1: 9.5,
                day2: 12.5,
                day3: 12.5,
                day4: 11,
                day5: 11.5,
                day6: 12,
                day7: 11
            },
            {
                id: 'Claire Levenson',
                day1: 9.5,
                day2: 12.5,
                day3: 11,
                day4: 11,
                day5: 11.5,
                day6: 12,
                day7: 11
            },
            {
                id: 'James McDonald',
                day1: 9.5,
                day2: 12.5,
                day3: 12.25,
                day4: 11,
                day5: 12,
                day6: 12.5,
                day7: 11
            },
            {
                id: 'Divine Rolle',
                day1: 9.5,
                day2: 12.5,
                day3: 12.5,
                day4: 11,
                day5: 11.5,
                day6: 12,
                day7: 11
            },
            {
                id: 'Nikta Shahbaz',
                day1: 9.5,
                day2: 12.5,
                day3: 11,
                day4: 11,
                day5: 11.5,
                day6: 13.25,
                day7: 11
            },
            {
                id: 'Elise Simmons',
                day1: 9.5,
                day2: 12.5,
                day3: 12,
                day4: 11,
                day5: 11.5,
                day6: 13,
                day7: 12
            },
            {
                id: 'Kate Ward',
                day1: 9.5,
                day2: 12.5,
                day3: 11,
                day4: 11,
                day5: 11.5,
                day6: 12,
                day7: 12.25
            },
            {
                id: 'Desmond Yalom',
                day1: 9.5,
                day2: 12.5,
                day3: 11.75,
                day4: 11.5,
                day5: 11.5,
                day6: 13.25,
                day7: 11
            },
            {
                id: 'Shayla Nary',
                day1: 11,
                day2: 11,
                day3: 15,
                day4: 12,
                day5: 12,
                day6: 15,
                day7: 12
            },
            {
                id: 'Raqqayah Simmons',
                day1: 11.5,
                day2: 16,
                day3: 14,
                day4: 13.5,
                day5: 12,
                day6: 12,
                day7: 13.5
            },
            {
                id: 'Flora Moore',
                day1: 11,
                day2: 16,
                day3: 18,
                day4: 11,
                day5: 0,
                day6: 9,
                day7: 11
            }
        ]
    }
];

var finalStaffValues = [
    {
        id: "Trenton Barnett",
        regHours: "",
        otHours: "",
        dtHours: ""
    },
    {
        id: "Alina Briley",
        regHours: "",
        otHours: "",
        dtHours: ""
    },
    {
        id: "Derrick Celestine",
        regHours: "",
        otHours: "",
        dtHours: ""
    },
    {
        id: "Frederique Desrosiers",
        regHours: "",
        otHours: "",
        dtHours: ""
    },
    {
        id: "Alexandra Desrosiers",
        regHours: "",
        otHours: "",
        dtHours: ""
    },
    {
        id: "Noah Fedler",
        regHours: "",
        otHours: "",
        dtHours: ""
    },
    {
        id: "Nina Fleck",
        regHours: "",
        otHours: "",
        dtHours: ""
    },
    {
        id: "Jamila Ford",
        regHours: "",
        otHours: "",
        dtHours: ""
    }, 
    {
        id: "Douglas Hearns",
        regHours: "",
        otHours: "",
        dtHours: ""
    }, 
    {
        id: "Erin Janov",
        regHours: "",
        otHours: "",
        dtHours: ""
    },
    {
        id: "Claire Levenson",
        regHours: "",
        otHours: "",
        dtHours: ""
    }, 
    {
        id: "James McDonald",
        regHours: "",
        otHours: "",
        dtHours: ""
    }, 
    {
        id: "Divine Rolle",
        regHours: "",
        otHours: "",
        dtHours: ""
    },
    {
        id: "Nikta Shahbaz",
        regHours: "",
        otHours: "",
        dtHours: ""
    },
    {
        id: "Elise Simmons",
        regHours: "",
        otHours: "",
        dtHours: ""
    },
    {
        id: "Kate Ward",
        regHours: "",
        otHours: "",
        dtHours: ""
    },
    {
        id: "Desmond Yalom",
        regHours: "",
        otHours: "",
        dtHours: ""
    },
    {
        id: "Shayla Nary",
        regHours: "",
        otHours: "",
        dtHours: ""
    },
    {
        id: "Raqqayah Simmons",
        regHours: "",
        otHours: "",
        dtHours: ""
    }
];

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
Cypress.Commands.add("copyValues", (fullName) => {
    var hoursObject = {
        regHours: "",
        otHours: "",
        dtHours: "",
    };

    hoursObject.regHours = cy.get('#fieldname110_1').value;
    hoursObject.otHours = cy.get('#fieldname111_1').value;
    hoursObject.dtHours = cy.get('#fieldname108_1').value;

    var personObject = finalStaffValues.find(function (object) {
        return object.id === fullName;
    });

    personObject.regHours = hoursObject.regHours;
    personObject.otHours = hoursObject.otHours;
    personObject.dtHours = hoursObject.dtHours;
});
Cypress.Commands.add("writeValues", (fullName, regHours, otHours, dtHours) => {
    cy.visit('https://docs.google.com/spreadsheets/d/1vb8vIO3ZqZj_2s_2nvRrlV-I3NDNdVtxBuDTLrwt6Jo/edit#gid=0');
    cy.get('#t-formula-bar-input').type(fullName + " worked " + regHours + " regHours, " + otHours + " otHours, and " + dtHours + " dtHours.");
});
Cypress.Commands.add("fillCalculatorInfo", (day1, day2, day3, day4, day5, day6, day7, fullName) => {
    cy.visit('https://www.worklawyers.com/overtime-calculator-california/');
    cy.get("#fieldname73_1").click();

    cy.get('#fieldname6_1').type(day1.toString(), {force: true});
    cy.get('#fieldname7_1').type(day2.toString(), {force: true});
    cy.get('#fieldname8_1').type(day3.toString(), {force: true});
    cy.get('#fieldname9_1').type(day4.toString(), {force: true});
    cy.get('#fieldname10_1').type(day5.toString(), {force: true});
    cy.get('#fieldname11_1').type(day6.toString(), {force: true});
    cy.get('#fieldname12_1').type(day7.toString(), {force: true});

    console.log(fullName);
    cy.pause();
});


context("Input Stanford Data", function () {
    context("Stanford University", function () {
        context("Camp 1", function () {
            it("June 25th (Day -2)", function () {
                staffHours.forEach(function (campDay){
                    campDay.staff.forEach(function (staffMember) {
                        cy.fillCalculatorInfo(staffMember.day1, staffMember.day2, staffMember.day3, staffMember.day4, staffMember.day5, staffMember.day6, staffMember.day7, staffMember.id);
                    });
                });
            });
        });
    });
});