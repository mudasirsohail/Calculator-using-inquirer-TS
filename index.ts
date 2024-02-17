import inquirer from "inquirer";

const answer: { 
    "number1": number, 
    "number2": number,
    "operator": string
} = await inquirer.prompt([{
    type: "number",
    name:"number1",
    message: "write your value",
},{
    type: "number1",
    name: "number2",
    message: "write your value no 2",

},{
    type: "list",
    name: "operator",
    message: "Select your operator",
    choices: ["+", "-", "*", "/"]
}
])
const {number1, number2, operator} = answer
if(number1 && number2 && operator) {
    let result:number = 0
    if(operator === "+"){
        result = number1 + number2
    } else if(operator === "-"){
        result = number1 - number2
    } else if(operator === "*"){
        result = number1 * number2
    } else if(operator === "/"){
        result = number1 / number2
    } console.log("your result is : " + result)
}else{
    console.log("Please assign valid operator")
}