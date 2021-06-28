function calculateDistanceOfMeeting() {
    var distanceBetweenCities = +prompt("Enter the distanse between city A and city B");
    var hareSpeed = +prompt("Enter hare speed");
    var turtleSpeed = +prompt("Enter turtle speed");

    var distanceFromCityB = (distanceBetweenCities / (hareSpeed + turtleSpeed)) * turtleSpeed;
    console.log(distanceFromCityB);
}
calculateDistanceOfMeeting();