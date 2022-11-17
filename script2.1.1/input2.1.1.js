function handleInput(event){
    alert(event.target.valvue);
}

const nome = document.getElementById("fnome");
const endereco = document.getElementById("fendereco");
const diasDaSemanaQueTemFuncionario = document.getElementById("fdias da semana que tem funcionário");
const horarioAbertuta = document.getElementById("fhorario Abertura");
const horarioFechamento = document.getElementById("fhorario Fechamento");

nome.addEventListener("focus", (Event) =>{
    Event.target.style.background = "pink"
})
endereco.addEventListener("input", handleInput);
diasDaSemanaQueTemFuncionario.addEventListener("input", handleInput);
horarioAbertuta.addEventListener("input", handleInput);
horarioFechamento.addEventListener("input", handleInput);