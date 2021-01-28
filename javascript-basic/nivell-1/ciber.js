// Exercici 1
console.log("Hello world!");

// Exercici 2    
alert("Me llamo Sergi!");

// Exercici 3
const myName = "Sergi";
const mySurname = "Mateo";
console.log(myName + " " + mySurname);

// Exercici 4
var num1 = 21;
var num2 = 76;
var sum = num1 + num2;
console.log("La suma entre "+ num1 +" i " + num2 + " es: "+ sum);

//Exercici 5
var nota_examen = 9.75;
if (nota_examen < 5) {
    alert("Oooh has suspendido el examen con un " + nota_examen)
}
    else{
        alert("Bieeeen has aprobado el examen con un " + nota_examen)
    }

// Exercici 6
var myBlueCar = "Tinc un cotxe de color blau";
console.log(myBlueCar);
var myGreenCar = myBlueCar.replace("blau", "verd");
console.log(myGreenCar);
var myCutxeDeCulur = myBlueCar.replaceAll("o", "u");
console.log(myCutxeDeCulur);

// Exercic 7
var mylist = ["taula" , "cadira", "ordinador", "llibreta"];

for (item in mylist) {
    console.log("L'objecte " + mylist[item] + " està a la posició " + item + ".");
}

// Exercici 8

function calculadora(operation, firstOperand, secondOperand) {
    switch (operation) {
        case "suma":
             return firstOperand + secondOperand;
            break;
        case "resta":
            return firstOperand - secondOperand;
            break;
        case "multiplica":          
        return firstOperand * secondOperand;
            break;
        default:
            break;
    }
} 

var resultat = calculadora("suma", 40, 20);
console.log(resultat);

var resultat = calculadora("resta", 40, 20);
console.log(resultat);
document.getElementById("calcul").innerHTML = " El resultat és: " + resultat;
var resultat = calculadora("multiplica", 40, 20);
console.log(resultat);