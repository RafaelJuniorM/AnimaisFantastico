# Propriedade e metodos de STRINGS

### str.length
propriedade que retorna o total de caracteres da string.
```bash 
const comida = 'Pizza';
comida.length; //5
```
### str.charat(n)
Retorna o caractere de acordo com o index de (n).

```bash
const linguagem='javaScript';
linguagem.charAt(0); // j

linguagem.charAt(2); // u

linguagem.charAt(linguagem.length - 1); // t

```
### str.concat(str2, str3, ...)

Concatena as strings e retorna o resultado.

```bash
const frase = 'A melhor linguagem é ';
const linguagem = 'JavaScript';

const fraseCompleta = frase.concat(linguagem, '!!');
```

### str.includes(search, position)

Procurar pela string exata dentro deo outra sitrng. 

A procura é case sensitive.

```bash 
const fruta = 'Banana';
const listaFrutas = 'Melancia, Banana, Laranja';

listaFrutas.includes(fruta); // true
fruta.includes(listaFrutas); // false
```

### stra.endsWith(search) e str.startsWith(search)

Procurar pela string exata dentro de outra string. 

A procura é case sensitive. 

```bash
const fruta = 'Banana';

fruta.endsWith('nana'); // true
fruta.startsWith('Ba'); // true
fruta.startsWith('na'); // false
```

### str.slice(start, end)

Corta a string de acordo om os valores de start e end. 

```bash 
const transacao1 = 'Depósito de cliente';
const transacao2 = 'Depósito de fornecedor';
const transacao3 = 'Taxa de camisas';

transacao1.slice(0, 3); // Dep
transacao2.slice(0, 3); // Dep
transacao3.slice(0, 3); // Tax

transacao1.slice(12); // cliente
transacao1.slice(-4); // ente
transacao1.slice(3, 6); // ósi
```

### str.substring(start, end)

Corta a string de acordo com os valores de start e end. 

Não funcionar com valores negativos como o slice.

```bash 
const linguagem = 'JavaScript';
linguagem.substring(3,5); // aS
linguagem.substring(0,4); // Java
linguagem.substring(4); // Script
linguagem.substring(-3); // JavaScript
```

### str.indexOf(search) e str.lastIndexOf(search)

Retorna o index da string, assim que achar o primeiro resultado ele já retorna. 

No caso do lastIndexOf ele retorna o último resultado.

```bash
const instrumento = 'Guitarra';

instrumento.indexOf('r'); // 5
instrumento.lastIndexOf('r'); // 6
instrumento.indexOf('ta'); // 3
```

### str.padStart(n, str) e str.padEnd(n, str)

Aumenta o tamanho da string para o valor de n. Ou seja, uma string com 8 caracteres, se passarmos n = 10, ela passará a ter 10 caracteres. O preenchimento é feito com espaços, caso não seja declarado o segundo argumento.

```bash 
const listaPrecos = ['R$ 99', 'R$ 199', 'R$ 12000'];

listaPrecos.forEach((preco) => {
  console.log(preco.padStart(10, '.'));
})

listaPrecos[0].padStart(10, '.'); // .....R$ 99
listaPrecos[0].padEnd(10, '.');   // R$ 99.....
```

### str.repeat(n)

Repete a string (n) vezes.

```bash
const frase = 'Ta';

frase.repeat(5); // TaTaTaTaTa
```

### str.replace(regexp|substr, newstr|function)

Troca parte da string por outra. Podemos utilizar uma regular expression ou um valor direto. Se usarmos um valor direto ele irá trocar apenas o primeiro valor que encontrar.

```bash
let listaItens = 'Camisas Bonés Calças Bermudas Vestidos Saias';
listaItens = listaItens.replace(/[ ]+/g, ', ');

let preco = 'R$ 1200,43';
preco = preco.replace(',', '.'); // 'R$ 1200.43'
```

### str.trim(), str.trimStart(), str.trimEnd()

Remove espaço em branco do início ou final de uma string.

```bash 
const valor = '  R$ 23.00   ' 
valor.trim(); // 'R$ 23.00'
valor.trimStart(); // 'R$ 23.00   '
valor.trimEnd(); // '  R$ 23.00'
```