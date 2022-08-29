// 6) Faça uma função que receba como parâmetro um vetor de notas e mostre os conceitos de cada uma de modo que de 0,0 a 4,9 seja atribuído o conceito D, de 5,0 a 6,9 seja atribuído o conceito C, de 7,0 a 8,9 o conceito B e de 9,0 a 10,0 o conceito A.

const notas = new Array(2.4, 8.9, 5, 9);

conceito(notas);

function conceito(notas) {
    console.log(notas);
    for (let i = 0; i < notas.length; i++) {
        if (notas[i] <= 4.9) {
            console.log("CONCEITO D");
        }
        if (notas[i] > 4.9 && notas[i] <= 6.9) {
            console.log("CONCEITO C");
        }
        if (notas[i] > 6.9 && notas[i] <= 8.9) {
            console.log("CONCEITO B");
        }
        if (notas[i] > 8.9 && notas[i] <= 10) {
            console.log("CONCEITO A");
        }
    }
}
