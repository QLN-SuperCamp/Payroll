/// <reference types="Cypress" />

// * Build object from CampMinder Report .CSV

var report = "report.csv";
var reportArray = [];
// JQuery look through the report
$.get(report, function (data) {
    // Use Papaparse to parse the csvdata
    var csvdata = Papa.parse(data, {
        header: true
    });
    reportArray = csvdata;

    // Each staff member gets their own object
    reportArray.data.forEach(staffMember => {
       staffMember.firstName = staffMember["First Name"];
       staffMember.lastName = staffMember["Last Name"];
       staffMember.weeklyPay = staffMember["Weekly Pay"]; 
    });
});
        
console.log(reportArray);
        


context("Open Admin", function () {
    console.log(reportArray);
});