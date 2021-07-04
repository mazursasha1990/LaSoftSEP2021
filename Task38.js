function calculateDistanceOfMeeting(distanceBetweenCities, hareSpeed, turtleSpeed) {
    var distanceFromCityB = (distanceBetweenCities / (hareSpeed + turtleSpeed)) * turtleSpeed;
    console.log(distanceFromCityB);
}
calculateDistanceOfMeeting(100, 15, 10);