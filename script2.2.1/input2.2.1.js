
let inputMessage = document.getElementById("enviar")

console.log(inputMessage)

function sendMessage() {
    console.log("Preparando Dados")
}

function receberParametros() {
    if (localStorage.getItem("idNome")){
        let nome = localStorage.getItem(idNome)
        let idNome = document.getElementById(idNome);
        idNome.value = nome;
    }
       
    if (localStorage.getItem("idEndereco")){
        let endereco = localStorage.getItem(idEndereco)
        let idEndereco = document.getElementById(idEndereco);
        idEndereco.value = endereco;
    }
        
}
receberParametros();

function changeNome(event){
    const element = event.target;
    let nome = element.value;
    console.log(nome);
    let idNome = element.id;
    localStorage.setItem(idNome, nome);
}

function changeEndereco(event){
    const element = event.target
    let endereco = element.value;
    console.log(endereco);
    let idEndereco = element.id;
    localStorage.setItem(idEndereco, endereco);
}








