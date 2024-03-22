const prompt = require('prompt-sync')();

//Program 1: Temperature Converter
let input_temp = prompt("Enter a temperature in fahrenheit: ");
let output_temp = (input_temp - 32) * (5/9)
console.log(input_temp,"degrees fahrenheit is equal to", output_temp, "degrees celsius");

//Program 2: Grade Calculator
let grade_percentage = prompt("Enter your grade in percentage.");
if (grade_percentage >= 90) {
    console.log("Your percentage grade corresponds to an A");
}
else if (grade_percentage >= 80){
    console.log("Your percentage grade corresponds to a B");
}
else if (grade_percentage >= 70){
    console.log("Your percentage grade corresponds to a C");
}
else if (grade_percentage >= 60){
    console.log("Your percentage grade corresponds to a D");
}
else {
    console.log("Your percentage grade corresponds to a F");
}

//Program 3: Leap Year Checker
let leap = prompt("Enter a year. ");
if ((leap % 4 == 0 && leap % 100 !== 0)|| (leap % 400 == 0)){
    console.log("It is a Leap Year");
}
else{ 
    console.log("It is not a Leap Year")
}
//Program 4: Largest Number Finder */

let num1 = prompt("Enter a real number ");
let num2 = prompt("Enter a different real number. ");
let num3 = prompt("Enter another different real number ");
//The the phrase Number below converts a value to a number
num1 = Number(num1);
num2 = Number(num2);
num3 = Number(num3);
if (num1 > num2 && num1 > num3)
{
    console.log(num1);
}
else if (num2 > num1 && num2 > num3)
{
    console.log(num2);
}
else (num3 > num1 && num3 > num2)
{
    console.log(num3);
} 
