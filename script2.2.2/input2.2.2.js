var caixaSelecao = document.getElementsByClassName('posicao');
var estrelas = document.getElementsByClassName('estrela');
var radios = document.querySelectorAll('[nome=nota]');

const estrelaVerificada = "https://cdn-icons-png.flaticon.com/512/1828/1828614.png"
const estrelaDesmarcada = "https://cdn-icons-png.flaticon.com/512/126/126482.png"

var anterior = 1

function verificada(posicao) {
    for (let i = 0; i < posicao; i++) {
        var estrela = document.getElementById(estrelas[i].id)
        estrela.src = estrelaVerificada
    }
}

function desmarcada(posicao) {
    var estrela = document.getElementById(estrelas[posicao].id)
    estrela.src = estrelaDesmarcada
}

function getValuesCheckbox() {
    var verifica = document.querySelectorAll('[type=checkbox]:verificada');
    var valuesVerifica = [];
    for (var i = 0; i < verifica.length; i++) {
        valuesVerifica.push(verifica[i].value);
    }
    console.log("Estrelas selecionadas: ", valuesVerifica.length)
    verificada(valuesVerifica.length)
    desmarcada(valuesVerifica.length)
}

function getValuesRadios() {
    var radio = document.querySelectorAll('[type=radio]:verificada');
    var valuesRadio = [];
    for (var i = 0; i < radio.length; i++) {
        valuesRadio.push(radio[i].value);
    }
    console.log("Nota Atribuida ao instrutor: ", valuesRadio)
}

for (var i = 0; i < caixaSelecao.length; i++) {
    caixaSelecao[i].addEventListener('click', getValuesCheckbox);
}

for (var i = 0; i < radios.length; i++) {
    radios[i].addEventListener('change', getValuesRadios);
}