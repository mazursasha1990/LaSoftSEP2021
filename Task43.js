function calculeteCostOfParking(timeOfArival, timeOfDeparture, pricePerHour) {
    let fullCostOfParking;
    let timeOfArivalParts = timeOfArival.split(".");
    let timeOfDepartureParts = timeOfDeparture.split(".");
    let timeOfArivalMinutes = (+timeOfArivalParts[0] * 60) + +timeOfArivalParts[1];
    let timeOfDepartureMinutes = (+timeOfDepartureParts[0] * 60) + +timeOfDepartureParts[1];
    let timeOfParking = ((timeOfDepartureMinutes - timeOfArivalMinutes) / 60).toFixed(2);

    if (timeOfParking - Math.floor(timeOfParking) > 0.1) {
        fullCostOfParking = Math.ceil(timeOfParking) * pricePerHour
    }
    else {
        fullCostOfParking = Math.floor(timeOfParking) * pricePerHour
    }

    console.log("You arrived at the parking at: " + timeOfArival);
    console.log("You departure the parking at: " + timeOfDeparture);
    console.log("The cost of an hour of parking is: " + pricePerHour + "$");
    console.log("The full cost of parking is: " + fullCostOfParking + "$")

}
calculeteCostOfParking("12.40", "14.25", "3");
