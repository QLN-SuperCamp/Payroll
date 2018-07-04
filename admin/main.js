// Variable to hold form data after DOM load
var formData = [];

var staffData = [];

// Arrays to hold entry objects by site
var swData = [];
var stanData = [];
var ucfData = [];
var villaData = [];
var siteDataArrays = [swData, stanData, ucfData, villaData];

// Tables (by State)
var tableCalifornia1 = document.getElementById('table-california1');
var tableCalifornia2 = document.getElementById('table-california2');
var tableCalifornia3 = document.getElementById('table-california3');
var tableCalifornia4 = document.getElementById('table-california4');
var tableCalifornia5 = document.getElementById('table-california5');

var tableFlorida1 = document.getElementById('table-florida1');
var tableFlorida2 = document.getElementById('table-florida2');
var tableFlorida3 = document.getElementById('table-florida3');
var tableFlorida4 = document.getElementById('table-florida4');
var tableFlorida5 = document.getElementById('table-florida5');

var tablePennsylvania1 = document.getElementById('table-pennsylvania1');
var tablePennsylvania2 = document.getElementById('table-pennsylvania2');
var tablePennsylvania3 = document.getElementById('table-pennsylvania3');
var tablePennsylvania4 = document.getElementById('table-pennsylvania4');
var tablePennsylvania5 = document.getElementById('table-pennsylvania5');

var tableTexas1 = document.getElementById('table-texas1');
var tableTexas2 = document.getElementById('table-texas2');
var tableTexas3 = document.getElementById('table-texas3');
var tableTexas4 = document.getElementById('table-texas4');
var tableTexas5 = document.getElementById('table-texas5');


// Table Bodies
var bodyCalifornia1 = document.getElementById('california-body1');
var bodyCalifornia2 = document.getElementById('california-body2');
var bodyCalifornia3 = document.getElementById('california-body3');
var bodyCalifornia4 = document.getElementById('california-body4');
var bodyCalifornia5 = document.getElementById('california-body5');

var bodyFlorida1 = document.getElementById('florida-body1');
var bodyFlorida2 = document.getElementById('florida-body2');
var bodyFlorida3 = document.getElementById('florida-body3');
var bodyFlorida4 = document.getElementById('florida-body4');
var bodyFlorida5 = document.getElementById('florida-body5');

var bodyPennsylvania1 = document.getElementById('pennsylvania-body1');
var bodyPennsylvania2 = document.getElementById('pennsylvania-body2');
var bodyPennsylvania3 = document.getElementById('pennsylvania-body3');
var bodyPennsylvania4 = document.getElementById('pennsylvania-body4');
var bodyPennsylvania5 = document.getElementById('pennsylvania-body5');

var bodyTexas1 = document.getElementById('texas-body1');
var bodyTexas2 = document.getElementById('texas-body2');
var bodyTexas3 = document.getElementById('texas-body3');
var bodyTexas4 = document.getElementById('texas-body4');
var bodyTexas5 = document.getElementById('texas-body5');


// Get data from Google spreadsheet when the DOM loads
window.addEventListener('DOMContentLoaded', init);

