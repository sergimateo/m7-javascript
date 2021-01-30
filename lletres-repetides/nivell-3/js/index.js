console.log("Hello, Admin. Press a button:");

var myName = ["S", "E", "R", "G", "I"];
var vocals = ["A", "E", "I", "O", "U"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

//Nivell 1

// Exercici 1

function exercici_1() {
  console.clear();
  console.log("Exercici 1");
  myName.forEach((el) => {
    console.log(el);
  });
}

// Exercici 2


function exercici_2() {
  console.clear();
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
}

// Exercici 3

function exercici_3() {
  console.clear();
  console.log("Exercici 3");

  let myMapName = new Map();
  let myNameInRussian = ["S", "S", "E", "R", "G", "E", "I", "S"];

  console.log("Sergi en ruso: " + myNameInRussian.join(""));

  myNameInRussian.forEach((ch) => {
    let cnt = 0;
    for (let el of myNameInRussian) {
      if (el == ch) {
        cnt = cnt + 1;
        myMapName.set(el, cnt);
      }
    }
  });

  console.log(myMapName);
}

// Exercici 4

function exercici_4() {
  console.clear();
  console.log("Exercici 4");
  let mySurname = ["M", "A", "T", "E", "O"];
  let fullName = [];

  fullName = myName;
  fullName.push(" ");
  fullName = fullName.concat(mySurname);
  console.log(fullName);
}

//Exercici 5:

var myString =
  "Una dirección de correo electrónico es la dirección que utiliza para recibir y enviar correos electrónicos. Se muestra a los destinatarios de sus correos electrónicos para que sepan quién le envió un correo electrónico. Cada dirección de correo electrónico sólo se puede asignar una vez en todo el mundo y, por lo tanto, está disponible exclusivamente para usted. No puede cambiar las direcciones de correo electrónico, pero puede eliminarlas en cualquier momento. Una dirección de correo electrónico consiste en el signo @ (arroba), el nombre de usuario delante y el dominio detrás, por ejemplo, nombre-de-usuario@ionos.es: La parte del dominio depende del dominio bajo el cual se crea la dirección de correo electrónico: en nuestro ejemplo es ionos.es. Esta información varía de proveedor a proveedor, por lo que una parte del dominio también puede ser gmail.com o gmx.es si utiliza una dirección de correo electrónico de estos proveedores. Si ha registrado su propio dominio, por ejemplo, www.el-nombre-de-sus-sueños.es, las direcciones de correo electrónico que configura para el dominio lo tienen como parte del dominio (nombre-de-usuario@el-nombre-de-sus-sueños.es o nombre-de-usuario@el-nombre-de-sus-sueños.ES). El nombre de usuario es la parte de una dirección de correo electrónico que puede seleccionar libremente en la medida de lo posible. Puede, por ejemplo, utilizar su propio nombre o el nombre o departamento de una empresa. Si utiliza una dirección de correo electrónico con un proveedor de correo como gmail.com o gmx.es, es posible que la combinación con la parte del dominio deseada ya esté registrada. En este caso, deberá considerar alternativas para el nombre de usuario de su dirección de correo electrónico. Si utiliza su propio dominio, estas restricciones no se aplican porque sólo usted puede crear direcciones de correo electrónico que coincidan con su propio dominio. En resumen, nombre-de-usuario@ionos.es es un email";
var myRegExPattern = /[\w\-]{1,}@[\w\-\ñ]{1,}.[\w\-\ñ]{1,}/g;

function exercici_5() {
  console.clear();
  console.log("Exercici 5");
  let myArray = myString.match(myRegExPattern);
  let uniqueEmails = [...new Set(myArray)];

  uniqueEmails.forEach((el) => {
    console.log(el);
  });
}

// Nivell 3

const exerciciButtons = document.querySelectorAll("[data-btn]");

exerciciButtons.forEach((el) => {
  el.addEventListener("click", () => {
    let exBtn = el.getAttribute("data-btn");
    switch (exBtn) {
      case "1":
        exercici_1();
        break;
      case "2":
        exercici_2();
        break;
      case "3":
        exercici_3();
        break;
      case "4":
        exercici_4();
        break;
      case "5":
        exercici_5();
        break;
      default:
        break;
    }
  });
});
