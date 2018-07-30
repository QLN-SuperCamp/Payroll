// TODO: Switch out scroll library and replace with native browser scrollIntoView API

// Log Rocket Store User Information
var userInformation = {};

// Declare the current camp variable
var currentCamp = "none";
var currentCampValue = "";

var mainForm = document.getElementById('main-form');

// Create initial alert
var alert = document.getElementById('alert');
var span1 = document.createElement("span");
span1.innerHTML = "Need help? ";
var alertLink = document.createElement("a");
alertLink.target = "_blank";
alertLink.href = "./guide.html";
alertLink.classList.add("alert-link");
alertLink.innerHTML = "Read our guide";
var span2 = document.createElement("span");
span2.innerHTML = " for more information.";
alert.appendChild(span1);
alert.appendChild(alertLink);
alert.appendChild(span2);

// Data to send through FormBody
var workingTLs = [];
var workingLCs = [];
var workingWPs = [];
var workingOCs = [];
var sickTLs = [];
var sickLCWPs = [];
var sickOCs = [];
var exceptionTLs = [];
var exceptionLCs = [];
var exceptionWPs = [];
var exceptionOCs = [];

var exceptionTLsInfo = [];
var exceptionLCWPsInfo = [];
var exceptionOCsInfo = [];

var lcCheckboxes = [];
var wpCheckboxes = [];

var chosenSite = "";

var tlIsSick = false;
var lcwpIsSick = false;
var ocIsSick = false;

var sickTLsInfo = [];
var sickLCWPsInfo = [];
var sickOCsInfo = [];

var checkedSickTLCheckboxes = [];
var checkedSickLCWPCheckboxes = [];
var checkedSickOCCheckboxes = [];

// Form Cards
var siteInfoCard = document.getElementById('site-info-card');
var tlCard = document.getElementById('tl-card');
var lcwpCard = document.getElementById('lcwp-card');
var ocCard = document.getElementById('oc-card');
var allPositionCards = [tlCard, lcwpCard, ocCard];

// Card Buttons
var siteInfoContinueButton = document.getElementById('site-info-continue-button');
siteInfoContinueButton.addEventListener('click', showPositionCards);
var continueButtonContainer = document.getElementById('continue-button-container');
var sendDataButton = document.getElementById('send-data-button');

// Invalid Feedback
var invalidFeedbackFirstName = document.getElementById('invalid-feedback-first-name');
var invalidFeedbackLastName = document.getElementById('invalid-feedback-last-name');
var invalidFeedbackSite = document.getElementById('invalid-feedback-site');
var invalidFeedbackCamp = document.getElementById('invalid-feedback-camp');

// Name Inputs
var firstName = document.getElementById('firstName');
var lastName = document.getElementById('lastName');
firstName.addEventListener("input", checkName);
lastName.addEventListener("input", checkName);

// Site Inputs
var siteSW = document.getElementById('site-sw');
var siteSTAN = document.getElementById('site-stan');
var siteUCF = document.getElementById('site-ucf');
var siteVILLA = document.getElementById('site-villa');
var allSiteInputs = [siteSW, siteSTAN, siteUCF, siteVILLA];

// Camp Groups
var noSiteText = document.getElementById('no-site-text');
var swCamps = document.getElementById('sw-camps');
var stanCamps = document.getElementById('stan-camps');
var ucfCamps = document.getElementById('ucf-camps');
var villaCamps = document.getElementById('villa-camps');

// Southwestern University Camps
var swCamp1 = document.getElementById('sw-camp1');
var swCamp2 = document.getElementById('sw-camp2');
var allSWCampInputs = [swCamp1, swCamp2];

// Stanford University Camps
var stanCamp1 = document.getElementById('stan-camp1');
var stanCamp2 = document.getElementById('stan-camp2');
var stanCamp3 = document.getElementById('stan-camp3');
var stanCamp4 = document.getElementById('stan-camp4');
var stanCamp5 = document.getElementById('stan-camp5');
var stanCamp6 = document.getElementById('stan-camp6');
var allSTANCampInputs = [stanCamp1, stanCamp2, stanCamp3, stanCamp4, stanCamp5, stanCamp6];

// University of Central Florida Camps
var ucfCamp1 = document.getElementById('ucf-camp1');
var ucfCamp2 = document.getElementById('ucf-camp2');
var allUCFCampInputs = [ucfCamp1, ucfCamp2];

// Villanova Camps
var villaCamp1 = document.getElementById('villa-camp1');
var villaCamp2 = document.getElementById('villa-camp2');
var allVILLACampInputs = [villaCamp1, villaCamp2];

// All Camps
var allCamps = [swCamp1, swCamp2, stanCamp1, stanCamp2, stanCamp3, stanCamp4, stanCamp5, stanCamp6, ucfCamp1, ucfCamp2, villaCamp1, villaCamp2];

// Listen for the user to select a site
siteSW.addEventListener("click", siteChosen);
siteSTAN.addEventListener("click", siteChosen);
siteUCF.addEventListener("click", siteChosen);
siteVILLA.addEventListener("click", siteChosen);

// Listen for the user to select a camp
allCamps.forEach(function (camp) {
    camp.addEventListener('click', campChosen);
});

// Dates
var dateMonth = document.getElementById('date-month');
var dateDay = document.getElementById('date-day');

// Listen for the date changing (either by default or by user)
dateMonth.addEventListener("change", dateChanged);
dateDay.addEventListener("change", dateChanged);

// Team Leader Hours Worked
var hoursWorkedTL = document.getElementById('hours-worked-tl');
var hoursWorkedLCWP = document.getElementById('hours-worked-lc-wp');
var hoursWorkedOC = document.getElementById('hours-worked-oc');

// Div that holds the staff member checkboxes
var staffMembersTLContainer = document.getElementById('staff-members-tl-container');
var staffMembersLCWPContainer = document.getElementById('staff-members-lc-wp-container');
var staffMembersOCContainer = document.getElementById('staff-members-oc-container');
var allStaffMembersContainers = [staffMembersTLContainer, staffMembersLCWPContainer, staffMembersOCContainer];

// Variable for the current staff member input checkboxes
var tlCheckboxes = [];
var lcwpCheckboxes = [];
var ocCheckboxes = [];
var allTypesCheckboxes = [tlCheckboxes, lcwpCheckboxes, ocCheckboxes];

// Div that holds the "exceptions" to the default hours worked that day
var exceptionsTLContainer = document.getElementById('exceptions-container-tl');
var exceptionsLCWPContainer = document.getElementById('exceptions-container-lc-wp');
var exceptionsOCContainer = document.getElementById('exceptions-container-oc');
var allExceptionsContainers = [exceptionsTLContainer, exceptionsLCWPContainer, exceptionsOCContainer];

// Title for the TL "exceptions" container
var exceptionsTitleTL = document.getElementById('exceptions-title-tl');
var exceptionsTitleLCWP = document.getElementById('exceptions-title-lc-wp');
var exceptionsTitleOC = document.getElementById('exceptions-title-oc');
var allExceptionsTitles = [exceptionsTitleTL, exceptionsTitleLCWP, exceptionsTitleOC];

// Sick Switches
var tlSickSwitchInput = document.getElementById('tl-sick-switch-input');
var tlSickSwitchSpan = document.getElementById('tl-sick-switch-span');
var lcwpSickSwitchInput = document.getElementById('lc-wp-sick-switch-input');
var lcwpSickSwitchSpan = document.getElementById('lc-wp-sick-switch-span');
var ocSickSwitchInput = document.getElementById('oc-sick-switch-input');
var ocSickSwitchSpan = document.getElementById('oc-sick-switch-span');
var allSickSwitchInputs = [tlSickSwitchInput, lcwpSickSwitchInput, ocSickSwitchInput];
var allSickSwitchSpans = [tlSickSwitchSpan, lcwpSickSwitchSpan, ocSickSwitchSpan];

// Listen if the user changes the switch
allSickSwitchInputs.forEach(function (groupInput) {
    groupInput.addEventListener('change', sickSwitched);
});

// Sick Staff Containers
var sickStaffTLContainer = document.getElementById('sick-staff-tl-container');
var sickStaffLCWPContainer = document.getElementById('sick-staff-lc-wp-container');
var sickStaffOCContainer = document.getElementById('sick-staff-oc-container');

// Sick Staff Titles
var sickStaffTLTitle = document.getElementById('sick-staff-tl-title');
var sickStaffLCWPTitle = document.getElementById('sick-staff-lc-wp-title');
var sickStaffOCTitle = document.getElementById('sick-staff-oc-title');
var allSickTitles = [sickStaffTLTitle, sickStaffLCWPTitle, sickStaffOCTitle];

// Variable for the current sick staff member input checkboxes
var sickTLCheckboxes = [];
var sickLCWPCheckboxes = [];
var sickOCCheckboxes = [];
var allSickGroupCheckboxes = [sickTLCheckboxes, sickLCWPCheckboxes, sickOCCheckboxes];

// Div that holds the "exceptions" to the default hours worked that day - sick
var sickExceptionsTLContainer = document.getElementById('sick-exceptions-container-tl');
var sickExceptionsLCWPContainer = document.getElementById('sick-exceptions-container-lc-wp');
var sickExceptionsOCContainer = document.getElementById('sick-exceptions-container-oc');
var allSickExceptionsContainers = [sickExceptionsTLContainer, sickExceptionsLCWPContainer, sickExceptionsOCContainer];

// Title for the sick "exceptions" containers
var sickExceptionsTitleTL = document.getElementById('sick-exceptions-title-tl');
var sickExceptionsTitleLCWP = document.getElementById('sick-exceptions-title-lc-wp');
var sickExceptionsTitleOC = document.getElementById('sick-exceptions-title-oc');

// Warnings for sick exceptions
var exceptionsWarningTL = document.getElementById('exceptions-warning-tl');
var exceptionsWarningLCWP = document.getElementById('exceptions-warning-lcwp');
var exceptionsWarningOC = document.getElementById('exceptions-warning-oc');

// Make sure that switches and checkboxes and radios are blank when the page first loads
document.addEventListener("DOMContentLoaded", setBlank);

/**
 * Runs when a site has been chosen from the list of sites in the Payroll Form. Shows the corresponding camps for that site, and hides all other camps. Also calls resetInfo() and checkEmptyPositions().
 */
function siteChosen() {
    var value = this.value;

    hideThis(invalidFeedbackSite);

    if (value === "sw") {
        hideThis([stanCamps, ucfCamps, villaCamps, noSiteText]);
        showThis(swCamps);
        chosenSite = "sw";
    } else if (value === "stan") {
        hideThis([swCamps, ucfCamps, villaCamps, noSiteText]);
        showThis(stanCamps);
        chosenSite = "stan";
    } else if (value === "ucf") {
        hideThis([swCamps, stanCamps, villaCamps, noSiteText]);
        showThis(ucfCamps);
        chosenSite = "ucf";
    } else {
        hideThis([swCamps, stanCamps, ucfCamps, noSiteText]);
        showThis(villaCamps);
        chosenSite = "villa";
    }

    resetInfo();
    checkEmptyPositions();
}

/**
 * Runs when a camp has been selected from the list of camps in the Payroll Form. Enables the dates for that specific camp. Also calls resetInfo(), dateChanged() and addStaffMembers().
 */
function campChosen() {
    var value = this.value;

    hideThis(invalidFeedbackCamp);

    // Reset the date so that anything is enabled
    monthsToEnable = [0, 1, 2, 3];
    daysToEnable = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

    enableDates(monthsToEnable, daysToEnable);

    // Set date depending on selected camp. Also state which camp is selected. Disable date options depending on selection.
    if (value === "sw-camp1") {
        dateMonth.value = "6";
        dateDay.value = "19";
        currentCamp = "sw-camp1";
        monthsToDisable = [0, 2, 3];
        daysToDisable = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 31];
        disableDates(monthsToDisable, daysToDisable);
    } else if (value === "sw-camp2") {
        dateMonth.value = "7";
        dateDay.value = "3";
        currentCamp = "sw-camp2";
        monthsToDisable = [0, 1, 3];
        daysToDisable = [0, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
        disableDates(monthsToDisable, daysToDisable);
    } else if (value === "stan-camp1") {
        dateMonth.value = "6";
        dateDay.value = "22";
        currentCamp = "stan-camp1";
        monthsToDisable = [0, 3];
        daysToDisable = [0, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 31];
        disableDates(monthsToDisable, daysToDisable);
    } else if (value === "stan-camp2") {
        dateMonth.value = "7";
        dateDay.value = "9";
        currentCamp = "stan-camp2";
        monthsToDisable = [0, 1, 3];
        daysToDisable = [0, 1, 2, 3, 4, 5, 6, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
        disableDates(monthsToDisable, daysToDisable);
    } else if (value === "stan-camp3") {
        dateMonth.value = "7";
        dateDay.value = "17";
        currentCamp = "stan-camp3";
        monthsToDisable = [0, 1, 3];
        daysToDisable = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 23, 24, 25, 26, 27, 28, 29, 30, 31];
        disableDates(monthsToDisable, daysToDisable);
    } else if (value === "stan-camp4") {
        dateMonth.value = "7";
        dateDay.value = "25";
        currentCamp = "stan-camp4";
        monthsToDisable = [0, 1, 3];
        daysToDisable = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 31];
        disableDates(monthsToDisable, daysToDisable);
    } else if (value === "stan-camp5") {
        dateMonth.value = "8";
        dateDay.value = "2";
        currentCamp = "stan-camp5";
        monthsToDisable = [0, 1];
        daysToDisable = [0, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
        disableDates(monthsToDisable, daysToDisable);
    } else if (value === "stan-camp6") {
        dateMonth.value = "8";
        dateDay.value = "14";
        currentCamp = "stan-camp6";
        monthsToDisable = [0, 1, 2];
        daysToDisable = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
        disableDates(monthsToDisable, daysToDisable);
    } else if (value === "ucf-camp1") {
        dateMonth.value = "7";
        dateDay.value = "3";
        currentCamp = "ucf-camp1";
        monthsToDisable = [0, 1, 3];
        daysToDisable = [0, 1, 2, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
        disableDates(monthsToDisable, daysToDisable);
    } else if (value === "ucf-camp2") {
        dateMonth.value = "7";
        dateDay.value = "17";
        currentCamp = "ucf-camp2";
        monthsToDisable = [0, 1, 3];
        daysToDisable = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 24, 25, 26, 27, 28, 29, 30, 31];
        disableDates(monthsToDisable, daysToDisable);
    } else if (value === "villa-camp1") {
        dateMonth.value = "7";
        dateDay.value = "3";
        currentCamp = "villa-camp1";
        monthsToDisable = [0, 1, 3];
        daysToDisable = [0, 1, 2, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
        disableDates(monthsToDisable, daysToDisable);
    } else {
        dateMonth.value = "7";
        dateDay.value = "17";
        currentCamp = "villa-camp2";
        monthsToDisable = [0, 1, 3];
        daysToDisable = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 24, 25, 26, 27, 28, 29, 30, 31];
        disableDates(monthsToDisable, daysToDisable);
    }

    currentCampValue = this.parentNode.lastElementChild.textContent;

    resetInfo();
    dateChanged();
    addStaffMembers();
}

