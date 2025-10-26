const saida = document.getElementById("saida");

document.addEventListener('keydown', function(evento){
    saida.textContent = "você pressionou: " + evento.key;
});
