console.log("Hello, Admin");

var myName = ["S", "E", "R", "G", "I"];
var vocals = ["A", "E", "I", "O", "U"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Exercici 1
console.log("Exercici 1");
myName.forEach((el) => {
  console.log(el);
});

// Exercici 2
console.log("Exercici 2");
myName[1] = "3";
console.log("Partim del nom: " + myName.join(""));

myName.forEach((el) => {
  if (numbers.includes(el)) {
    console.log("Els noms de persona no contenen el numero: " + el);
    return;
  }
  if (vocals.includes(el)) {
    console.log("He trobat la vocal: " + el);
  } else {
    console.log("He trobat la consonant: " + el);
  }
});
myName[1] = "E";
// Exercici 3
console.log("Exercici 3");
var myMapName = new Map();
var myNameInRussian = ["S", "S", "E", "R", "G", "E", "I", "S"];

console.log(myNameInRussian);

myNameInRussian.forEach((ch) => {
  var cnt = 0;
  for (var el of myNameInRussian) {
    if (el == ch) {
      cnt = cnt + 1;
      myMapName.set(el, cnt);
    }
  } 
});

console.log(myMapName);


// Exercici 4
console.log("Exercici 4");

var mySurname = ["M", "A", "T", "E", "O"];
var fullName = [];

fullName = myName
fullName.push(" ");
fullName = fullName.concat(mySurname);

console.log(fullName);