// TODO: 
// 1. Handle if a person is entered more than once
// 2. Handle if inputs are left blank
// 3. Handle if inputs are spelled incorrectly
// 4. Handle if the input does not exist in the array (searching for a person that didn't work)


// Variable to hold the Konami code that activates the Error Checker 5000. 1 of 2 ways for a user to open up the Error Checker 5000.
const easter_egg = new Konami(showErrorModal);
// Counts how many people are on the screen, added by the user.
let personCounter = 1;
// Error Submit Button (Rocket Ship)
const errorSubmitButton = document.getElementById('error-submit-button');
errorSubmitButton.addEventListener('click', errorFormSubmit);
// Back Button
const errorBackButton = document.getElementById('error-back-button');
// Error Form Group
const errorFormGroup = document.getElementById('error-form-group');
// First Person Label and Button when Modal is opened initially
const firstErrorLabel = document.getElementById('person-label-1');
const firstErrorRemoveButton = document.getElementById('error-remove-button-1');
firstErrorRemoveButton.addEventListener('click', removeErrorPerson);
// Modal Dialog
const modalDialog = document.querySelector('.modal-dialog');
// Modal Content
const modalContent = document.querySelector('.modal-content');
// Modal Content before clicking submit button
const ec5Pre = document.getElementById('ec5-pre');
// Report
const ec5Report = document.getElementById('ec5-report');
// Report Nav - Holds names of people
const ec5ReportNav = document.getElementById('ec5-report-nav');
// Report Contents - Holds the info for each person
const ec5ReportContents = document.getElementById('ec5-report-contents');
// Will hold the info data for all error people added
let errorInfo;


/**
 * This function displays the report in the Error Checker 5000 modal.
 */
function showEC5Report() {
    // Add class of 'maximize' to modalDialog and class of 'height100' to modalContent
    modalDialog.classList.add('maximize');
    modalContent.classList.add('height100');
    // Fade out initial content and fade in the report
    ec5Pre.classList.add('fade-out');
    // Wait for ec5Pre to fade out
    // Then hide it with display none
    // Also, show the report
    setTimeout(() => {
        ec5Pre.classList.add('hidden');
        ec5Report.classList.remove('hidden');
        ec5Report.classList.add('fade-in');
    }, 1000);

    // Show the content for the first person
    displayTabContent("1");
}

/**
 * This function is called when the submit button is clicked. It starts up the process of taking the user input and working with it. It loops through the inputs, creating objects for each person. The addPersonButton and errorSubmitButton are hidden, while the back button is revealed. Finally, it calls the filterReportArray function with an array of the people objects.
 * @see filterReportArray
*/
function errorFormSubmit() {
    // Every input in error form
    const allInputs = [...errorFormGroup.querySelectorAll('input')];

    // Empty array for people objects
    const peopleObjects = [];

    // Variable for current person number
    let personNumber = 1;

    // Loop through the inputs
    // Create an object for each person
    while (personNumber <= personCounter) {
        // Person Object
        const personObject = {};

        // Inputs narrowed down by personNumber
        const inputs = allInputs.filter((input) => input.dataset.index === personNumber.toString());

        // Assign first and last names to the person object
        personObject.firstName = inputs[0].value;
        personObject.lastName = inputs[1].value;

        // Push the person object to the array
        peopleObjects.push(personObject);

        // Increment personNumber
        personNumber++;
    }

    // Hide the submit button and add a person button
    errorSubmitButton.classList.add('hidden');
    addPersonButton.classList.add('hidden');

    // Show the back button
    errorBackButton.classList.remove('hidden');

    // Filter Report Array
    filterReportArray(peopleObjects);
}

/**
 * Goes through each person object passed to it, and filters down the global Report Array. The Report Array holds data from CampMinder on all 91 staff members. This function filters the data down to just the people that were given to it. It then sets the global variable, errorInfo to the filtered objects. Finally, the function calls buildEC5Report with the filtered objects.
 * @param {array} people - An array of objects, passed from errorFormSubmit()
 * @see errorFormSubmit
 */
