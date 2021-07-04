var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0');
var yyyy = today.getFullYear();
var date = dd + '/' + mm + '/' + yyyy;
var time = today.getHours() + ":" + today.getMinutes();
console.log("Current Date and Time: " + date + " " + time);