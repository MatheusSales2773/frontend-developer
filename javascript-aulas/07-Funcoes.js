// Funções em JavaScript

// O que é uma função?
// Uma função é um bloco de código que pode ser reutilizado.
// Ela pode receber parâmetros e retornar valores.

// Exemplo simples de função
function saudacao() {
    console.log("Olá mundo, bem-vindo à aula de função, preste atenção!");
}

// Chamando a função
saudacao();


// Funções com parâmetros
// Parâmetros são variáveis que a função espera receber.
// Os valores passados no momento da chamada são chamados "argumentos".
function soma(a, b) {
    console.log("Resultado da soma:", a + b);
}

soma(9, 10);
soma(4, 7);


// Funções com retorno
// A palavra-chave "return" devolve um valor para quem chamou a função.
// Esse valor pode ser armazenado em variáveis ou usado em expressões.
function multiplicar(x, y) {
    return x * y;
}

let resultado = multiplicar(4, 6);
console.log("Resultado da multiplicação:", resultado);


// Funções com valores padrão
function apresentar(nome = "Visitante") {
    console.log("Olá,", nome);
}

apresentar("Matheus");
apresentar();


// Tipos de função
// 1. Declaração normal
function dividir(a, b) {
    return a / b;
}
console.log("Divisão:", dividir(10, 2));

// 2. Função anônima (expressão de função)
const subtrair = function (a, b) {
    return a - b;
};
console.log("Subtração:", subtrair(10, 3));

// 3. Arrow function
const dobrar = (n) => n * 2;
console.log("Dobro:", dobrar(8));
