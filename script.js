let inpsal = document.getElementById("salario");
let inpalu = document.getElementById("aluguel");
let inpag = document.getElementById("agua");
let inplu = document.getElementById("luz");
let inpcomi = document.getElementById("comida");
let inpout = document.getElementById("outros");

let resultado = document.getElementById("resultado");

function calcular(){
    console.log("carregando...")
    let salario = inpsal.value;
    let aluguel = inpalu.value;
    let agua = inpag.value;
    let luz = inplu.value;
    let comida = inpcomi.value;
    let outros = inpout.value;

    let total = salario - aluguel-agua-luz-comida-outros;

    resultado.innerHTML = "Seu saldo é de: R$"+total
    
}