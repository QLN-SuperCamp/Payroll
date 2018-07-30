/**
 * Stores User Information with Log Rocket
 */
var userInformation = {};

/**
 * Holds information from the Payroll Form Google Spreadsheet
 */
var formData = [];

var staffData = [];

/**
 * Displays the time that the CampMinder report was generated. Run from an NPM script.
 * @see package.json
 */
var reportTime = document.getElementById('reportTime');

/**
 * Holds site information. Southwestern University
 */
var swData = [];
/**
 * Holds site information. Stanford University.
 */
var stanData = [];
/**
 * Holds site information. University of Central Florida.
 */
var ucfData = [];
/**
 * Holds site information. Villanova University.
 */
var villaData = [];
var siteDataArrays = [swData, stanData, ucfData, villaData];

// Tables (by State)
// CA
var table1CAHourly = document.getElementById('table-payPeriod1-CA-hourly');
var table1CASalary = document.getElementById('table-payPeriod1-CA-salary');
var table2CAHourly = document.getElementById('table-payPeriod2-CA-hourly');
var table2CASalary = document.getElementById('table-payPeriod2-CA-salary');
var table3CAHourly = document.getElementById('table-payPeriod3-CA-hourly');
var table3CASalary = document.getElementById('table-payPeriod3-CA-salary');

// FL
var table2FLHourly = document.getElementById('table-payPeriod2-FL-hourly');
var table2FLSalary = document.getElementById('table-payPeriod2-FL-salary');
var table3FLHourly = document.getElementById('table-payPeriod3-FL-hourly');
var table3FLSalary = document.getElementById('table-payPeriod3-FL-salary');

// PA
var table2PAHourly = document.getElementById('table-payPeriod2-PA-hourly');
var table2PASalary = document.getElementById('table-payPeriod2-PA-salary');
var table3PAHourly = document.getElementById('table-payPeriod3-FL-hourly');
var table3PASalary = document.getElementById('table-payPeriod3-PA-salary');

// TX
var table1TXHourly = document.getElementById('table-payPeriod1-TX-hourly');
var table1TXSalary = document.getElementById('table-payPeriod1-TX-salary');
var table2TXHourly = document.getElementById('table-payPeriod2-TX-hourly');
var table2TXSalary = document.getElementById('table-payPeriod2-TX-salary');


// Table Bodies (by State)
// CA
var body1CAHourly = document.getElementById('body-payPeriod1-CA-hourly');
var body1CASalary = document.getElementById('body-payPeriod1-CA-salary');
var body2CAHourly = document.getElementById('body-payPeriod2-CA-hourly');
var body2CASalary = document.getElementById('body-payPeriod2-CA-salary');
var body3CAHourly = document.getElementById('body-payPeriod3-CA-hourly');
var body3CASalary = document.getElementById('body-payPeriod3-CA-salary');

// FL
var body2FLHourly = document.getElementById('body-payPeriod2-FL-hourly');
var body2FLSalary = document.getElementById('body-payPeriod2-FL-salary');
var body3FLHourly = document.getElementById('body-payPeriod3-FL-hourly');
var body3FLSalary = document.getElementById('body-payPeriod3-FL-salary');

// PA
var body2PAHourly = document.getElementById('body-payPeriod2-PA-hourly');
var body2PASalary = document.getElementById('body-payPeriod2-PA-salary');
var body3PAHourly = document.getElementById('body-payPeriod3-PA-hourly');
var body3PASalary = document.getElementById('body-payPeriod3-PA-salary');

// TX
var body1TXHourly = document.getElementById('body-payPeriod1-TX-hourly');
var body1TXSalary = document.getElementById('body-payPeriod1-TX-salary');
var body2TXHourly = document.getElementById('body-payPeriod2-TX-hourly');
var body2TXSalary = document.getElementById('body-payPeriod2-TX-salary');


// Get data from Google spreadsheet when the DOM loads
window.addEventListener('DOMContentLoaded', init);

// Write the time of the CampMinder report
var file = "reportInfo.JSON";
var date = "";

/**
 * Reads the date information for the CampMinder report from the "reportInfo.JSON" file.
 * @name readDateInfo
 */
