/* Sistema de Semáforo: Crie um programa que declare uma variável
corSemaforo e atribua a ela uma string ("verde", "amarelo" ou "vermelho").
Usando if , else if e else , imprima a ação que um motorista deve tomar:

"Siga em frente!" para verde.
"Atenção! Prepare-se para parar." para amarelo.
"Pare!" para vermelho.
"Cor inválida." para qualquer outra string. */

corSemafaro = "verde";

if (corSemafaro === "verde") {
    console.log("Siga em frente!");
} else if (corSemafaro === "amarelo") {
    console.log("Atenção! Prepare-se para parar.");
} else if (corSemafaro === "vermelho") {
    console.log("Pare!");
} else {
    console.log("Cor inválida.");
};