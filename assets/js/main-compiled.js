// Declare the current camp variable
var currentCamp = "none";

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
    camp.addEventListener("click", campChosen);
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
    groupInput.addEventListener("change", sickSwitched);
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

// Make sure that switches and checkboxes and radios are blank when the page first loads
document.addEventListener("DOMContentLoaded", setBlank);

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
}

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
        daysToDisable = [0, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21];
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

    resetInfo();
    dateChanged();
    addStaffMembers();
}

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
    } else {
        // Do other camps
    }
}

function disableDates(months, days) {
    months.forEach(function (option) {
        dateMonth.options[option].disabled = true;
    });

    days.forEach(function (option) {
        dateDay.options[option].disabled = true;
    });
}

function enableDates(months, days) {
    months.forEach(function (option) {
        dateMonth.options[option].disabled = false;
    });

    days.forEach(function (option) {
        dateDay.options[option].disabled = false;
    });
}

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
            span.innerHTML = "<em>(" + ("" + person.position1) + ")</em> " + ("" + person.firstName) + " " + ("" + person.lastName);

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

function checkExceptions() {
    // Clear list of exceptions
    allExceptionsContainers.forEach(function (container) {
        container.innerHTML = "";
    });

    var uncheckedTLCheckboxes = [];
    var uncheckedLCWPCheckboxes = [];
    var uncheckedOCCheckboxes = [];

    var allCheckboxes = [tlCheckboxes, lcwpCheckboxes, ocCheckboxes];

    allCheckboxes.forEach(function (checkboxGroup) {
        if (checkboxGroup.some(isUnchecked)) {
            // Clear the array of unchecked checkboxes
            // FIX?
            var checkboxes = checkboxGroup;

            if (checkboxGroup[0].dataset.position === "TL") {
                // Show the Title and the Container itself
                showThis(exceptionsTitleTL, exceptionsTLContainer);
            } else if (checkboxGroup[0].dataset.position === "LCWP") {
                // Show the Title and the Container itself
                showThis(exceptionsTitleLCWP, exceptionsLCWPContainer);
            } else {
                // Show the Title and the Container itself
                showThis(exceptionsTitleOC, exceptionsOCContainer);
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
                        // TESTING - Clear container first
                        exceptionsTLContainer.innerHTML = "";
                    } else if (group[0].dataset.position === "LCWP") {
                        // TESTING - Clear container first
                        exceptionsLCWPContainer.innerHTML = "";
                    } else {
                        // TESTING - Clear container first
                        exceptionsOCContainer.innerHTML = "";
                    }

                    group.forEach(function (checkbox) {
                        var formLabel = document.createElement("div");
                        formLabel.classList.add("form-label");
                        formLabel.innerHTML = "How long did " + checkbox.name + " work for?";

                        var inputGroup = document.createElement("div");
                        inputGroup.classList.add("input-group");
                        inputGroup.name = checkbox.name;

                        var hoursInput = document.createElement("input");
                        hoursInput.type = "number";
                        hoursInput.min = "0";
                        hoursInput.max = "24";
                        hoursInput.classList.add("form-control");
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
                        minutesInput.classList.add("form-control");
                        //minutesInput.placeholder = "How many minutes were worked?";

                        var minutesSpanGroup = document.createElement("span");
                        minutesSpanGroup.classList.add("input-group-append");
                        minutesSpanGroup.id = "minutes-span-group-" + group.indexOf(checkbox);

                        var minutesSpan = document.createElement("span");
                        minutesSpan.classList.add("input-group-text");
                        minutesSpan.innerHTML = "minutes";

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

                        inputGroup.appendChild(hoursInput);
                        inputGroup.appendChild(hoursSpanGroup);
                        hoursSpanGroup.appendChild(hoursSpan);
                        inputGroup.appendChild(minutesInput);
                        inputGroup.appendChild(minutesSpanGroup);
                        minutesSpanGroup.appendChild(minutesSpan);
                    });
                }
            });
        } else {
            //hideThis(allExceptionsTitles);
            //hideThis(allExceptionsContainers);
            // Possibly need to worry about clearing those values!?
        }
    });
}

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
            sickTLCheckboxes = [];
        } else if (this.dataset.position === "LCWP") {
            lcwpSickSwitchSpan.innerHTML = "No";
            hideThis(sickStaffLCWPTitle);
            // Clear list of sick LC/WP's
            sickStaffLCWPContainer.innerHTML = "";
            sickLCWPCheckboxes = [];
        } else {
            ocSickSwitchSpan.innerHTML = "No";
            hideThis(sickStaffOCTitle);
            // Clear list of sick Office Coordinators
            sickStaffOCContainer.innerHTML = "";
            sickOCCheckboxes = [];
        }
    }
}