/**
 * Runs when the date is selected and changed in the Payroll Form. Sets hours worked for each position type for each day of that camp.
 */
function dateChanged() {
    if (currentCamp === "sw-camp1") {
        if (dateDay.value === "19") {
            // Day -6
            setHoursWorked(0, 8, 9);
        } else if (dateDay.value === "20") {
            // Day -5
            setHoursWorked(0, 10, 9);
        } else if (dateDay.value === "21") {
            // Day -4
            setHoursWorked(10, 11, 9);
        } else if (dateDay.value === "22" || dateDay.value === "23" || dateDay.value === "24") {
            // Day -3, -2, -1
            setHoursWorked(11, 11, 9);
        } else if (dateDay.value === "28") {
            // Day 4
            setHoursWorked(15, 11, 0);
        } else {
            // Day 1, 2, 3, 5, 6
            setHoursWorked(15, 11, 9);
        }
    } else if (currentCamp === "sw-camp2") {
        if (dateDay.value === "1" || dateDay.value === "9") {
            // Day -2 and Departure Day
            setHoursWorked(0, 0, 0);
        } else if (dateDay.value === "2") {
            // Day -1
            setHoursWorked(0, 0, 4);
        } else if (dateDay.value === "6") {
            // Day 4
            setHoursWorked(15, 11, 0);
        } else {
            // Day 1, 2, 3, 5, 6
            setHoursWorked(15, 11, 9);
        }
    } else if (currentCamp === "stan-camp1") {
        if (dateMonth.value === "6") {
            if (dateDay.value === "22") {
                // Day -5
                setHoursWorked(0, 0, 0);
            } else if (dateDay.value === "23") {
                // Day -4
                setHoursWorked(10, 10, 9);
            } else if (dateDay.value === "24" || dateDay.value === "25" || dateDay.value === "26" || dateDay.value === "27" || dateDay.value === "28" || dateDay.value === "30") {
                // Day -3, -2, -1, 1, 2, 4
                setHoursWorked(11, 11, 9);
            } else if (dateDay.value === "29") {
                // Day 3
                setHoursWorked(11, 11, 0);
            }
        } else if (dateMonth.value === "7") {
            if (dateDay.value === "1" || dateDay.value === "2" || dateDay.value === "3" || dateDay.value === "4" || dateDay.value === "5") {
                // Day 5, 6, 7, 8, 9
                setHoursWorked(11, 11, 9);
            } else if (dateDay.value === "6") {
                // Day 10
                setHoursWorked(10, 10, 9);
            }
        }
    } else if (currentCamp === "stan-camp2") {
        if (dateDay.value === "7") {
            // Day -2
            setHoursWorked(0, 0, 5);
        } else if (dateDay.value === "8") {
            // Day -1
            setHoursWorked(0, 0, 0);
        } else if (dateDay.value === "9" || dateDay.value === "10" || dateDay.value === "11" || dateDay.value === "13" || dateDay.value === "14") {
            // Day 1, 2, 3, 5, 6
            setHoursWorked(11, 11, 9);
        } else if (dateDay.value === "12") {
            // Day 4
            setHoursWorked(11, 11, 0);
        }
    } else if (currentCamp === "stan-camp3") {
        if (dateDay.value === "15") {
            // Day -2
            setHoursWorked(0, 0, 5);
        } else if (dateDay.value === "16") {
            // Day -1
            setHoursWorked(0, 0, 0);
        } else if (dateDay.value === "17" || dateDay.value === "18" || dateDay.value === "19" || dateDay.value === "20" || dateDay.value === "21" || dateDay.value === "22") {
            // Day 1, 2, 3, 4, 5, 6
            setHoursWorked(11, 11, 9);
        }
    } else if (currentCamp === "stan-camp4") {
        if (dateDay.value === "23") {
            // Day -2
            setHoursWorked(0, 0, 9);
        } else if (dateDay.value === "24") {
            // Day -1
            setHoursWorked(4, 4, 9);
        } else if (dateDay.value === "25" || dateDay.value === "26" || dateDay.value === "27" || dateDay.value === "29" || dateDay.value === "30") {
            // Day 1, 2, 3, 5, 6
            setHoursWorked(11, 11, 9);
        } else if (dateDay.value === "28") {
            // Day 4
            setHoursWorked(11, 11, 0);
        }
    } else if (currentCamp === "stan-camp5") {
        if (dateMonth.value === "7") {
            if (dateDay.value === "31") {
                // Day -2
                setHoursWorked(0, 0, 5);
            }
        } else if (dateMonth.value === "8") {
            if (dateDay.value === "1") {
                // Day -1
                setHoursWorked(0, 0, 0);
            } else if (dateDay.value === "2" || dateDay.value === "5" || dateDay.value === "6" || dateDay.value === "7" || dateDay.value === "8" || dateDay.value === "9" || dateDay.value === "10") {
                // Day 1, 4, 5, 6, 7, 8, 9
                setHoursWorked(11, 11, 9);
            } else if (dateDay.value === "3") {
                // Day 2
                setHoursWorked(11, 11, 0);
            } else if (dateDay.value === "4") {
                // Day 3
                setHoursWorked(11, 11, 5);
            } else if (dateDay.value === "11") {
                // Day 10
                setHoursWorked(10, 10, 9);
            }
        }
    } else if (currentCamp === "stan-camp6") {
        if (dateDay.value === "12") {
            // Day -2
            setHoursWorked(0, 0, 5);
        } else if (dateDay.value === "13") {
            // Day -1
            setHoursWorked(0, 0, 0);
        } else if (dateDay.value === "14" || dateDay.value === "15" || dateDay.value === "16" || dateDay.value === "17" || dateDay.value === "18" || dateDay.value === "19") {
            // Day 1, 2, 3, 4 ,5, 6
            setHoursWorked(11, 11, 9);
        }
    } else if (currentCamp === "ucf-camp1" || currentCamp === "villa-camp1") {
        if (dateDay.value === "3") {
            // Day -6
            setHoursWorked(0, 8, 9);
        } else if (dateDay.value === "4") {
            // Day -5
            setHoursWorked(0, 10, 9);
        } else if (dateDay.value === "5") {
            // Day -4
            setHoursWorked(10, 11, 9);
        } else if (dateDay.value === "6" || dateDay.value === "7" || dateDay.value === "8" || dateDay.value === "9" || dateDay.value === "10" || dateDay.value === "11" || dateDay.value === "13" || dateDay.value === "14") {
            // Day -3, -2, -1, 1, 2, 3, 5, 6
            setHoursWorked(11, 11, 9);
        } else if (dateDay.value === "12") {
            // Day 4
            setHoursWorked(11, 11, 0);
        }
    } else if (currentCamp === "ucf-camp2" || currentCamp === "villa-camp2") {
        if (dateDay.value === "15") {
            // Day -2
            setHoursWorked(0, 0, 0);
        } else if (dateDay.value === "16") {
            // Day -1
            setHoursWorked(0, 0, 4);
        } else if (dateDay.value === "17" || dateDay.value === "18" || dateDay.value === "19" || dateDay.value === "21" || dateDay.value === "22") {
            // Day 1, 2, 3, 5, 6
            setHoursWorked(11, 11, 9);
        } else if (dateDay.value === "20") {
            // Day 4
            setHoursWorked(11, 11, 0);
        }
    }
}

/**
 * Disables specific months and days from being available to the user in the Payroll Form.
 * @param {array} months - An array of numbers corresponding to months that should be disabled to the user. 
 * @param {array} days - An array of numbers corresponding to days of the month that should be disabled to the user. 
 * @see enableDates
 */
function disableDates(months, days) {
    months.forEach(function (option) {
        dateMonth.options[option].disabled = true;
    });
    days.forEach(function (option) {
        dateDay.options[option].disabled = true;
    });
}

/**
 * Enables specific months and days to be available to the user in the Payroll Form.
 * @param {array} months - An array of numbers corresponding to months that should be enabled to the user.
 * @param {array} days - An array of numbers corresponding to days of the month that should be enabled to the user.
 * @see disableDates 
 */
function enableDates(months, days) {
    months.forEach(function (option) {
        dateMonth.options[option].disabled = false;
    });
    days.forEach(function (option) {
        dateDay.options[option].disabled = false;
    });
}

/**
 * Adds staff members alphabetically and by position type to the form. Separated by camp.
 */
function addStaffMembers() {
    // Clear staff list containers
    allStaffMembersContainers.forEach(function (container) {
        container.innerHTML = "";
    });

    // Who is working this particular camp
    var staffMembersWorking = [];

    // Go through list of all staff members, and add them to the list if they are working this camp
    staffMembersAll.forEach(function (person) {
        if (person.campsWorking.includes(currentCamp)) {
            staffMembersWorking.push(person);
        }
    });

    // Go through staff members working, and make a new array if the person is going to be a [TL, LC, WP, OC]
    var staffMembersWorkingTL = staffMembersWorking.filter(isTL);
    var staffMembersWorkingLC = staffMembersWorking.filter(isLC);
    var staffMembersWorkingWP = staffMembersWorking.filter(isWP);
    var staffMembersWorkingOC = staffMembersWorking.filter(isOC);

    var staffMemberGroups = [staffMembersWorkingTL, staffMembersWorkingLC, staffMembersWorkingWP, staffMembersWorkingOC];

    // Sort each group of staff members alphabetically by last name
    staffMemberGroups.forEach(function (group) {
        group.sort(compareValues('lastName'));
    });

    // For each staff member group, add a label, checkbox, and span for each person in the appropriate location
    staffMemberGroups.forEach(function (group) {
        group.forEach(function (person) {
            var label = document.createElement('label');
            label.classList.add("custom-control", "custom-checkbox");

            var checkbox = document.createElement('input');
            checkbox.type = "checkbox";
            checkbox.classList.add("custom-control-input");
            checkbox.name = "" + person.firstName + " " + ("" + person.lastName);
            checkbox.value = "" + person.firstName + ("" + person.lastName);
            checkbox.id = ("" + person.firstName).toLowerCase() + "-" + ("" + person.lastName).toLowerCase();
            checkbox.checked = true;
            checkbox.addEventListener("change", checkExceptions);

            var span = document.createElement("span");
            span.classList.add("custom-control-label");
            span.innerHTML = assignSpanLabel();

            /**
             * Assigns each staff member a specific span as a label, containing their position for the chosen camp, and their full name.
             */
            function assignSpanLabel() {
                // If this person has a weird role thing
                if (person.specialStaffMember !== undefined) {
                    // If the current camp is the current person's weird camp
                    var specificSpecialPerson = person.specialStaffMember.filter(function (staff) {
                        return staff.id === person.firstName.concat(" ", person.lastName);
                    });

                    if (specificSpecialPerson[0].id === "Yolanda Drew") {
                        if (currentCamp === "sw-camp1") {
                            return "<em>(" + person.specialStaffMember[0].camps["sw-camp1"] + ")</em> " + person.firstName + " " + person.lastName;
                        } else if (currentCamp === "villa-camp1") {
                            return "<em>(" + person.specialStaffMember[0].camps["villa-camp1"] + ")</em> " + person.firstName + " " + person.lastName;
                        } else if (currentCamp === "sw-camp2") {
                            return "<em>(" + person.specialStaffMember[0].camps["sw-camp2"] + ")</em> " + person.firstName + " " + person.lastName;
                        }
                    } else if (specificSpecialPerson[0].id === "Nathan Tung") {
                        if (currentCamp === "stan-camp3") {
                            return "<em>(" + person.specialStaffMember[0].camps["stan-camp3"] + ")</em> " + person.firstName + " " + person.lastName;
                        } else if (currentCamp === "stan-camp4") {
                            return "<em>(" + person.specialStaffMember[0].camps["stan-camp4"] + ")</em> " + person.firstName + " " + person.lastName;
                        } else if (currentCamp === "stan-camp5") {
                            return "<em>(" + person.specialStaffMember[0].camps["stan-camp5"] + ")</em> " + person.firstName + " " + person.lastName;
                        }
                    } else if (specificSpecialPerson[0].id === "Isabella Stenz") {
                        if (currentCamp === "villa-camp1") {
                            return "<em>(" + person.specialStaffMember[0].camps["villa-camp1"] + ")</em> " + person.firstName + " " + person.lastName;
                        } else if (currentCamp === "villa-camp2") {
                            return "<em>(" + person.specialStaffMember[0].camps["villa-camp2"] + ")</em> " + person.firstName + " " + person.lastName;
                        } else if (currentCamp === "stan-camp5") {
                            return "<em>(" + person.specialStaffMember[0].camps["stan-camp5"] + ")</em> " + person.firstName + " " + person.lastName;
                        } else if (currentCamp === "stan-camp6") {
                            return "<em>(" + person.specialStaffMember[0].camps["stan-camp6"] + ")</em> " + person.firstName + " " + person.lastName;
                        }
                    } else if (specificSpecialPerson[0].id === "Leslie Braff") {
                        if (currentCamp === "villa-camp1") {
                            return "<em>(" + person.specialStaffMember[0].camps["villa-camp1"] + ")</em> " + person.firstName + " " + person.lastName;
                        } else if (currentCamp === "villa-camp2") {
                            return "<em>(" + person.specialStaffMember[0].camps["villa-camp2"] + ")</em> " + person.firstName + " " + person.lastName;
                        } else if (currentCamp === "stan-camp4") {
                            return "<em>(" + person.specialStaffMember[0].camps["stan-camp5"] + ")</em> " + person.firstName + " " + person.lastName;
                        }
                    } else if (specificSpecialPerson[0].id === "Miguel Vieyra") {
                        if (currentCamp === "stan-camp4") {
                            return "<em>(" + person.specialStaffMember[0].camps["stan-camp4"] + ")</em> " + person.firstName + " " + person.lastName;
                        }
                    } else if (specificSpecialPerson[0].id === "Stephanie Fung") {
                        if (currentCamp === "stan-camp4") {
                            return "<em>(" + person.specialStaffMember[0].camps["stan-camp4"] + ")</em> " + person.firstName + " " + person.lastName;
                        }
                    } else {
                        return undefined;
                    }
                } else return "<em>(" + ("" + person.position1) + ")</em> " + ("" + person.firstName) + " " + ("" + person.lastName);
            }

            if (group === staffMembersWorkingTL) {
                checkbox.dataset.position = "TL";
                staffMembersTLContainer.appendChild(label);
                label.appendChild(checkbox);
                label.appendChild(span);
                tlCheckboxes.push(checkbox);
            } else if (group === staffMembersWorkingLC || group === staffMembersWorkingWP) {
                checkbox.dataset.position = "LCWP";
                staffMembersLCWPContainer.appendChild(label);
                label.appendChild(checkbox);
                label.appendChild(span);
                lcwpCheckboxes.push(checkbox);

                if (group === staffMembersWorkingLC) {
                    lcCheckboxes.push(checkbox);
                } else if (group === staffMembersWorkingWP) {
                    wpCheckboxes.push(checkbox);
                }
            } else {
                checkbox.dataset.position = "OC";
                staffMembersOCContainer.appendChild(label);
                label.appendChild(checkbox);
                label.appendChild(span);
                ocCheckboxes.push(checkbox);
            }
        });
    });
}

