// Retorne um número aleatório
// entre 1050 e 2000
let randomNumber = Math.floor(Math.random()*(12 - 3 +1)+ 3);

// Retorne o maior número da lista abaixo
const numeros = '4, 5, 20, 8, 9';
const arrayNumeros = numeros.split(", ")
const numeroMax = Math.max(...arrayNumeros)
console.log(numeroMax);
// Crie uma função para limpar os preços
// e retornar os números com centavos arredondados
// depois retorne a soma total
const listaPrecos = ['R$ 59,99', ' R$ 100,222',
                     'R$ 230  ', 'r$  200'];
                     