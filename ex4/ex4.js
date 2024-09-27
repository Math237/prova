/*
4) Apresente o Menu de Lanches:
1 -> X-SALADA-> R$ 20,00
2 -> X-BACON-> R$ 25,00
3 -> X-TUDO-> R$ 23,00
4 -> BAURU -> R$ 29,99
5 -> AMERICANO -> 22,50

Apresente o Menu de Bebidas:
Refrigerante Lata -> R$ 5,00
Refrigerante 2L -> R$ 10,00
Agua -> R$ 3,50
Suco -> R$ 7,50

Solicite ao usuário qual Lanche e quantidade que deseja comprar, qual refrigerante e quantidade, ao final apresente as formas de pagamento:
PIX - 10% de desconto.
Dinheiro - 5% de desconto.
Débito - 3% de desconto.
Crédito - sem desconto.
Apresente todos os dados da compras, com seus calculos e valores;
*/

var menuLanches = "==== Confira o cardápio abaixo ==== \n";
menuLanches = menuLanches + "Código | lanche | Preço\n";
menuLanches += "1 -> X-SALADA-> R$ 20,00\n";
menuLanches += "2 -> X-BACON-> R$ 25,00\n";
menuLanches += "3 -> X-TUDO-> R$ 23,00\n";
menuLanches += "4 -> BAURU -> R$ 29,99\n";
menuLanches += "5 -> AMERICANO -> 22,50\n";
menuLanches += "\n Digite o código do lanche que deseja pedir:";
var códigoLanche = parseInt(prompt(menuLanches));
 var quantidadeLanche = parseInt(prompt("Quantos laches deseja pedir:"));
var valorTotal = 0;
if (codigoLanche = 1){
    valorTotal = quantidadeLanche * 20.00;
}else if(codigoLanche = 2){
    valorTotal = quantidadeLanche * 25.00;
}else if(codigoLanche = 3){
    valorTotal = quantidadeLanche * 23.00;
}else if(codigoLanche = 4){
    valorTotal = quantidadeLanche * 29.99;
}else if(codigoLanche = 5){
    valorTotal = quantidadeLanche * 22.50;
}else {
    console.log("Digite um código válido");
}
console.log("O seu pedido está pronto");
console.log("foram pedidos: " + quantidadeLanche );
console.log("O valor do seu pedido é de: R$" + valorTotal);

var menuBebida = "==== menu de Bebidas ===\n=";
menuBebida = menuBebida + "código | bebida | preço \n";
menuBebida += "1 Refrigerante Lata -> R$ 5,00\n";
menuBebida += "2 Refrigerante 2L -> R$ 10,00\n";
menuBebida += "3 Agua -> R$ 3,50\n";
menuBebida += "4 Suco -> R$ 7,50\n";
menuBebida += "\nDigite o código da bebida";
var codigoBebida = parseInt(prompt(menuBebida)); 
var quantidadeBebida = parseInt(prompt("Digite a quantidade de bebidas que deseja:"));
var valorTotalBebida = 0;
if (codigoBebida = 1){
    valorTotalBebida = quantidadeBebida * 5.00;
}else if(codigoBebida = 2){
    valorTotalBebida = quantidadeBebida * 10.00;
}else if(codigoBebida = 3){
    valorTotalBebida = quantidadeBebida * 3.50;
}else if(codigoBebida = 4){
    valorTotalBebida = quantidadeBebida * 7.50;
}else{
    console.log("Digite um código válido");
}
console.log("a sua bebida já esta pronta para consumo");
console.log("Foram pedidas: " + quantidadeBebida + "bebidas");
console.log("O valor do seu pedido foi de R$:" + valorTotalBebida);

var formaPagamento = "==== formas de pagamento ====\n";
formaPagamento = formaPagamento + "código | forma de pagamento | desconto \n"
formaPagamento += "Opção 1 PIX - 10% de desconto\n";
formaPagamento += "Opção 2 Dinheiro - 5% de desconto\n";
formaPagamento += "Opção 3 Débito - 3% de desconto.\n";
formaPagamento += "Opção 4 Crédito - sem desconto.\n";
var pagamento =parseFloat(prompt(formaPagamento));
var totalPagar = valorTotal + valorTotalBebida;

if (pagamento == 1){
totalPagar = valorTotal + valorTotalBebida * 0.1;
console.log("pagando no pix o cliente tem 10% de desconto:");
console.log("o seu pedido ficou em: " + totalPagar);
}else if(pagamento == 2){
    totalPagar = valorTotal + valorTotalBebida * 0.05;
    console.log("pagando no dinheiro o cliente tem 5% de desconto:");
    console.log("o seu pedido ficou em: " + totalPagar);
}else if(pagamento == 3){
    totalPagar = valorTotal + valorTotalBebida * 0.03;
    console.log("pagando no Débito o cliente tem 3% de desconto:");
    console.log("o seu pedido ficou em: " + totalPagar);
}else if(pagamento == 4){
    totalPagar = valorTotal + valorTotalBebida;
    console.log("pagando no Crédito o cliente não tem desconto");
    console.log("o seu pedido ficou em: " + totalPagar);
}else {
    console.log("Escolha uma forma de pagamento Válida!!!");
}
