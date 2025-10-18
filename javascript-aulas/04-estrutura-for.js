/* 1. O FOR a gente já sabe Exemplo de uso do loop FOR:
   Percorrendo uma lista de frutas e exibindo cada item.*/

let frutas = ["Maçã", "Melância", "Banana", "Laranja", "Jabuticaba", "Jaca"]

console.log("[-------------- LISTA DE FRUTAS QUE EU GOSTO --------------]");
for (let i = 0; i < frutas.length; i++) {
   console.log("Eu gosto de " + frutas[i]);
}
console.log("============================================================\n");

/* 2. Exemplo de uso do loop FOR:
   Criando uma tabuada de um número escolhido. */

let numeroTabuada = 3;
console.log("[-------------- TABUADA DO " + numeroTabuada + " -------------]");

for (let i = 1; i <= 10; i++) {
   let resultado = numeroTabuada * i;
   console.log(numeroTabuada + "x" + i + "=" + resultado)
}
console.log("==================================================");