$.get(file, function (info) {
    date = info.creationTime;
    reportTime.innerHTML = info.creationTime;
});


// CampMinder Report - All 2018 Staff Members
var report = "2018staff.csv";
var reportArray = [];
/**
 * Reads the CampMinder Report CSV and assigns 5 Pay Period Arrays for each person.
 * @name readCampMinderReport
 */
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


/**
 * Uses Tabletop to pull information from the Payroll Form Google Shet
 */
function init() {
    var publicSpreadsheetUrl = 'https://docs.google.com/spreadsheets/d/1SbGhrkqAb8Ej4mFn9HxcfbVlK6B0zhA_2eQLB7UfnU8/edit?usp=sharing';

    Tabletop.init({
        key: publicSpreadsheetUrl,
        callback: showInfo,
        simpleSheet: true
    });
}

/**
 * Stores the form data from Tabletop. Calls separarteFormData()  to go through the formData array and separate it by site, and displayData() to display the info in tables on the page when the DOM loads.
 * @see separarteFormData
 * @see displayData
 * @callback
 * @param {array} data - Large array of data containing information on every person in the CampMinder Report 
 * @param {any} tabletop - Not really used. Should consider removing this parameter.
 * @todo Decide if you can remove the tabletop parameter.
 */
function showInfo(data, tabletop) {
    formData = data;

    // Go through formData Array and separate entries based on site
    separateFormData();


    // Display formData in page tables when the DOM loads
    displayData();
}

/**
 * Separates the formData by site, and pushes that information to each specific site variable.
 */
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

/*
// Print the window
function printThis() {
    window.print();
}
*/

