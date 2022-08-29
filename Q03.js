// 3) Crie um programa para informar quais e quantas notas são necessárias para entregar o mínimo de cédulas para um determinado valor informado pelo usuário considerando notas de R$ 100, R$ 50, R$ 10 e R$ 5 e R$ 1. Seu programa deve mostrar apenas as notas utilizadas. Por exemplo, ao solicitar R$18, o programa deve informar apenas a seguinte informação (note que não foram exibidas informações sobre as demais cédulas): 1 nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1.

let valor = 572;    //Defina o valor aqui

separaNotas(valor);

function separaNotas(valor) {
    let notas;
    
    if (valor >= 100) {
        notas = parseInt(valor/100);
        valor = valor-notas*100;
        console.log(`${notas} nota(s) de R$ 100.`);
    }
    if(valor >= 50) {
        notas = parseInt(valor/50);
        valor = valor-notas*50;
        console.log(`${notas} nota(s) de R$ 50.`);
    }
    if(valor >= 10) {
        notas = parseInt(valor/10);
        valor = valor-notas*10;
        console.log(`${notas} nota(s) de R$ 10.`);
    }
    if(valor >= 5) {
        notas = parseInt(valor/5);
        valor = valor-notas*5;
        console.log(`${notas} nota(s) de R$ 5.`);
    }
    if(valor >= 1) {
        notas = parseInt(valor);
        console.log(`${notas} nota(s) de R$ 1.`);
    }
}