let simbolos = document.querySelectorAll(".boton-simbolo");
simbolos.forEach((boton) => {
  boton.innerHTML = boton.innerText;
});

const botonesNumeros = document.querySelectorAll(".boton-numero");

const input = document.getElementById("input");

const botonC = document.getElementById("boton-delete");
const botonIgual = document.getElementById("boton-igual");

input.value = "";

let inputVacio = true;

botonesNumeros.forEach((boton) => {
  boton.addEventListener("click", () => {
    if (!inputVacio) {
      input.value = "";
      inputVacio = true;
    }

    input.value += boton.innerHTML;
  });
});

botonIgual.addEventListener("click", () => {
  let resultado = eval(input.value).toFixed(2);
  console.log(resultado);

  if (isNaN(resultado) || resultado === "Infinity") {
    input.value = "Error";
    inputVacio = false;
  } else {
    input.value = resultado;
    inputVacio = false;
  }
});

botonC.addEventListener("click", () => {
  input.value = "";
  inputVacio = true;
});