/**
 * Displays data. This is a HUGE function and NEEDS to be restructured into smaller functions. 
 */
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

            /**
             * This function counts the hours of the "regular" working people. These are staff members that worked the amount of time they were supposed to originally work. This is another HUGE function, and should be refactored heavily.
             * @todo refactor.
             * @param {array} positionArray - An array of people for the specific position type.  
             * @param {string} positionType - Either "TL", "LCWP", or "OC". A string that helps determine what will happen with the data.
             */
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
                        // Todo: Decide if this object is truly needed. Possibly delete.
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

            /**
             * The function counts the hours for the people who worked time outside of the normal hours they were supposed to. Needs to be refactored.
             * @see countHours
             * @todo refactor.
             * @param {array} positionArray - The array of people to work with. These people did not work the amount of time that they were supposed to.
             */
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
            /**
             * This function counts sick hours for people who were sick on a given day. Needs to be refactored, or possibly even simply deleted.
             * @todo refactor.
             * @see countHours
             * @see countExceptionHours
             * @param {array} positionArray - An array of people who were sick.
             */
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

    // * Assign data to table cells
    // For each object (person) in the reportArray.data
    // Look at each payPeriod
    // Look at the 3rd array in that array (this is the info object)
    // Look at the "site" property
    // Depending on the site, assign the info from that object to a table value

    reportArray.data.forEach(function (person) {
        let payPeriods = [person.payPeriod1, person.payPeriod2, person.payPeriod3, person.payPeriod4, person.payPeriod5];
        let deductionDayFields = [person.PayPeriod1DeductionDays, person.PayPeriod2DeductionDays, person.PayPeriod3DeductionDays, person.PayPeriod4DeductionDays, person.PayPeriod5DeductionDays];
        let deductionWeekFields = [person.PayPeriod1DeductionWeeks, person.PayPeriod2DeductionWeeks, person.PayPeriod3DeductionWeeks, person.PayPeriod4DeductionWeeks, person.PayPeriod5DeductionWeeks];
        let checkLocationFields = [person.PayPeriod1Location, person.PayPeriod2Location, person.PayPeriod3Location, person.PayPeriod4Location, person.PayPeriod5Location];
        let salaryDayFields = [person.PayPeriod1SalaryDays, person.PayPeriod2SalaryDays, person.PayPeriod3SalaryDays, person.PayPeriod4SalaryDays, person.PayPeriod5SalaryDays];
        let salaryWeekFields = [person.PayPeriod1SalaryWeeks, person.PayPeriod2SalaryWeeks, person.PayPeriod3SalaryWeeks, person.PayPeriod4SalaryWeeks, person.PayPeriod5SalaryWeeks];
        let isSalaryFields = [person.PayPeriod1isSalary, person.PayPeriod2isSalary, person.PayPeriod3isSalary, person.PayPeriod4isSalary, person.PayPeriod5isSalary];

        payPeriods.forEach(function (payPeriod) {
            let firstName = person["First Name"];
            let lastName = person["Last Name"];

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
            // Deductions
            let deductionDayRate = 0;
            let deductionWeekRate = 0;
            let thisIndex = payPeriods.indexOf(payPeriod);
            let deductionDays = Number(deductionDayFields[thisIndex]);
            let deductionWeeks = Number(deductionWeekFields[thisIndex]);
            let checkLocation = checkLocationFields[thisIndex];
            // Assign deduction rates based on site
            if (site === "ucf") {
                deductionDayRate = 12.57;
                deductionWeekRate = 120;
            } else if (site === "sw") {
                deductionDayRate = 11.06;
                deductionWeekRate = 105.00;
            } else if (site === "stan") {
                deductionDayRate = 16.76;
                deductionWeekRate = 160.00;
            } else if (site === "villa") {
                deductionDayRate = 11.06;
                deductionWeekRate = 105.00;
            }
            // Assign a string for the deduction
            let deductionTotal = moneyString((deductionDayRate * deductionDays) + (deductionWeekRate * deductionWeeks));

            // Salary Staff Only
            let isSalaryEmployee = isSalaryFields[thisIndex];

            /**
             * This function is used for salary employees. It takes in the days, and 2 rates - a rounded and an unrounded rate. The function returns a dailyPayRate depending on the number of days.
             * @returns {number} - The daily rate for the salary employee, rounded correctly so as not to deviate from the correct amount. The returned value will later be used by moneyString().
             * @see moneyString
             * @param {number} days - The amount of days the employee worked.
             * @param {number} rate - The pay rate for the employee. (ex. $950 / week)
             * @param {number} rateUnrounded - The unrounded rate.
             * @example <caption>Check the rate for a 1st year FAC working 1 day.</caption>
             * checkIfRound(1, 154.17, 154.166666667);
             * // returns 154.17
             * @example <caption>Check the rate for a 1st year FAC working 5 days.</caption>
             * checkIfRound(5, 154.17, 154.166666667);
             * // returns 770.8333333333;
             */
            function checkIfRound(days, rate, rateUnrounded) {
                return (days === 1) ? days * rate : days * rateUnrounded;
            }

            if (isSalaryEmployee === "Yes") {
                let weeklyPayRate = Number(person.WeeklyPay.replace(/[^0-9\.-]+/g, ""));
                let dailyPayRateUnRounded = weeklyPayRate / 6;
                let dailyPayRate = Math.ceil(dailyPayRateUnRounded * 100) / 100;
                let salaryDays = Number(salaryDayFields[thisIndex]);
                let salaryWeeks = Number(salaryWeekFields[thisIndex]);
                let salaryDayPay = checkIfRound(salaryDays, dailyPayRate, dailyPayRateUnRounded);
                let salaryWeekPay = salaryWeeks * weeklyPayRate;
                let salaryPayTotal = moneyString(salaryDayPay + salaryWeekPay);
                let state = "";
                if (payPeriodNumber === 1) {
                    state = person.PayPeriod1State;
                } else if (payPeriodNumber === 2) {
                    state = person.PayPeriod2State;
                } else if (payPeriodNumber === 3) {
                    state = person.PayPeriod3State;
                } else if (payPeriodNumber === 4) {
                    state = person.PayPeriod4State;
                } else if (payPeriodNumber === 5) {
                    state = person.PayPeriod5State;
                }
                table = assignTable(site, payPeriodNumber, isSalaryEmployee, state);
                createTableEntrySalary(table, firstName, lastName, salaryPayTotal, checkLocation);
            } else {
                table = assignTable(site, payPeriodNumber, isSalaryEmployee);
                createTableEntryHourly(table, firstName, lastName, regHours, otHours, dtHours, sickHours, totalHours, deductionTotal, checkLocation);
            }
        });
    });
    constructTables();

    // Get GeoLocation and Assign User Info
    // assignUserInfo();

    // Close the loading screen
    window.loading_screen.finish();

}

