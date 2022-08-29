// 5) Escreva uma função que receba dois parâmetros início e fim. Essa função deve imprimir todos os números ímpares que estão entre esses valores. Por padrão os valores devem ser 0 para início e 100 para fim. Atente para corrigir a ordem dos parâmetros caso a função receba o valor maior antes do menor.

const delta = new Array();

delta.sort();

let início = delta[0];

let fim = delta[delta.length-1];

valoresImpares(início, fim);

function valoresImpares(início = 0, fim = 100) {
    for (let i = início; i < fim; i++) {
        if (i % 2 != 0) {
            console.log(i);
        }       
    }
}