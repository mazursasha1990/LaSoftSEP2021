function calculateVolumeOfSphere() {
    radius = prompt("Enter radius");
    var volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
    console.log("Input the radius of the circle: " + radius);
    console.log("The volume of the sphere is:  " + volume + ".");

}
calculateVolumeOfSphere();