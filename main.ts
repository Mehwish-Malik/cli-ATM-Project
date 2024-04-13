#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 12000; //Dollar
let myPin:number = 1234;

let pinAnswer = await inquirer.prompt([
    { 
       name: "pin",
      message:"kindly Enter your pin",
       type:"number",
      }
   ]);
   
   if (pinAnswer.pin === myPin){
    console.log("Correct Pin Code!!!");
   

   
    let operationAns = await inquirer.prompt(
        [
            {
                name:"operation",
                message: "Please select option",
                type:"list",
                choices: ['withDraw','fastCash' , 'checkBalance']
            }

        ]
    );

    if (operationAns.operation === "withDraw") {
        let amountAns = await inquirer.prompt(
            [
                {
                    name: "amount",
                    message: "Enter your amount",
                    type: "number",
                }
            ]
        );
    
        if(amountAns.amount > myBalance){
            console.log("Insufficient Balance")
        }
        else {myBalance -= amountAns.amount;

        
        console.log(`your remaining balance is ${myBalance}`)
    };
    }
  else if (operationAns.operation === "fastCash"){
        let fast = await inquirer.prompt(
            [
                {
                    name: "fastcash",
                    message:"Select the Amount which you want to withdrawal",
                    type: "list",
                    choices:['2000','4000','5000','7000','9000'],
                }
            ]
        );
        myBalance -= fast.fastcash;
        console.log(`You Have successfully Withdrawal!!! ${fast.fastcash} \nYour Remaining Balance is ${myBalance}` );
    }
     else if (operationAns.operation === "checkBalance"){
        console.log(`your balance is ${ myBalance}`);
    }
   }
 else {
    console.log("Incorrect Pin Code");
   
}