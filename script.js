function startCalculator() {

  alert("Welcome to Japhet Smart Calculator");

  let choice = prompt(
    "Choose an option:\n" +
    "1. Basic Calculator\n" +
    "2. Simple Interest\n" +
    "3. Area of Rectangle"
  );

  if (choice === "1") {

    let num1 = Number(prompt("Enter first number:"));
    let num2 = Number(prompt("Enter second number:"));
    let operator = prompt("Enter operation (+, -, *, /):");

    let result;

    if (operator === "+") {
      result = num1 + num2;
    } else if (operator === "-") {
      result = num1 - num2;
    } else if (operator === "*") {
      result = num1 * num2;
    } else if (operator === "/") {
      result = num1 / num2;
    } else {
      alert("Invalid operator");
      return;
    }

    alert("Result: " + result);

  } 
  else if (choice === "2") {

    let P = Number(prompt("Enter Principal:"));
    let R = Number(prompt("Enter Rate:"));
    let T = Number(prompt("Enter Time:"));

    let SI = (P * R * T) / 100;

    alert("Simple Interest is: " + SI);

  } 
  else if (choice === "3") {

    let length = Number(prompt("Enter length:"));
    let width = Number(prompt("Enter width:"));

    let area = length * width;

    alert("Area is: " + area);

  } 
  else {
    alert("Invalid choice");
  }
}
