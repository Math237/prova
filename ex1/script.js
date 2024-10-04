/*
1) Calculadora de Imposto de Renda: Crie um programa que leia a renda anual de um usuário
 e calcule o imposto a ser pago com base nas faixas: até R$ 22.847,76 (isento), de R$ 22.847,77
 a R$ 33.919,80 (7,5%), de R$ 33.919,81 a R$ 45.012,60 (15%) e acima (22,5%). Apresente o valor 
 digitado e o valor do imposto a ser pago.
*/

var rendaAnual = parseFloat(prompt("Digite sua renda anual"));

var imposto = 0;
if (rendaAnual <= 22847.00){
    imposto = rendaAnual * 0.075;
}else if (rendaAnual <= 45012.60){
    imposto = rendaAnual * 0.15;
}else if (rendaAnual > 45012.60){
    imposto = rendaAnual * 0.225;
}else {
imposto = 0;
console.log("Não foi informada uma renda válida!");
}

console.log("Calculo do imposto:");
console.log("Renda anual:", rendaAnual);
console.log("Imposto devido:", imposto);
console.log("Total liquido:"), rendaAnual - imposto;