/**
 * Checks the staff members who did not work the hours that were expected. Needs to be refactored.
 */
function checkExceptions() {
    // ! This is where you are running into trouble with Issue #3
    // ? Try NOT clearing the list of exceptions?
    /*
    // Clear list of exceptions
    allExceptionsContainers.forEach(function (container) {
        container.innerHTML = "";
    });
    */

    var uncheckedTLCheckboxes = [];
    var uncheckedLCWPCheckboxes = [];
    var uncheckedOCCheckboxes = [];

    var allCheckboxes = [tlCheckboxes, lcwpCheckboxes, ocCheckboxes];

    var inputsToKeep = [];
    var allNewInputs = [];
    var inputsToAppend = [];

    allCheckboxes.forEach(function (checkboxGroup) {
        var name = "";
        if (checkboxGroup === tlCheckboxes) {
            name = "tlCheckboxes";
        } else if (checkboxGroup === lcwpCheckboxes) {
            name = "lcwpCheckboxes";
        } else if (checkboxGroup === ocCheckboxes) {
            name = "ocCheckboxes";
        }
        // ! Current error of dataset is undefined
        // ! Suspect it is happening because ocCheckboxes is an array of length = 0 for Villanova (and SW, UCF)
        // * Adding check to see if the length is greater than 0
        if (checkboxGroup.length > 0) {
            if (checkboxGroup.some(isUnchecked)) {
                // Clear the array of unchecked checkboxes
                // FIX?
                var checkboxes = checkboxGroup;

                if (checkboxGroup[0].dataset.position === "TL") {
                    // Show the Title and the Container itself
                    showThis(exceptionsTitleTL, exceptionsWarningTL, exceptionsTLContainer);
                } else if (checkboxGroup[0].dataset.position === "LCWP") {
                    // Show the Title and the Container itself
                    showThis(exceptionsTitleLCWP, exceptionsWarningLCWP, exceptionsLCWPContainer);
                } else {
                    // Show the Title and the Container itself
                    showThis(exceptionsTitleOC, exceptionsWarningOC, exceptionsOCContainer);
                }

                // Go through checkboxes, if one is unchecked, add it to the array
                checkboxes.forEach(function (checkbox) {
                    if (checkbox.checked === false) {
                        if (checkboxGroup[0].dataset.position === "TL") {
                            uncheckedTLCheckboxes.push(checkbox);
                        } else if (checkboxGroup[0].dataset.position === "LCWP") {
                            uncheckedLCWPCheckboxes.push(checkbox);
                        } else {
                            uncheckedOCCheckboxes.push(checkbox);
                        }
                    }
                });

                var uncheckedCheckboxesGroup = [uncheckedTLCheckboxes, uncheckedLCWPCheckboxes, uncheckedOCCheckboxes];

                // Go through unchecked staff array, and in the container, add a label and input boxes
                uncheckedCheckboxesGroup.forEach(function (group) {
                    if (group.length > 0) {
                        if (group[0].dataset.position === "TL") {
                            // ! This could also be where you are running into Issue #3
                            // TESTING - Clear container first
                            // exceptionsTLContainer.innerHTML = "";

                            // Array to group labels with inputs
                            var nodeGroups = [];

                            // Go through each childNode in exceptionsContainer and separate based on label or input
                            exceptionsTLContainer.childNodes.forEach(function (child) {
                                // If the node is a label
                                if (child.classList.contains("form-label")) {
                                    // Create an object and put the label in it
                                    var personInputObject = {
                                        "label": child
                                    };
                                    // Push object to the nodeGroups Array
                                    nodeGroups.push(personInputObject);
                                } else {
                                    // If the node is the input
                                    // Find corresponding object in nodeGroups Array
                                    var correspondingObject = nodeGroups.find(function (object) {
                                        return object.label.name === child.name;
                                    });
                                    // Add on the inputGroup to the corresponding object
                                    correspondingObject.inputGroup = child;
                                }
                            });

                            // Go through each object in the nodeGroups Array
                            // If the inputGroup has something written in either the "hours" or "minutes":
                            // push that object to the inputsToKeep Array
                            nodeGroups.forEach(function (object) {
                                if (object.inputGroup.childNodes[0].value !== "" || object.inputGroup.childNodes[2].value !== "") {
                                    inputsToKeep.push(object);
                                }
                            });
                        } else if (group[0].dataset.position === "LCWP") {
                            // Array to group labels with inputs
                            var _nodeGroups = [];

                            // Go through each childNode in exceptionsContainer and separate based on label or input
                            exceptionsLCWPContainer.childNodes.forEach(function (child) {
                                // If the node is a label
                                if (child.classList.contains("form-label")) {
                                    // Create an object and put the label in it
                                    var personInputObject = {
                                        "label": child
                                    };
                                    // Push object to the nodeGroups Array
                                    _nodeGroups.push(personInputObject);
                                } else {
                                    // If the node is the input
                                    // Find corresponding object in nodeGroups Array
                                    var correspondingObject = _nodeGroups.find(function (object) {
                                        return object.label.name === child.name;
                                    });
                                    // Add on the inputGroup to the corresponding object
                                    correspondingObject.inputGroup = child;
                                }
                            });

                            // Go through each object in the nodeGroups Array
                            // If the inputGroup has something written in either the "hours" or "minutes":
                            // push that object to the inputsToKeep Array
                            _nodeGroups.forEach(function (object) {
                                if (object.inputGroup.childNodes[0].value !== "" || object.inputGroup.childNodes[2].value !== "") {
                                    inputsToKeep.push(object);
                                }
                            });
                        } else {
                            // Array to group labels with inputs
                            var _nodeGroups2 = [];

                            // Go through each childNode in exceptionsContainer and separate based on label or input
                            exceptionsOCContainer.childNodes.forEach(function (child) {
                                // If the node is a label
                                if (child.classList.contains("form-label")) {
                                    // Create an object and put the label in it
                                    var personInputObject = {
                                        "label": child
                                    };
                                    // Push object to the nodeGroups Array
                                    _nodeGroups2.push(personInputObject);
                                } else {
                                    // If the node is the input
                                    // Find corresponding object in nodeGroups Array
                                    var correspondingObject = _nodeGroups2.find(function (object) {
                                        return object.label.name === child.name;
                                    });
                                    // Add on the inputGroup to the corresponding object
                                    correspondingObject.inputGroup = child;
                                }
                            });

                            // Go through each object in the nodeGroups Array
                            // If the inputGroup has something written in either the "hours" or "minutes":
                            // push that object to the inputsToKeep Array
                            _nodeGroups2.forEach(function (object) {
                                if (object.inputGroup.childNodes[0].value !== "" || object.inputGroup.childNodes[2].value !== "") {
                                    inputsToKeep.push(object);
                                }
                            });
                        }

                        group.forEach(function (checkbox) {
                            // Check if checkbox in group's name is also the name of an object in the inputsToKeep Array
                            // If the current checkbox also belongs to someone in the inputsToKeep Array:
                            var correspondingObject = inputsToKeep.find(function (object) {
                                return object.label.name === checkbox.name;
                            });
                            // If there was a match
                            if (correspondingObject !== undefined) {
                                if (checkbox.dataset.position === "TL") {
                                    // Add a position type property to the object
                                    correspondingObject.positionType = "TL";
                                } else if (checkbox.dataset.position === "LCWP") {
                                    // Add a position type property to the object
                                    correspondingObject.positionType = "LCWP";
                                } else if (checkbox.dataset.position === "OC") {
                                    // Add a position type property to the object
                                    correspondingObject.positionType = "OC";
                                }

                                // Split up Names for later alphabetizing
                                var nameArray = correspondingObject.label.name.split(" ");
                                var _firstName = nameArray[0];
                                var _lastName = nameArray[1];
                                correspondingObject.firstName = _firstName;
                                correspondingObject.lastName = _lastName;

                                // Add this object to the inputsToAppend Array
                                inputsToAppend.push(correspondingObject);
                            } else {
                                // There was not a match, so this new person needs new labels and inputs
                                // Create them
                                var inputObject = {};

                                var formLabel = document.createElement("div");
                                formLabel.classList.add("form-label");
                                formLabel.innerHTML = "How long did " + checkbox.name + " work for?";
                                formLabel.name = checkbox.name;

                                var inputGroup = document.createElement("div");
                                inputGroup.classList.add("input-group");
                                inputGroup.name = checkbox.name;

                                var hoursInput = document.createElement("input");
                                hoursInput.type = "number";
                                hoursInput.min = "0";
                                hoursInput.max = "24";
                                hoursInput.id = "exception-hours-" + checkbox.value;
                                hoursInput.classList.add("form-control", "verify-this");
                                hoursInput.required = "required";
                                hoursInput.addEventListener("change", validInput);
                                //hoursInput.placeholder = "How many hours were worked?";
                                // Need to add 'aria-describedby?'

                                var hoursSpanGroup = document.createElement("span");
                                hoursSpanGroup.classList.add("input-group-append");
                                hoursSpanGroup.id = "hours-span-group-" + group.indexOf(checkbox);

                                var hoursSpan = document.createElement("span");
                                hoursSpan.classList.add("input-group-text");
                                hoursSpan.innerHTML = "hours";

                                var minutesInput = document.createElement("input");
                                minutesInput.type = "number";
                                minutesInput.min = "0";
                                minutesInput.max = "45";
                                minutesInput.step = "15";
                                minutesInput.id = "exception-minutes-" + checkbox.value;
                                minutesInput.classList.add("form-control", "verify-this");
                                minutesInput.required = "required";
                                minutesInput.addEventListener("change", validInput);
                                //minutesInput.placeholder = "How many minutes were worked?";

                                var minutesSpanGroup = document.createElement("span");
                                minutesSpanGroup.classList.add("input-group-append");
                                minutesSpanGroup.id = "minutes-span-group-" + group.indexOf(checkbox);

                                var minutesSpan = document.createElement("span");
                                minutesSpan.classList.add("input-group-text");
                                minutesSpan.innerHTML = "minutes";

                                // ! Getting rid of this should stop it from displaying the boxes at all...?

                                /*
                                if (checkbox.dataset.position === "TL") {
                                    exceptionsTLContainer.appendChild(formLabel);
                                    exceptionsTLContainer.appendChild(inputGroup);
                                } else if (checkbox.dataset.position === "LCWP") {
                                    exceptionsLCWPContainer.appendChild(formLabel);
                                    exceptionsLCWPContainer.appendChild(inputGroup);
                                } else {
                                    exceptionsOCContainer.appendChild(formLabel);
                                    exceptionsOCContainer.appendChild(inputGroup);
                                }
                                */

                                inputGroup.appendChild(hoursInput);
                                inputGroup.appendChild(hoursSpanGroup);
                                hoursSpanGroup.appendChild(hoursSpan);
                                inputGroup.appendChild(minutesInput);
                                inputGroup.appendChild(minutesSpanGroup);
                                minutesSpanGroup.appendChild(minutesSpan);

                                // Push the inputObject to the newInputs Array
                                allNewInputs.push(inputObject);

                                // Push the object to the inputsToKeep Array
                                inputsToKeep.push(inputObject);

                                // Push the label and inputGroup to the inputObject.
                                inputObject.label = formLabel;
                                inputObject.inputGroup = inputGroup;
                                // Split up Names for later alphabetizing
                                var _nameArray = formLabel.name.split(" ");
                                var _firstName2 = _nameArray[0];
                                var _lastName2 = _nameArray[1];
                                inputObject.firstName = _firstName2;
                                inputObject.lastName = _lastName2;

                                if (checkbox.dataset.position === "TL") {
                                    // Add a position type property to the object
                                    inputObject.positionType = "TL";
                                } else if (checkbox.dataset.position === "LCWP") {
                                    // Add a position type property to the object
                                    inputObject.positionType = "LCWP";
                                } else {
                                    // Add a position type property to the object
                                    inputObject.positionType = "OC";
                                }

                                // Add this object to the inputsToAppend Array
                                inputsToAppend.push(inputObject);
                            }
                        });
                    }
                });
            } else if (checkboxGroup.every(isChecked)) {
                // No exceptions
                // Hide the title and the warning
                if (checkboxGroup[0].dataset.position === "TL") {
                    hideThis(exceptionsTitleTL, exceptionsWarningTL, exceptionsTLContainer);
                } else if (checkboxGroup[0].dataset.position === "LCWP") {
                    hideThis(exceptionsTitleLCWP, exceptionsWarningLCWP, exceptionsLCWPContainer);
                } else {
                    hideThis(exceptionsTitleOC, exceptionsWarningOC, exceptionsOCContainer);
                }
            } else {
                //hideThis(allExceptionsTitles);
                //hideThis(allExceptionsContainers);
                // Possibly need to worry about clearing those values!?
            }
        } else {
            console.group("Empty CheckboxGroup");
            console.warn("checkboxGroup is empty.");
            console.log(name);
            console.groupEnd();
        }
    });

    // Clear all exeptionContainers
    allExceptionsContainers.forEach(function (container) {
        container.innerHTML = "";
    });

    // Append the inputs from the inputsToAppend Array depending on positionType
    inputsToAppend.forEach(function (object) {
        if (object.positionType === "TL") {
            exceptionsTLContainer.appendChild(object.label);
            exceptionsTLContainer.appendChild(object.inputGroup);
        } else if (object.positionType === "LCWP") {
            exceptionsLCWPContainer.appendChild(object.label);
            exceptionsLCWPContainer.appendChild(object.inputGroup);
        } else if (object.positionType === "OC") {
            exceptionsOCContainer.appendChild(object.label);
            exceptionsOCContainer.appendChild(object.inputGroup);
        }
    });
}

