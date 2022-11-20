
let inputMessage = document.getElementById("enviar")

console.log(inputMessage)

function sendMessage() {
    console.log("Preparando Dados")
}

oninput = function() {
    if (localStorage.getItem(idNome)){
        let nome = localStorage.getItem(idNome)
        let idNome = document.getElementById(idNome);
        idNome.innerHTML = nome;
    }
       
    if (localStorage.getItem(idEndereco)){
        let endereco = localStorage.getItem(idEndereco)
        let idEndereco = document.getElementById(idEndereco);
        idEndereco.innerHTML = endereco;
    }
        
}


function clickNome(element){
    let nome = element.value;
    console.log(nome);
    let idNome = document.getElementById(idNome);
    idNome.innerHTML = nome;
    localStorage.setItem(idNome, nome);
}

function clickEndereco(element){
    let endereco = element.value;
    console.log(endereco);
    let idEndereco = document.getElementById(idEndereco);
    idEndereco.innerHTML = endereco;
    localStorage.setItem(idEndereco, endereco);
}








