function checkLeapYear(year) {
    if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
        console.log(year + " is leap year")
    }
    else {
        console.log(year + " is not leap year")
    }
}
checkLeapYear(2012);
checkLeapYear(1500);
checkLeapYear(1600);
checkLeapYear(2020);
