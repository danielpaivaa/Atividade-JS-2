// 8) Crie duas funções que recebem dois parâmetros, um vetor com apenas valores numéricos e um número inteiro. Faça com que a primeira função retorne outro vetor que será resultado da multiplicação de cada elemento pelo número passado como parâmetro. A segunda função fará o mesmo da primeira se e somente se o valor do elemento for maior que 5.

const vetorNumerico = new Array(2, 4, 6, 8);
let num = 5;

console.log(`Vetor: ${vetorNumerico} e Número: ${num}\n`);

multiplica(vetorNumerico, num);
multiplicaMaior(vetorNumerico, num);

function multiplica(vetor, int) {
    let newVetor = vetor.slice();
    let i = 0;
    newVetor.forEach(item => {
        newVetor[i] = item * int;
        i++
    });
    console.log(`Novo Vetor: ${newVetor}\n`);
}

function multiplicaMaior(vetor, int) {
    if (int > 5) {
    let newVetor = vetor.slice();
        let i = 0;
        newVetor.forEach(item => {
            newVetor[i] = item * int;
            i++
        });
        console.log(`Novo Vetor: ${newVetor}\n`);
    } else {
        console.log("Número menor que 5!\n")
    }
}


