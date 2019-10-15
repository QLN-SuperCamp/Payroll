// Site Inputs
var siteSW = document.getElementById('site-sw');
var siteSTAN = document.getElementById('site-stan');
var siteUCF = document.getElementById('site-ucf');
var siteVILLA = document.getElementById('site-villa');

// Camp Groups
var noSiteText = document.getElementById('no-site-text');
var swCamps = document.getElementById('sw-camps');
var stanCamps = document.getElementById('stan-camps');
var ucfCamps = document.getElementById('ucf-camps');
var villaCamps = document.getElementById('villa-camps');

// Southwestern University Camps
var swCamp1 = document.getElementById('sw-camp1');
var swCamp2 = document.getElementById('sw-camp2');

// Stanford University Camps
var stanCamp1 = document.getElementById('stan-camp1');
var stanCamp2 = document.getElementById('stan-camp2');
var stanCamp3 = document.getElementById('stan-camp3');
var stanCamp4 = document.getElementById('stan-camp4');
var stanCamp5 = document.getElementById('stan-camp5');
var stanCamp6 = document.getElementById('stan-camp6');

// University of Central Florida Camps
var ucfCamp1 = document.getElementById('ucf-camp1');
var ucfCamp2 = document.getElementById('ucf-camp2');

// Villanova Camps
var villaCamp1 = document.getElementById('villa-camp1');
var villaCamp2 = document.getElementById('villa-camp2');

// All Camps
var allCamps = [swCamp1, swCamp2, stanCamp1, stanCamp2, stanCamp3, stanCamp4, stanCamp5, stanCamp6, ucfCamp1, ucfCamp2, villaCamp1, villaCamp2];

// Listen for the user to select a site
siteSW.addEventListener("click", siteChosen);
siteSTAN.addEventListener("click", siteChosen);
siteUCF.addEventListener("click", siteChosen);
siteVILLA.addEventListener("click", siteChosen);

// Listen for the user to select a camp
allCamps.forEach(function(camp) {
    camp.addEventListener("click", campChosen);
});

// Dates
var dateMonth = document.getElementById('date-month');
var dateDay = document.getElementById('date-day');





function siteChosen() {
    var value = this.value;

    if (value === "sw") {
        hideThis([stanCamps, ucfCamps, villaCamps, noSiteText]);
        showThis(swCamps);
    } else if (value === "stan") {
        hideThis([swCamps, ucfCamps, villaCamps, noSiteText]);
        showThis(stanCamps);
    } else if (value === "ucf") {
        hideThis([swCamps, stanCamps, villaCamps, noSiteText]);
        showThis(ucfCamps);
    } else {
        hideThis([swCamps, stanCamps, ucfCamps, noSiteText]);
        showThis(villaCamps);
    }

    // Reset the date
    dateMonth.value = "";
    dateDay.value = "";
}

function campChosen() {
    var value = this.value;
    
    // Set date depending on selected camp
    if (value === "sw-camp1") {
        dateMonth.value = "6";
        dateDay.value = "19";
    } else if (value === "sw-camp2") {
        dateMonth.value = "7";
        dateDay.value = "3";
    } else if (value === "stan-camp1") {
        dateMonth.value = "6";
        dateDay.value = "22";
    } else if (value === "stan-camp2") {
        dateMonth.value = "7";
        dateDay.value = "9";
    } else if (value === "stan-camp3") {
        dateMonth.value = "7";
        dateDay.value = "17";
    } else if (value === "stan-camp4") {
        dateMonth.value = "7";
        dateDay.value = "25";
    } else if (value === "stan-camp5") {
        dateMonth.value = "8";
        dateDay.value = "2";
    } else if (value === "stan-camp6") {
        dateMonth.value = "8";
        dateDay.value = "14";
    } else if ((value === "ucf-camp1") || (value === "villa-camp1")) {
        dateMonth.value = "7";
        dateDay.value = "3";
    } else {
        dateMonth.value = "7";
        dateDay.value = "17";
    }
}


function showThis() {
    let thingsToShow = arguments;
    for (let i = 0; i < thingsToShow.length; i++) {
        let currentThing = thingsToShow[i];
        currentThing.classList.remove("hidden");
    }
}

function hideThis() {
    // If there is only one item to hide
    if (arguments[0].constructor === HTMLDivElement) {
        let thingsToHide = arguments;
        for (let i = 0; i < thingsToHide.length; i++) {
            let currentThing = thingsToHide[i];
            if (currentThing.classList.contains("hidden")) {} else {
                currentThing.classList.add("hidden");
            }
        }
    } else if (arguments[0].constructor === Array) {
        // There is an array of items to hide
        let numberOfThingsToHide = arguments[0].length;
        for (let i = 0; i < numberOfThingsToHide; i++) {
            let currentThing = arguments[0][i];
            if (currentThing.classList.contains("hidden")) {} else {
                currentThing.classList.add("hidden");
            }
        }
    }
}