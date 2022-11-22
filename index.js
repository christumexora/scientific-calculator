let calcButton = document.querySelectorAll(".numericKey");
let displayInput = document.querySelector(".display-input");
let displayResult = document.querySelector("#displayResult");
let operators = document.querySelectorAll(".operatorKey");
let equal = document.querySelector(".equal");
let num1;
let num2;
let input = displayInput;
let result = displayResult;
let operations;

calcButton.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    num1 = parseFloat(e.target.innerText);
    input.innerText = num1;
  });
});

operators.forEach((operator) => {
  operator.addEventListener("click", (e) => {
    operations = e.target.innerHTML;
    input = operations;
    // console.log(typeof operations);
    input.innerHTML = operations;
    num2 = parseFloat(
      calcButton.forEach((btns) => {
        btns.addEventListener("click", (e) => {
          num2 = parseFloat(e.target.innerText);
          input.innerHTML += num2;
          // mathOperations();
          // console.log(num2);
        });
      })
    );
    result.innerText = num2;
    // mathOperations();
  });
});
function mathOperations(operations) {
  if (operations === "+") {
    console.log("yes");
  }
}
equal.addEventListener("click", mathOperations);

// let firstOperand;
// let operator;
// let secondOperand;
// let calcKey = document.querySelector(".equal").innerHTML;
// let addition = document.querySelector(".add").innerHTML;

// function CalCulateValue(num1, num2, operator) {
//   if (operator === "-") {
//     displayResult.innerHTML = num1 - num2;
//   } else if (operator === "+") {
//     displayResult.innerHTML = num1 + num2;
//   } else if (operator === "/") {
//     displayResult.innerHTML = num1 / num2;
//   } else if (operator === "*") {
//     displayResult.innerHTML = num1 * num2;
//   } else {
//     displayResult.innerHTML = 0;
//   }
// }

// const perFormLogic = (e) => {
//   let val = e.target.innerHTML;
//   let trimmedVal = val.trim();
//   let displayed;
//   let sum = 0;
//   let num1 = 0;
//   let num2 = 0;
//   let operator;
//   console.log(trimmedVal);
//   // console.log(val);
//   if (
//     trimmedVal !== "-" &&
//     trimmedVal !== "+" &&
//     trimmedVal !== "X" &&
//     trimmedVal !== "/" &&
//     trimmedVal !== "="
//   ) {
//     if (operator) {
//       num2 += parseInt(trimmedVal);
//       displayInput.innerHTML += num2;
//     } else {
//       num1 += parseInt(trimmedVal);
//       displayInput.innerHTML += num1;
//     }

//     sum += parseInt(trimmedVal);
//     console.log(sum);
//   } else {
//     switch (trimmedVal) {
//       case "-":
//         displayInput.innerHTML = "";
//         operator = "-";
//         break;
//       case "+":
//         displayInput.innerHTML = "";
//         operator = "+";
//         break;
//       case "X":
//         displayInput.innerHTML = "";
//         operator = "X";
//         break;
//       case "/":
//         displayInput.innerHTML = "";
//         operator = "/";
//         break;
//       case "=":
//         displayInput.innerHTML = "";
//         CalCulateValue(num1, num2, operator);
//         break;
//       default:
//         break;
//     }
//   }
// };

// calcButton.forEach((btn) => {
//   btn.addEventListener("click", perFormLogic);
// });

// for (let i = 0; i < calcButton.length; i++) {
//   calcButton[i].addEventListener("click", () => {
//     //const clickedValRaw = calcButton[i].innerHTML;
//     let clickedVal = parseInt(calcButton[i].innerHTML);

//     if (!isNaN(clickedVal)) {
//       if (firstOperand === undefined) {
//         firstOperand = clickedVal;
//       } else {
//         secondOperand = clickedVal;
//       }
//       document.getElementById("hello").innerHTML = clickedVal;
//       // document.getElementById("displayResult").innerHTML =
//       //   firstOperand + secondOperand;
//       // console.log(firstOperand + secondOperand);
//     } else {
//       if (operator === undefined && operator === "+") {
//         document.getElementById("displayResult").innerHTML =
//           firstOperand + secondOperand;
//         console.log(firstOperand + secondOperand);
//         // operator = clickedVal;
//         // document.getElementById("displayResult").innerHTML = clickedVal;
//       } else if (operator === undefined && operator === "-") {
//         document.getElementById("displayResult").innerHTML =
//           firstOperand - secondOperand;
//         console.log(firstOperand - secondOperand);
//         // if (operator === "=") {
//         //   // calcOperation(firstOperand, secondOperand, operator);
//         //   console.log(calcKey);
//       }
//     }
//     // console.log(operator);
//   });
// }

//The Calculation
// function calcOperation(firstOperand, secondOperand, operator) {
//   switch (operator) {
//     case "+":
//       add(firstOperand, secondOperand);
//       break;

//     case "-":
//       subtract(firstOperand, secondOperand);
//       break;

//     case "X":
//       multiply(firstOperand, secondOperand);
//       break;

//     case "/":
//       divide(firstOperand, secondOperand);
//       break;

//     default:
//       console.log("operator not from this planet");
//       break;
//   }
// }

// //The Operators
// function add(firstNum, secondNum) {
//   projectToOutput(firstNum + secondNum);
// }
// function subtract(firstNum, secondNum) {
//   projectToOutput(firstNum - secondNum);
// }
// function multiply(firstNum, secondNum) {
//   projectToOutput(firstNum * secondNum);
// }
// function divide(firstNum, secondNum) {
//   projectToOutput(firstNum / secondNum);
// }

// //RENDER DATA TO DISPLAY SCREEN
// function projectToOutput(val) {
//   // displayResult.value = val;
//   console.log(val);
// }
