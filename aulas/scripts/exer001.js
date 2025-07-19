

/*
Definir uma variável com um número e calcular o factorial desse número, isto é, a multiplicação de todos os números inteiros entre 1 e o número.
Por exemplo o factorial de 5 é o resultado da operação 1x2x3x4x5=120
Não existe factorial de números negativos e 0! = 1. Testar estas hipóteses.



function calcularFactorial(numero) {

    //verifica se é negativo
    if(numero < 0){
        return "Nao existe factorial de negativo!";
    } 
    else if (numero === 0){
        return 1;
    }

    else {
        let factorial = 1;
        for (let i = 0; i <= numero; i++) {
            factorial += i;
        }
        return factorial;
    }
}

console.log(calcularFactorial(5));

*/


/*
Exercício 2
 
Dada uma variável com um ano,let ano=2004;determinar se o ano é bissexto.



const readline = require ('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Digite um ano: ', (ano) => {
    function ehBissexto(ano) {
        return (ano % 4 === 0 && ano % 100 === 0) || ano % 400 === 0;
    }

    console.log(`${ano} é bissexto? ${ehBissexto(ano) ? 'Sim' : 'Não'}`);
    readline.close();
});

*/

/*

Exercício 3
 
Dada uma variável do tipo string, validar se obedece às seguintes condições, apresentando uma mensagem de erro:
não pode ser vazia
tem de ter, no mínimo, 3 caracteres
o primeiro caracter tem de ser A ou B
Utilizar os seguintes valores para testar:
 
let valor1=""; // false
let valor2="Primavera"; // false
let valor3="Be"; // false;
let valor4="Amesterdão"; // true
let valor5="Benin"; // true

*/