// CampMinder Report - All 2018 Staff Members
var report = "admin/2018staff.csv";
var reportArray = [];
$.get(report, function (data) {
    var csvdata = Papa.parse(data, {
        header: true
    });
    reportArray = csvdata;

    // Each staff member gets their own pay period array
    reportArray.data.forEach(function (staffMember) {
        let payPeriod1 = [
            [{
                    'Day': 'June 18',
                    'regHours': 0,
                    'otHours': 0,
                    'dtHours': 0,
                    'sickHours': 0,
                },
                {
                    'Day': 'June 19',
                    'regHours': 0,
                    'otHours': 0,
                    'dtHours': 0,
                    'sickHours': 0,
                },
                {
                    'Day': 'June 20',
                    'regHours': 0,
                    'otHours': 0,
                    'dtHours': 0,
                    'sickHours': 0,
                },
                {
                    'Day': 'June 21',
                    'regHours': 0,
                    'otHours': 0,
                    'dtHours': 0,
                    'sickHours': 0,
                },
                {
                    'Day': 'June 22',
                    'regHours': 0,
                    'otHours': 0,
                    'dtHours': 0,
                    'sickHours': 0,
                },
                {
                    'Day': 'June 23',
                    'regHours': 0,
                    'otHours': 0,
                    'dtHours': 0,
                    'sickHours': 0,
                },
                {
                    'Day': 'June 24',
                    'regHours': 0,
                    'otHours': 0,
                    'dtHours': 0,
                    'sickHours': 0,
                },
                {
                    'id': 'week1',
                    'totalHours': 0,
                    'regHours': 0,
                    'otHours': 0,
                    'dtHours': 0,
                    'sickHours': 0,
                    'consecutiveDayCount': 0
                }
            ],
            [{
                    'Day': 'June 25',
                    'regHours': 0,
                    'otHours': 0,
                    'dtHours': 0,
                    'sickHours': 0,
                },
                {
                    'Day': 'June 26',
                    'regHours': 0,
                    'otHours': 0,
                    'dtHours': 0,
                    'sickHours': 0,
                },
                {
                    'Day': 'June 27',
                    'regHours': 0,
                    'otHours': 0,
                    'dtHours': 0,
                    'sickHours': 0,
                },
                {
                    'Day': 'June 28',
                    'regHours': 0,
                    'otHours': 0,
                    'dtHours': 0,
                    'sickHours': 0,
                },
                {
                    'Day': 'June 29',
                    'regHours': 0,
                    'otHours': 0,
                    'dtHours': 0,
                    'sickHours': 0,
                },
                {
                    'Day': 'June 30',
                    'regHours': 0,
                    'otHours': 0,
                    'dtHours': 0,
                    'sickHours': 0,
                },
                {
                    'Day': 'July 1',
                    'regHours': 0,
                    'otHours': 0,
                    'dtHours': 0,
                    'sickHours': 0,
                },
                {
                    'id': 'week2',
                    'totalHours': 0,
                    'regHours': 0,
                    'otHours': 0,
                    'dtHours': 0,
                    'sickHours': 0,
                    'consecutiveDayCount': 0
                }
            ],
            [{
                'id': 'payPeriodInfo',
                'totalHours': 0,
                'regHours': 0,
                'otHours': 0,
                'dtHours': 0,
                'sickHours': 0,
                'payPeriodNumber': 1,
                'site': ""
            }]
        ];
        let payPeriod2 = [
            [{
                    'Day': 'July 2',
                    'regHours': 0,
                    'otHours': 0,
                    'dtHours': 0,
                    'sickHours': 0,
                },
                {
                    'Day': 'July 3',
                    'regHours': 0,
                    'otHours': 0,
                    'dtHours': 0,
                    'sickHours': 0,
                },
                {
                    'Day': 'July 4',
                    'regHours': 0,
                    'otHours': 0,
                    'dtHours': 0,
                    'sickHours': 0,
                },
                {
                    'Day': 'July 5',
                    'regHours': 0,
                    'otHours': 0,
                    'dtHours': 0,
                    'sickHours': 0,
                },
                {
                    'Day': 'July 6',
                    'regHours': 0,
                    'otHours': 0,
                    'dtHours': 0,
                    'sickHours': 0,
                },
                {
                    'Day': 'July 7',
                    'regHours': 0,
                    'otHours': 0,
                    'dtHours': 0,
                    'sickHours': 0,
                },
                {
                    'Day': 'July 8',
                    'regHours': 0,
                    'otHours': 0,
                    'dtHours': 0,
                    'sickHours': 0,
                },
                {
                    'id': 'week1',
                    'totalHours': 0,
                    'regHours': 0,
                    'otHours': 0,
                    'dtHours': 0,
                    'sickHours': 0,
                    'consecutiveDayCount': 0
                }
            ],
            [{
                    'Day': 'July 9',
                    'regHours': 0,
                    'otHours': 0,
                    'dtHours': 0,
                    'sickHours': 0,
                },
                {
                    'Day': 'July 10',
                    'regHours': 0,
                    'otHours': 0,
                    'dtHours': 0,
                    'sickHours': 0,
                },
                {
                    'Day': 'July 11',
                    'regHours': 0,
                    'otHours': 0,
                    'dtHours': 0,
                    'sickHours': 0,
                },
                {
                    'Day': 'July 12',
                    'regHours': 0,
                    'otHours': 0,
                    'dtHours': 0,
                    'sickHours': 0,
                },
                {
                    'Day': 'July 13',
                    'regHours': 0,
                    'otHours': 0,
                    'dtHours': 0,
                    'sickHours': 0,
                },
                {
                    'Day': 'July 14',
                    'regHours': 0,
                    'otHours': 0,
                    'dtHours': 0,
                    'sickHours': 0,
                },
                {
                    'Day': 'July 15',
                    'regHours': 0,
                    'otHours': 0,
                    'dtHours': 0,
                    'sickHours': 0,
                },
                {
                    'id': 'week2',
                    'totalHours': 0,
                    'regHours': 0,
                    'otHours': 0,
                    'dtHours': 0,
                    'sickHours': 0,
                    'consecutiveDayCount': 0
                }
            ],
            [{
                'id': 'payPeriodInfo',
                'totalHours': 0,
                'regHours': 0,
                'otHours': 0,
                'dtHours': 0,
                'sickHours': 0,
                'payPeriodNumber': 2,
                'site': ""
            }]
        ];
        let payPeriod3 = [
            [{
                    'Day': 'July 16',
                    'regHours': 0,
                    'otHours': 0,
                    'dtHours': 0,
                    'sickHours': 0,
                },
                {
                    'Day': 'July 17',
                    'regHours': 0,
                    'otHours': 0,
                    'dtHours': 0,
                    'sickHours': 0,
                },
                {
                    'Day': 'July 18',
                    'regHours': 0,
                    'otHours': 0,
                    'dtHours': 0,
                    'sickHours': 0,
                },
                {
                    'Day': 'July 19',
                    'regHours': 0,
                    'otHours': 0,
                    'dtHours': 0,
                    'sickHours': 0,
                },
                {
                    'Day': 'July 20',
                    'regHours': 0,
                    'otHours': 0,
                    'dtHours': 0,
                    'sickHours': 0,
                },
                {
                    'Day': 'July 21',
                    'regHours': 0,
                    'otHours': 0,
                    'dtHours': 0,
                    'sickHours': 0,
                },
                {
                    'Day': 'July 22',
                    'regHours': 0,
                    'otHours': 0,
                    'dtHours': 0,
                    'sickHours': 0,
                },
                {
                    'id': 'week1',
                    'totalHours': 0,
                    'regHours': 0,
                    'otHours': 0,
                    'dtHours': 0,
                    'sickHours': 0,
                    'consecutiveDayCount': 0
                }
            ],
            [{
                    'Day': 'July 23',
                    'regHours': 0,
                    'otHours': 0,
                    'dtHours': 0,
                    'sickHours': 0,
                },
                {
                    'Day': 'July 24',
                    'regHours': 0,
                    'otHours': 0,
                    'dtHours': 0,
                    'sickHours': 0,
                },
                {
                    'Day': 'July 25',
                    'regHours': 0,
                    'otHours': 0,
                    'dtHours': 0,
                    'sickHours': 0,
                },
                {
                    'Day': 'July 26',
                    'regHours': 0,
                    'otHours': 0,
                    'dtHours': 0,
                    'sickHours': 0,
                },
                {
                    'Day': 'July 27',
                    'regHours': 0,
                    'otHours': 0,
                    'dtHours': 0,
                    'sickHours': 0,
                },
                {
                    'Day': 'July 28',
                    'regHours': 0,
                    'otHours': 0,
                    'dtHours': 0,
                    'sickHours': 0,
                },
                {
                    'Day': 'July 29',
                    'regHours': 0,
                    'otHours': 0,
                    'dtHours': 0,
                    'sickHours': 0,
                },
                {
                    'id': 'week2',
                    'totalHours': 0,
                    'regHours': 0,
                    'otHours': 0,
                    'dtHours': 0,
                    'sickHours': 0,
                    'consecutiveDayCount': 0
                }
            ],
            [{
                'id': 'payPeriodInfo',
                'totalHours': 0,
                'regHours': 0,
                'otHours': 0,
                'dtHours': 0,
                'sickHours': 0,
                'payPeriodNumber': 3,
                'site': ""
            }]
        ];
        let payPeriod4 = [
            [{
                    'Day': 'July 30',
                    'regHours': 0,
                    'otHours': 0,
                    'dtHours': 0,
                    'sickHours': 0,
                },
                {
                    'Day': 'July 31',
                    'regHours': 0,
                    'otHours': 0,
                    'dtHours': 0,
                    'sickHours': 0,
                },
                {
                    'Day': 'August 1',
                    'regHours': 0,
                    'otHours': 0,
                    'dtHours': 0,
                    'sickHours': 0,
                },
                {
                    'Day': 'August 2',
                    'regHours': 0,
                    'otHours': 0,
                    'dtHours': 0,
                    'sickHours': 0,
                },
                {
                    'Day': 'August 3',
                    'regHours': 0,
                    'otHours': 0,
                    'dtHours': 0,
                    'sickHours': 0,
                },
                {
                    'Day': 'August 4',
                    'regHours': 0,
                    'otHours': 0,
                    'dtHours': 0,
                    'sickHours': 0,
                },
                {
                    'Day': 'August 5',
                    'regHours': 0,
                    'otHours': 0,
                    'dtHours': 0,
                    'sickHours': 0,
                },
                {
                    'id': 'week1',
                    'totalHours': 0,
                    'regHours': 0,
                    'otHours': 0,
                    'dtHours': 0,
                    'sickHours': 0,
                    'consecutiveDayCount': 0
                }
            ],
            [{
                    'Day': 'August 6',
                    'regHours': 0,
                    'otHours': 0,
                    'dtHours': 0,
                    'sickHours': 0,
                },
                {
                    'Day': 'August 7',
                    'regHours': 0,
                    'otHours': 0,
                    'dtHours': 0,
                    'sickHours': 0,
                },
                {
                    'Day': 'August 8',
                    'regHours': 0,
                    'otHours': 0,
                    'dtHours': 0,
                    'sickHours': 0,
                },
                {
                    'Day': 'August 9',
                    'regHours': 0,
                    'otHours': 0,
                    'dtHours': 0,
                    'sickHours': 0,
                },
                {
                    'Day': 'August 10',
                    'regHours': 0,
                    'otHours': 0,
                    'dtHours': 0,
                    'sickHours': 0,
                },
                {
                    'Day': 'August 11',
                    'regHours': 0,
                    'otHours': 0,
                    'dtHours': 0,
                    'sickHours': 0,
                },
                {
                    'Day': 'August 12',
                    'regHours': 0,
                    'otHours': 0,
                    'dtHours': 0,
                    'sickHours': 0,
                },
                {
                    'id': 'week2',
                    'totalHours': 0,
                    'regHours': 0,
                    'otHours': 0,
                    'dtHours': 0,
                    'sickHours': 0,
                    'consecutiveDayCount': 0
                }
            ],
            [{
                'id': 'payPeriodInfo',
                'totalHours': 0,
                'regHours': 0,
                'otHours': 0,
                'dtHours': 0,
                'sickHours': 0,
                'payPeriodNumber': 4,
                'site': ""
            }]
        ];
        let payPeriod5 = [
            [{
                    'Day': 'August 13',
                    'regHours': 0,
                    'otHours': 0,
                    'dtHours': 0,
                    'sickHours': 0,
                },
                {
                    'Day': 'August 14',
                    'regHours': 0,
                    'otHours': 0,
                    'dtHours': 0,
                    'sickHours': 0,
                },
                {
                    'Day': 'August 15',
                    'regHours': 0,
                    'otHours': 0,
                    'dtHours': 0,
                    'sickHours': 0,
                },
                {
                    'Day': 'August 16',
                    'regHours': 0,
                    'otHours': 0,
                    'dtHours': 0,
                    'sickHours': 0,
                },
                {
                    'Day': 'August 17',
                    'regHours': 0,
                    'otHours': 0,
                    'dtHours': 0,
                    'sickHours': 0,
                },
                {
                    'Day': 'August 18',
                    'regHours': 0,
                    'otHours': 0,
                    'dtHours': 0,
                    'sickHours': 0,
                },
                {
                    'Day': 'August 19',
                    'regHours': 0,
                    'otHours': 0,
                    'dtHours': 0,
                    'sickHours': 0,
                },
                {
                    'id': 'week1',
                    'totalHours': 0,
                    'regHours': 0,
                    'otHours': 0,
                    'dtHours': 0,
                    'sickHours': 0,
                    'consecutiveDayCount': 0
                }
            ],
            [{
                    'Day': 'August 20',
                    'regHours': 0,
                    'otHours': 0,
                    'dtHours': 0,
                    'sickHours': 0,
                },
                {
                    'Day': 'August 21',
                    'regHours': 0,
                    'otHours': 0,
                    'dtHours': 0,
                    'sickHours': 0,
                },
                {
                    'Day': 'August 22',
                    'regHours': 0,
                    'otHours': 0,
                    'dtHours': 0,
                    'sickHours': 0,
                },
                {
                    'Day': 'August 23',
                    'regHours': 0,
                    'otHours': 0,
                    'dtHours': 0,
                    'sickHours': 0,
                },
                {
                    'Day': 'August 24',
                    'regHours': 0,
                    'otHours': 0,
                    'dtHours': 0,
                    'sickHours': 0,
                },
                {
                    'Day': 'August 25',
                    'regHours': 0,
                    'otHours': 0,
                    'dtHours': 0,
                    'sickHours': 0,
                },
                {
                    'Day': 'August 26',
                    'regHours': 0,
                    'otHours': 0,
                    'dtHours': 0,
                    'sickHours': 0,
                },
                {
                    'id': 'week2',
                    'totalHours': 0,
                    'regHours': 0,
                    'otHours': 0,
                    'dtHours': 0,
                    'sickHours': 0,
                    'consecutiveDayCount': 0
                }
            ],
            [{
                'id': 'payPeriodInfo',
                'totalHours': 0,
                'regHours': 0,
                'otHours': 0,
                'dtHours': 0,
                'sickHours': 0,
                'payPeriodNumber': 5,
                'site': ""
            }]
        ];

        staffMember.payPeriod1 = payPeriod1;
        staffMember.payPeriod2 = payPeriod2;
        staffMember.payPeriod3 = payPeriod3;
        staffMember.payPeriod4 = payPeriod4;
        staffMember.payPeriod5 = payPeriod5;

        // Create Full Name for each person
        let fullName = staffMember["First Name"].concat(" ", staffMember["Last Name"]);
        staffMember.fullName = fullName;
    });
});












