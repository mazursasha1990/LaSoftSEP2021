function calculateAreaAndPerimeter() {
    r = prompt("Enter radius");
    var perimeter = 2 * Math.PI * r;
    var area = Math.PI * Math.pow(r, 2);
    console.log("Input the radius of the circle: " + r + ".");
    console.log("The perimeter is " + perimeter + ".");
    console.log("The area is " + area + ".");
}
calculateAreaAndPerimeter();