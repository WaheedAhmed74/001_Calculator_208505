import inquirer from "inquirer";
let answers = await inquirer.prompt([
    { message: "Enter Your First Number ", type: "Number", name: "num1" },
    { message: "Enter Your Second Number ", type: "number", name: "num2" },
    { message: "Enter Your Operator fo Operation ", type: "list", name: "oprtr",
        choices: ["Addition", "Subtraction", "Multiplication", "Division", "Exponentiation", "Modulus"],
    },
]);
console.log(answers);
if (answers.oprtr === "Addition") {
    console.log("Your Answer of Adition is :");
    console.log(answers.num1 + answers.num2);
}
else if (answers.oprtr === "Subtraction") {
    console.log("Your Answer of Subtraction is :");
    console.log(answers.num1 - answers.num2);
}
else if (answers.oprtr === "Multiplication") {
    console.log("Your Answer of Multiplication is :");
    console.log(answers.num1 * answers.num2);
}
else if (answers.oprtr === "Division") {
    console.log("Your Answer of Division is :");
    console.log(answers.num1 / answers.num2);
}
else if (answers.oprtr === "Exponentiation") {
    console.log("Your Answer of Exponentiation is :");
    console.log(answers.num1 ** answers.num2);
}
else if (answers.oprtr === "Modulus") {
    console.log("Your Answer of Modulus is :");
    console.log(answers.num1 % answers.num2);
}
else {
    console.log("Your Operator is wrong :");
}
