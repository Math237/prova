/*
1) Calculadora de Imposto de Renda: Crie um programa que leia a renda anual de um usuário
 e calcule o imposto a ser pago com base nas faixas: até R$ 22.847,76 (isento), de R$ 22.847,77
 a R$ 33.919,80 (7,5%), de R$ 33.919,81 a R$ 45.012,60 (15%) e acima (22,5%). Apresente o valor 
 digitado e o valor do imposto a ser pago.
*/

var rendaAnual =  parseFloat(prompt("Digite sua renda Anual: "));
if (rendaAnual < 22.847,77 ){
    console.log("Você ganha menos que R$22.847,77 portanto não recebera uma taxa de imposto.")
}else if(rendaAnual < 33.919,81){
    rendaAnual = rendaAnual + 0.75;
    console.log("A sua renda estpa " + rendaAnual );
}








if (rendaAnual > 45.012,61  ){
   rendaAnual = rendaAnual + 22.05;
    console.log("A sua renda é maior que 45.012,60 então você pagará 22,5% de imposto oque resultará em: " + rendaAnual );
}else if(rendaAnual = 22.847,77){
    console.log("Sua renda está entre R$ 22.847,77 e R$ 33.919,80 logo sua taxação será de 7,5% ");
}