function filterReportArray(people) {
    // Filtered Down Report Array
    const finalArray = [];

    // Go through each person object and filter the Report Array
    people.forEach((person) => {
        // Concat names together for easier filtering
        const fullName = person.firstName.concat(' ', person.lastName);
        // Filter the report array by fullName
        const filteredInfo = reportArray.data.filter((staffMember) => staffMember.fullName === fullName);
        // Extract just the object from the filtered array
        const object = filteredInfo[0];
        // Push the filtered info to the final array
        finalArray.push(object);
    });

    // Set global variable to finalArray
    errorInfo = finalArray;
    // Build EC5 Report
    buildEC5Report(finalArray);
}

/**
 * Displays the corresponding content depending on which person was clicked on.
 * @param {string} index - The index of the person that was chosen to be displayed. Starts at 1 (can't be 0 people). 
 * @example <caption>Example of showing the content for the 3rd person to be searched.</caption>
 * displayTabContent("3");
 */
function displayTabContent(index) {
    // Get list of all tab contents
    const contentContainers = [...ec5ReportContents.childNodes];

    // Hide any content that is currently displayed
    contentContainers.forEach((container) => {
        container.classList.remove('show', 'active');
    });

    // Show the corresponding content
    const correspondingContent = contentContainers.find((container) => container.dataset.index === index);
    correspondingContent.classList.add('show', 'active');
}

/**
 * Changes the clicked tab to primary, and makes all other people tabs secondary.
 * @param {event} e - The event from clicking on a person tab in the error report.
 */
function switchErrorPerson(e) {
    // Get array of all list elements in ec5ReportNav
    const listElements = [...ec5ReportNav.childNodes];

    // Find out the index of the list element that was clicked
    const clickedIndex = e.target.dataset.index;

    // Find which list element has that index
    const chosenListElement = listElements.find((element) => element.dataset.index === clickedIndex);

    // Find all list elements that were NOT chosen
    const nonChosenListElements = listElements.filter((element) => element.dataset.index !== clickedIndex);

    // Change classes to primary for the chosen element
    chosenListElement.classList.remove('btn-secondary');
    chosenListElement.classList.add('btn-primary');

    // Add class of "active" for the chosen element's link
    chosenListElement.firstChild.classList.add('active');

    // For all other elements in the listElements array, change to secondary
    // Also remove any "active" class on their links
    nonChosenListElements.forEach((element) => {
        element.classList.remove('btn-primary');
        element.classList.add('btn-secondary');
        element.firstChild.classList.remove('active');
    });

    // Display the corresponding content
    displayTabContent(clickedIndex);
}

/**
 * Builds the actual report information visually. Responsible for calling showEC5Report.
 * @param {array} info - An array of objects containing information on the people the user wishes to check on.
 * @todo Finish the build contents part. Need to decide what info from 'info' you want to display.
 * @see showEC5Report
 */
