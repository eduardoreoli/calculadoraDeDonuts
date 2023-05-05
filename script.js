var urlParams = new URLSearchParams(window.location.search);
var nome = urlParams.get('nome');
document.querySelector("#nomeDoCliente").innerHTML = nome;


function calcular(){
    const choco = document.querySelector("#donutsDeChocolate").value;
    const morango = document.querySelector("#donutsDeMorango").value;
    const totChoco = Number(choco) * Number(0.5);
    const totMorango = Number(morango) * Number(0.5);
    const subtotal = totChoco + totMorango;
    const minutosParaRetirarDonuts = document.querySelector("#minutosParaRetirarDonuts").value;
    const taxaMinuto = minutosParaRetirarDonuts * 0.01;
    const total = subtotal + taxaMinuto;

    
    document.querySelector("#subtotal").value = subtotal;
    document.querySelector("#taxas").value = taxaMinuto;
    document.querySelector("#total").value = total;
}

function enviar(){
    var nome = document.querySelector("#nome").value;
    window.location.href = "mensagem.html?nome=" + nome;
}
