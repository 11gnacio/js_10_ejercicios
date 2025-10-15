console.log("conexion correcta!")

/*1️⃣ Edad y etapa de vida
Pide la edad de una persona.
Si es menor a 13 → “Eres un niño”.


Si tiene entre 13 y 17 → “Eres adolescente”.


Si tiene 18 o más → “Eres adulto”.
*/

function verificarEtapa() {
    let edad = parseInt(prompt("Ingrese  su edad: "));
    if (edad < 13) {
        alert("Eres un niño!");
    } else if (edad <= 13 && edad < 18) {
        alert("Eres un adulto");
    }
}


/* 2️⃣Validar contraseña exacta
Pide una contraseña.
Si el texto ingresado es exactamente "12345", muestra “Acceso permitido”.


Si no, muestra “Acceso denegado”.


📘 Práctica: comparación exacta (===).
*/

function validarContraseña() {
    let contraseña = "1234";
    let Valida = prompt("Ingresesu Contraseña: ");

    if (contraseña == Valida) {
        alert("Acceso permitido...");
    } else {
        alert("Accseso Denegado")
    }
}

/*3️⃣ Verificar letra en palabra
Pide una palabra.
Si contiene la letra “e” (mayúscula o minúscula) → “La palabra contiene la letra E”.


Si no → “No contiene la letra E”.


💡 Usa:
if (palabra.toLowerCase().includes('e')) { ... }
*/

function PalabraMayuscula() {
    let palabra = prompt("Ingres una Palabra");
    if (palabra.toLocaleLowerCase().includes('e')) {
        alert("La palabra contiene la letra e.");
    } else {
        alert("La palabra no contiene la letra e.")
    }

}

/*4️⃣ Comparar dos números
Pide dos números con prompt().
Si el primero es mayor → “El primer número es mayor”.


Si el segundo es mayor → “El segundo número es mayor”.


Si son iguales → “Son iguales”.


📘 Práctica: comparaciones dobles.
*/

function compararNúmeros() {
    let num1 = parseInt(prompt("Ingrese el primer número: "));
    let num2 = parseInt(prompt("Ingrese el Segundo número"));
    if (num1 > num2) {
        alert("El primer Número es mayor");
    } else if (num1 < num2) {
        alert("El segundo Número es mayor");
    } else if (num1 == num2) {
        alert("son iguales");
    } else {
        alert("Error");
    }
}


/* Ejercicio N5 */

function parImpar() {
    let par = parseInt(prompt("Ingrese un número"));
    if (par % 2 == 0) {
        alert("Es par");
    } else {
        alert("Es impar")
    }
}

/*Ejercicio 6 */

function palabrasInicial() {
    let palabra = prompt("Ingrese una Palabra: ");
    if (palabra[0].toLocaleLowerCase().includes("a")) {
        alert("Su palabra empieza con la letra a")
    } else {
        alert("No empieza con la letra a")
    }
}

/*Ejercicio  Número 7*/
function temperatura() {
    let temperatura = parseFloat(prompt("Introduce la temperatura ambiente (°C):"));
    if (temperatura < 10) {
        alert("Hace frío.");
    } else if (temperatura >= 10 && temperatura <= 25) {
        alert("Clima templado.");
    } else if (temperatura >= 26) {
        alert("Hace calor.");
    }

}

/* Ejercicio Número 8*/

function NombreReconocido() {
    
let nombre = prompt("¿Cuál es tu nombre?");

if (nombre === "Dany") {
  alert("Hola profesor");
} else if (nombre === "Ely") {
  alert("Hola mamá");
} else {
  alert("Hola visitante");
}

}

/*Ejercicio Número 9*/

function  evaluacion() {
    let nota = parseFloat(prompt("Ingrese una Nota"));
    if (nota >= 4 && nota <=7) {
        alert("Esta aprobado")
    } else if (nota < 4) {
     alert("Esta reprobado")
    }else {
        alert("Su Nota es inválida")
    }
}

/*Ejercicio Número 10*/

function palabraClave() {
let frase = prompt("Escribe una frase:");
if (frase.toLowerCase().includes('jesús')) {
  console.log("Tu frase tiene la palabra clave 🙌");
} else {
  console.log("No contiene la palabra clave");
}

}