/**
 * Runs when any sick switch is toggled. Changes the toggle and span of the sick switch, reveals the sick containers for that position type, and creates sick staff lists for that position type.
 */
function sickSwitched() {
    if (this.checked) {
        if (this.dataset.position === "TL") {
            tlSickSwitchSpan.innerHTML = "<strong>Yes</strong>";
            showThis(sickStaffTLTitle);
            createSickStaff("TL");
        } else if (this.dataset.position === "LCWP") {
            lcwpSickSwitchSpan.innerHTML = "<strong>Yes</strong>";
            showThis(sickStaffLCWPTitle);
            createSickStaff("LCWP");
        } else {
            ocSickSwitchSpan.innerHTML = "<strong>Yes</strong>";
            showThis(sickStaffOCTitle);
            createSickStaff("OC");
        }
    } else {
        if (this.dataset.position === "TL") {
            tlSickSwitchSpan.innerHTML = "No";
            hideThis(sickStaffTLTitle);
            // Clear list of sick Team Leaders
            sickStaffTLContainer.innerHTML = "";
            sickExceptionsTLContainer.innerHTML = "";
            sickTLCheckboxes = [];
        } else if (this.dataset.position === "LCWP") {
            lcwpSickSwitchSpan.innerHTML = "No";
            hideThis(sickStaffLCWPTitle);
            // Clear list of sick LC/WP's
            sickStaffLCWPContainer.innerHTML = "";
            sickExceptionsLCWPContainer.innerHTML = "";
            sickLCWPCheckboxes = [];
        } else {
            ocSickSwitchSpan.innerHTML = "No";
            hideThis(sickStaffOCTitle);
            // Clear list of sick Office Coordinators
            sickStaffOCContainer.innerHTML = "";
            sickExceptionsOCContainer.innerHTML = "";
            sickOCCheckboxes = [];
        }
    }
}

/**
 * Responsible for creating lists of staffmembers in the sick containers based on position type.
 */
function createSickStaff(positionType) {
    // Probably going to run into a problem right here. 
    // If you create sick staff individually based on the corresponding switch,
    // Don't clear the containers regardless. Set up logic to check if the switch
    // was toggled, and if you need to clear out that sick container.

    // Todo: Fix this issue.
    /* Test logic 6/19 
    if (positionType === "TL") {
        exceptionsTLContainer.innerHTML = "";
    } else if (positionType === "LCWP") {
        exceptionsLCWPContainer.innerHTML = "";
    } else {
        exceptionsOCContainer.innerHTML = "";
    }
    */

    /*
    // Clear list of Sick Staff
    allSickExceptionsContainers.forEach(function (container) {
        container.innerHTML = "";
    });
    */

    // Who is working this particular camp
    var staffMembersWorking = [];

    // Go through list of all staff members, and add them to the list if they are working this camp
    staffMembersAll.forEach(function (person) {
        if (person.campsWorking.includes(currentCamp)) {
            staffMembersWorking.push(person);
        }
    });

    // Go through staff members working, and make a new array if the person is going to be a [TL, LC, WP, OC]
    var staffMembersWorkingTL = staffMembersWorking.filter(isTL);
    var staffMembersWorkingLC = staffMembersWorking.filter(isLC);
    var staffMembersWorkingWP = staffMembersWorking.filter(isWP);
    var staffMembersWorkingOC = staffMembersWorking.filter(isOC);

    var staffMemberGroups = [staffMembersWorkingTL, staffMembersWorkingLC, staffMembersWorkingWP, staffMembersWorkingOC];

    // Sort each group of staff members alphabetically by last name
    staffMemberGroups.forEach(function (group) {
        group.sort(compareValues('lastName'));
    });

    // For each staff member group, add a label, checkbox, and span for each person in the appropriate location
    // IF THE CORRESPONDING SICK SWITCH WAS TOGGLED TO YES
    staffMemberGroups.forEach(function (group) {
        if (group === staffMembersWorkingTL && positionType === "TL") {
            // Create sick TL's
            group.forEach(function (person) {
                var label = document.createElement('label');
                label.classList.add("custom-control", "custom-checkbox");

                var checkbox = document.createElement('input');
                checkbox.type = "checkbox";
                checkbox.classList.add("custom-control-input");
                checkbox.name = "" + person.firstName + " " + ("" + person.lastName);
                checkbox.value = "" + person.firstName + ("" + person.lastName);
                checkbox.id = ("" + person.firstName).toLowerCase() + "-" + ("" + person.lastName).toLowerCase() + "-sick";
                checkbox.checked = false;
                checkbox.dataset.positiontype = "TL";
                checkbox.addEventListener("change", checkSick);

                var span = document.createElement("span");
                span.classList.add("custom-control-label");
                span.innerHTML = "<em>(" + ("" + person.position1) + ")</em> " + ("" + person.firstName) + " " + ("" + person.lastName);

                // You only want to actually append and create these things, if the corresponding
                // sick switch was toggled. Otherwise you are making sick staff for every position
                // regardless of which switch was toggled

                checkbox.dataset.position = "TL";
                sickStaffTLContainer.appendChild(label);
                label.appendChild(checkbox);
                label.appendChild(span);
                sickTLCheckboxes.push(checkbox);
            });
        } else if ((group === staffMembersWorkingLC || group === staffMembersWorkingWP) && positionType === "LCWP") {
            // Create sick LC's and WP's
            group.forEach(function (person) {
                var label = document.createElement('label');
                label.classList.add("custom-control", "custom-checkbox");

                var checkbox = document.createElement('input');
                checkbox.type = "checkbox";
                checkbox.classList.add("custom-control-input");
                checkbox.name = "" + person.firstName + " " + ("" + person.lastName);
                checkbox.value = "" + person.firstName + ("" + person.lastName);
                checkbox.id = ("" + person.firstName).toLowerCase() + "-" + ("" + person.lastName).toLowerCase() + "-sick";
                checkbox.checked = false;
                checkbox.dataset.positiontype = "LCWP";
                checkbox.addEventListener("change", checkSick);

                var span = document.createElement("span");
                span.classList.add("custom-control-label");
                span.innerHTML = "<em>(" + ("" + person.position1) + ")</em> " + ("" + person.firstName) + " " + ("" + person.lastName);

                // You only want to actually append and create these things, if the corresponding
                // sick switch was toggled. Otherwise you are making sick staff for every position
                // regardless of which switch was toggled

                checkbox.dataset.position = "LCWP";
                sickStaffLCWPContainer.appendChild(label);
                label.appendChild(checkbox);
                label.appendChild(span);
                sickLCWPCheckboxes.push(checkbox);
            });
        } else if (group === staffMembersWorkingOC && positionType === "OC") {
            // Create sick OC's
            group.forEach(function (person) {
                var label = document.createElement('label');
                label.classList.add("custom-control", "custom-checkbox");

                var checkbox = document.createElement('input');
                checkbox.type = "checkbox";
                checkbox.classList.add("custom-control-input");
                checkbox.name = "" + person.firstName + " " + ("" + person.lastName);
                checkbox.value = "" + person.firstName + ("" + person.lastName);
                checkbox.id = ("" + person.firstName).toLowerCase() + "-" + ("" + person.lastName).toLowerCase() + "-sick";
                checkbox.checked = false;
                checkbox.dataset.positionType = "OC";
                checkbox.addEventListener("change", checkSick);

                var span = document.createElement("span");
                span.classList.add("custom-control-label");
                span.innerHTML = "<em>(" + ("" + person.position1) + ")</em> " + ("" + person.firstName) + " " + ("" + person.lastName);

                // You only want to actually append and create these things, if the corresponding
                // sick switch was toggled. Otherwise you are making sick staff for every position
                // regardless of which switch was toggled

                checkbox.dataset.position = "OC";
                sickStaffOCContainer.appendChild(label);
                label.appendChild(checkbox);
                label.appendChild(span);
                sickOCCheckboxes.push(checkbox);
            });
        } else {}
    });
}

/**
 * Runs when a sick checkbox is clicked. Responsible for running the checks like checkExceptions() but on sick staff.
 */
function checkSick() {

    if (this.dataset.positiontype === "TL") {
        sickExceptionsTLContainer.innerHTML = "";
        checkedSickTLCheckboxes = [];
    } else if (this.dataset.positiontype === "LCWP") {
        sickExceptionsLCWPContainer.innerHTML = "";
        checkedSickLCWPCheckboxes = [];
    } else {
        sickExceptionsOCContainer.innerHTML = "";
        checkedSickOCCheckboxes = [];
    }
    /*
    // Clear list of exceptions
    allSickExceptionsContainers.forEach(function (container) {
        container.innerHTML = "";
    });
    */

    var allSickCheckboxes = [sickTLCheckboxes, sickLCWPCheckboxes, sickOCCheckboxes];

    allSickCheckboxes.forEach(function (checkboxGroup) {
        if (checkboxGroup.some(isChecked)) {
            // Clear the array of checked checkboxes
            // FIX?
            var checkboxes = checkboxGroup;

            if (checkboxGroup[0].dataset.position === "TL") {
                // Show the Title and the Container itself
                showThis(sickExceptionsTitleTL, sickExceptionsTLContainer);
                tlIsSick = true;
                checkedSickTLCheckboxes = [];
            } else if (checkboxGroup[0].dataset.position === "LCWP") {
                // Show the Title and the Container itself
                showThis(sickExceptionsTitleLCWP, sickExceptionsLCWPContainer);
                lcwpIsSick = true;
                checkedSickLCWPCheckboxes = [];
            } else {
                // Show the Title and the Container itself
                showThis(sickExceptionsTitleOC, sickExceptionsOCContainer);
                ocIsSick = true;
                checkedSickOCCheckboxes = [];
            }

            // Go through checkboxes, if one is checked, add it to the array
            checkboxes.forEach(function (checkbox) {
                if (checkbox.checked === true) {
                    if (checkboxGroup[0].dataset.position === "TL") {
                        //checkedSickTLCheckboxes = [];
                        checkedSickTLCheckboxes.push(checkbox);
                    } else if (checkboxGroup[0].dataset.position === "LCWP") {
                        //checkedSickLCWPCheckboxes = [];
                        checkedSickLCWPCheckboxes.push(checkbox);
                    } else {
                        //checkedSickOCCheckboxes = [];
                        checkedSickOCCheckboxes.push(checkbox);
                    }
                }
            });

            // ! STOPPING SICK HOUR CHECKS.
            // ! IF NEEDED, PUT BACK IN. FOR NOW, JUST ADD THE SICK STAFF MEMBER TO THE
            // ! CORRESPONDING ARRAY

            var checkedCheckboxesGroup = [checkedSickTLCheckboxes, checkedSickLCWPCheckboxes, checkedSickOCCheckboxes];

            // Go through checked staff array, and in the container, add a label and input boxes
            checkedCheckboxesGroup.forEach(function (group) {
                if (group.length > 0) {
                    if (group[0].dataset.position === "TL") {
                        // TESTING - Clear container first
                        sickExceptionsTLContainer.innerHTML = "";
                    } else if (group[0].dataset.position === "LCWP") {
                        // TESTING - Clear container first
                        sickExceptionsLCWPContainer.innerHTML = "";
                    } else {
                        // TESTING - Clear container first
                        sickExceptionsOCContainer.innerHTML = "";
                    }

                    group.forEach(function (checkbox) {
                        var formLabel = document.createElement("div");
                        formLabel.classList.add("form-label");
                        formLabel.innerHTML = "How long was " + checkbox.name + " sick for?";
                        formLabel.name = checkbox.name;

                        var inputGroup = document.createElement("div");
                        inputGroup.classList.add("input-group");
                        inputGroup.name = checkbox.name;

                        var hoursInput = document.createElement("input");
                        hoursInput.type = "number";
                        hoursInput.min = "0";
                        hoursInput.max = "8";
                        hoursInput.classList.add("form-control", "verify-this");
                        hoursInput.required = "required";
                        hoursInput.addEventListener("change", validInput);
                        //hoursInput.placeholder = "How many hours were worked?";
                        // Need to add 'aria-describedby?'

                        var hoursSpanGroup = document.createElement("span");
                        hoursSpanGroup.classList.add("input-group-append");
                        hoursSpanGroup.id = "hours-span-group-" + group.indexOf(checkbox);

                        var hoursSpan = document.createElement("span");
                        hoursSpan.classList.add("input-group-text");
                        hoursSpan.innerHTML = "hours";

                        var minutesInput = document.createElement("input");
                        minutesInput.type = "number";
                        minutesInput.min = "0";
                        minutesInput.max = "45";
                        minutesInput.step = "15";
                        minutesInput.classList.add("form-control", "verify-this");
                        minutesInput.required = "required";
                        minutesInput.addEventListener("change", validInput);
                        //minutesInput.placeholder = "How many minutes were worked?";

                        var minutesSpanGroup = document.createElement("span");
                        minutesSpanGroup.classList.add("input-group-append");
                        minutesSpanGroup.id = "minutes-span-group-" + group.indexOf(checkbox);

                        var minutesSpan = document.createElement("span");
                        minutesSpan.classList.add("input-group-text");
                        minutesSpan.innerHTML = "minutes";

                        if (checkbox.dataset.position === "TL") {
                            sickExceptionsTLContainer.appendChild(formLabel);
                            sickExceptionsTLContainer.appendChild(inputGroup);
                        } else if (checkbox.dataset.position === "LCWP") {
                            sickExceptionsLCWPContainer.appendChild(formLabel);
                            sickExceptionsLCWPContainer.appendChild(inputGroup);
                        } else {
                            sickExceptionsOCContainer.appendChild(formLabel);
                            sickExceptionsOCContainer.appendChild(inputGroup);
                        }

                        inputGroup.appendChild(hoursInput);
                        inputGroup.appendChild(hoursSpanGroup);
                        hoursSpanGroup.appendChild(hoursSpan);
                        inputGroup.appendChild(minutesInput);
                        inputGroup.appendChild(minutesSpanGroup);
                        minutesSpanGroup.appendChild(minutesSpan);
                    });
                }
            });
        } else if (checkboxGroup.every(isUnchecked)) {
            // No sick staff
            var sickCheckList = [tlSickSwitchInput, lcwpSickSwitchInput, ocSickSwitchInput];

            sickCheckList.forEach(function (sickSwitch) {
                if (sickSwitch.checked === false) {
                    if (sickSwitch.dataset.position === "TL") {
                        hideThis(sickExceptionsTitleTL, sickExceptionsTLContainer);
                        tlIsSick = false;
                        checkedSickTLCheckboxes = [];
                    } else if (sickSwitch.dataset.position === "LCWP") {
                        hideThis(sickExceptionsTitleLCWP, sickExceptionsLCWPContainer);
                        lcwpIsSick = false;
                        checkedSickLCWPCheckboxes = [];
                    } else {
                        hideThis(sickExceptionsTitleOC, sickExceptionsOCContainer);
                        ocIsSick = false;
                        checkedSickOCCheckboxes = [];
                    }
                }
            });
        } else {
            //hideThis(allExceptionsTitles);
            //hideThis(allExceptionsContainers);
            // Possibly need to worry about clearing those values!?
        }
    });
}