// Use Tabletop to pull data from Google spreadsheet
function init() {
    var publicSpreadsheetUrl = 'https://docs.google.com/spreadsheets/d/1SbGhrkqAb8Ej4mFn9HxcfbVlK6B0zhA_2eQLB7UfnU8/edit?usp=sharing';

    Tabletop.init({
        key: publicSpreadsheetUrl,
        callback: showInfo,
        simpleSheet: true
    });
}

// Store the info for the Google spreadsheet in a variable
function showInfo(data, tabletop) {
    formData = data;

    // Go through formData Array and separate entries based on site
    separateFormData();


    // Display formData in page tables when the DOM loads
    displayData();
}

function separateFormData() {
    formData.forEach(function (entry) {
        let site = entry.site;

        if (site === "sw") {
            swData.push(entry);
        } else if (site === "stan") {
            stanData.push(entry);
        } else if (site === "ucf") {
            ucfData.push(entry);
        } else {
            villaData.push(entry);
        }
    });

    // Go through each data Array, then each entry object, creating a new property dateValue
    siteDataArrays.forEach(function (dataArray) {
        dataArray.forEach(function (entry) {
            // Concat the month and day together to form a value in which to sort the formData Array
            // ! logic for single digit dayDates
            let dateValue = "";
            if (Number(entry.day) < 10) {
                dateValue = Number(entry.month.concat("0", entry.day));
            } else {
                dateValue = Number(entry.month.concat(entry.day));
            }
            entry.dateValue = dateValue;
        });

        // Sort each data Array by dateValue
        dataArray.sort(function (a, b) {
            return a.dateValue - b.dateValue;
        });
    });
}

// Print the window
function printThis() {
    window.print();
}

