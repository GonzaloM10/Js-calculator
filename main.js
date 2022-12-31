const botonesNumeros = document.querySelectorAll(".boton-numero");

const input = document.getElementById("input");

const botonC = document.getElementById("boton-delete");
const botonIgual = document.getElementById("boton-igual");

input.value = "";

botonesNumeros.forEach((boton) => {
  boton.addEventListener("click", () => {
    input.value += boton.innerHTML;
  });
});

botonIgual.addEventListener("click", () => {
  input.value = eval(input.value).toFixed(1);
});

botonC.addEventListener("click", () => {
  input.value = "";
});