function createSickStaff(positionType) {
    // Probably going to run into a problem right here. 
    // If you create sick staff individually based on the corresponding switch,
    // Don't clear the containers regardless. Set up logic to check if the switch
    // was toggled, and if you need to clear out that sick container.

    // Clear list of Sick Staff
    allSickExceptionsContainers.forEach(function (container) {
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

function checkSick() {
    // Clear list of exceptions
    allSickExceptionsContainers.forEach(function (container) {
        container.innerHTML = "";
    });

    var allSickCheckboxes = [sickTLCheckboxes, sickLCWPCheckboxes, sickOCCheckboxes];

    allSickCheckboxes.forEach(function (checkboxGroup) {
        if (checkboxGroup.some(isChecked)) {
            // Clear the array of checked checkboxes
            // FIX?
            var checkboxes = checkboxGroup;

            if (checkboxGroup[0].dataset.position === "TL") {
                // Show the Title and the Container itself
                //showThis(sickExceptionsTitleTL, sickExceptionsTLContainer);
                tlIsSick = true;
            } else if (checkboxGroup[0].dataset.position === "LCWP") {
                // Show the Title and the Container itself
                //showThis(sickExceptionsTitleLCWP, sickExceptionsLCWPContainer);
                lcwpIsSick = true;
            } else {
                // Show the Title and the Container itself
                //showThis(sickExceptionsTitleOC, sickExceptionsOCContainer);
                ocIsSick = true;
            }

            // Go through checkboxes, if one is checked, add it to the array
            checkboxes.forEach(function (checkbox) {
                if (checkbox.checked === true) {
                    if (checkboxGroup[0].dataset.position === "TL") {
                        checkedSickTLCheckboxes.push(checkbox);
                    } else if (checkboxGroup[0].dataset.position === "LCWP") {
                        checkedSickLCWPCheckboxes.push(checkbox);
                    } else {
                        checkedSickOCCheckboxes.push(checkbox);
                    }
                }
            });

            /*
            STOPPING SICK HOUR CHECKS.
            IF NEEDED, PUT BACK IN. FOR NOW, JUST ADD THE SICK STAFF MEMBER TO THE
            CORRESPONDING ARRAY
             let checkedCheckboxesGroup = [checkedSickTLCheckboxes, checkedSickLCWPCheckboxes, checkedSickOCCheckboxes];
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
                        let formLabel = document.createElement("div");
                        formLabel.classList.add("form-label");
                        formLabel.innerHTML = "How long was " + checkbox.name + " sick for?";
                         let inputGroup = document.createElement("div");
                        inputGroup.classList.add("input-group");
                         let hoursInput = document.createElement("input");
                        hoursInput.type = "number";
                        hoursInput.min = "0";
                        hoursInput.max = "8";
                        hoursInput.classList.add("form-control");
                        //hoursInput.placeholder = "How many hours were worked?";
                        // Need to add 'aria-describedby?'
                         let hoursSpanGroup = document.createElement("span");
                        hoursSpanGroup.classList.add("input-group-append");
                        hoursSpanGroup.id = "hours-span-group-" + group.indexOf(checkbox);
                         let hoursSpan = document.createElement("span");
                        hoursSpan.classList.add("input-group-text");
                        hoursSpan.innerHTML = "hours";
                         let minutesInput = document.createElement("input");
                        minutesInput.type = "number";
                        minutesInput.min = "0";
                        minutesInput.max = "60";
                        minutesInput.step = "15";
                        minutesInput.classList.add("form-control");
                        //minutesInput.placeholder = "How many minutes were worked?";
                         let minutesSpanGroup = document.createElement("span");
                        minutesSpanGroup.classList.add("input-group-append");
                        minutesSpanGroup.id = "minutes-span-group-" + group.indexOf(checkbox);
                         let minutesSpan = document.createElement("span");
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
            */
        } else {
                //hideThis(allExceptionsTitles);
                //hideThis(allExceptionsContainers);
                // Possibly need to worry about clearing those values!?
            }
    });
}

function resetInfo() {
    // Reset hours worked
    hoursWorkedTL.value = "";
    hoursWorkedLCWP.value = "";
    hoursWorkedOC.value = "";

    // Clear lists
    allStaffMembersContainers.forEach(function (container) {
        container.innerHTML = "";
    });

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

function setHoursWorked(tlHours, lcwpHours, ocHours) {
    hoursWorkedTL.value = tlHours;
    hoursWorkedLCWP.value = lcwpHours;
    hoursWorkedOC.value = ocHours;
}

function showPositionCards() {
    // First, make sure all info is entered
    if (isSiteInfoValid() === true) {
        showThis(tlCard, lcwpCard, ocCard);
        allPositionCards.forEach(function (card) {
            card.classList.add("animated", "slideInUp");
        });
        hideThis(continueButtonContainer);
        setTimeout(scrollToTLCard, 1500);
    } else {
        var invalidItems = isSiteInfoValid();

        invalidItems.forEach(function (invalidItem) {
            invalidItem.classList.add("is-invalid");
        });
    }
}

function scrollToTLCard() {
    tlCard.scrollIntoView({ behavior: 'smooth' });
}

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

// Helper functions
function showThis() {
    var thingsToShow = arguments;
    for (var i = 0; i < thingsToShow.length; i++) {
        var currentThing = thingsToShow[i];
        currentThing.classList.remove("hidden");
    }
}

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

function isUnchecked(checkbox) {
    return checkbox.checked === false;
}

function isChecked(checkbox) {
    return checkbox.checked === true;
}

function isTL(person) {
    return person.position1 === "TL" || person.position1 === "STL";
}

function isLC(person) {
    return person.position1 === "LC";
}

function isWP(person) {
    return person.position1 === "WP";
}

function isOC(person) {
    return person.position1 === "OC";
}

function isInvalid(item) {
    return item.classList.contains("is-invalid");
}

function logThis() {
    var variablesToLog = arguments;
    for (var i = 0; i < variablesToLog.length; i++) {
        var currentVariable = variablesToLog[i];
        console.log(currentVariable);
    }
}

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

// FORM

var scriptURL = 'https://script.google.com/macros/s/AKfycbyaZdP8ZLdRG-8EqKqO5ceqeaWJEH2y3HDJFjV5LlFv4V6_FkQ/exec';
var form = document.forms['submit-to-google-sheet'];
var loading = document.querySelector('.loading-form');
var successMessage = document.querySelector('.js-success-message');
var errorMessage = document.querySelector('.js-error-message');
var againButton = document.querySelector('.again-button');
var formBody = new FormData();

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

    // Non-Sick Team Leaders
    tlCheckboxes.forEach(function (checkbox) {
        if (checkbox.checked === true) {
            workingTLs.push(checkbox.name);
        } else {
            exceptionTLs.push(checkbox.name);
        }
    });
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
            // Push object to info array
            exceptionTLsInfo.push({
                name: exceptionNameTL,
                hours: execptionHoursTL,
                minutes: exceptionMinutesTL
            });
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
            // Push object to info array
            exceptionLCWPsInfo.push({
                name: exceptionNameLCWP,
                hours: execptionHoursLCWP,
                minutes: exceptionMinutesLCWP
            });
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
            // Push object to info array
            exceptionOCsInfo.push({
                name: exceptionNameOC,
                hours: execptionHoursOC,
                minutes: exceptionMinutesOC
            });
        }
    });
    var unparsedExceptionOCsInfo = Papa.unparse(exceptionOCsInfo);
    formBody.append('exceptionOCsInfo', unparsedExceptionOCsInfo);

    // Non-Sick Logistics Coordinators
    lcCheckboxes.forEach(function (checkbox) {
        if (checkbox.checked === true) {
            workingLCs.push(checkbox.name);
        } else {
            exceptionLCs.push(checkbox.name);
        }
    });
    JSON.stringify(workingLCs);
    JSON.stringify(exceptionLCs);
    formBody.append('workingLCs (Reg)', workingLCs);
    formBody.append('exceptionLCs', exceptionLCs);

    // Non-Sick Wellness Person
    wpCheckboxes.forEach(function (checkbox) {
        if (checkbox.checked === true) {
            workingWPs.push(checkbox.name);
        } else {
            exceptionWPs.push(checkbox.name);
        }
    });
    JSON.stringify(workingWPs);
    JSON.stringify(exceptionWPs);
    formBody.append('workingWPs (Reg)', workingWPs);
    formBody.append('exceptionWPs', exceptionWPs);

    // Non-Sick Office Coordinators
    ocCheckboxes.forEach(function (checkbox) {
        if (checkbox.checked === true) {
            workingOCs.push(checkbox.name);
        } else {
            exceptionOCs.push(checkbox.name);
        }
    });
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
}

form.addEventListener('submit', function (e) {
    e.preventDefault();
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

function showLoadingIndicator() {
    form.classList.add('is-hidden-form');
    loading.classList.remove('is-hidden-form');
}

function showSuccessMessage(response) {
    console.log('Success!', response);
    setTimeout(function () {
        successMessage.classList.remove('is-hidden-form');
        loading.classList.add('is-hidden-form');
        againButton.classList.remove('is-hidden-form');
    }, 500);
}

function showErrorMessage(error) {
    console.error('Error!', error.message);
    setTimeout(function () {
        errorMessage.classList.remove('is-hidden-form');
        loading.classList.add('is-hidden-form');
    }, 500);
}
