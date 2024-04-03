#! /usr/bin/env node  // line tells os to execute the code using node.js interpreter (SHEBANG)
import chalk from "chalk";
import inquirer from "inquirer"; // import inquirer package as it take input from user
let process = true;

while (process === true) {
  const answer = await inquirer.prompt([
    {
      message: chalk.blue("Select operator to perform operation."),
      type: "list",
      name: "operators",
      choices: [
        "Addition",
        "Subtraction",
        "Multiplication",
        "Division",
        "Exponent",
        "Exit",
      ],
    },
  ]); /* taking input from user using inquirer.prompt() function ,
[] bracket represents an array where {} brackets holds value for an array */
  if (answer.operators === "Exit") {
    process = false;
    break;
  } else if (answer.operators === "Exponent") {
    const value = await inquirer.prompt([
      {
        message: "Enter base: ",
        name: "base",
        type: "number",
      },
      {
        message: "Enter exponent: ",
        name: "exponent",
        type: "number",
      },
    ]);
    console.log(chalk.green("Answer: " + Math.pow(value.base, value.exponent)));
  } else {
    // conditional statements
    const values = await inquirer.prompt([
      {
        message: chalk.blue("Enter first number"),
        type: "number",
        name: "firstNumber",
      },
      {
        message: chalk.blue("Enter second number"),
        type: "number",
        name: "secondNumber",
      },
    ]);
    if (answer.operators === "Addition") {
      console.log(
        chalk.green("Answer:" + (values.firstNumber + values.secondNumber))
      );
    } else if (answer.operators === "Subtraction") {
      console.log(
        chalk.green("Answer:" + (values.firstNumber - values.secondNumber))
      );
    } else if (answer.operators === "Multiplication") {
      console.log(
        chalk.green("Answer:" + values.firstNumber * values.secondNumber)
      );
    } else if (answer.operators === "Division") {
      console.log(
        chalk.green("Answer:" + values.firstNumber / values.secondNumber)
      );
    }
  }
}
