// 7) Crie dois vetores chamados vetorPilha e vetorAdiciona. Inicialmente, o vetorPilha conterá cinco elementos inteiros: [1, 2, 3, 4, 5]. Você deverá adicionar os valores contidos no vetorAdiciona [6, 7, 8, 9, 10] ao vetor pilha e mostrá-los no console. É importante lembrar que o método Push retorna somente o tamanho do Vetor. Ao final das operações imprima os vetores no console.

const vetorPilha = new Array(1, 2, 3, 4, 5);
const vetorAdiciona = new Array(6, 7, 8, 9, 10);

console.log(vetorPilha);
console.log(vetorAdiciona);

let i = vetorPilha.length;

vetorAdiciona.forEach(item => {
    vetorPilha[i] = item;
    i++;
});

console.log("\nNovos Vetores\n");
console.log(vetorPilha);
console.log(vetorAdiciona);