function displayData() {
    // Manipulate incoming data to "count the hours"
    siteDataArrays.forEach(function (dataArray) {
        // Each entry from SA's (Each Day of Camp)
        dataArray.forEach(function (entry) {
            // Site
            let site = entry.site;

            // Find the corresponding date in the payPeriod array
            let entryMonthNumber = entry.month;
            let entryMonth = "";
            let entryDay = entry.day;
            let payPeriod = "";
            if (entryMonthNumber === "6") {
                entryMonth = "June";
                payPeriod = "payPeriod1";
            } else if (entryMonthNumber === "7") {
                entryMonth = "July";
                if (entryDay === "1") {
                    payPeriod = "payPeriod1";
                } else if (Number(entryDay) < 16) {
                    payPeriod = "payPeriod2";
                } else if (Number(entryDay) < 30) {
                    payPeriod = "payPeriod3";
                } else if (entryDay === "30" || entryDay === "31") {
                    payPeriod = "payPeriod4";
                }
            } else {
                entryMonth = "August";
                if (Number(entryDay) < 13) {
                    payPeriod = "payPeriod4";
                } else {
                    payPeriod = "payPeriod5";
                }
            }
            let entryDate = entryMonth.concat(" ", entryDay);

            // Regular Hours
            var hoursTLReg = Number(entry.hoursTLReg);
            var hoursLCWPReg = Number(entry.hoursLCWPReg);
            var hoursOCReg = Number(entry.hoursOCReg);

            // Regular Team Leaders
            let workingTLPapaObject = Papa.parse(entry["workingTLs (Reg)"]);
            let regTLArray = workingTLPapaObject.data[0];

            // Exception Team Leaders
            let exceptionTLPapaObject = Papa.parse(entry.exceptionTLsInfo, {
                header: true
            });
            let exceptionTLArray = exceptionTLPapaObject.data;

            // Sick Team Leaders
            let sickTLPapaObject = Papa.parse(entry.sickTLsInfo, {
                header: true
            });
            let sickTLArray = sickTLPapaObject.data;

            // Regular Logistics Coordinators
            let workingLCPapaObject = Papa.parse(entry["workingLCs (Reg)"]);
            let regLCArray = workingLCPapaObject.data[0];

            // Regular Wellness Person(s)
            let workingWPPapaObject = Papa.parse(entry["workingWPs (Reg)"]);
            let regWPArray = workingWPPapaObject.data[0];

            // Exception Logistics Coordinators / Wellness Person(s)
            let exceptionLCWPPapaObject = Papa.parse(entry.exceptionLCWPsInfo, {
                header: true
            });
            let exceptionLCWPArray = exceptionLCWPPapaObject.data;

            // Sick Logistics Coordinators / Wellness Person(s)
            let sickLCWPPapaObject = Papa.parse(entry.sickLCWPsInfo, {
                header: true
            });
            let sickLCWPArray = sickLCWPPapaObject.data;

            // Regular Office Coordinators
            let workingOCPapaObject = Papa.parse(entry["workingOCs (Reg)"]);
            let regOCArray = workingOCPapaObject.data[0];

            // Exception Office Coordinators
            let exceptionOCPapaObject = Papa.parse(entry.exceptionOCsInfo, {
                header: true
            });
            let exceptionOCArray = exceptionOCPapaObject.data;

            // Sick Office Coordinators
            let sickOCPapaObject = Papa.parse(entry.sickOCsInfo, {
                header: true
            });
            let sickOCArray = sickOCPapaObject.data;

            countHours(regTLArray, "TL");
            countHours(regLCArray, "LCWP");
            countHours(regWPArray, "LCWP");
            countHours(regOCArray, "OC");

            countExceptionHours(exceptionTLArray);
            countExceptionHours(exceptionLCWPArray);
            countExceptionHours(exceptionOCArray);

            countSickHours(sickTLArray);
            countSickHours(sickLCWPArray);
            countSickHours(sickOCArray);

            // * This is to count the regular folks' hours
            function countHours(positionArray, positionType) {
                if (positionArray !== undefined) {
                    let hoursType = "";

                    if (positionType === "TL") {
                        hoursType = hoursTLReg;
                    } else if (positionType === "LCWP") {
                        hoursType = hoursLCWPReg;
                    } else {
                        hoursType = hoursOCReg;
                    }

                    positionArray.forEach(function (person) {
                        // Todo: I think this personData object is needed outside of this. Not sure it's needed here.
                        let personData = {
                            firstName: "",
                            lastName: "",
                            regHours: "",
                            otHours: "",
                            sickHours: "",
                            deduction: "",
                            stipend: "",
                            location: ""
                        };

                        let nameArray = person.split(" ");
                        let firstName = nameArray[0];
                        let lastName = nameArray[1];
                        personData.firstName = firstName;
                        personData.lastName = lastName;
                        let fullName = firstName.concat(" ", lastName);
                        personData.fullName = fullName;

                        var correspondingPersonObject = reportArray.data.find(function (object) {
                            return object.fullName === fullName;
                        });
                        var correspondingPayPeriodArray = correspondingPersonObject[`${payPeriod}`];
                        var week1Array = correspondingPayPeriodArray[0];
                        var week2Array = correspondingPayPeriodArray[1];

                        // Info objects
                        var correspondingPayPeriodInfoObject = correspondingPayPeriodArray[2][0];
                        var week1InfoObject = week1Array.find(function (object) {
                            return object.id === "week1";
                        });
                        var week2InfoObject = week2Array.find(function (object) {
                            return object.id === "week2";
                        });

                        // Logic to see which week the date falls under
                        var dateObjectLocation = "";
                        var inWeek1 = false;
                        var inWeek2 = false;
                        var correspondingDateObject = "";
                        var weekInfoObject = "";
                        var hoursObject = "";
                        var totalHoursThisWeek = "";

                        if (week1Array.find(function (object) {
                                return object.Day === entryDate;
                            }) !== undefined) {
                            inWeek1 = true;
                        } else if (week2Array.find(function (object) {
                                return object.Day === entryDate;
                            }) !== undefined) {
                            inWeek2 = true;
                        }

                        if (inWeek1 === true) {
                            correspondingDateObject = week1Array.find(function (object) {
                                return object.Day === entryDate;
                            });
                            weekInfoObject = week1Array.find(function (object) {
                                return object.id === "week1";
                            });
                            // Add how many hours already worked this week
                            // ? I think it should just be regular hours though, not "total" hours
                            // totalHoursThisWeek = weekInfoObject.totalHours;
                            totalHoursThisWeek = weekInfoObject.regHours;

                            // Day Count
                            let daysInARow = weekInfoObject.consecutiveDayCount;

                            if (hoursType > 0) {
                                daysInARow++;
                                hoursObject = splitHours(site, hoursType, totalHoursThisWeek, daysInARow, correspondingPersonObject, correspondingDateObject);
                                weekInfoObject.consecutiveDayCount = daysInARow;
                            } else {
                                daysInARow = 0;
                                hoursObject = splitHours(site, hoursType, totalHoursThisWeek, daysInARow, correspondingPersonObject, correspondingDateObject);
                                weekInfoObject.consecutiveDayCount = 0;
                            }
                        } else {
                            correspondingDateObject = week2Array.find(function (object) {
                                return object.Day === entryDate;
                            });
                            weekInfoObject = week2Array.find(function (object) {
                                return object.id === "week2";
                            });
                            // Add how many hours already worked this week
                            // ? I think it should just be regular hours though, not "total" hours
                            // totalHoursThisWeek = weekInfoObject.totalHours;
                            totalHoursThisWeek = weekInfoObject.regHours;
                            
                            // Day Count
                            let daysInARow = weekInfoObject.consecutiveDayCount;

                            if (hoursType > 0) {
                                daysInARow++;
                                hoursObject = splitHours(site, hoursType, totalHoursThisWeek, daysInARow, correspondingPersonObject, correspondingDateObject);
                                weekInfoObject.consecutiveDayCount = daysInARow;
                            } else {
                                daysInARow = 0;
                                hoursObject = splitHours(site, hoursType, totalHoursThisWeek, daysInARow, correspondingPersonObject, correspondingDateObject);
                                weekInfoObject.consecutiveDayCount = 0;
                            }
                        }

                        // Assign the split hours to the corresponding date object
                        correspondingDateObject.regHours = hoursObject.regHours;
                        correspondingDateObject.otHours = hoursObject.otHours;
                        correspondingDateObject.dtHours = hoursObject.dtHours;

                        // Add today's hours to the weekly total
                        weekInfoObject.totalHours += hoursType;
                        weekInfoObject.regHours += hoursObject.regHours;
                        weekInfoObject.otHours += hoursObject.otHours;
                        weekInfoObject.dtHours += hoursObject.dtHours;
                        weekInfoObject.sickHours += hoursObject.sickHours;

                        // Add hours to the payperiod info object
                        correspondingPayPeriodInfoObject.totalHours = week1InfoObject.totalHours + week2InfoObject.totalHours;
                        correspondingPayPeriodInfoObject.regHours = week1InfoObject.regHours + week2InfoObject.regHours;
                        correspondingPayPeriodInfoObject.otHours = week1InfoObject.otHours + week2InfoObject.otHours;
                        correspondingPayPeriodInfoObject.dtHours = week1InfoObject.dtHours + week2InfoObject.dtHours;
                        correspondingPayPeriodInfoObject.sickHours = week1InfoObject.sickHours + week2InfoObject.sickHours;

                        // ? Is this actually working?
                        // Add location info to the payperiod info object
                        // This will allow you to display the data by site from reportArray (hopefully)
                        correspondingPayPeriodInfoObject.site = site;

                        staffData.push(personData);
                    });
                }
            }

            // * This is to count the hours of people who worked time outside of the normal hours
            function countExceptionHours(positionArray) {
                if (positionArray.length > 0) {
                    // There are actually exceptions in this array

                    // Go through each object in this array
                    positionArray.forEach(function (person) {
                        // "person" is an object containing:
                        // full name, hours, and minutes
                        let name = person.name;
                        let hours = Number(person.hours);
                        let minutes = Number(person.minutes);
                        let timeWorked = mergeTime(hours, minutes);

                        let correspondingPersonObject = reportArray.data.find(function (object) {
                            return object.fullName === name;
                        });
                        let correspondingPayPeriodArray = correspondingPersonObject[`${payPeriod}`];
                        let week1Array = correspondingPayPeriodArray[0];
                        let week2Array = correspondingPayPeriodArray[1];

                        // Info objects
                        let correspondingPayPeriodInfoObject = correspondingPayPeriodArray[2][0];
                        let week1InfoObject = week1Array.find(function (object) {
                            return object.id === "week1";
                        });
                        let week2InfoObject = week2Array.find(function (object) {
                            return object.id === "week2";
                        });

                        // Logic to see which week the date falls under
                        let dateObjectLocation = "";
                        let inWeek1 = false;
                        let inWeek2 = false;
                        let correspondingDateObject = "";
                        let weekInfoObject = "";
                        let hoursObject = "";
                        let totalHoursThisWeek = "";
                        let consecutiveDayCount = "";

                        if (week1Array.find(function (object) {
                                return object.Day === entryDate;
                            }) !== undefined) {
                            inWeek1 = true;
                        } else if (week2Array.find(function (object) {
                                return object.Day === entryDate;
                            }) !== undefined) {
                            inWeek2 = true;
                        }

                        if (inWeek1 === true) {
                            correspondingDateObject = week1Array.find(function (object) {
                                return object.Day === entryDate;
                            });
                            weekInfoObject = week1Array.find(function (object) {
                                return object.id === "week1";
                            });
                            // Add how many hours already worked this week
                            // ? I think it should just be regular hours though, not "total" hours
                            // totalHoursThisWeek = weekInfoObject.totalHours;
                            totalHoursThisWeek = weekInfoObject.regHours;
                            
                            // Day Count
                            let daysInARow = weekInfoObject.consecutiveDayCount;

                            if (timeWorked > 0) {
                                daysInARow++;
                                hoursObject = splitHours(site, timeWorked, totalHoursThisWeek, daysInARow, correspondingPersonObject, correspondingDateObject);
                                weekInfoObject.consecutiveDayCount = daysInARow;
                            } else {
                                daysInARow = 0;
                                hoursObject = splitHours(site, timeWorked, totalHoursThisWeek, daysInARow, correspondingPersonObject, correspondingDateObject);
                                weekInfoObject.consecutiveDayCount = 0;
                            }
                        } else {
                            correspondingDateObject = week2Array.find(function (object) {
                                return object.Day === entryDate;
                            });
                            weekInfoObject = week2Array.find(function (object) {
                                return object.id === "week2";
                            });
                            // Add how many hours already worked this week
                            // ? I think it should just be regular hours though, not "total" hours
                            // totalHoursThisWeek = weekInfoObject.totalHours;
                            totalHoursThisWeek = weekInfoObject.regHours;
                            
                            // Day Count
                            let daysInARow = weekInfoObject.consecutiveDayCount;

                            if (timeWorked > 0) {
                                daysInARow++;
                                hoursObject = splitHours(site, timeWorked, totalHoursThisWeek, daysInARow, correspondingPersonObject, correspondingDateObject);
                                weekInfoObject.consecutiveDayCount = daysInARow;
                            } else {
                                daysInARow = 0;
                                hoursObject = splitHours(site, timeWorked, totalHoursThisWeek, daysInARow, correspondingPersonObject, correspondingDateObject);
                                weekInfoObject.consecutiveDayCount = 0;
                            }
                        }

                        // Assign the split hours to the corresponding date object
                        correspondingDateObject.regHours = hoursObject.regHours;
                        correspondingDateObject.otHours = hoursObject.otHours;
                        correspondingDateObject.dtHours = hoursObject.dtHours;

                        // Add today's hours to the weekly total
                        weekInfoObject.totalHours += timeWorked;
                        weekInfoObject.regHours += hoursObject.regHours;
                        weekInfoObject.otHours += hoursObject.otHours;
                        weekInfoObject.dtHours += hoursObject.dtHours;
                        weekInfoObject.sickHours += hoursObject.sickHours;

                        // Add hours to the payperiod info object
                        correspondingPayPeriodInfoObject.totalHours = week1InfoObject.totalHours + week2InfoObject.totalHours;
                        correspondingPayPeriodInfoObject.regHours = week1InfoObject.regHours + week2InfoObject.regHours;
                        correspondingPayPeriodInfoObject.otHours = week1InfoObject.otHours + week2InfoObject.otHours;
                        correspondingPayPeriodInfoObject.dtHours = week1InfoObject.dtHours + week2InfoObject.dtHours;
                        correspondingPayPeriodInfoObject.sickHours = week1InfoObject.sickHours + week2InfoObject.sickHours;

                        // Add location info to the payperiod info object
                        // This will allow you to display the data by site from reportArray (hopefully)
                        correspondingPayPeriodInfoObject.site = site;
                    });
                }
            }

            // * This is to count the hours of people who were sick
            function countSickHours(positionArray) {
                if (positionArray.length > 0) {
                    // There are actually exceptions in this array

                    // Go through each object in this array
                    positionArray.forEach(function (person) {
                        // "person" is an object containing:
                        // full name, hours, and minutes
                        let name = person.name;
                        let hours = Number(person.hours);
                        let minutes = Number(person.minutes);
                        let timeSick = mergeTime(hours, minutes);

                        let correspondingPersonObject = reportArray.data.find(function (object) {
                            return object.fullName === name;
                        });
                        let correspondingPayPeriodArray = correspondingPersonObject[`${payPeriod}`];
                        let week1Array = correspondingPayPeriodArray[0];
                        let week2Array = correspondingPayPeriodArray[1];

                        // Info objects
                        let correspondingPayPeriodInfoObject = correspondingPayPeriodArray[2][0];
                        let week1InfoObject = week1Array.find(function (object) {
                            return object.id === "week1";
                        });
                        let week2InfoObject = week2Array.find(function (object) {
                            return object.id === "week2";
                        });

                        // Logic to see which week the date falls under
                        let dateObjectLocation = "";
                        let inWeek1 = false;
                        let inWeek2 = false;
                        let correspondingDateObject = "";
                        let weekInfoObject = "";
                        // ? Do you actually need to calculate the hoursObject and totalHoursThisWeek if you are sick?
                        //let hoursObject = "";
                        //let totalHoursThisWeek = "";

                        if (week1Array.find(function (object) {
                                return object.Day === entryDate;
                            }) !== undefined) {
                            inWeek1 = true;
                        } else if (week2Array.find(function (object) {
                                return object.Day === entryDate;
                            }) !== undefined) {
                            inWeek2 = true;
                        }

                        if (inWeek1 === true) {
                            correspondingDateObject = week1Array.find(function (object) {
                                return object.Day === entryDate;
                            });
                            weekInfoObject = week1Array.find(function (object) {
                                return object.id === "week1";
                            });
                            // Add how many hours already worked this week
                            // ? Getting rid of these for now...
                            //totalHoursThisWeek = weekInfoObject.totalHours;
                            //hoursObject = splitHours(site, timeSick, totalHoursThisWeek);
                        } else {
                            correspondingDateObject = week2Array.find(function (object) {
                                return object.Day === entryDate;
                            });
                            weekInfoObject = week2Array.find(function (object) {
                                return object.id === "week2";
                            });
                            // Add how many hours already worked this week
                            // ? Getting rid of these for now...
                            //totalHoursThisWeek = weekInfoObject.totalHours;
                            //hoursObject = splitHours(site, timeSick, totalHoursThisWeek);
                        }

                        // Assign the split hours to the corresponding date object
                        correspondingDateObject.sickHours = timeSick;

                        // Add today's hours to the weekly total
                        weekInfoObject.sickHours += timeSick;

                        // Add hours to the payperiod info object
                        correspondingPayPeriodInfoObject.sickHours = week1InfoObject.sickHours + week2InfoObject.sickHours;

                        // Add location info to the payperiod info object
                        // This will allow you to display the data by site from reportArray (hopefully)
                        correspondingPayPeriodInfoObject.site = site;
                    });
                }
            }
        });
    });

    // TODO: Display data from reportArray in the corresponding tables
    // For each object (person) in the reportArray.data
    // Look at each payPeriod
    // Look at the 3rd array in that array (this is the info object)
    // Look at the "site" property
    // Depending on the site, assign the info from that object to a table value

    reportArray.data.forEach(function (person) {
        let payPeriods = [person.payPeriod1, person.payPeriod2, person.payPeriod3, person.payPeriod4, person.payPeriod5];

        payPeriods.forEach(function (payPeriod) {
            // TODO: Assign the actual payperiod into the payperiod table tabs
            let payPeriodInfoObject = payPeriod[2][0];
            let site = payPeriodInfoObject.site;
            let table = "";
            let payPeriodNumber = payPeriodInfoObject.payPeriodNumber;
            let regHours = payPeriodInfoObject.regHours;
            let otHours = payPeriodInfoObject.otHours;
            let dtHours = payPeriodInfoObject.dtHours;
            let sickHours = payPeriodInfoObject.sickHours;
            // ! totalHours does not include sick hours
            // ? Don't know if that should be changed...
            let totalHours = payPeriodInfoObject.totalHours;

            let firstName = person["First Name"];
            let lastName = person["Last Name"];

            table = assignTable(site, payPeriodNumber);

            createTableEntry(table, firstName, lastName, regHours, otHours, dtHours, sickHours, totalHours);
        });
    });
    constructTables();

}

