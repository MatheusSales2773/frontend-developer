const luzVermelha = document.getElementById("vermelho");
const luzAmarela = document.getElementById("amarelo");
const luzVerde = document.getElementById("verde");

const btnVermelho = document.getElementById("btn-vermelho");
const btnAmarelo = document.getElementById("btn-amarelo");
const btnVerde = document.getElementById("btn-verde");

function apagarLuzes() {
    luzVermelha.style.backgroundColor = "gray";
    luzAmarela.style.backgroundColor = "gray";
    luzVerde.style.backgroundColor = "gray";
}

btnVermelho.addEventListener("click", () => {
    apagarLuzes();
    luzVermelha.style.backgroundColor = "red";
});

btnAmarelo.addEventListener("click", () => {
    apagarLuzes();
    luzAmarela.style.backgroundColor = "yellow";
});

btnVerde.addEventListener("click", () => {
    apagarLuzes();
    luzVerde.style.backgroundColor = "green";
});z    