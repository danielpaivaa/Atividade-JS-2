// 2) Um funcionário irá receber um aumento de acordo com o seu plano de trabalho, de acordo com a tabela abaixo. Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu novo salário.

let salario = 1200;    //Defina o salário atual
let plano;    //Defina o plano desejado

novoSalario(plano);

function novoSalario(plano = 'A') {
    switch (plano) {
        case "A":
            salario += salario * 0.1;
            console.log(`Seu novo salário é: R$ ${salario}`);
            break;

        case "B":
            salario += salario * 0.15;
            console.log(`Seu novo salário é: R$ ${salario}`);
            break;

        case "C":
            salario += salario * 0.2;
            console.log(`Seu novo salário é: R$ ${salario}`);
            break;

        default:
            break;
    }
}