function splitHours(site, hoursWorked, totalHoursThisWeek, consecutiveDayCount, correspondingPersonObject, correspondingDateObject) {
    if (site === "stan") {
        // Todo: CA 7th day laws logic
        // Weird California laws
        let overtimeThreshold = 8;
        let doubletimeThreshold = 12;
        let weekThreshold = 40;

        let dayCount = consecutiveDayCount;

        let regHours = 0;
        let otHours = 0;
        let dtHours = 0;
        let sickHours = 0;

        // * One and one-half times the employee's regular rate of pay for all hours worked in excess of eight hours up to and including 12 hours in any workday, and for the first eight hours worked on the seventh consecutive day of work in a workweek; and
        // * Double the employee's regular rate of pay for all hours worked in excess of 12 hours in any workday and for all hours worked in excess of eight on the seventh consecutive day of work in a workweek.

        // ! 1. OT for any hours over 8 and up to and less than 12 in a day
        // ! 2. OT for the 1st 8 hours if the day is the 7th consecutive day
        // ! 3. DT for any hours over 12 in a workday
        // ! 4. DT for any hours greater than 8 on the 7th day of a workweek

        if (correspondingPersonObject.fullName === "Flora Moore") {
            // Check for what day it fucks up
            let weekInfoObject = reportArray.data[88].payPeriod1[1][7];
            if (consecutiveDayCount === 0) {
                console.log("Day 0");
                console.log("     hoursWorked: " + hoursWorked);
                console.log("     weekInfo:");
                console.log("          regHours: " + weekInfoObject.regHours);
                console.log("          otHours: " + weekInfoObject.otHours);
                console.log("          dtHours: " + weekInfoObject.dtHours);
                console.log("          consecutiveDayCount: " + weekInfoObject.consecutiveDayCount);
            } else if (consecutiveDayCount === 1) {
                console.log("Day 1");
                console.log("     hoursWorked: " + hoursWorked);
                console.log("     weekInfo:");
                console.log("          regHours: " + weekInfoObject.regHours);
                console.log("          otHours: " + weekInfoObject.otHours);
                console.log("          dtHours: " + weekInfoObject.dtHours);
                console.log("          consecutiveDayCount: " + weekInfoObject.consecutiveDayCount);
            } else if (consecutiveDayCount === 2) {
                console.log("Day 2");
                console.log("     hoursWorked: " + hoursWorked);
                console.log("     weekInfo:");
                console.log("          regHours: " + weekInfoObject.regHours);
                console.log("          otHours: " + weekInfoObject.otHours);
                console.log("          dtHours: " + weekInfoObject.dtHours);
                console.log("          consecutiveDayCount: " + weekInfoObject.consecutiveDayCount);
            } else if (consecutiveDayCount === 3) {
                console.log("Day 3");
                console.log("     hoursWorked: " + hoursWorked);
                console.log("     weekInfo:");
                console.log("          regHours: " + weekInfoObject.regHours);
                console.log("          otHours: " + weekInfoObject.otHours);
                console.log("          dtHours: " + weekInfoObject.dtHours);
                console.log("          consecutiveDayCount: " + weekInfoObject.consecutiveDayCount);
            } else if (consecutiveDayCount === 4) {
                console.log("Day 4");
                console.log("     hoursWorked: " + hoursWorked);
                console.log("     weekInfo:");
                console.log("          regHours: " + weekInfoObject.regHours);
                console.log("          otHours: " + weekInfoObject.otHours);
                console.log("          dtHours: " + weekInfoObject.dtHours);
                console.log("          consecutiveDayCount: " + weekInfoObject.consecutiveDayCount);
            } else if (consecutiveDayCount === 5) {
                console.log("Day 5");
                console.log("     hoursWorked: " + hoursWorked);
                console.log("     weekInfo:");
                console.log("          regHours: " + weekInfoObject.regHours);
                console.log("          otHours: " + weekInfoObject.otHours);
                console.log("          dtHours: " + weekInfoObject.dtHours);
                console.log("          consecutiveDayCount: " + weekInfoObject.consecutiveDayCount);
            } else if (consecutiveDayCount === 6) {
                console.log("Day 6");
                console.log("     hoursWorked: " + hoursWorked);
                console.log("     weekInfo:");
                console.log("          regHours: " + weekInfoObject.regHours);
                console.log("          otHours: " + weekInfoObject.otHours);
                console.log("          dtHours: " + weekInfoObject.dtHours);
                console.log("          consecutiveDayCount: " + weekInfoObject.consecutiveDayCount);
            } else if (consecutiveDayCount === 7) {
                console.log("Day 7");
                console.log("     hoursWorked: " + hoursWorked);
                console.log("     weekInfo:");
                console.log("          regHours: " + weekInfoObject.regHours);
                console.log("          otHours: " + weekInfoObject.otHours);
                console.log("          dtHours: " + weekInfoObject.dtHours);
                console.log("          consecutiveDayCount: " + weekInfoObject.consecutiveDayCount);
            } else {
                console.log("End of Period");
                console.log("     weekInfo:");
                console.log("          regHours: " + weekInfoObject.regHours);
                console.log("          otHours: " + weekInfoObject.otHours);
                console.log("          dtHours: " + weekInfoObject.dtHours);
                console.log("          consecutiveDayCount: " + weekInfoObject.consecutiveDayCount);
            }
        }


        if (dayCount === 7) {
            if (hoursWorked < 8) {
                regHours = 0;
                otHours = hoursWorked;
                dtHours = 0;
                sickHours = 0;
                // * Check if it is between 8 and 12 hours OR if it is greater than 12 hours
                // ! Here, just an else works because on the 7th day, dt hours for anything over 8 regardless
            } else {
                regHours = 0;
                otHours = 8;
                dtHours = hoursWorked - 8;
                sickHours = 0;
            }
        } else {
            // * Check totalHoursThisWeek
            // * Check if it is already over 40 hours this week
            if (totalHoursThisWeek >= 40) {
                if (hoursWorked > 8 && hoursWorked <= 12) {
                    regHours = 0;
                    otHours = hoursWorked;
                    dtHours = 0;
                    sickHours = 0;
                } else if (hoursWorked > 12) {
                    regHours = 0;
                    otHours = 8;
                    dtHours = hoursWorked - 12;
                    sickHours = 0;
                } else if (hoursWorked <= 8) {
                    regHours = 0;
                    otHours = hoursWorked;
                    dtHours = 0;
                    sickHours = 0;
                }
            } else if (totalHoursThisWeek + hoursWorked > 40) {
                if (hoursWorked > 8 && hoursWorked <= 12) {
                    regHours = 8;
                    otHours = hoursWorked - 8;
                    dtHours = 0;
                    sickHours = 0;
                } else if (hoursWorked > 12) {
                    regHours = 8;
                    otHours = 4;
                    dtHours = hoursWorked - 12;
                    sickHours = 0;
                } else if (hoursWorked <= 8) {
                    regHours = hoursWorked;
                    otHours = 0;
                    dtHours = 0;
                    sickHours = 0;
                }
            } else if (totalHoursThisWeek + hoursWorked < 40) {
                if (hoursWorked > 8 && hoursWorked <= 12) {
                    regHours = 8;
                    otHours = hoursWorked - 8;
                    dtHours = 0;
                    sickHours = 0;
                } else if (hoursWorked > 12) {
                    regHours = 8;
                    otHours = 4;
                    dtHours = hoursWorked - 12;
                    sickHours = 0;
                } else if (hoursWorked <= 8) {
                    regHours = hoursWorked;
                    otHours = 0;
                    dtHours = 0;
                    sickHours = 0;
                }
            }
        }
        

        return {
            regHours: regHours,
            otHours: otHours,
            dtHours: dtHours,
            sickHours: sickHours
        };
    } else {
        // Regular federal laws for Florida, Pennsylvania, and Texas
        let overtimeThreshold = 40;

        let regHours = 0;
        let otHours = 0;
        let dtHours = 0;
        let sickHours = 0;

        if (totalHoursThisWeek >= overtimeThreshold) {
            // Now OT starts kicking in
            otHours = hoursWorked;
        } else {
            // Not enough hours in the pay period worked
            // to start acruing overtime
            // Check if today's hous would put you over threshold
            if (totalHoursThisWeek + hoursWorked > overtimeThreshold) {
                // Today's hours are going to have to be split up
                regHours = overtimeThreshold - totalHoursThisWeek;
                otHours = (totalHoursThisWeek + hoursWorked) - overtimeThreshold;
            } else {
                // Today's hours won't put you over the threshold
                regHours = hoursWorked;
            }
        }

        return {
            regHours: regHours,
            otHours: otHours,
            dtHours: dtHours,
            sickHours: sickHours
        };
    }
}

