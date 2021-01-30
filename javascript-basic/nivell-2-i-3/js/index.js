//Variables

const previousOperand = document.querySelector(".output1");
const currentOperand = document.querySelector(".output2");
const currentOperation = document.querySelectorAll("[data-operation]");
const specialButtons = document.querySelectorAll("[special-btn]");
const dataNum = document.querySelectorAll("[data-num]");
const displayOperation = document.querySelector(".display-operation");

var operationSelected = "";
var storedOperation = "";
var auxOperand = "";

// Functions

function calculate(preOperator, currOperator, storedOperation) {
  let num1 = parseFloat(preOperator);
  let num2 = parseFloat(currOperator);
  let res = 0;
  switch (storedOperation) {
    case "plus":
      res = num1 + num2;
      break;
    case "minus":
      res = num1 - num2;
      break;
    case "multiply":
      res = num1 * num2;
      break;
    case "divide":
      res = num1 / num2;
      break;
    case "equals":
        console.log("no debería pasar esto nunca, se viene foyón...");
        break;
    default:
      break;
  }
  return res;
}


function clear() {
    currentOperand.innerHTML = currentOperand.innerHTML.slice(0,-1);
   
}

function allClear() {
    displayOperation.innerHTML = "";
    currentOperand.innerHTML ="";
    previousOperand.innerHTML = ""; 
    operationSelected = "";
    storedOperation = "";
    auxOperand = "";
   }


// event listeners

dataNum.forEach((el) => {
  el.addEventListener("click", () => {
    let content = el.getAttribute("data-num");
    // primero miro que no pueden haber dos puntos decimales, pongo cero a la izquerda si lo primero que se clica es un "." 
    if (content == "," && currentOperand.innerHTML.includes(",")) {
      return;
    }
    if (content == "," && currentOperand.innerHTML == "") {
        currentOperand.innerHTML = "0.";
        return;
    }
    // si no hay trapicheos, añado el digito
    currentOperand.innerHTML += content;
  });
});

currentOperation.forEach((el) => {
  el.addEventListener("click", () => {
    // primero miro que no puede haber operacion si el display esta vacio
    if (previousOperand.innerHTML =="" && currentOperand.innerHTML== "") {
        return;
    } 
    // Segundo se hace check double equals. solo sucede si se dan 2 iguales seguidos.
    // Se pasa el previousOperand y el current que se guardó como auxOperand
    if (operationSelected == "equals" && el.getAttribute("data-operation") =="equals"){
        previousOperand.innerHTML = calculate(previousOperand.innerHTML, auxOperand, storedOperation);
        currentOperand.innerHTML = "";
        displayOperation.innerHTML = "";
        return;
    }

    operationSelected = el.getAttribute("data-operation");
    
    //si no hay previous no le puedes dar al igual, porque no sirve de nada
    if (operationSelected == "equals" && previousOperand.innerHTML == "") {
        return;
    }

    // si no hay current, solo estoy cambiando la operacion, no calculandola
    if(operationSelected != "equals" && currentOperand.innerHTML == ""){
        storedOperation = operationSelected;
        displayOperation.innerHTML = el.innerHTML;
        return;
    }

    // si todo esta en orden, me preparo para obtener el nuevo currentOperand 
    if (operationSelected != "equals") {
        displayOperation.innerHTML = el.innerHTML;
        // guardo en memoria la operacion seleccionada
        storedOperation = operationSelected;
        previousOperand.innerHTML = currentOperand.innerHTML;
        // antes de borrar el display me guardo en memoria el currentOperand
        auxOperand = currentOperand.innerHTML;
        currentOperand.innerHTML = "";     
        return;
    }
        
    if (operationSelected == "equals"){
      previousOperand.innerHTML = calculate(previousOperand.innerHTML,currentOperand.innerHTML, storedOperation);
      currentOperand.innerHTML = "";
      displayOperation.innerHTML = "";
     
    }
    
  });
});

specialButtons.forEach((el) => {
  el.addEventListener("click", () => {
    let specialBtn = el.getAttribute("special-btn");
    if (specialBtn =="AC") {
        allClear();
    }
    if (specialBtn =="C"){
        clear();
    }
  });
});