/**
 * Resets the lists of staff members, hours worked, sets sick toggles to "No". Resets all info.
 */
function resetInfo() {
    // Reset hours worked
    hoursWorkedTL.value = "";
    hoursWorkedLCWP.value = "";
    hoursWorkedOC.value = "";

    // Clear lists
    allStaffMembersContainers.forEach(function (container) {
        container.innerHTML = "";
    });
    // TODO: You can refactor a lot of code if you write a helper function to set innerHTML of an element to "".

    allSickExceptionsContainers.forEach(function (container) {
        container.innerHTML = "";
    });

    allExceptionsContainers.forEach(function (container) {
        container.innerHTML = "";
    });

    // Flip sick switches to "no"
    allSickSwitchInputs.forEach(function (input) {
        input.checked = false;
    });

    allSickSwitchSpans.forEach(function (span) {
        span.innerHTML = "No";
    });

    // Hide titles
    hideThis(allExceptionsTitles);
    hideThis(allSickTitles);

    allTypesCheckboxes.forEach(function (checkboxArray) {
        checkboxArray = [];
    });
}

/**
 * Sets the amount of hours worked on the Payroll Form for the 3 different position types.
 * @param {number} tlHours - Hours allowed on a specific day for the Team Leaders.
 * @param {number} lcwpHours - Hours allowed on a specific day for the Logistics Coordinator and Wellness Person.
 * @param {number} ocHours - Hours allowed on a specific day for the Office Coordinator.
 */
function setHoursWorked(tlHours, lcwpHours, ocHours) {
    hoursWorkedTL.value = tlHours;
    hoursWorkedLCWP.value = lcwpHours;
    hoursWorkedOC.value = ocHours;
}

/**
 * Checks to see if isSiteInfoValid() returns true, then shows the position cards filled with the corresponding information.
 * @see isSiteInfoValid
 */
function showPositionCards() {
    // First, make sure all info is entered
    if (isSiteInfoValid() === true) {
        // SW, UCF, and VILLA have no OC. Hide the OC form
        if (chosenSite === "stan") {
            showThis(tlCard, lcwpCard, ocCard);
            addPreviewButton(ocCard);
        } else {
            showThis(tlCard, lcwpCard);
            addPreviewButton(lcwpCard);
        }
        allPositionCards.forEach(function (card) {
            card.classList.add("animated", "slideInUp");
        });
        hideThis(continueButtonContainer);
        setTimeout(scrollToTLCard, 1500);
        assignUserInfo();
    } else {
        var invalidItems = isSiteInfoValid();
        invalidItems.forEach(function (invalidItem) {
            invalidItem.classList.add("is-invalid");
        });
    }
}

/**
 * Assigns user information to Log Rocket.
 */
function assignUserInfo() {
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
}

/**
 * When called, it will scroll the tlCard into view, using the browser's native ".scrollIntoView()" method.
 */
function scrollToTLCard() {
    tlCard.scrollIntoView({
        behavior: 'smooth'
    });
}

/**
 * Checks to see if the information entered by the user before hitting "Continue" was valid. User must enter a first and last name, select a site, and select a camp.
 * @returns {(boolean|Array)} - Returns either "true" if the information was entered correctly, or returns an array of the invalid items.
 */
function isSiteInfoValid() {
    // If everything in the Site Info card is valid
    if (firstName.classList.contains("is-valid") && lastName.classList.contains("is-valid") && allSiteInputs.some(isChecked) && allCamps.some(isChecked)) {
        return true;
    } else {
        var invalidItems = [];

        if (firstName.value === "" || firstName.length < 3) {
            invalidItems.push(firstName);
            showThis(invalidFeedbackFirstName);
        }

        if (lastName.value === "" || lastName.length < 3) {
            invalidItems.push(lastName);
            showThis(invalidFeedbackLastName);
        }

        if (allSiteInputs.every(isUnchecked)) {
            //invalidItems.push(allSiteInputs);
            showThis(invalidFeedbackSite);
        }

        if (allCamps.every(isUnchecked)) {
            //invalidItems.push(allCamps);
            showThis(invalidFeedbackCamp);
        }

        return invalidItems;
    }
}

/**
 * Checks the name field to make sure that the name is longer than 2 characters.
 */
function checkName() {
    var value = this.value;

    // If the name isn't blank, and is longer than 2 characters
    if (value !== "" && value.length > 2) {
        this.classList.remove("is-invalid");
        this.classList.add("is-valid");
        this.classList.add("state-valid");
    } else {
        // Name is invalid
        this.classList.remove("is-valid");
        this.classList.remove("state-valid");
    }
}

/**
 * Checks to see if there is an empty position at a specific site. For example, in 2018, many sites did not have OC's. The ocCard was not shown because of this function.
 */
function checkEmptyPositions() {
    // There is no OC at SW, UCF, or VILLA
    if (chosenSite === "sw" || chosenSite === "ucf" || chosenSite === "villa") {
        if (tlCard.classList.contains("hidden")) {
            // Cards have not yet been shown
            // No need to hide the OC card
        } else {
            // Cards are visible, need to hide OC card
            hideThis(ocCard);
        }
    } else if (chosenSite === "stan") {
        if (tlCard.classList.contains("hidden")) {
            // Cards have not yet been shown
            // No need to show the OC card
        } else {
            // Cards are visible, need to show the OC card
            showThis(ocCard);
        }
    }
}

/**
 * Adds a "Preview" button to a position card in order for the user to preview the data before finally submitting it to QLN.
 * @param {element} location - The position card where the "Preview" button is to be placed. 
 */
function addPreviewButton(location) {
    var footerDiv = document.createElement('div');
    footerDiv.classList.add('card-footer', 'text-right');

    var buttonContainer = document.createElement('div');
    buttonContainer.classList.add('d-flex');

    var button = document.createElement('button');
    button.type = "button";
    button.id = "preview-button";
    button.classList.add("btn", "btn-primary", "ml-auto");
    button.innerHTML = "Preview Data";
    button.addEventListener("click", previewData);

    footerDiv.appendChild(buttonContainer);
    buttonContainer.appendChild(button);

    location.appendChild(footerDiv);
}

/**
 * Adds "Submit" and "Cancel" buttons to the preview card.
 * @param {element} location - The preview card element where the "Submit" and "Cancel" buttons should be placed.
 */
function addFinalButtons(location) {
    var footerDiv = document.createElement('div');
    footerDiv.classList.add('card-footer', 'text-right');

    var submitButton = document.createElement('button');
    submitButton.type = "submit";
    submitButton.id = "send-data-button";
    submitButton.classList.add("btn", "btn-primary");
    submitButton.innerHTML = "Submit";

    var cancelButton = document.createElement("button");
    cancelButton.type = "button";
    cancelButton.id = "cancel-button";
    cancelButton.classList.add("btn", "btn-secondary");
    cancelButton.innerHTML = "Cancel";
    cancelButton.style.marginRight = "10px";
    cancelButton.addEventListener("click", goBackToForm);

    footerDiv.appendChild(cancelButton);
    footerDiv.appendChild(submitButton);
    location.appendChild(footerDiv);
}

/**
 * Runs when the user clicks on the "Cancel" button on the preview screen. Scrolls back to the top and goes back to the Payroll Form, away from the Preview Screen. Uses slideInItems() to do so.
 * @see slideInItems
 */
function goBackToForm() {
    // Scroll to top
    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
    setTimeout(slideInItems, 500);

    /**
     * Slides in items, utilizing the "Animate.css" library. Recreates initial alert.
     */
    function slideInItems() {
        // First, slide out the preview card contents
        alert.classList.add("animated", "slideOutRight");
        mainForm.firstChild.classList.add("animated", "slideOutRight");
        mainForm.firstChild.remove();

        // Recreate initial alert
        span1.innerHTML = "Need help? ";
        alert.appendChild(span1);
        alert.appendChild(alertLink);
        alert.appendChild(span2);
        alert.classList.remove("slideOutRight", "slideInRight");
        alert.classList.add("animated", "slideInLeft");

        showThis(siteInfoCard);
        siteInfoCard.classList.remove("slideOutLeft");
        siteInfoCard.classList.add("animated", "slideInLeft");
        allPositionCards.forEach(function (card) {
            if (chosenSite !== "sw") {
                showThis(card);
                card.classList.remove("slideOutLeft");
                card.classList.add("animated", "slideInLeft");
            } else {
                if (card !== ocCard) {
                    showThis(card);
                    card.classList.remove("slideOutLeft");
                    card.classList.add("animated", "slideInLeft");
                }
            }
        });
    }
}

// * HELPER FUNCTIONS

/**
 * Shows any amount of elements by removing the class, "hidden" from its classList.
 * @see hideThis
 */
function showThis() {
    var thingsToShow = arguments;
    for (var i = 0; i < thingsToShow.length; i++) {
        var currentThing = thingsToShow[i];
        currentThing.classList.remove("hidden");
    }
}

/**
 * Hides any amount of elements by adding the class, "hidden" to its classList.
 * @see showThis
 */
function hideThis() {
    // If there is only one item to hide
    if (arguments[0].constructor === HTMLDivElement) {
        var thingsToHide = arguments;
        for (var i = 0; i < thingsToHide.length; i++) {
            var currentThing = thingsToHide[i];
            if (currentThing.classList.contains("hidden")) {} else {
                currentThing.classList.add("hidden");
            }
        }
    } else if (arguments[0].constructor === Array) {
        // There is an array of items to hide
        var numberOfThingsToHide = arguments[0].length;
        for (var _i = 0; _i < numberOfThingsToHide; _i++) {
            var _currentThing = arguments[0][_i];
            if (_currentThing.classList.contains("hidden")) {} else {
                _currentThing.classList.add("hidden");
            }
        }
    }
}

/**
 * Used to compare values agains each other, in a sorting fashion. Great for alphabetizing. Optional order parameter as well.
 * @param {string} key - The key in which the function will sort by. (ex. "Last Name").
 * @param {string} order - Optional. Ascending or Descending order. Default is ascending. Either 'asc', or 'desc'.
 * @returns {number} - Returns 0 if the values are the same, -1 if the second value is greater than the first value, and 1 if the second value is less than the first value.
 */
function compareValues(key) {
    var order = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'asc';

    return function (a, b) {
        if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
            // property doesn't exist on either object
            return 0;
        }

        var varA = typeof a[key] === 'string' ? a[key].toUpperCase() : a[key];
        var varB = typeof b[key] === 'string' ? b[key].toUpperCase() : b[key];

        var comparison = 0;
        if (varA > varB) {
            comparison = 1;
        } else if (varA < varB) {
            comparison = -1;
        }
        return order == 'desc' ? comparison * -1 : comparison;
    };
}

/**
 * Checks if a checkbox has been checked or not. Used for sorting. Specifically checks for un-checked checkboxes.
 * @returns {boolean} - Returns true if the checkbox is not checked.
 * @param {element} checkbox - Checkbox element.
 * @see isChecked
 */
function isUnchecked(checkbox) {
    return checkbox.checked === false;
}

/**
 * Checks if a checkbox has been checked or not. Used for sorting. Specifically checks for checked checkboxes.
 * @returns {boolean} - Returns true if the checkbox is checked.
 * @param {element} checkbox - Checkbox element.
 * @see isUnchecked
 */
function isChecked(checkbox) {
    return checkbox.checked === true;
}

/**
 * Checks if the person is a Team Leader or Senior Team Leader. Used for sorting. Also checks to see if they are a "special staff member". 
 * @param {element} person - Person to check if is a TL or STL.
 * @returns {boolean} - Returns true if the person is a TL or STL.
 */
function isTL(person) {
    // Check to see if this person is a "Special Staff Member"
    // * Special Staff Member would be someone working a different position at a different camp
    // * See Yolanda Drew for a good example
    if (person.specialStaffMember !== undefined) {
        return person.specialStaffMember[0].camps["" + currentCamp] === "TL" || person.specialStaffMember[0].camps["" + currentCamp] === "STL" || person.specialStaffMember[0].camps["" + currentCamp] === "Photo";
    } else {
        return person.position1 === "TL" || person.position1 === "STL" || person.position2 === "TL" || person.position2 === "STL";
    }
}

/**
 * Checks if the person is a Logistics Coordinator. Used for filtering. Also checks to see if they are a "special staff member". 
 * @param {element} person - Person to check if is an LC.
 * @returns {boolean} - Returns true if the person is an LC.
 */
function isLC(person) {
    // Check to see if this person is a "Special Staff Member"
    // * Special Staff Member would be someone working a different position at a different camp
    // * See Yolanda Drew for a good example
    return person.specialStaffMember !== undefined ? person.specialStaffMember[0].camps["" + currentCamp] === "LC" : person.position1 === "LC";
}

/**
 * Checks if the person is a Wellness Person. Used for filtering. Also checks to see if they are a "special staff member". 
 * @param {element} person - Person to check if is an WP.
 * @returns {boolean} - Returns true if the person is an WP.
 */