function mergeTime(hours, minutes) {
    let finalTime = "";

    if (minutes !== 0) {
        finalTime = hours + (minutes / 60);
    } else {
        finalTime = hours;
    }

    return finalTime;
}

function createTableEntry(table, firstName, lastName, regHours, otHours, dtHours, sickHours, totalHours) {
    let tableBody = "";

    tableBody = assignTableBody(table);

    let row = document.createElement("tr");
    row.name = firstName.concat(" ", lastName);
    tableBody.appendChild(row);

    let firstNameCell = document.createElement("td");
    firstNameCell.innerHTML = firstName;
    row.appendChild(firstNameCell);

    let lastNameCell = document.createElement("td");
    lastNameCell.innerHTML = lastName;
    row.appendChild(lastNameCell);

    let regHoursCell = document.createElement("td");
    regHoursCell.align = "right";
    regHoursCell.innerHTML = regHours;
    row.appendChild(regHoursCell);

    let otHoursCell = document.createElement("td");
    otHoursCell.align = "right";
    otHoursCell.innerHTML = otHours;
    row.appendChild(otHoursCell);

    let dtHoursCell = document.createElement("td");
    dtHoursCell.align = "right";
    dtHoursCell.innerHTML = dtHours;
    row.appendChild(dtHoursCell);

    let sickHoursCell = document.createElement("td");
    sickHoursCell.align = "right";
    sickHoursCell.innerHTML = sickHours;
    row.appendChild(sickHoursCell);

    let totalHoursCell = document.createElement("td");
    totalHoursCell.align = "right";
    totalHoursCell.innerHTML = totalHours;
    row.appendChild(totalHoursCell);

    // TODO: Create cell for dudection, and travel stipend, and location
    let deductionCell = document.createElement("td");
    deductionCell.innerHTML = "-";
    row.appendChild(deductionCell);

    let stipendCell = document.createElement("td");
    stipendCell.innerHTML = "-";
    row.appendChild(stipendCell);

    let locationCell = document.createElement("td");
    locationCell.innerHTML = "-";
    row.appendChild(locationCell);



}

