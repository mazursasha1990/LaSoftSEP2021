const salary = {
    "1st": 3000,
    "2nd": 2000,
    "3rd": 1000
};
function calculateSalary(category, experience) {

    var pureSalary = checkCategory(category);
    var salaryWithWxperience = checkExperience(experience, pureSalary);
    var tax = salaryWithWxperience * 0.15;
    var salaryAfterTaxes = salaryWithWxperience - tax;

    console.log(salaryAfterTaxes);
}

function checkCategory(category) {
    let pureSalary;
    if (category === "1st") {
        pureSalary = salary["1st"];
    }
    else if (category === "2nd") {
        pureSalary = salary["2nd"];
    }
    else if (category === "3rd") {
        pureSalary = salary["3rd"];
    }
    return pureSalary;

}
function checkExperience(experience, pureSalary) {
    let salaryWithWxperience;
    if (experience < 2) {
        salaryWithWxperience = pureSalary;
    }
    else if (experience >= 2 && experience < 5) {
        salaryWithWxperience = pureSalary * 1.1;
    }
    else if (experience >= 5 && experience < 10) {
        salaryWithWxperience = pureSalary * 1.2;
    }
    else if (experience >= 10) {
        salaryWithWxperience = pureSalary * 1.3;
    }
    return salaryWithWxperience;
}


calculateSalary("1st", 6);