function isWP(person) {
    // Check to see if this person is a "Special Staff Member"
    // * Special Staff Member would be someone working a different position at a different camp
    // * See Yolanda Drew for a good example
    return person.specialStaffMember !== undefined ? person.specialStaffMember[0].camps["" + currentCamp] === "WP" : person.position1 === "WP";
}

/**
 * Checks if the person is a Office Coordinator. Used for filtering. Also checks to see if they are a "special staff member". 
 * @param {element} person - Person to check if is an OC.
 * @returns {boolean} - Returns true if the person is an OC.
 */
function isOC(person) {
    // Check to see if this person is a "Special Staff Member"
    // * Special Staff Member would be someone working a different position at a different camp
    // * See Yolanda Drew for a good example
    return person.specialStaffMember !== undefined ? person.specialStaffMember[0].camps["" + currentCamp] === "OC" : person.position1 === "OC";
}

/**
 * Checks to see if the item has the class "is-invalid". Used in filtering.
 * @param {element} item - Item to check if is valid or not.
 */
function isInvalid(item) {
    return item.classList.contains("is-invalid");
}

/**
 * Sets all initial parts of the Payroll Form to have blank values.
 */
function setBlank() {
    firstName.value = "";
    lastName.value = "";
    allSiteInputs.forEach(function (siteInput) {
        siteInput.checked = false;
    });
    allSickSwitchInputs.forEach(function (switchInput) {
        switchInput.checked = false;
    });
    allCamps.forEach(function (campInput) {
        campInput.checked = false;
    });
    dateMonth.value = "";
    dateDay.value = "";
}

/**
 * "Clears" things, by setting their length to 0. Upon a second look, I feel like there are better ways to do this.
 * @param {array} thingsToClear - An array of things to be cleared.
 */
function clearThis(thingsToClear) {
    thingsToClear.forEach(function (thingToClear) {
        thingToClear.length = 0;
    });
}

/**
 * Used to generate and show the Preview Screen.
 */
