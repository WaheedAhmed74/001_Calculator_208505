import inquirer from "inquirer";

let answers = await inquirer.prompt([
  { message: "Enter Your First Number ", type: "Number", name: "num1" },
  { message: "Enter Your Second Number ", type: "number", name: "num2"},
  { message: "Enter Your Operator fo Operation ", type: "list", name: "oprtr",
   choices: ["Addition", "Subtraction", "Multiplication", "Division", "Exponentiation", "Modulus"],
  },
]);
// Simple Print the Answers
console.log(answers)
// Here are the conditions
if (answers.oprtr === "Addition"){ // Addition Operator
    console.log("Your Answer of Adition is :")
    console.log(answers.num1 + answers.num2)
} else if (answers.oprtr === "Subtraction"){ // SSubtraction Operator
    console.log("Your Answer of Subtraction is :")
    console.log(answers.num1 - answers.num2)
} else if (answers.oprtr === "Multiplication"){ // Multiplication Operator
    console.log("Your Answer of Multiplication is :")
    console.log(answers.num1 * answers.num2)
} else if (answers.oprtr === "Division"){ // Division Operator
    console.log("Your Answer of Division is :")
    console.log(answers.num1 / answers.num2)
} else if (answers.oprtr === "Exponentiation"){ // Exponential Operator
    console.log("Your Answer of Exponentiation is :")
    console.log(answers.num1 ** answers.num2)
} else if (answers.oprtr === "Modulus"){ // Modulus (Remainder) Operator
    console.log("Your Answer of Modulus is :")
    console.log(answers.num1 % answers.num2)
} else {
    console.log("Your Operator is wrong :")
} 