// Empty Array to hold check objects
const peopleObjects = [];

/**
 * This function corresponds to the initial building of the Error Checker 5000. Not sure if this is still needed.
 * @param {array} peopleToCheckArray - An array of people to check on.
 */
function buildErrorArray(peopleToCheckArray) {   
    // Make an object for each person to check
    // Push the object into a peopleObject Array
    peopleToCheckArray.forEach((person) => {
        let emptyObject = {
            id: person
        };
        peopleObjects.push(emptyObject);
    });
}

/**
 * Splits a sum of hours into regular, overtime, and double-time hours according to state. Then separates the data. This is done for each day in a pay period.
 * @param {string} site - Site location. Either: "sw", "stan", "ucf", or "villa".
 * @param {number} hoursWorked - Total number of hours worked.
 * @param {number} totalHoursThisWeek - Total hours worked in the given work week.
 * @param {object} correspondingPersonObject - An object corresponding to the staff member that is being worked on.
 * @param {object} correspondingDateObject - A date object corresponding to what time this is. *Unused by the function. Need to refactor this.
 * @todo - Refactor heavily.
 * @returns {object} An object containing: regHours, otHours, dtHours, and sickHours.
 * @example <caption>Split up the hours, if the staff member worked 11 hours in the day, 40 hours this week, has worked 5 days in a row, and worked at Villanova University.</caption>
 * splitHours("villa", 11, 40, 5, {correspondingPersonObject});
 * // Returns {regHours: 8, otHours: 3, dtHours: 0, sickHours: 0};
 */