function previewData() {
    // ! Issue with not pushing to exceptionTLs, exceptionTLsInfo (etc...)
    // ! The exceptionTLs.push is called after the validInput() call
    // Build preview card
    var previewCardDiv = document.createElement("div");
    previewCardDiv.id = "preview-card";
    previewCardDiv.classList.add("card", "hidden");

    // Header Div
    var headerDiv = document.createElement("div");
    headerDiv.classList.add("card-header");
    previewCardDiv.appendChild(headerDiv);

    // Header
    var header = document.createElement("h3");
    header.classList.add("card-title");
    header.innerHTML = "Preview Information";
    headerDiv.appendChild(header);

    // Body Div
    var body = document.createElement("div");
    body.classList.add("card-body");
    previewCardDiv.appendChild(body);

    // Information Row
    var infoRow = document.createElement("div");
    infoRow.id = "info-row";
    infoRow.classList.add("row", "justify-content-center", "text-center");
    body.appendChild(infoRow);

    // Centered Info Column
    var infoColumn = document.createElement("div");
    infoColumn.classList.add("col-sm-10");
    infoColumn.id = "info-column";
    infoRow.appendChild(infoColumn);

    // General Information Heading Container
    var infoHeadingDiv = document.createElement("div");
    infoHeadingDiv.classList.add("form-group", "text-center");
    infoHeadingDiv.id = "general-info-heading-div";
    infoColumn.appendChild(infoHeadingDiv);

    // General Information Heading
    var infoHeading = document.createElement("h4");
    infoHeading.innerHTML = "General Information";
    infoHeadingDiv.appendChild(infoHeading);

    // General Information Inner Row
    var infoInnerRow = document.createElement("div");
    infoInnerRow.id = "general-information-inner-row";
    infoInnerRow.classList.add("row", "justify-content-center", "text-center");
    infoColumn.appendChild(infoInnerRow);

    // General Information Form Group 1
    var infoFormGroup1 = document.createElement("div");
    infoFormGroup1.id = "info-form-group-1";
    infoFormGroup1.classList.add("form-group", "col-md-6");
    infoInnerRow.appendChild(infoFormGroup1);

    // General Information Form Group 2
    var infoFormGroup2 = document.createElement("div");
    infoFormGroup2.id = "info-form-group-1";
    infoFormGroup2.classList.add("form-group", "col-md-6");
    infoInnerRow.appendChild(infoFormGroup2);

    // Name
    var nameLabel = document.createElement("div");
    nameLabel.id = "name-label";
    nameLabel.classList.add("form-label");
    nameLabel.innerHTML = "Your Name";
    infoFormGroup1.appendChild(nameLabel);
    var nameValue = document.createElement("div");
    nameValue.id = "name-value";
    nameValue.classList.add("form-control-plaintext");
    nameValue.innerHTML = firstName.value + " " + lastName.value;
    infoFormGroup1.appendChild(nameValue);

    // Site
    var siteLabel = document.createElement("div");
    siteLabel.id = "site-label";
    siteLabel.classList.add("form-label");
    siteLabel.innerHTML = "Site";
    infoFormGroup1.appendChild(siteLabel);
    var siteValue = document.createElement("div");
    siteValue.id = "site-value";
    siteValue.classList.add("form-control-plaintext");
    if (chosenSite === "sw") {
        siteValue.innerHTML = "Southwestern University";
    } else if (chosenSite === "stan") {
        siteValue.innerHTML = "Stanford University";
    } else if (chosenSite === "ucf") {
        siteValue.innerHTML = "University of Central Florida";
    } else {
        siteValue.innerHTML = "Villanova University";
    }
    infoFormGroup1.appendChild(siteValue);

    // Date
    var dateLabel = document.createElement("div");
    dateLabel.id = "date-label";
    dateLabel.classList.add("form-label");
    dateLabel.innerHTML = "Date";
    infoFormGroup2.appendChild(dateLabel);
    var dateValue = document.createElement("div");
    dateValue.id = "date-value";
    dateValue.classList.add("form-control-plaintext");
    var monthValue = "";
    if (dateMonth.value === "6") {
        monthValue = "June";
    } else if (dateMonth.value === "7") {
        monthValue = "July";
    } else {
        monthValue = "August";
    }
    dateValue.innerHTML = monthValue + " " + dateDay.value;
    infoFormGroup2.appendChild(dateValue);

    // Camp
    var campLabel = document.createElement("div");
    campLabel.id = "camp-label";
    campLabel.classList.add("form-label");
    campLabel.innerHTML = "Camp";
    infoFormGroup2.appendChild(campLabel);
    var campValue = document.createElement("div");
    campValue.id = "camp-value";
    campValue.classList.add("form-control-plaintext");
    campValue.innerHTML = currentCampValue;
    infoFormGroup2.appendChild(campValue);

    // Positions Row
    var positionsRow = document.createElement("div");
    positionsRow.id = "positions-row";
    positionsRow.classList.add("row", "justify-content-center");
    body.appendChild(positionsRow);

    // Centered Positions Column
    var positionsColumn = document.createElement("div");
    positionsColumn.classList.add("col-sm-10");
    positionsColumn.id = "positions-column";
    positionsRow.appendChild(positionsColumn);

    // Positions Information Heading Container
    var positionsHeadingDiv = document.createElement("div");
    positionsHeadingDiv.classList.add("form-group", "text-center");
    positionsHeadingDiv.id = "positions-heading-div";
    positionsColumn.appendChild(positionsHeadingDiv);

    // Position Information Heading
    var positionHeading = document.createElement("h4");
    positionHeading.innerHTML = "Position Information";
    positionsHeadingDiv.appendChild(positionHeading);

    // TL Column
    var tlColumn = document.createElement("div");
    tlColumn.id = "tl-column";
    tlColumn.classList.add("col-sm-6", "col-lg-4", "text-center");
    positionsRow.appendChild(tlColumn);

    // LCWP Column
    var lcwpColumn = document.createElement("div");
    lcwpColumn.id = "lcwp-column";
    lcwpColumn.classList.add("col-sm-6", "col-lg-4", "text-center");
    positionsRow.appendChild(lcwpColumn);

    // OC Column
    var ocColumn = document.createElement("div");
    ocColumn.id = "oc-column";
    ocColumn.classList.add("col-sm-6", "col-lg-4", "text-center");
    positionsRow.appendChild(ocColumn);

    // Clear the list of staff members. This is to ensure that you don't have double values when
    // a user goes back and fixes a mistake after "previewing" the first time.
    // ? This may be where the Issue #3 stems from. Not sure.
    clearThis([workingTLs, exceptionTLs, sickTLs, workingLCs, exceptionLCs, workingWPs, exceptionWPs, sickLCWPs, workingOCs, exceptionOCs, sickOCs]);

    // Team Leaders
    tlCheckboxes.forEach(function (checkbox) {
        if (checkbox.checked === true) {
            workingTLs.push(checkbox.name);
        } else {
            exceptionTLs.push(checkbox.name);
        }
    });

    // Logistics Coordinators
    lcCheckboxes.forEach(function (checkbox) {
        if (checkbox.checked === true) {
            workingLCs.push(checkbox.name);
        } else {
            exceptionLCs.push(checkbox.name);
        }
    });

    // Wellness Person
    wpCheckboxes.forEach(function (checkbox) {
        if (checkbox.checked === true) {
            workingWPs.push(checkbox.name);
        } else {
            exceptionWPs.push(checkbox.name);
        }
    });

    // Office Coordinators
    ocCheckboxes.forEach(function (checkbox) {
        if (checkbox.checked === true) {
            workingOCs.push(checkbox.name);
        } else {
            exceptionOCs.push(checkbox.name);
        }
    });

    // Position Groups
    var groups = ["TL", "LCWP", "OC"];

    // Make column elements for each position
    groups.forEach(function (group) {
        var formGroup = document.createElement("div");
        formGroup.classList.add("form-group");

        var formLabel = document.createElement("div");
        formLabel.classList.add("form-label");

        formGroup.appendChild(formLabel);

        if (group === "TL") {
            formLabel.innerHTML = "Team Leaders";
            formLabel.id = "tl-label";
            tlColumn.appendChild(formGroup);
            // Regular Team Leaders
            var regTLValue = document.createElement("div");
            regTLValue.id = "reg-tl-value";
            regTLValue.classList.add("form-control-plaintext");
            var workingTLString = workingTLs.join(", ");
            var workingTLStringFinal = "<strong>" + workingTLString.concat("</strong> worked a total of <strong>", hoursWorkedTL.value, "</strong> hours.");
            regTLValue.innerHTML = workingTLStringFinal;
            formGroup.appendChild(regTLValue);
            // Go through the exceptions container - Team Leaders
            exceptionsTLContainer.childNodes.forEach(function (nodeBig) {
                // If the child node is an input group 
                if (nodeBig.classList.contains("input-group")) {
                    var execptionHoursTL = "";
                    var exceptionMinutesTL = "";
                    var exceptionNameTL = nodeBig.name;
                    // Go through the div's child nodes
                    nodeBig.childNodes.forEach(function (nodeSmall) {
                        // If the child is a form control
                        if (nodeSmall.classList.contains("form-control")) {
                            if (nodeSmall.max === "24") {
                                execptionHoursTL = nodeSmall.value;
                            } else if (nodeSmall.max === "45") {
                                exceptionMinutesTL = nodeSmall.value;
                            }
                        }
                    });
                    // ? Possible fix: Check if invalid here, before you push it to the object
                    nodeBig.childNodes.forEach(function (nodeSmall) {
                        // If the child is a form control
                        if (nodeSmall.classList.contains("form-control")) {
                            if (nodeSmall.max === "24") {
                                // Check if "Hours" is empty
                                if (nodeSmall.value === "") {
                                    nodeSmall.classList.add("is-invalid");
                                } else {
                                    nodeSmall.classList.remove("is-invalid");
                                }
                            } else if (nodeSmall.max === "45") {
                                // Check if "Minutes" is empty
                                if (nodeSmall.value === "") {
                                    nodeSmall.classList.add("is-invalid");
                                } else {
                                    nodeSmall.classList.remove("is-invalid");
                                }
                            }
                        }
                    });

                    // Push object to info array
                    exceptionTLsInfo.push({
                        name: exceptionNameTL,
                        hours: execptionHoursTL,
                        minutes: exceptionMinutesTL
                    });
                }
            });
            // Create labels for each exception Team Leader
            exceptionTLsInfo.forEach(function (person) {
                var exceptionValue = document.createElement("div");
                var stringID = ("" + person.name).replace(" ", "-");
                exceptionValue.id = "exception-value-" + stringID;
                exceptionValue.classList.add("form-control-plaintext");
                exceptionValue.innerHTML = person.name + " worked for " + person.hours + " hours and " + person.minutes + " minutes.";
                formGroup.appendChild(exceptionValue);
            });
            if (tlIsSick === true) {
                // Go through the sick exceptions container - Team Leaders
                sickExceptionsTLContainer.childNodes.forEach(function (nodeBig) {
                    // If the child node is an input group 
                    if (nodeBig.classList.contains("input-group")) {
                        var sickHoursTL = "";
                        var sickMinutesTL = "";
                        var sickNameTL = nodeBig.name;
                        // Go through the div's child nodes
                        nodeBig.childNodes.forEach(function (nodeSmall) {
                            // If the child is a form control
                            if (nodeSmall.classList.contains("form-control")) {
                                if (nodeSmall.max === "8") {
                                    sickHoursTL = nodeSmall.value;
                                } else if (nodeSmall.max === "45") {
                                    sickMinutesTL = nodeSmall.value;
                                }
                            }
                        });
                        // ? Possible fix: Check if invalid here, before you push it to the object
                        nodeBig.childNodes.forEach(function (nodeSmall) {
                            // If the child is a form control
                            if (nodeSmall.classList.contains("form-control")) {
                                if (nodeSmall.max === "8") {
                                    // Check if "Hours" is empty
                                    if (nodeSmall.value === "") {
                                        nodeSmall.classList.add("is-invalid");
                                    } else {
                                        nodeSmall.classList.remove("is-invalid");
                                    }
                                } else if (nodeSmall.max === "45") {
                                    // Check if "Minutes" is empty
                                    if (nodeSmall.value === "") {
                                        nodeSmall.classList.add("is-invalid");
                                    } else {
                                        nodeSmall.classList.remove("is-invalid");
                                    }
                                }
                            }
                        });
                        // Push object to info array
                        sickTLsInfo.push({
                            name: sickNameTL,
                            hours: sickHoursTL,
                            minutes: sickMinutesTL
                        });
                    }
                });
                // Create labels for each sick Team Leader
                sickTLsInfo.forEach(function (person) {
                    var sickValue = document.createElement("div");
                    var stringID = ("" + person.name).replace(" ", "-");
                    sickValue.id = "sick-value-" + stringID;
                    sickValue.classList.add("form-control-plaintext");
                    sickValue.innerHTML = "<strong>" + person.name + "</strong> was sick for <strong>" + person.hours + "</strong> hours and <strong>" + person.minutes + "</strong> minutes.";
                    formGroup.appendChild(sickValue);
                });
            } else {
                // No Team Leader was sick.
                var noSickValue = document.createElement("div");
                noSickValue.id = "no-sick-tl";
                noSickValue.classList.add("form-control-plaintext");
                noSickValue.innerHTML = "<em>No Team Leader was sick on this day</em>.";
                formGroup.appendChild(noSickValue);
            }
        } else if (group === "LCWP") {
            formLabel.innerHTML = "Logistics Coordinator / Wellness Person";
            formLabel.id = "lcwp-label";
            lcwpColumn.appendChild(formGroup);
            // Regular LCWP's
            var regLCWPValue = document.createElement("div");
            regLCWPValue.id = "reg-lcwp-value";
            regLCWPValue.classList.add("form-control-plaintext");
            var workingLCString = workingLCs.join(", ");
            var workingWPString = workingWPs.join(", ");
            var workingBothString = "";
            if (workingWPs.length === 0 || workingLCs.length === 0) {
                workingBothString = workingLCString.concat(workingWPString);
            } else {
                workingBothString = workingLCString.concat(" and ", workingWPString);
            }
            var workingLCWPStringFinal = "<strong>" + workingBothString.concat("</strong> worked a total of <strong>", hoursWorkedLCWP.value, "</strong> hours.");
            regLCWPValue.innerHTML = workingLCWPStringFinal;
            formGroup.appendChild(regLCWPValue);
            // Go through the exceptions container - LCWPs
            exceptionsLCWPContainer.childNodes.forEach(function (nodeBig) {
                // If the child node is an input group 
                if (nodeBig.classList.contains("input-group")) {
                    var execptionHoursLCWP = "";
                    var exceptionMinutesLCWP = "";
                    var exceptionNameLCWP = nodeBig.name;
                    // Go through the div's child nodes
                    nodeBig.childNodes.forEach(function (nodeSmall) {
                        // If the child is a form control
                        if (nodeSmall.classList.contains("form-control")) {
                            if (nodeSmall.max === "24") {
                                execptionHoursLCWP = nodeSmall.value;
                            } else if (nodeSmall.max === "45") {
                                exceptionMinutesLCWP = nodeSmall.value;
                            }
                        }
                    });
                    // ? Possible fix: Check if invalid here, before you push it to the object
                    nodeBig.childNodes.forEach(function (nodeSmall) {
                        // If the child is a form control
                        if (nodeSmall.classList.contains("form-control")) {
                            if (nodeSmall.max === "24") {
                                // Check if "Hours" is empty
                                if (nodeSmall.value === "") {
                                    nodeSmall.classList.add("is-invalid");
                                } else {
                                    nodeSmall.classList.remove("is-invalid");
                                }
                            } else if (nodeSmall.max === "45") {
                                // Check if "Minutes" is empty
                                if (nodeSmall.value === "") {
                                    nodeSmall.classList.add("is-invalid");
                                } else {
                                    nodeSmall.classList.remove("is-invalid");
                                }
                            }
                        }
                    });
                    // Push object to info array
                    exceptionLCWPsInfo.push({
                        name: exceptionNameLCWP,
                        hours: execptionHoursLCWP,
                        minutes: exceptionMinutesLCWP
                    });
                }
            });
            // Create labels for each exception LCWP
            exceptionLCWPsInfo.forEach(function (person) {
                var exceptionValue = document.createElement("div");
                var stringID = ("" + person.name).replace(" ", "-");
                exceptionValue.id = "exception-value-" + stringID;
                exceptionValue.classList.add("form-control-plaintext");
                exceptionValue.innerHTML = person.name + " worked for " + person.hours + " hours and " + person.minutes + " minutes.";
                formGroup.appendChild(exceptionValue);
            });
            if (lcwpIsSick === true) {
                // Go through the sick exceptions container - LCWPs
                sickExceptionsLCWPContainer.childNodes.forEach(function (nodeBig) {
                    // If the child node is an input group 
                    if (nodeBig.classList.contains("input-group")) {
                        var sickHoursLCWP = "";
                        var sickMinutesLCWP = "";
                        var sickNameLCWP = nodeBig.name;
                        // Go through the div's child nodes
                        nodeBig.childNodes.forEach(function (nodeSmall) {
                            // If the child is a form control
                            if (nodeSmall.classList.contains("form-control")) {
                                if (nodeSmall.max === "8") {
                                    sickHoursLCWP = nodeSmall.value;
                                } else if (nodeSmall.max === "45") {
                                    sickMinutesLCWP = nodeSmall.value;
                                }
                            }
                        });
                        // ? Possible fix: Check if invalid here, before you push it to the object
                        nodeBig.childNodes.forEach(function (nodeSmall) {
                            // If the child is a form control
                            if (nodeSmall.classList.contains("form-control")) {
                                if (nodeSmall.max === "8") {
                                    // Check if "Hours" is empty
                                    if (nodeSmall.value === "") {
                                        nodeSmall.classList.add("is-invalid");
                                    } else {
                                        nodeSmall.classList.remove("is-invalid");
                                    }
                                } else if (nodeSmall.max === "45") {
                                    // Check if "Minutes" is empty
                                    if (nodeSmall.value === "") {
                                        nodeSmall.classList.add("is-invalid");
                                    } else {
                                        nodeSmall.classList.remove("is-invalid");
                                    }
                                }
                            }
                        });
                        // Push object to info array
                        sickLCWPsInfo.push({
                            name: sickNameLCWP,
                            hours: sickHoursLCWP,
                            minutes: sickMinutesLCWP
                        });
                    }
                });
                // Create labels for each sick LCWP
                sickLCWPsInfo.forEach(function (person) {
                    var sickValue = document.createElement("div");
                    var stringID = ("" + person.name).replace(" ", "-");
                    sickValue.id = "sick-value-" + stringID;
                    sickValue.classList.add("form-control-plaintext");
                    sickValue.innerHTML = "<strong>" + person.name + "</strong> was sick for <strong>" + person.hours + "</strong> hours and <strong>" + person.minutes + "</strong> minutes.";
                    formGroup.appendChild(sickValue);
                });
            } else {
                // No LCWP was sick.
                var _noSickValue = document.createElement("div");
                _noSickValue.id = "no-sick-lcwp";
                _noSickValue.classList.add("form-control-plaintext");
                _noSickValue.innerHTML = "<em>No Logistics Coordinator or Wellness Person was sick on this day</em>.";
                formGroup.appendChild(_noSickValue);
            }
        } else {
            formLabel.innerHTML = "Office Coordinator";
            formLabel.id = "oc-label";
            ocColumn.appendChild(formGroup);
            // SW does not have an OC
            if (chosenSite === "stan") {
                // Regular Office Coordinators
                var regOCValue = document.createElement("div");
                regOCValue.id = "reg-oc-value";
                regOCValue.classList.add("form-control-plaintext");
                var workingOCString = workingOCs.join(", ");
                var workingOCStringFinal = "<strong>" + workingOCString.concat("</strong> worked a total of <strong>", hoursWorkedOC.value, "</strong> hours.");
                regOCValue.innerHTML = workingOCStringFinal;
                formGroup.appendChild(regOCValue);
                // Go through the exceptions container - Office Coordinators
                exceptionsOCContainer.childNodes.forEach(function (nodeBig) {
                    // If the child node is an input group 
                    if (nodeBig.classList.contains("input-group")) {
                        var execptionHoursOC = "";
                        var exceptionMinutesOC = "";
                        var exceptionNameOC = nodeBig.name;
                        // Go through the div's child nodes
                        nodeBig.childNodes.forEach(function (nodeSmall) {
                            // If the child is a form control
                            if (nodeSmall.classList.contains("form-control")) {
                                if (nodeSmall.max === "24") {
                                    execptionHoursOC = nodeSmall.value;
                                } else if (nodeSmall.max === "45") {
                                    exceptionMinutesOC = nodeSmall.value;
                                }
                            }
                        });
                        // ? Possible fix: Check if invalid here, before you push it to the object
                        nodeBig.childNodes.forEach(function (nodeSmall) {
                            // If the child is a form control
                            if (nodeSmall.classList.contains("form-control")) {
                                if (nodeSmall.max === "24") {
                                    // Check if "Hours" is empty
                                    if (nodeSmall.value === "") {
                                        nodeSmall.classList.add("is-invalid");
                                    } else {
                                        nodeSmall.classList.remove("is-invalid");
                                    }
                                } else if (nodeSmall.max === "45") {
                                    // Check if "Minutes" is empty
                                    if (nodeSmall.value === "") {
                                        nodeSmall.classList.add("is-invalid");
                                    } else {
                                        nodeSmall.classList.remove("is-invalid");
                                    }
                                }
                            }
                        });
                        // Push object to info array
                        exceptionOCsInfo.push({
                            name: exceptionNameOC,
                            hours: execptionHoursOC,
                            minutes: exceptionMinutesOC
                        });
                    }
                });
                // Create labels for each exception Team Leader
                exceptionOCsInfo.forEach(function (person) {
                    var exceptionValue = document.createElement("div");
                    var stringID = ("" + person.name).replace(" ", "-");
                    exceptionValue.id = "exception-value-" + stringID;
                    exceptionValue.classList.add("form-control-plaintext");
                    exceptionValue.innerHTML = person.name + " worked for " + person.hours + " hours and " + person.minutes + " minutes.";
                    formGroup.appendChild(exceptionValue);
                });
                if (ocIsSick === true) {
                    // Go through the sick exceptions container - Office Coordinators
                    sickExceptionsOCContainer.childNodes.forEach(function (nodeBig) {
                        // If the child node is an input group 
                        if (nodeBig.classList.contains("input-group")) {
                            var sickHoursOC = "";
                            var sickMinutesOC = "";
                            var sickNameOC = nodeBig.name;
                            // Go through the div's child nodes
                            nodeBig.childNodes.forEach(function (nodeSmall) {
                                // If the child is a form control
                                if (nodeSmall.classList.contains("form-control")) {
                                    if (nodeSmall.max === "8") {
                                        sickHoursOC = nodeSmall.value;
                                    } else if (nodeSmall.max === "45") {
                                        sickMinutesOC = nodeSmall.value;
                                    }
                                }
                            });
                            // ? Possible fix: Check if invalid here, before you push it to the object
                            nodeBig.childNodes.forEach(function (nodeSmall) {
                                // If the child is a form control
                                if (nodeSmall.classList.contains("form-control")) {
                                    if (nodeSmall.max === "8") {
                                        // Check if "Hours" is empty
                                        if (nodeSmall.value === "") {
                                            nodeSmall.classList.add("is-invalid");
                                        } else {
                                            nodeSmall.classList.remove("is-invalid");
                                        }
                                    } else if (nodeSmall.max === "45") {
                                        // Check if "Minutes" is empty
                                        if (nodeSmall.value === "") {
                                            nodeSmall.classList.add("is-invalid");
                                        } else {
                                            nodeSmall.classList.remove("is-invalid");
                                        }
                                    }
                                }
                            });
                            // Push object to info array
                            sickOCsInfo.push({
                                name: sickNameOC,
                                hours: sickHoursOC,
                                minutes: sickMinutesOC
                            });
                        }
                    });
                    // Create labels for each sick Team Leader
                    sickOCsInfo.forEach(function (person) {
                        var sickValue = document.createElement("div");
                        var stringID = ("" + person.name).replace(" ", "-");
                        sickValue.id = "sick-value-" + stringID;
                        sickValue.classList.add("form-control-plaintext");
                        sickValue.innerHTML = "<strong>" + person.name + "</strong> was sick for <strong>" + person.hours + "</strong> hours and <strong>" + person.minutes + "</strong> minutes.";
                        formGroup.appendChild(sickValue);
                    });
                } else {
                    // No Office Coordinator was sick.
                    var _noSickValue2 = document.createElement("div");
                    _noSickValue2.id = "no-sick-oc";
                    _noSickValue2.classList.add("form-control-plaintext");
                    _noSickValue2.innerHTML = "<em>No Office Coordinator was sick on this day</em>.";
                    formGroup.appendChild(_noSickValue2);
                }
            } else if (chosenSite === "sw") {
                var noOCValue = document.createElement("div");
                noOCValue.id = "no-oc-value";
                noOCValue.classList.add("form-control-plaintext");
                noOCValue.innerHTML = "<em>Southwestern University does not have an Office Coordinator.</em>";
                formGroup.appendChild(noOCValue);
            } else if (chosenSite === "villa") {
                var _noOCValue = document.createElement("div");
                _noOCValue.id = "no-oc-value";
                _noOCValue.classList.add("form-control-plaintext");
                _noOCValue.innerHTML = "<em>Villanova University does not have an Office Coordinator.</em>";
                formGroup.appendChild(_noOCValue);
            } else if (chosenSite === "ucf") {
                var _noOCValue2 = document.createElement("div");
                _noOCValue2.id = "no-oc-value";
                _noOCValue2.classList.add("form-control-plaintext");
                _noOCValue2.innerHTML = "<em>University of Central Florida does not have an Office Coordinator.</em>";
                formGroup.appendChild(_noOCValue2);
            }
        }
    });

    if (validInput() === true) {
        var listOfItemsToMakeGood = document.querySelectorAll(".is-invalid");

        listOfItemsToMakeGood.forEach(function (itemToMakeGood) {
            itemToMakeGood.classList.remove("is-invalid");
        });
        // Scroll to top
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
        setTimeout(slideOutItems, 500);

        showThis(previewCardDiv);
        previewCardDiv.classList.add("animated", "slideInRight");
    } else {
        console.warn("Input is not valid.");
        var firstInvalidElement = document.querySelector(".is-invalid");
        firstInvalidElement.scrollIntoView({
            behavior: "smooth"
        });
        setTimeout(showInvalidModal, 500);
    }

    /**
     * Shows a modal warning the user that the input was invalid.
     */
    function showInvalidModal() {
        $('#invalid-input-modal').modal();
    }

    /**
     * Similar to slideInItems(), this function slides items out of the screen. Used on the Preview Screen animation.
     * @see slideInItems
     */
    function slideOutItems() {
        alert.classList.add("animated", "slideOutLeft");
        siteInfoCard.classList.add("animated", "slideOutLeft");
        allPositionCards.forEach(function (card) {
            card.classList.add("animated", "slideOutLeft");
        });
        setTimeout(buildPreviewCard, 750);
    }

    /**
     * Builds the Preview Screen by appending elements to one another.
     */
    function buildPreviewCard() {
        hideThis(siteInfoCard);
        allPositionCards.forEach(function (card) {
            hideThis(card);
        });

        previewCardDiv.appendChild(headerDiv);
        headerDiv.appendChild(header);
        previewCardDiv.appendChild(body);
        body.appendChild(infoRow);
        body.appendChild(positionsRow);
        addFinalButtons(previewCardDiv);

        alert.classList.remove("slideOutLeft");
        alert.classList.add("animated", "slideInRight");

        alert.classList.add("alert-icon");
        alert.role = "alert";
        alert.innerHTML = "";
        var alertIcon = document.createElement("i");
        alertIcon.classList.add("fas", "fa-exclamation-triangle");
        alert.appendChild(alertIcon);
        span1.innerHTML = "Please look through the following information, and verify that it is correct.";
        alert.appendChild(span1);

        mainForm.prepend(previewCardDiv);
    }
}

