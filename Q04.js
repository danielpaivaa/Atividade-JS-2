// 4) Escreva um algoritmo que leia o código de um aluno e suas três notas. Calcule a média ponderada do aluno, considerando que o peso para a maior nota seja 4 e para as duas restantes, 3. Mostre o código do aluno, suas três notas, a média calculada e uma mensagem "APROVADO" se a média for maior ou igual a 5 e "REPROVADO" se a média for menor que 5. Repita a operação até que o código lido seja negativo.

const notas = new Array(5, 1, 1.5);    //Determine aqui as 3 notas do aluno [n1, n2, n3]

let cod = 432312;

let notasOrdenadas = notas.slice().sort();

let maior = notasOrdenadas.pop();

let outrasNotas = notasOrdenadas.slice();

media(maior, outrasNotas);

function media(notaMaior, notasMenores) {
    let media;

    media = (notaMaior*4 + (notasMenores[0] + notasMenores[1])*3)/10;

    if(media >= 5){
        console.log(`APROVADO`);
    }else {
        console.log(`REPROVADO`);
    }
    console.log(`Aluno: ${cod}`);
    console.log(`Média: ${media.toFixed(2)}`);
    console.log(`Nota 1: ${notas[0]}`);
    console.log(`Nota 2: ${notas[1]}`);
    console.log(`Nota 3: ${notas[2]}`);
}    
