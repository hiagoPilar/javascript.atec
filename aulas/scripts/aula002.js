


//Arrays 

//É um tipo de dado que armazena uma coleção de valores. Os valores podem ser de qualquer tipo, incluindo números, strings, objetos, etc.

let numeros = [1, 2, 3, 4, 5]; // Array de números
let frutas = ["maçã", "banana", "laranja"]; // Array de strings
let misto = [1, "maçã", true, { nome: "Hiago" }, [1, 2, 3]]; // Array misto

console.log(numeros[0]); // Acessando o primeiro elemento do array numeros
console.log(frutas[1]); // Acessando o segundo elemento do array frutas

console.log(misto[3].nome); // Acessando a propriedade nome do objeto dentro do array misto
console.log(misto[4][1]); // Acessando o segundo elemento do array dentro do array misto

console.log(formandos.length); // Mostra o tamanho do array formandos
console.log(formandos[formandos.length - 1]); // Acessando o último elemento

console.log(formandos.indexOf("João")); // Retorna o índice do elemento "João" no array formandos
console.log(formandos.includes("Maria")); // Verifica se o elemento "Maria" está no array formandos
console.log(formandos.slice(1, 3)); // Retorna uma cópia do array formandos do índice 1 ao 2 (não inclui o índice 3)
console.log(formandos.splice(1, 1)); // Remove o elemento no índice 1 do array formandos e retorna o elemento removido










//Objetos literais

//É uma coleção de propriedades, onde cada propriedade é uma chave e um valor. Os valores podem ser de qualquer tipo, incluindo outros objetos, arrays, funções, etc.

//Esta estrutura é muito utilizada para representar dados complexos e é uma das bases da programação orientada a objetos em JavaScript e é a base do JSON (JavaScript Object Notation), que é um formato leve de troca de dados muito utilizado em APIs e armazenamento de dados.

let pessoa = {
    nome: "Hiago",
    idade: 25,
    profissao: "Desenvolvedor"
};

console.log(pessoa.nome); // Acessando a propriedade nome do objeto pessoa

let pessoas = [
    { nome: "Hiago", idade: 25, profissao: "Desenvolvedor", contatos: ["hiago@example.com", "1234-5678"] },
    { nome: "João", idade: 30, profissao: "Designer", contatos: ["joao@example.com", "9876-5432"] },
    { nome: "Maria", idade: 28, profissao: "Gerente", contatos: ["maria@example.com", "4567-8901"] }
];

console.log(pessoas[0].nome); // Acessando o nome da primeira pessoa no array pessoas

console.log(pessoas[0].contatos[1]) // Acessando o segundo contato da primeira pessoa no array pessoas

pessoas.push({ nome: "Ana", idade: 22, profissao: "Estagiária", contatos: ["ana@example.com", "2345-6789"] });  // Adicionando uma nova pessoa ao array pessoas



let pessoaCompleta = {
    nome: "Hiago",
    endereco: {
        rua: "Rua A",
        numero: 123,
        cidade: "São Paulo"
    },
    contatos: {
        email: "hiago@example.com",
        telefone: ["1234-5678", "9876-5432"]
    }
};

console.log(pessoa.endereco.rua); // Acessando a propriedade rua do objeto endereco dentro do objeto pessoa
console.log(pessoa.contatos.telefone[0]); // Acessando o primeiro telefone do objeto contatos dentro do objeto pessoa

pessoa.endereco.cidade = "Rio de Janeiro"; // Alterando a cidade no objeto endereco dentro do objeto pessoa
pessoa.endereco.estado = "RJ"; // Adicionando uma nova propriedade estado ao objeto endereco dentro do objeto pessoa