function buildEC5Report(info) {
    console.log(info);
    // Build Nav Tabs
    info.forEach((person) => {
        // Person Number
        const personNumber = info.indexOf(person) + 1;

        // Tab
        const tab = document.createElement('li');
        tab.classList.add('btn', 'btn-sm', 'report-tab');
        tab.addEventListener('click', switchErrorPerson);
        tab.dataset.index = `${personNumber}`;
        ec5ReportNav.appendChild(tab);

        // Link inside tab
        const link = document.createElement('a');
        link.classList.add('nav-link');
        link.dataset.toggle = "pill";
        link.dataset.index = `${personNumber}`;
        link.role = "tab";
        link.href = `#person-tab-${personNumber}`;
        link.innerHTML = person.fullName;
        tab.appendChild(link);
    });

    // First tab gets to be primary
    ec5ReportNav.childNodes.forEach((tab) => {
        // Array from tabs
        const arrayOfTabs = [...ec5ReportNav.childNodes];

        // Person Number
        const personNumber = arrayOfTabs.indexOf(tab) + 1;

        // Primary or Secondary button
        if (personNumber === 1) {
            tab.classList.add('btn-primary');
            tab.childNodes[0].classList.add('active');
        } else {
            tab.classList.add('btn-secondary');
        }

        // Build Content Container
        const content = document.createElement('div');
        content.classList.add('tab-pane', 'fade');
        content.id = `person-tab-${personNumber}`;
        content.dataset.index = `${personNumber}`;
        content.role = 'tabpanel';
        ec5ReportContents.appendChild(content);

        // Build 1st Row
        const row1 = document.createElement('div');
        row1.classList.add('row', 'space-even');
        content.appendChild(row1);
        
        // Build 5 Pay Period Columns
        for (let index = 0; index < 5; index++) {
            const column = document.createElement('div');
            column.dataset.colNumber = index;
            column.classList.add('custom-col');
            row1.appendChild(column);            

            // Column Header
            const header = document.createElement('h3');
            header.innerHTML = `Pay Period ${index + 1}`;
            column.appendChild(header);
        }

        // Build Card - How Much Did They Get Paid 
        const payPeriod1 = info[personNumber - 1].payPeriod1;
        const payPeriod2 = info[personNumber - 1].payPeriod2;
        const payPeriod3 = info[personNumber - 1].payPeriod3;
        const payPeriod4 = info[personNumber - 1].payPeriod4;
        const payPeriod5 = info[personNumber - 1].payPeriod5;
        const allPayPeriods = [payPeriod1, payPeriod2, payPeriod3, payPeriod4, payPeriod5];
        const payPeriod1CheckLocation = info[personNumber - 1].PayPeriod1Location;
        const payPeriod2CheckLocation = info[personNumber - 1].PayPeriod2Location;
        const payPeriod3CheckLocation = info[personNumber - 1].PayPeriod3Location;
        const payPeriod4CheckLocation = info[personNumber - 1].PayPeriod4Location;
        const payPeriod5CheckLocation = info[personNumber - 1].PayPeriod5Location;
        const allCheckLocations = [payPeriod1CheckLocation, payPeriod2CheckLocation, payPeriod3CheckLocation, payPeriod4CheckLocation, payPeriod5CheckLocation];

        const columns = [...row1.childNodes];

        allPayPeriods.forEach((payPeriod) => {
            const index = allPayPeriods.indexOf(payPeriod);
            const totalHours = payPeriod[2][0].totalHours;
            const regHours = payPeriod[2][0].regHours;
            const otHours = payPeriod[2][0].otHours;
            const dtHours = payPeriod[2][0].dtHours;
            const sickHours = payPeriod[2][0].sickHours;
        
            
            // Current Pay Period Column
            const column = columns.find((column) => column.dataset.colNumber === `${index}`);
            // Holds "Total Hours"
            createCustomTag(column, 'Total Hours', totalHours);
            // Holds "Regular Hours"
            createCustomTag(column, 'Reg Hours', regHours, 'dark', 'azure');
            // Holds "Overtime Hours"
            createCustomTag(column, 'OT Hours', otHours, 'dark', 'indigo');
            // Holds "Double-Time Hours"
            createCustomTag(column, 'DT Hours', dtHours, 'dark', 'purple');
            // Holds "Sick Hours"
            createCustomTag(column, 'Sick Hours', sickHours, 'dark', 'pink');

            // Horizontal Line to Separate Pay Tags from Other Info Tags
            const hr = document.createElement('hr');
            hr.classList.add('smaller-hr');
            column.appendChild(hr);

            // Check Location
            createCustomTag(column, 'Check Sent To', allCheckLocations[index], 'dark', 'orange');

            // Each Day in the Pay Period - Week 1
            const days1 = [...payPeriod[0]];
            // Remove the Week Summary Object
            days1.pop();
            // Each Day in the Pay Period - Week 2
            const days2 = [...payPeriod[1]];
            // Remove the Week Summary Object
            days2.pop();
            // Each Day in the Pay Period - All
            const daysAll = [...days1, ...days2];
            // Holds Info For Each Day in the Pay Period
            createCustomDayByDay(column, daysAll);
        });      
    });
    // Display the EC5 Report
    showEC5Report();
}

