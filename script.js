//página mensagem.html
var urlParams = new URLSearchParams(window.location.search);
var nome = urlParams.get('nome');
document.querySelector("#nomeDoCliente").innerHTML = nome;

//calculo dos valores
function calcular(){
    const choco = document.querySelector("#donutsDeChocolate").value;
    const morango = document.querySelector("#donutsDeMorango").value;
    const totChoco = Number(choco) * Number(0.5);
    const totMorango = Number(morango) * Number(0.5);
    const subtotal = totChoco + totMorango;
    const minutosParaRetirarDonuts = document.querySelector("#minutosParaRetirarDonuts").value;
    const taxaMinuto = minutosParaRetirarDonuts * 0.01;
    const total = subtotal + taxaMinuto;

    if (minutosParaRetirarDonuts===""){
        alert ("Informe o tempo de retirada!");
        return;
    }


    document.querySelector("#subtotal").value = subtotal;
    document.querySelector("#taxas").value = taxaMinuto;
    document.querySelector("#total").value = total;
}

//envia os dados
function enviar(){
    var nome = document.querySelector("#nome").value;
    if(nome === ""){
        alert("Por favor, insira seu nome.");
        return;
    }
    window.location.href = "mensagem.html?nome=" + nome;
}
