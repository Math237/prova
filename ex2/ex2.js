/*Elabore um programa que receba o salário bruto mensal de um funcionário e
apresente a faixa e valor do desconto de INSS e IRRF e o valor líquido do salário
baseado na seguinte tabela:

INSS (Instituto Nacional de Seguro Social):
Até R$ 1.302,00 = 7,5%
De R$ 1.302,01 a R$ 2.571,29 = 9%
De R$ 2.571,30 a R$ 3.856,94 = 12%
Acima de R$ 3.856,94 = 14%

IRRF (Imposto Retido na Fonte):
Até R$ 1.903,98 = Isento
De R$ 1.903,99 a R$ 2.826,65 = 7,5%
De R$ 2.826,66 a R$ 3.751,05 = 15%
De R$ 3.751,06 a R$ 4.664,68 = 22,5%
Acima de R$ 4.664,68 = 27,5%
*/

var salario = parseFloat(prompt("Digite o valor de seu SALÁRIO BRUTO MENSAL: R$ "));

var inss = "*** INSS - Instituto Nacional de Seguro Social ***\n";
Inss += "    CÓDIGO |             SALÁRIO          | DECONTO\n"
Inss += "      1 -> | Até R$ 1.302,00              |   7,5%\n";
Inss += "      2 -> | De R$ 1.302,01 a R$ 2.571,29 |     9%\n";
Inss += "      3 -> | De R$ 2.571,30 a R$ 3.856,94 |    12%\n";
Inss += "      4 -> | Acima de R$ 3.856,94         |    14%\n";
Inss += "Digite o CÓDIGO da faixa correspondente ao seu salário bruto: ";

var codigoInss = parseInt(prompt(faixaInss));

var descontoInss;
if (codigoInss == 1) {
    descontoInss = salario * 0.075;
} else if (codigoInss == 2) {
    descontoInss = salario * 0.09
} else if (codigoInss == 3) {
    descontoInss = salario * 0.12;
} else if (codigoInss == 4) {
    descontoInss = salario * 0.14;
} else {
    console.log ("Digite um código VÁLIDO!");
}

var faixaIrrf = "*** IRRF - Imposto de Renda Retido na Fonte ***\n";
Irrf += "    CÓDIGO |             SALÁRIO           | DECONTO\n"
Irrf += "     1 ->  | Até R$ 1.903,98               |  isento\n";
Irrf += "     2 ->  | De R$ 1.903,99 a R$ 2.826,65  |   7,5%\n";
Irrf += "     3 ->  | De R$ 2.826,66 a R$ 3.751,05  |    15%\n";
Irrf += "     4 ->  | De R$ 3.751,06 a R$ 4.664,68  |  22,5%\n";
Irrf += "     5 ->  | Acima de R$ 4.664,68          |  27,5%\n";
Irrf += "Digite o CÓDIGO da faixa correspondente ao seu salário bruto: ";

var codigoIrrf = parseInt(prompt(faixaIrrf));

var descontoIrrf;
if (codigoIrrf == 1){
    descontoIrrf = 0;
} else if (codigoIrrf == 2) {
    descontoIrrf = salario * 0.075;
} else if (codigoIrrf == 3) {
    descontoIrrf = salario * 0.15;
} else if (codigoIrrf == 4) {
    descontoIrrf = salario * 0.225;
} else if (codigoIrrf == 5) {
    descontoIrrf = salario * 0.275;
} else {
    console.log ("Digite um código VÁLIDO!");
}
var totalDescontos = (salario - descontoInss + descontoIrrf);

console.log ("Seu salario se enquadra em: " + codigoInss + " e o DESCONTO é de: R$ " + descontoInss);
console.log ("Seu salario se enquadra em: " + codigoIrrf + " e o DESCONTO é de: R$ " + descontoIrrf);
console.log ("Seu salario liquido é de: R$ " + totalDescontos);
