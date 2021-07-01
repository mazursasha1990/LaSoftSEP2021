function calculeteCostOfParking() {
    let timeOfArival = prompt("Enter the time of arival in format hh.mm", "hh.mm");
    let timeOfDeparture = prompt("Enter the time of departure in format hh.mm", "hh.mm");
    let pricePerHour = prompt("Enter price per hour");
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
        fullCostOfParking = Math.floor(timeOfParking) * pricePerHour;
    }

    document.write("You arrived at the parking at: " + timeOfArival, "<br/>");
    document.write("You departure the parking at: " + timeOfDeparture, "<br/>");
    document.write("The cost of an hour of parking is: " + pricePerHour + "$", "<br/>");
    document.write("Tha full cost of parking is: " + fullCostOfParking + "$", "<br/>")

}
calculeteCostOfParking();
