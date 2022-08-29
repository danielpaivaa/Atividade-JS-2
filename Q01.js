// 1) Crie uma função que verifica se um número inteiro passado como parâmetro é divisível por 3 e retorne “true” ou “false”.

let valor = 12; //Defina o valor desejado aqui

verifica(valor);

function verifica(num) {
    if((num % 3) == 0){
        console.log(true);
    }else {
        console.log(false);
    }

}