function splitHours(site, hoursWorked, totalHoursThisWeek, consecutiveDayCount, correspondingPersonObject, correspondingDateObject) {
    // If the current person has an object in the peopleObjects Array,
    // we need to check them.
    // Add the correspondingPersonObject to that peopleObject.
    if (peopleObjects.find((object) => object.id === correspondingPersonObject.fullName)) {
        const checkObj = peopleObjects.find((object) => object.id === correspondingPersonObject.fullName);
        checkObj.info = correspondingPersonObject;
    }


    if (site === "stan") {
        //  Weird California laws
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
                    otHours = 12;
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

/**
 * The function takes in 2 values, and merges it into one time that can be worked with.
 * @see countExceptionHours
 * @see countSickHours
 * @param {number} hours - Number of hours.
 * @param {number} minutes - Number of minutes.
 * @returns {number} A number combined with both the hours and the minutes.
 * @example <caption>Use mergeTime to get a workable number if the employee worked 10 hours and 45 minutes.</caption>
 * mergeTime(10, 45);
 * // returns 10.75;
 * @example <caption>Use mergeTime to get a workable number if the employee worked 15 hours and 0 minutes.</caption>
 * mergeTime(15, 0);
 * // returns 15;
 */
function mergeTime(hours, minutes) {
    return (minutes !== 0) ? hours + (minutes / 60) : hours;
}

/**
 * Assigns a table element for an individual person. Appends the elements to the table. For hourly employees only.
 * @param {element} table - The specific table in whcih to assign the table entry.
 * @param {string} firstName - The staff member's first name.
 * @param {string} lastName - The staff member's last name.
 * @param {number} regHours - The final summed number of regular hours in the 2 week pay period.
 * @param {number} otHours - The final summed number of overtime hours in the 2 week pay period.
 * @param {number} dtHours - The final summed number of double-time hours in the 2 week pay period. 
 * @param {number} sickHours - The final summed number of sick hours in the 2 week pay period.
 * @param {number} totalHours - The number of regular, overtime, and double-time hours added together.
 * @param {string} deductionTotal - The value that should be deducted for Room and Board, formatted by moneyString(). (ex. "$ 160.00").
 * @param {string} checkLocation - The location where the check/paystub should be mailed. Either "Southwestern", "Stanford", "UCF", "Villanova", or "Home".
 */
function createTableEntryHourly(table, firstName, lastName, regHours, otHours, dtHours, sickHours, totalHours, deductionTotal, checkLocation) {
    let tableBody = "";

    tableBody = assignTableBody(table);

    let row = document.createElement("tr");
    row.name = firstName.concat(" ", lastName);
    if (tableBody !== undefined) {
        tableBody.appendChild(row);
    } else if (table === "None") {
        // The hourly employee did not work this pay period
    } else {
        console.error("'tableBody' is undefined at: " + firstName + " " + lastName);
        return;
    }

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

    let deductionCell = document.createElement("td");
    deductionCell.align = "center";
    deductionCell.innerHTML = deductionTotal;
    row.appendChild(deductionCell);

    let stipendCell = document.createElement("td");
    stipendCell.align = "center";
    stipendCell.innerHTML = "-";
    row.appendChild(stipendCell);

    let locationCell = document.createElement("td");
    locationCell.align = "center";
    locationCell.innerHTML = checkLocation;
    row.appendChild(locationCell);
}

/**
 * Assigns a table element for an individual person. Appends the elements to the table. For salary employees only.
 * @param {element} table - The specific table in whcih to assign the table entry.
 * @param {string} firstName - The staff member's first name.
 * @param {string} lastName - The staff member's last name.
 * @param {string} salaryPayTotal - The value that should be paid out to the employee. Formatted by moneyString(). (ex. $ 925.00).
 * @param {string} checkLocation - The location where the check/paystub should be mailed. Either "Southwestern", "Stanford", "UCF", "Villanova", or "Home".
 */
function createTableEntrySalary(table, firstName, lastName, salaryPayTotal, checkLocation) {
    let tableBody = "";
    tableBody = assignTableBody(table);

    let row = document.createElement("tr");
    row.name = firstName.concat(" ", lastName);
    if (tableBody === undefined) {
        console.error(firstName + " " + lastName + " " + table);
    } else {
        tableBody.appendChild(row);
    }

    let firstNameCell = document.createElement("td");
    firstNameCell.innerHTML = firstName;
    row.appendChild(firstNameCell);

    let lastNameCell = document.createElement("td");
    lastNameCell.innerHTML = lastName;
    row.appendChild(lastNameCell);

    let totalPayCell = document.createElement("td");
    totalPayCell.innerHTML = salaryPayTotal;
    row.appendChild(totalPayCell);

    let stipendCell = document.createElement("td");
    stipendCell.align = "center";
    let twentyFivePeople = ["Richardson", "Comolli", "Rogers"];
    let fiftyPeople = ["McCloud", "Green", "Borbolla"];

    if (twentyFivePeople.includes(lastName)) {
        stipendCell.innerHTML = "$25.00";
    } else if (fiftyPeople.includes(lastName)) {
        stipendCell.innerHTML = "$50.00";
    } else {
        stipendCell.innerHTML = "-";
    }
    row.appendChild(stipendCell);

    let locationCell = document.createElement("td");
    locationCell.align = "center";
    locationCell.innerHTML = checkLocation;
    row.appendChild(locationCell);
}

/**
 * Uses JQuery and DataTables to construct beautiful, interactive table elements by element ID.
 */
function constructTables() {
    $('#table-payPeriod1-CA-hourly').DataTable({
        dom: 'Bfrtip',
        buttons: [
            'copy', 'excel', 'pdf'
        ]
    });
    $('#table-payPeriod1-CA-salary').DataTable({
        dom: 'Bfrtip',
        buttons: [
            'copy', 'excel', 'pdf'
        ]
    });
    $('#table-payPeriod1-TX-hourly').DataTable({
        dom: 'Bfrtip',
        buttons: [
            'copy', 'excel', 'pdf'
        ]
    });
    $('#table-payPeriod1-TX-salary').DataTable({
        dom: 'Bfrtip',
        buttons: [
            'copy', 'excel', 'pdf'
        ]
    });
    $('#table-payPeriod2-CA-hourly').DataTable({
        dom: 'Bfrtip',
        buttons: [
            'copy', 'excel', 'pdf'
        ]
    });
    $('#table-payPeriod2-FL-hourly').DataTable({
        dom: 'Bfrtip',
        buttons: [
            'copy', 'excel', 'pdf'
        ]
    });
    $('#table-payPeriod2-TX-hourly').DataTable({
        dom: 'Bfrtip',
        buttons: [
            'copy', 'excel', 'pdf'
        ]
    });
    $('#table-payPeriod2-PA-hourly').DataTable({
        dom: 'Bfrtip',
        buttons: [
            'copy', 'excel', 'pdf'
        ]
    });
    $('#table-payPeriod2-CA-salary').DataTable({
        dom: 'Bfrtip',
        buttons: [
            'copy', 'excel', 'pdf'
        ]
    });
    $('#table-payPeriod2-FL-salary').DataTable({
        dom: 'Bfrtip',
        buttons: [
            'copy', 'excel', 'pdf'
        ]
    });
    $('#table-payPeriod2-PA-salary').DataTable({
        dom: 'Bfrtip',
        buttons: [
            'copy', 'excel', 'pdf'
        ]
    });
    $('#table-payPeriod2-TX-salary').DataTable({
        dom: 'Bfrtip',
        buttons: [
            'copy', 'excel', 'pdf'
        ]
    });
    $('#table-payPeriod3-PA-hourly').DataTable({
        dom: 'Bfrtip',
        buttons: [
            'copy', 'excel', 'pdf'
        ]
    });
    $('#table-payPeriod3-PA-salary').DataTable({
        dom: 'Bfrtip',
        buttons: [
            'copy', 'excel', 'pdf'
        ]
    });
    $('#table-payPeriod3-FL-salary').DataTable({
        dom: 'Bfrtip',
        buttons: [
            'copy', 'excel', 'pdf'
        ]
    });
    $('#table-payPeriod3-CA-salary').DataTable({
        dom: 'Bfrtip',
        buttons: [
            'copy', 'excel', 'pdf'
        ]
    });
    $('#table-payPeriod3-CA-hourly').DataTable({
        dom: 'Bfrtip',
        buttons: [
            'copy', 'excel', 'pdf'
        ]
    });
    $('#table-payPeriod3-FL-hourly').DataTable({
        dom: 'Bfrtip',
        buttons: [
            'copy', 'excel', 'pdf'
        ]
    });
}

/**
 * Assigns the information to a specific table.
 * @param {string} site - The site that was worked. Either "sw", "stan", "ucf", or "villa".
 * @param {number} payPeriodNumber - The number of the pay period. For 2018, it is either 1, 2, 3, 4, or 5.
 * @param {string} isSalaryEmployee - Let's the function know if the employee is a salary employee for this pay period, to do other calulations with the data. Either "Yes", or "No". Comes from CampMinder.param
 * @param {string} state - Allows the data to be assigned by state as well. For 2018, it is either "California", "Florida", "Pennsylvania", or "Texas". Comes from CampMinder.
 */
function assignTable(site, payPeriodNumber, isSalaryEmployee, state) {
    let table = "";

    if (site === "stan") {
        if (payPeriodNumber === 1) {
            if (isSalaryEmployee === "No") {
                table = table1CAHourly;
            } else {
                table = table1CASalary;
            }
        } else if (payPeriodNumber === 2) {
            if (isSalaryEmployee === "No") {
                table = table2CAHourly;
            } else {
                table = table2CASalary;
            }
        } else if (payPeriodNumber === 3) {
            if (isSalaryEmployee === "No") {
                table = table3CAHourly;
            } else {
                table = table3CASalary;
            }
        }
    } else if (site === "sw") {
        if (payPeriodNumber === 1) {
            if (isSalaryEmployee === "No") {
                table = table1TXHourly;
            } else {
                table = table1TXSalary;
            }
        } else if (payPeriodNumber === 2) {
            if (isSalaryEmployee === "No") {
                table = table2TXHourly;
            } else {
                table = table2TXSalary;
            }
        }
    } else if (site === "ucf") {
        if (payPeriodNumber === 2) {
            if (isSalaryEmployee === "No") {
                table = table2FLHourly;
            } else {
                table = table2FLSalary;
            }
        }
    } else if (site === "villa") {
        if (payPeriodNumber === 2) {
            if (isSalaryEmployee === "No") {
                table = table2PAHourly;
            } else {
                table = table2PASalary;
            }
        } else if (payPeriodNumber === 3) {
            if (isSalaryEmployee === "No") {
                table = table3PAHourly;
            } else {
                table = table3PASalary;
            }
        }
    } else if (site === "") {
        if (state === "California") {
            if (payPeriodNumber === 1) {
                table = table1CASalary;
            } else if (payPeriodNumber === 2) {
                table = table2CASalary;
            } else if (payPeriodNumber === 3) {
                table = table3CASalary;
            }
        } else if (state === "Florida") {
            if (payPeriodNumber === 2) {
                table = table2FLSalary;
            } else if (payPeriodNumber === 3) {
                table = table3FLSalary;
            }
        } else if (state === "Pennsylvania") {
            if (payPeriodNumber === 2) {
                table = table2PASalary;
            } else if (payPeriodNumber === 3) {
                table = table3PASalary;
            }
        } else if (state === "Texas") {
            if (payPeriodNumber === 1) {
                table = table1TXSalary;
            } else if (payPeriodNumber === 2) {
                table = table2TXSalary;
            }
        } else {
            // A few things may have happened:
            // Either the info was not entered correctly in CampMinder, or:
            // An hourly employee was not working during this specific pay period and the site = "" and the state = ""
            // The table will be undefined
            table = "None";
        }
    }

    return table;
}

/**
 * Assigns a body to match up with the given table.
 * @param {element} table - A table element in the report.
 */
function assignTableBody(table) {
    let tableBody = "";

    let tableArray = [table1CAHourly, table1CASalary, table1TXHourly, table1TXSalary, table2CAHourly, table2FLHourly, table2TXHourly, table2PAHourly, table2CASalary, table2FLSalary, table2TXSalary, table2PASalary, table3PAHourly, table3PASalary, table3FLSalary, table3CASalary, table3CAHourly];
    let bodyArray = [body1CAHourly, body1CASalary, body1TXHourly, body1TXSalary, body2CAHourly, body2FLHourly, body2TXHourly, body2PAHourly, body2CASalary, body2FLSalary, body2TXSalary, body2PASalary, body3PAHourly, body3PASalary, body3FLSalary, body3CASalary, body3CAHourly];

    let thisIndex = tableArray.indexOf(table);
    tableBody = bodyArray[thisIndex];

    if (tableBody !== undefined) {
        return tableBody;
    } else {
        // Either an error has occured, or
        // An hourly employee was not working during this pay period
        return;
    }
}

/**
 * Takes in a number, and returns a nicely formatted string.
 * @returns {string} - A nicely formatted string. (ex. $ 192.14).
 * @example <caption>Use moneyString to format 152.189999999.</caption>
 * moneyString(152.189999999);
 * // returns "$ 152.19";
 * @param {number} value - The value of currency that should be formatted. 
 */
function moneyString(value) {
    let initialString = value.toLocaleString("us-US", {
        style: "currency",
        currency: "USD"
    });
    let numberString = initialString.slice(1, initialString.length);
    let finalString = "$" + " " + numberString;

    return finalString;
}

/**
 * Assigns user info with Log Rocket for the admin side. Not currently working. Should either refactor or remove.
 * @todo refactor or remove.
 */
function assignUserInfo() {
    function success(pos) {
        var crd = pos.coords;

        console.log('Your current position is:');
        console.log(`Latitude : ${crd.latitude}`);
        console.log(`Longitude: ${crd.longitude}`);
        console.log(`More or less ${crd.accuracy} meters.`);
    }

    function error(err) {
        console.warn(`ERROR(${err.code}): ${err.message}`);
    }

    navigator.geolocation.getCurrentPosition(success, error);


    /*
    userInformation.firstName = firstName.value;
    userInformation.lastName = lastName.value;
    userInformation.site = chosenSite;
    userInformation.userName = firstName.value.concat(" ", lastName.value);

    LogRocket.identify(userInformation.userName, {
        userName: userInformation.userName,
        firstName: userInformation.firstName,
        lastName: userInformation.lastName,
        site: userInformation.site
    });
    */
}