var leonardo = window.document.getElementById("depoimento1");
var samantha = window.document.getElementById("depoimento2");
var bruna = window.document.getElementById("depoimento3");
var setaEsquerda = window.document.getElementById("seta-esquerda");
var setaDireita = window.document.getElementById("seta-direita");


function rolarParaDireita() {

    leonardo.style.display = 'none';
    bruna.style.display = 'flex';
    
    setaDireita.style.display = 'none';
    setaEsquerda.style.display = 'flex';
    setaEsquerda.style.marginTop = '55px';

}
function rolarParaEsquerda() {

    leonardo.style.display = 'flex';
    bruna.style.display = 'none';
    
    setaDireita.style.display = 'flex';
    setaEsquerda.style.display = 'none';
    setaEsquerda.style.marginTop = '55px';

}