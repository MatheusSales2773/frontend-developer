let nota = 75;

if (nota >= 90){
    console.log(`Aluno de destaque, ${nota} pontos.`)
} else if (nota >= 80) {
    console.log(`Excelente!!!, ${nota} pontos.`)
}  else if (nota >= 75) {
    console.log(`Muito bem!!, ${nota} pontos.`)
}  else if (nota >= 70) {
    console.log(`Boa nota!, ${nota} pontos.`)
}  else if (nota >= 60) {
    console.log(`Aluno atingiu a média", ${nota} pontos.`)
}  else if (nota >= 40) {
    console.log(`Aluno está em recuperação, ${nota} pontos.`)
} else if (nota < 40) {
    console.log(`Infelizmente você foi reprovado", ${nota} pontos.`)
} else {
    console.log("Nota incorreta! Verifique novamente.")
};
