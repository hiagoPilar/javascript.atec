

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

//-----------------------------------------------------------------------------------

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
//-------------------------------------------------------------------------------
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



function validarString(str){
    //verifica se a string esta vazia
    if(str === "") {
        console.log("Erro: A string esta vazia.");
        return false;
    }

    if(str.length < 3){
        console.log('Erro: "${str}" deve ter no minimo 3 caracteres.');
        return false;
    }

     const primeiroChar = str.charAt(0).toUpperCase();
    if (primeiroChar !== 'A' && primeiroChar !== 'B') {
        console.log(`Erro: "${str}" deve começar com 'A' ou 'B'.`);
        return false;
    }

    console.log('"${str}" é valida.');
    return true;
}

console.log("Testar valor1: ");
validarString(valor1);

console.log("Testar valor2 Primavera: ");
validarString(valor2);

console.log("Testat valor3 Be: ");
validarString(valor3);

console.log("Testar valor4 Amsterdão: ");
validarString(valor4);

console.log("Testar valor5 Benin: ");
validarString(valor5);

*/

//--------------------------------------------------------------------------------

/*

Exercício 4
 
Simular o método repeat, isto é, dadas duas variáveis,
 
let repeticoes=3;
let texto="Primavera";
Criar uma variável (e mostrar o resultado no ecrã) que contenha o valor da variável "texto" repetido 3 vezes (é o valor da variável "repeticoes"):
 
PrimaveraPrimaveraPrimavera
Testar o algoritmo para valores diferentes das variáveis "repetições" e "texto".


function repetirTexto(texto, repeticoes){
    let resultado = '';
    for(let i = 0; i < repeticoes; i++){
        resultado += texto;
    }
    return resultado;
}

let repeticoes = 3;
let texto = "Primavera";

console.log(repetirTexto(texto, repeticoes));

*/

//---------------------------------------------------------------------------------


/*

Exercício 5
 
Simular o método trim() que remove os espaços que ocorrem no início e no fim de uma string.
 
Exemplo:
 
let frase=" Frase com espaços no início e no fim ";
 
Deveremos ter como resultado "Frase com espaços no início e no fim".



function meuTrim(str){
    
    while (str.charAt(0) === ' '){
        str = str.substring(1);
    }

    while (str.charAt(str.lenght - 1) === ' '){
        str = str.substring(0, str.lenght -1);
    }

    return str;
}

let frase = " Frase com espaco no inicio e no fim ";
console.log(`"${meuTrim(frase)}"`); 

*/

//---------------------------------------------------------------------------


/*

Exercício 6
 
Validar se um email fornecido pelo utilizador tem o formato correcto, apresentando uma mensagem de erro, caso não seja válido.
 
NÃO UTILIZAR EXPRESSÕES REGULARES!
 
Condições:
 
Tem de possuir uma @
Antes da @ tem de existir 1 caracter
Depois da @ tem de existir um caracter
Depois da @, mas espaçado, pelo menos 1 caracter, tem de existir 1 ponto
Depois do ponto, têm de existir, pelo menos 2 caracteres
Caso não seja fornecido nenhum valor deve apresentar a mensagem "É necessário fornecer um email".
Utilizar os seguintes valores para testar:


let email1=""; // "É necessário fornecer um email"
let email2="primavera"; // false
let email3="a@primavera"; // false
let email4="premoaldo@.primavera."; // false
let email5="premoaldo@primavera"; // false
let email6="premoaldo@primavera."; // false
let email7="premoaldo@primavera.b"; // false
let email8="premoaldo@primavera.pt"; // true

function validarEmail(email) {
    // Verifica se o email está vazio
    if (email === "") {
        return "É necessário fornecer um email";
    }

    // Verifica se tem '@'
    const posicaoArroba = email.indexOf('@');
    if (posicaoArroba === -1) {
        return false;
    }

    // Verifica se há pelo menos 1 caractere antes e depois do '@'
    if (posicaoArroba === 0 || posicaoArroba === email.length - 1) {
        return false;
    }

    // Divide o email em parte local (antes do @) e domínio (depois do @)
    const parteLocal = email.substring(0, posicaoArroba);
    const dominio = email.substring(posicaoArroba + 1);

    // Verifica se o domínio tem pelo menos um '.'
    const posicaoPonto = dominio.indexOf('.');
    if (posicaoPonto === -1) {
        return false;
    }

    // Verifica se há pelo menos 1 caractere entre o '@' e o '.'
    if (posicaoPonto === 0) {
        return false;
    }

    // Verifica se há pelo menos 2 caracteres após o '.'
    if (dominio.substring(posicaoPonto + 1).length < 2) {
        return false;
    }

    // Se passou por todas as verificações, o email é válido
    return true;
}

console.log(validarEmail(email1)); // "É necessário fornecer um email"
console.log(validarEmail(email2)); // false (não tem @)
console.log(validarEmail(email3)); // false (não tem ponto após @)
console.log(validarEmail(email4)); // false (ponto logo após @)
console.log(validarEmail(email5)); // false (não tem ponto no domínio)
console.log(validarEmail(email6)); // false (apenas 1 caractere após o ponto)
console.log(validarEmail(email7)); // false (apenas 1 caractere após o ponto)
console.log(validarEmail(email8)); // true (formato válido)

*/

//-----------------------------------------------------------------------------

/*

Exercício 7
 
Dada uma variável com o nome de um ficheiro,
 
let ficheiro="teste.txt";
extrair a extensão do ficheiro.
O resultado deve ser ".txt" ou "txt". No caso de ser um ficheiro Word seria "doc" ou ".doc".
Convém testar todas as hipóteses para a variável "ficheiro". Por exemplo, se não existe extensão, se a variável está vazia, se não contém uma string, etc.





function extrairExtensao(ficheiro) {
    // Verificar se o valor é string e não está vazio
    if (typeof ficheiro !== 'string' || ficheiro.trim() === '') {
        return null; // ou "" dependendo do que preferir
    }

    // Encontrar a última ocorrência do ponto
    const ultimoPonto = ficheiro.lastIndexOf('.');

    // Casos de retorno
    if (ultimoPonto === -1) {
        return null; // Não tem extensão
    }
    if (ultimoPonto === ficheiro.length - 1) {
        return null; // O ponto está no final sem extensão
    }

    // Retornar a extensão COM ponto
    return ficheiro.substring(ultimoPonto); // Para retornar SEM ponto: substring(ultimoPonto + 1)
}

// Testes
const testes = [
    "teste.txt",    // .txt
    "documento.doc", // .doc
    "sem_extensao",  // null
    ".htaccess",     // .htaccess
    "ponto.final.",  // null
    "",              // null
    null,            // null
    123,             // null
    "vários.pontos.html" // .html
];

testes.forEach(ficheiro => {
    console.log(`${JSON.stringify(ficheiro)} → ${extrairExtensao(ficheiro)}`);
});

*/

//-----------------------------------------------------------------------------

/*

Exercício 9
 
Identificar a maior palavra existente numa frase e o respectivo número de caracteres.Exemplo:
 
let frase="Exemplo de uma frase com palavras";
Deve apresentar como resultado
 
"palavras" - 8 letras
Podem utilizar métodos de strings.

*/



