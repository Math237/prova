/*
1) Calculadora de Imposto de Renda: Crie um programa que leia a renda anual de um usuário
 e calcule o imposto a ser pago com base nas faixas: até R$ 22.847,76 (isento), de R$ 22.847,77
 a R$ 33.919,80 (7,5%), de R$ 33.919,81 a R$ 45.012,60 (15%) e acima (22,5%). Apresente o valor 
 digitado e o valor do imposto a ser pago.
*/

var rendaAnual = parseFloat(prompt("Digite sua renda Anual: "));
var imposto
if (rendaAnual < 22.847,76 ){
    console.log("Sua renda é menor que R$ 22.847,76 e não será taxada");
}else if(rendaAnual >= 22.847,77){
    console.log("Sua renda está entre R$ 22.847,77 e R$ 33.919,80 logo sua taxação será de 7,5% ");
}