function createCustomDayByDay(appendTo, days) {
    const card = document.createElement('div');
    card.classList.add('card');
    card.style.maxWidth = '100%';
    appendTo.appendChild(card);

    const header = document.createElement('div');
    header.classList.add('card-header');
    card.appendChild(header);

    const h3 = document.createElement('h3');
    h3.classList.add('card-title');
    h3.innerHTML = 'Day by Day';
    header.appendChild(h3);

    const body = document.createElement('div');
    body.classList.add('card-body', 'o-auto');
    body.style.height = '7rem';
    card.appendChild(body);

    const unstyledList = document.createElement('ul');
    unstyledList.classList.add('list-unstyled', 'list-separated');
    body.appendChild(unstyledList);

    days.forEach((day) => {
        const date = day.Day;
        const li = document.createElement('li');
        li.classList.add('list-separated-item');
        unstyledList.appendChild(li);

        const row = document.createElement('div');
        row.classList.add('row', 'align-items-center');
        row.style.flexWrap = 'nowrap';
        li.appendChild(row);

        const avatar = document.createElement('div');
        avatar.classList.add('col-auto');
        row.appendChild(avatar);

        const avatarInner = document.createElement('span');
        avatarInner.classList.add('avatar', 'avatar-blue', 'day-by-day-avatar');
        avatarInner.innerHTML = date;
        avatar.appendChild(avatarInner);

        const infoCol = document.createElement('div');
        infoCol.classList.add('col', 'day-by-day-col');
        row.appendChild(infoCol);

        const regHours = document.createElement('span');
        regHours.innerHTML = `REG: ${day.regHours}`;
        infoCol.appendChild(regHours);

        const otHours = document.createElement('span');
        otHours.innerHTML = `OT: ${day.otHours}`;
        infoCol.appendChild(otHours);

        const dtHours = document.createElement('span');
        dtHours.innerHTML = `DT: ${day.dtHours}`;
        infoCol.appendChild(dtHours);

        const sickHours = document.createElement('span');
        sickHours.innerHTML = `SICK: ${day.sickHours}`;
        infoCol.appendChild(sickHours);
    });
}


/**
 * A helper function to create and append a custom tag to another element easily.
 * @param {element} appendTo - The element which the tag will be appended to.
 * @param {string} description - The inner description to the tag.
 * @param {(number|string)} value - A value to be displayed in the tag addon.
 * @param {string} tagColor - Color for the tag. Default = "dark".
 * @param {string} tagAddonColor - Color for the inner tag addon. Default = "blue".
 */
function createCustomTag(appendTo, description, value, tagColor = `dark`, tagAddonColor = `blue`) {
    const tag = document.createElement('span');
    tag.classList.add('tag', 'up-down-marg-5', `tag-${tagColor}`);
    tag.innerHTML = `${description}`;

    const tagAddon = document.createElement('span');
    tagAddon.classList.add('tag-addon', 'bold', `tag-${tagAddonColor}`);
    tagAddon.innerHTML = value;
    tag.appendChild(tagAddon);

    appendTo.appendChild(tag);
}

/**
 * Adds a special class to the remove buttons, allowing them to grow on hover. Called by showErrorModal().
 */
function editIcons() {
    const xIcons = document.querySelectorAll('.fa-times');
    xIcons.forEach((icon) => icon.classList.add('x-icon'));
}

/**
 * Calls editIcons() and displays the modal when the user either: 1. clicks the EC5 button, or 2. enters the Konami code.
 * @see editIcons
 */
// Show Error Modal
function showErrorModal() {
    // Mess with FA Icons
    editIcons();
    $('#error-modal').modal();
}

/**
 * Looks at the elements on the screen, and hides the remove button if only 1 person is on the EC5-pre screen. It will show all remove buttons if more than 1 person is on the screen.
 * @param {array} elementsToCheck - An array of nodes containing a data-index attribute. This array holds all elements for each person the user input. 
 * @param {element} buttonElement - The button element associated with the person to check.
 * @see editPeopleElements
 */
function checkLastPerson(elementsToCheck, buttonElement) {
    if (elementsToCheck.length === 5) {
        buttonElement.classList.add('hidden');
    } else {
        buttonElement.classList.remove('hidden');
    }
}

/**
 * Called by removeErrorPerson. Hands out ID's to the search inputs, based on the number of the person.
 * @see removeErrorPerson
 */
