#! /usr/bin/env node
import inquirer from "inquirer";
let balance = 1000;
let pin = 1234;
const userPin = await inquirer.prompt([
    {
        name: "userPin",
        type: "number",
        message: "Enter your pin",
    },
]);
if (userPin.userPin === pin) {
    console.log("Login Successful");
    const options = await inquirer.prompt([
        {
            name: "options",
            type: "list",
            choices: ["Withdraw", "Balance Inquiry", "Fast Cash", "Exit"],
            message: "Select an option",
        },
    ]);
    switch (options.options) {
        case "Withdraw":
            const amount = await inquirer.prompt([
                {
                    name: "amount",
                    type: "number",
                    message: "Enter the amount to withdraw",
                },
            ]);
            if (amount.amount > balance) {
                console.log("Insufficient Balance");
                break;
            }
            else {
                balance -= amount.amount;
                console.log("Withdrawal Successful");
                console.log(`Your new balance is: ${balance}`);
            }
            break;
        case "Balance Inquiry":
            console.log(`Your Current Balance is: ${balance}`);
            break;
        case "Fast Cash":
            console.log("Fast Cash");
            const fastCash = await inquirer.prompt([
                {
                    name: "fastCash",
                    type: "list",
                    choices: ["500", "1000", "2000", "5000", "10000"],
                    message: "Select a fast cash option",
                },
            ]);
            if (fastCash.fastCash > balance) {
                console.log("Insufficient Balance");
            }
            else {
                balance -= fastCash.fastCash;
                console.log("Fast Cash Successful");
                console.log(`Your new balance is: ${balance}`);
            }
            break;
        case "Exit":
            console.log("Exit");
            break;
    }
}
else {
    console.log("Login Failed");
}