function constructTables() {
    $('#table-california1').DataTable({});
    // $('#table-california2').DataTable({});
    // $('#table-california3').DataTable({});
    // $('#table-california4').DataTable({});
    // $('#table-california5').DataTable({});

    $('#table-florida1').DataTable({});
    // $('#table-florida2').DataTable({});
    // $('#table-florida3').DataTable({});
    // $('#table-florida4').DataTable({});
    // $('#table-florida5').DataTable({});

    $('#table-pennsylvania1').DataTable({});
    // $('#table-pennsylvania2').DataTable({});
    // $('#table-pennsylvania3').DataTable({});
    // $('#table-pennsylvania4').DataTable({});
    // $('#table-pennsylvania5').DataTable({});

    $('#table-texas1').DataTable({});
    // $('#table-texas2').DataTable({});
    // $('#table-texas3').DataTable({});
    // $('#table-texas4').DataTable({});
    // $('#table-texas5').DataTable({});
}

function assignTable(site, payPeriodNumber) {
    let table = "";

    if (site === "stan") {
        if (payPeriodNumber === 1) {
            table = tableCalifornia1;
        } else if (payPeriodNumber === 2) {
            table = tableCalifornia2;
        } else if (payPeriodNumber === 3) {
            table = tableCalifornia3;
        } else if (payPeriodNumber === 4) {
            table = tableCalifornia4;
        } else {
            table = tableCalifornia5;
        }
    } else if (site === "ucf") {
        if (payPeriodNumber === 1) {
            table = tableFlorida1;
        } else if (payPeriodNumber === 2) {
            table = tableFlorida2;
        } else if (payPeriodNumber === 3) {
            table = tableFlorida3;
        } else if (payPeriodNumber === 4) {
            table = tableFlorida4;
        } else {
            table = tableFlorida5;
        }
    } else if (site === "villa") {
        if (payPeriodNumber === 1) {
            table = tablePennsylvania1;
        } else if (payPeriodNumber === 2) {
            table = tablePennsylvania2;
        } else if (payPeriodNumber === 3) {
            table = tablePennsylvania3;
        } else if (payPeriodNumber === 4) {
            table = tablePennsylvania4;
        } else {
            table = tablePennsylvania5;
        }
    } else if (site === "sw") {
        if (payPeriodNumber === 1) {
            table = tableTexas1;
        } else if (payPeriodNumber === 2) {
            table = tableTexas2;
        } else if (payPeriodNumber === 3) {
            table = tableTexas3;
        } else if (payPeriodNumber === 4) {
            table = tableTexas4;
        } else {
            table = tableTexas5;
        }
    }

    return table;
}