/**
 * Checks the input times to see if they are valid. A valid item must not be empty.
 * @returns {boolean} - Returns "true" if the input is valid, and "false" if it is invalid.
 */
function validInput() {
    if (arguments.length > 0) {
        if (this.value === "") {
            if (this.classList.contains("is-invalid")) {} else {
                this.classList.add("is-invalid");
            }
            return false;
        } else {
            if (this.classList.contains("is-invalid")) {
                this.classList.remove("is-invalid");
            }
            return true;
        }
    } else {
        var inputsToCheck = document.querySelectorAll(".verify-this");

        var emptyCount = 0;

        inputsToCheck.forEach(function (input) {
            if (input.value === "") {
                emptyCount++;
            }
        });

        if (emptyCount > 0) {
            return false;
        } else {
            return true;
        }
    }
}

// FORM

var scriptURL = 'https://script.google.com/macros/s/AKfycbyaZdP8ZLdRG-8EqKqO5ceqeaWJEH2y3HDJFjV5LlFv4V6_FkQ/exec';
var form = document.forms['submit-to-google-sheet'];
var loading = document.querySelector('.loading-form');
var successMessage = document.querySelector('.js-success-message');
var errorMessage = document.querySelector('.js-error-message');
var againButton = document.querySelector('.again-button');
var formBody = new FormData();

/**
 * Creates the data that is sent to the Google Spreadsheet. Use of JSON and PapaParse throughout.
 */
function createData() {
    // Names
    formBody.append('firstName', firstName.value);
    formBody.append('lastName', lastName.value);

    // Date
    formBody.append('month', dateMonth.value);
    formBody.append('day', dateDay.value);

    // Site
    formBody.append('site', chosenSite);

    // Camp
    formBody.append('camp', currentCamp);

    JSON.stringify(workingTLs);
    JSON.stringify(exceptionTLs);
    formBody.append('workingTLs (Reg)', workingTLs);
    formBody.append('exceptionTLs', exceptionTLs);

    // Go through the exceptions container - Team Leaders
    exceptionsTLContainer.childNodes.forEach(function (nodeBig) {
        // If the child node is an input group 
        if (nodeBig.classList.contains("input-group")) {
            var execptionHoursTL = "";
            var exceptionMinutesTL = "";
            var exceptionNameTL = nodeBig.name;
            // Go through the div's child nodes
            nodeBig.childNodes.forEach(function (nodeSmall) {
                // If the child is a form control
                if (nodeSmall.classList.contains("form-control")) {
                    if (nodeSmall.max === "24") {
                        execptionHoursTL = nodeSmall.value;
                    } else if (nodeSmall.max === "45") {
                        exceptionMinutesTL = nodeSmall.value;
                    }
                }
            });
            /* Possible reason for doubles
            // Push object to info array
            exceptionTLsInfo.push({
                name: exceptionNameTL,
                hours: execptionHoursTL,
                minutes: exceptionMinutesTL
            });
            */
        }
    });
    var unparsedExceptionTLsInfo = Papa.unparse(exceptionTLsInfo);
    formBody.append('exceptionTLsInfo', unparsedExceptionTLsInfo);

    // Go through the exceptions container - LCWP
    exceptionsLCWPContainer.childNodes.forEach(function (nodeBig) {
        // If the child node is an input group 
        if (nodeBig.classList.contains("input-group")) {
            var execptionHoursLCWP = "";
            var exceptionMinutesLCWP = "";
            var exceptionNameLCWP = nodeBig.name;
            // Go through the div's child nodes
            nodeBig.childNodes.forEach(function (nodeSmall) {
                // If the child is a form control
                if (nodeSmall.classList.contains("form-control")) {
                    if (nodeSmall.max === "24") {
                        execptionHoursLCWP = nodeSmall.value;
                    } else if (nodeSmall.max === "45") {
                        exceptionMinutesLCWP = nodeSmall.value;
                    }
                }
            });
            /* Possible reason for doubles
            // Push object to info array
            exceptionLCWPsInfo.push({
                name: exceptionNameLCWP,
                hours: execptionHoursLCWP,
                minutes: exceptionMinutesLCWP
            });
            */
        }
    });
    var unparsedExceptionLCWPsInfo = Papa.unparse(exceptionLCWPsInfo);
    formBody.append('exceptionLCWPsInfo', unparsedExceptionLCWPsInfo);

    // Go through the exceptions container - Office Coordinators
    exceptionsOCContainer.childNodes.forEach(function (nodeBig) {
        // If the child node is an input group 
        if (nodeBig.classList.contains("input-group")) {
            var execptionHoursOC = "";
            var exceptionMinutesOC = "";
            var exceptionNameOC = nodeBig.name;
            // Go through the div's child nodes
            nodeBig.childNodes.forEach(function (nodeSmall) {
                // If the child is a form control
                if (nodeSmall.classList.contains("form-control")) {
                    if (nodeSmall.max === "24") {
                        execptionHoursOC = nodeSmall.value;
                    } else if (nodeSmall.max === "45") {
                        exceptionMinutesOC = nodeSmall.value;
                    }
                }
            });
            /* Possible reason for doubles
            // Push object to info array
            exceptionOCsInfo.push({
                name: exceptionNameOC,
                hours: execptionHoursOC,
                minutes: exceptionMinutesOC
            });
            */
        }
    });
    var unparsedExceptionOCsInfo = Papa.unparse(exceptionOCsInfo);
    formBody.append('exceptionOCsInfo', unparsedExceptionOCsInfo);

    /* Possibly reason for double inputs
    // Non-Sick Logistics Coordinators
    lcCheckboxes.forEach(function (checkbox) {
        if (checkbox.checked === true) {
            workingLCs.push(checkbox.name);
        } else {
            exceptionLCs.push(checkbox.name);
        }
    });
    */
    JSON.stringify(workingLCs);
    JSON.stringify(exceptionLCs);
    formBody.append('workingLCs (Reg)', workingLCs);
    formBody.append('exceptionLCs', exceptionLCs);

    /* Possibly reason for double inputs
    // Non-Sick Wellness Person
    wpCheckboxes.forEach(function (checkbox) {
        if (checkbox.checked === true) {
            workingWPs.push(checkbox.name);
        } else {
            exceptionWPs.push(checkbox.name);
        }
    });
    */
    JSON.stringify(workingWPs);
    JSON.stringify(exceptionWPs);
    formBody.append('workingWPs (Reg)', workingWPs);
    formBody.append('exceptionWPs', exceptionWPs);

    /* Possibly reason for double inputs
    // Non-Sick Office Coordinators
    ocCheckboxes.forEach(function (checkbox) {
        if (checkbox.checked === true) {
            workingOCs.push(checkbox.name);
        } else {
            exceptionOCs.push(checkbox.name);
        }
    });
    */
    JSON.stringify(workingOCs);
    JSON.stringify(exceptionOCs);
    formBody.append('workingOCs (Reg)', workingOCs);
    formBody.append('exceptionOCs', exceptionOCs);

    // Regular working hours by position
    formBody.append('hoursTLReg', hoursWorkedTL.value);
    formBody.append('hoursLCWPReg', hoursWorkedLCWP.value);
    formBody.append('hoursOCReg', hoursWorkedOC.value);

    // Sick Team Leaders
    formBody.append('tlIsSick', tlIsSick);
    sickTLCheckboxes.forEach(function (checkbox) {
        if (checkbox.checked === true) {
            sickTLs.push(checkbox.name);
        }
    });
    JSON.stringify(sickTLs);
    formBody.append('sickTLs', sickTLs);

    // Sick Logistics Coordinators & Wellness Person
    formBody.append('lcwpIsSick', lcwpIsSick);
    sickLCWPCheckboxes.forEach(function (checkbox) {
        if (checkbox.checked === true) {
            sickLCWPs.push(checkbox.name);
        }
    });
    JSON.stringify(sickLCWPs);
    formBody.append('sickLCWPs', sickLCWPs);

    // Sick Office Coordinators
    formBody.append('ocIsSick', ocIsSick);
    sickOCCheckboxes.forEach(function (checkbox) {
        if (checkbox.checked === true) {
            sickOCs.push(checkbox.name);
        }
    });
    JSON.stringify(sickOCs);
    formBody.append('sickOCs', sickOCs);

    // Go through the sick exceptions container - Team Leaders
    sickExceptionsTLContainer.childNodes.forEach(function (nodeBig) {
        // If the child node is an input group 
        if (nodeBig.classList.contains("input-group")) {
            var sickHoursTL = "";
            var sickMinutesTL = "";
            var sickNameTL = nodeBig.name;
            // Go through the div's child nodes
            nodeBig.childNodes.forEach(function (nodeSmall) {
                // If the child is a form control
                if (nodeSmall.classList.contains("form-control")) {
                    if (nodeSmall.max === "8") {
                        sickHoursTL = nodeSmall.value;
                    } else if (nodeSmall.max === "45") {
                        sickMinutesTL = nodeSmall.value;
                    }
                }
            });
            // Push object to info array
            // ! This is where you are getting double sick TLs
            /*
            sickTLsInfo.push({
                name: sickNameTL,
                hours: sickHoursTL,
                minutes: sickMinutesTL
            });
            */
        }
    });
    var unparsedSickTLsInfo = Papa.unparse(sickTLsInfo);
    formBody.append('sickTLsInfo', unparsedSickTLsInfo);

    // Go through the sick exceptions container - LCWPs
    sickExceptionsLCWPContainer.childNodes.forEach(function (nodeBig) {
        // If the child node is an input group 
        if (nodeBig.classList.contains("input-group")) {
            var sickHoursLCWP = "";
            var sickMinutesLCWP = "";
            var sickNameLCWP = nodeBig.name;
            // Go through the div's child nodes
            nodeBig.childNodes.forEach(function (nodeSmall) {
                // If the child is a form control
                if (nodeSmall.classList.contains("form-control")) {
                    if (nodeSmall.max === "8") {
                        sickHoursLCWP = nodeSmall.value;
                    } else if (nodeSmall.max === "45") {
                        sickMinutesLCWP = nodeSmall.value;
                    }
                }
            });
            // ! This is where you are getting double sick LCWPs
            // Push object to info array
            /*
            sickLCWPsInfo.push({
                name: sickNameLCWP,
                hours: sickHoursLCWP,
                minutes: sickMinutesLCWP
            });
            */
        }
    });
    var unparsedSickLCWPsInfo = Papa.unparse(sickLCWPsInfo);
    formBody.append('sickLCWPsInfo', unparsedSickLCWPsInfo);

    // Go through the sick exceptions container - Office Coordinators
    sickExceptionsOCContainer.childNodes.forEach(function (nodeBig) {
        // If the child node is an input group 
        if (nodeBig.classList.contains("input-group")) {
            var sickHoursOC = "";
            var sickMinutesOC = "";
            var sickNameOC = nodeBig.name;
            // Go through the div's child nodes
            nodeBig.childNodes.forEach(function (nodeSmall) {
                // If the child is a form control
                if (nodeSmall.classList.contains("form-control")) {
                    if (nodeSmall.max === "8") {
                        sickHoursOC = nodeSmall.value;
                    } else if (nodeSmall.max === "45") {
                        sickMinutesOC = nodeSmall.value;
                    }
                }
            });
            // ! This is where you are getting double sick OCsInfo
            // Push object to info array
            /*
            sickOCsInfo.push({
                name: sickNameOC,
                hours: sickHoursOC,
                minutes: sickMinutesOC
            });
            */
        }
    });
    var unparsedSickOCsInfo = Papa.unparse(sickOCsInfo);
    formBody.append('sickOCsInfo', unparsedSickOCsInfo);
}

form.addEventListener('submit', function (e) {
    e.preventDefault();
    hideThis(alert);
    showLoadingIndicator();
    createData();
    fetch(scriptURL, {
        method: 'POST',
        body: formBody
    }).then(function (response) {
        return showSuccessMessage(response);
    }).catch(function (error) {
        return showErrorMessage(error);
    });
});

/**
 * Shows a simple loading indicator after the user clicks "Submit" while the data is being sent and the browser is waiting for a response from Google.
 */
function showLoadingIndicator() {
    form.classList.add('is-hidden-form');
    loading.classList.remove('is-hidden-form');
}

/**
 * Shows success message if the request to Google went through OK.
 * @param {*} response - Reponse from Google.
 */
function showSuccessMessage(response) {
    console.log('Success!', response);
    setTimeout(function () {
        successMessage.classList.remove('is-hidden-form');
        loading.classList.add('is-hidden-form');
        againButton.classList.remove('is-hidden-form');
    }, 500);
}

/**
 * Shows error message if the request to Google did not go through OK.
 * @param {*} error - Error from Google
 */
function showErrorMessage(error) {
    console.error('Error!', error.message);
    setTimeout(function () {
        errorMessage.classList.remove('is-hidden-form');
        loading.classList.add('is-hidden-form');
    }, 500);
}
