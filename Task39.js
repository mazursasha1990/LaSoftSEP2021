function kilometrsFlyFlies(distanceBetweenCities, cyclistSpeed, flySpeed) {
    let distanceOfFly = (distanceBetweenCities / cyclistSpeed) * flySpeed;

    console.log(distanceOfFly);
}
kilometrsFlyFlies(100, 10, 15);