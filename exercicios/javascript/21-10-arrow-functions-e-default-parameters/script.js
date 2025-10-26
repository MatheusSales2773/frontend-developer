const btn = document.getElementById("btn");
const output = document.getElementById("output");

btn.addEventListener("click", () => {
    const somar = (a, b) => a + b;

    const saudar = (nome='Visitante') => `Olá, ${nome}`;
    let resultado = '';
    resultado += `Somar 5 +7 = ${somar(5,7)}/n`;
})