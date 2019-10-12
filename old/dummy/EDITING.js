// Regular Hours
var hoursTLReg = Number(entry.hoursTLReg);
var hoursLCWPReg = Number(entry.hoursLCWPReg);
var hoursOCReg = Number(entry.hoursOCReg);

// Regular Team Leaders
let workingTLPapaObject = Papa.parse(entry["workingTLs (Reg)"]);
let regTLArray = workingTLPapaObject.data[0];

countHours(regTLArray, "TL");

function countHours(positionArray, positionType) {
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
    });

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
        totalHoursThisWeek = weekInfoObject.totalHours;
        hoursObject = splitHours(site, hoursType, totalHoursThisWeek);
    } else {
        correspondingDateObject = week2Array.find(function (object) {
            return object.Day === entryDate;
        });
        weekInfoObject = week2Array.find(function (object) {
            return object.id === "week2";
        });
        // Add how many hours already worked this week
        totalHoursThisWeek = weekInfoObject.totalHours;
        hoursObject = splitHours(site, hoursType, totalHoursThisWeek);
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

    staffData.push(personData);
}