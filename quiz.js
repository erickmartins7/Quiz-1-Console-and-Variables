const prompt = require('prompt-sync')();

//Program 1: Temperature Converter
let input_temp = prompt("Enter a temperature in fahrenheit.");
let output_temp = (input_temp - 32) * (5/9)
console.log(input_temp,"degrees fahrenheit is equal to", output_temp, "degrees celsius");

//Program 2: Grade Calculator
let grade_percentage = prompt("Enter your grade in percentage.");
if (grade_percentage >= 90) {
    console.log("Your percentage grade of", grade_percentage, "corresponds to an A");
}
else if (89>= grade_percentage >= 80){
    console.log("Your percentage grade of", grade_percentage, "corresponds to a B");
}
else if (79>= grade_percentage >= 70){
    console.log("Your percentage grade of", grade_percentage, "corresponds to a C");
}
else if (69>= grade_percentage >= 60){
    console.log("Your percentage grade of", grade_percentage, "corresponds to a D");
}
else if (grade_percentage < 60){
    console.log("Your percentage grade of", grade_percentage, "corresponds to a F");
}
//Program 3: Leap Year Checker

//Program 4: Largest Number Finder
