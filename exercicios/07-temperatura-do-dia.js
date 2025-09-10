/* Você recebeu a lista de temperaturas registradas durante um dia, de hora em hora. Seu
objetivo é classificar cada temperatura como:
• "Frio" se for menor que 20°C
• "Agradável" se estiver entre 20°C e 29°C
• "Quente" se for 30°C ou mais

Instruções:
1. Crie um array chamado temperaturas com 12 valores numéricos representando
as temperaturas do dia.

2. Crie três arrays vazios:
o frios
o agradaveis
o quentes
3. Use um laço for para percorrer cada item do array temperaturas.

4. Use if / else if / else para verificar a temperatura e adicionar no array
correspondente.

5. No final, exiba todos os arrays no console. */

temperatura = [20, 22, 30, 15, 19, 28, 36, 32, 31, 26, 24, 25]
frio = []
agradavel = []
quente = []

for (let i = 0; i < temperatura.length; i++) {
    let t = temperatura[i];
    if (t < 20) {
        frio.push(t)
    } else if (t <= 29) {
        agradavel.push(t)
    } else {
        quente.push(t)
    }
}

frio.sort((a, b) => a - b);
agradavel.sort((a, b) => a - b);
quente.sort((a, b) => a - b);

console.log('As temperaturas recebidas frias são:', frio)
console.log('As temperaturas recebidas agradaveis são:', agradavel)
console.log('As temperaturas recebidas quentes são:', quente)