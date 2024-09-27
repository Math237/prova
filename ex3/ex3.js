/*
3) Análise de Desempenho Escolar: Desenvolva um algoritmo que leia as notas de 4 bimestres de um aluno e calcule a média.
 Informe se o aluno foi aprovado (média ≥ 7), em recuperação (5 ≤ média < 7) ou reprovado (média < 5).

*/
var nota1 = parseFloat(prompt("Digite a nota do 1 Bimestre "));
var nota2 = parseFloat(prompt("Digite a nota do 2 Bimestre "));
var nota3 = parseFloat(prompt("Digite a nota do 3 Bimestre "));
var nota4 = parseFloat(picou de recuperação");
}else if(media < 5){rompt("Digite a nota do 4 Bimestre "));
var media = (nota1 + nota2 + nota3 + nota4) / 4;
if (media >= 7){
    console.log("A sua média é de: " + media + "você foi aprovado");
}else if(media >= 5  && media < 7){
    console.log("A sua média é de: " + media + "você f
    console.log("A sua média é de: " + media + "você foi reprovado");
}else {
    console.log("Digite uma nota válida");
}