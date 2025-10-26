const corpoDaPagina = document.querySelector("body");

window.corpoDaPagina.addEventListener("keydown",(evento) =>{
    const teclaPressionada = evento.key.toLowerCase();
    if (teclaPressionada === 'r'){
        corpoDaPagina.style.backgroundColor = 'red';
    } else if(teclaPressionada === 'g'){
        corpoDaPagina.style.backgroundColor = 'green';
    } else if(teclaPressionada === 'b'){
        corpoDaPagina.style.backgroundColor = 'blue';
    } else{
        corpoDaPagina.style.backgroundColor = '';
    }
});