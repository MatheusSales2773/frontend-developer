/* Classificador de Triângulos: Declare três variáveis ladoA , ladoB e ladoC
representando os lados de um triângulo. Usando estruturas de decisão
aninhadas, classifique o triângulo em:
Equilátero: Todos os lados iguais.
Isósceles: Dois lados iguais.
Escaleno: Todos os lados diferentes.
Não é um triângulo: Se a soma de dois lados for menor ou igual ao
terceiro lado. */

let ladoA = 20;
let ladoB = 15;
let ladoC = 50;

// Tem que validar se é um triângulo primeiro antes de validar as outras condições
if ( ladoA + ladoB <= ladoC || ladoA + ladoC <= ladoB || ladoB + ladoC <= ladoA) {
    console.log("Não é um triângulo: Se a soma de dois lados for menor ou igual ao terceiro lado.")
} else if (ladoA === ladoB && ladoB === ladoC){
    console.log("O triângulo é um equilátero, ou seja, todos os lados iguais");
} else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC){
    console.log("O triângulo é um Isósceles, ou seja, dois lados do triângulo são iguais");
} else if (ladoA !== ladoB && ladoA !== ladoC && ladoB !== ladoC) {
    console.log("O triângulo é escaleno, ou seja, todos os lados são diferentes");
} else {
    console.log("Erro")
}