function assignTableBody(table) {
    let tableBody = "";

    if (table === tableCalifornia1) {
        tableBody = bodyCalifornia1;
    } else if (table === tableCalifornia2) {
        tableBody = bodyCalifornia2;
    } else if (table === tableCalifornia3) {
        tableBody = bodyCalifornia3;
    } else if (table === tableCalifornia4) {
        tableBody = bodyCalifornia4;
    } else if (table === tableCalifornia5) {
        tableBody = bodyCalifornia5;
    } else if (table === tableFlorida1) {
        tableBody = bodyFlorida1;
    } else if (table === tableFlorida2) {
        tableBody = bodyFlorida2;
    } else if (table === tableFlorida3) {
        tableBody = bodyFlorida3;
    } else if (table === tableFlorida4) {
        tableBody = bodyFlorida4;
    } else if (table === tableFlorida5) {
        tableBody = bodyFlorida5;
    } else if (table === tablePennsylvania1) {
        tableBody = bodyPennsylvania1;
    } else if (table === tablePennsylvania2) {
        tableBody = bodyPennsylvania2;
    } else if (table === tablePennsylvania3) {
        tableBody = bodyPennsylvania3;
    } else if (table === tablePennsylvania4) {
        tableBody = bodyPennsylvania4;
    } else if (table === tablePennsylvania5) {
        tableBody = bodyPennsylvania5;
    } else if (table === tableTexas1) {
        tableBody = bodyTexas1;
    } else if (table === tableTexas2) {
        tableBody = bodyTexas2;
    } else if (table === tableTexas3) {
        tableBody = bodyTexas3;
    } else if (table === tableTexas4) {
        tableBody = bodyTexas4;
    } else {
        tableBody = bodyTexas5;
    }


    return tableBody;
}