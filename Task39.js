function kilometrsFlyFlies() {
    let distanceBetweenCities = +prompt("Enter the distance between cities");
    let cyclistSpeed = +prompt("Enter cyclist speed");
    let flySpeed = +prompt("Enter fly speed");

    let distanceOfFly = (distanceBetweenCities / cyclistSpeed) * flySpeed;

    console.log(distanceOfFly);
}
kilometrsFlyFlies();