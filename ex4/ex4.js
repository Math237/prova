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
 var quantidadeLanche = parseInt(prompt("Quantas laches deseja pedir:"));
var valorTotal = 0;
if (codigoLanche = 1){
    
}