function editPeopleElements() {
    // Current people elements in the errorFormGroup
    const allPeopleElements = [...errorFormGroup.querySelectorAll('[data-index]')];

    // Changeable index variable for current element in the allPeopleElements array
    let currentElementIndex = 1;
    // Changeable number corresponding to person number
    let currentNumber = 1;
    // Change each element in the array
    allPeopleElements.forEach((element) => {
        // Check the currentElementIndex
        // If it is 6, increment the currentNumber
        // Reset currentElementIndex to 1
        if (currentElementIndex === 6) {
            currentNumber++;
            currentElementIndex = 1;
        }

        // Update ID based on currentNumber
        if (element.localName === "label") {
            element.id = `person-label-${currentNumber}`;
            element.innerText = `Person ${currentNumber}`;
        } else if (element.placeholder === "First Name") {
            element.id = `error-first-name-${currentNumber}`;
        } else if (element.placeholder === "Last Name") {
            element.id = `error-last-name-${currentNumber}`;
        } else if (element.localName === "button") {
            element.id = `error-remove-button-${currentNumber}`;

            // If there is only 1 person on the screen,
            // hide the remove button
            checkLastPerson(allPeopleElements, element);
        }

        // Update index
        element.dataset.index = `${currentNumber}`;

        // Increment currentElementIndex
        currentElementIndex++;
    });
}

/**
 * Removes a person from the list of people to check on. Also calls editPeopleElements.
 * @param {event} e - The event triggered from a removeButton being clicked. 
 * @see editPeopleElements
 */
function removeErrorPerson(e) {
    // Index of person to remove
    const personIndex = e.target.dataset.index;
    // All people elements in the errorFormGroup
    const allPeopleElements = [...errorFormGroup.querySelectorAll('[data-index]')];
    // Filter down the elements to just the ones with the same index
    const elementsToRemove = allPeopleElements.filter((element) => element.dataset.index === `${personIndex}`);
    // Remove those elements
    elementsToRemove.forEach((element) => element.remove());
    // Decrement the personCounter
    personCounter--;
    // Edit the remaining elements
    editPeopleElements();
}

/**
 * Adds a person to the list of people to check on. Also calls editIcons().
 * @see editIcons
 */
function addErrorPerson() {
    // Change original text of first label
    firstErrorLabel.innerText = "Person 1";

    // Make the remove button display for first person
    firstErrorRemoveButton.classList.remove('hidden');

    // Increment number of people to check
    personCounter++;

    // Create label
    const label = document.createElement('label');
    label.id = `person-label-${personCounter}`;
    label.classList.add('form-label', 'scoot-up');
    label.innerText = `Person ${personCounter}`;
    label.dataset.index = `${personCounter}`;
    errorFormGroup.appendChild(label);

    // Create container
    const container = document.createElement('div');
    container.classList.add('flexible-container');
    container.dataset.index = `${personCounter}`;
    errorFormGroup.appendChild(container);

    // Create First Name input
    const firstName = document.createElement('input');
    firstName.id = `error-first-name-${personCounter}`;
    firstName.type = "text";
    firstName.classList.add('form-control', 'flexible-item');
    firstName.placeholder = "First Name";
    firstName.dataset.index = `${personCounter}`;
    container.appendChild(firstName);

    // Create Last Name input
    const lastName = document.createElement('input');
    lastName.id = `error-last-name-${personCounter}`;
    lastName.type = "text";
    lastName.classList.add('form-control', 'flexible-item', 'scoot-over');
    lastName.placeholder = "Last Name";
    lastName.dataset.index = `${personCounter}`;
    container.appendChild(lastName);

    // Create Remove Button
    const removeButton = document.createElement('button');
    removeButton.id = `error-remove-button-${personCounter}`;
    removeButton.type = "button";
    removeButton.classList.add('btn', 'btn-icon', 'remove-person');
    removeButton.dataset.index = `${personCounter}`;
    removeButton.addEventListener('click', removeErrorPerson);
    container.appendChild(removeButton);

    // Create Remove Icon
    const icon = document.createElement('i');
    icon.classList.add('fa', 'fa-times', 'fa-lg');
    removeButton.appendChild(icon);

    // Failsafe to make sure that the first person has a visible remove button
    // If there is more than 1 person on screen
    const allPeopleElements = [...errorFormGroup.querySelectorAll('[data-index]')];
    allPeopleElements[4].classList.remove('hidden');

    // Add special class to all Remove Icons
    editIcons();
}

const addPersonButton = document.getElementById('add-person-button');
addPersonButton.addEventListener('click', addErrorPerson);

/*
function buildErrorArray() {
    const peopleToCheck = reportArray.data.find()
}

// Create an object for each person, and push to error testing array
reportArray.data.forEach((staffMember) => {
    let emptyObject = {id: staffMember.fullName}
});

*/