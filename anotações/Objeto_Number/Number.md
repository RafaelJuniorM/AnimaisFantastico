### Number.isNaN() e Number.isInteger();

isNaN() é um método de Number, ou seja, não faz parte to protótipo. isInteger() verifica se é uma integral.

```bash 
Number.isNaN(NaN); // true
Number.isNaN(4 + 5); // false

Number.isInteger(20); // true
Number.isInteger(23.6); // false
```
### Number.parseFloat() e Number.parseInt()

* parseFloat() serve para retornarmos um número a partir de uma string. A String deve começar com um número.

*  parseInt recebe também um segundo parâmetro que é o Radix, 10 é para decimal.

```bash 
parseFloat('99.50'); // Mesma função sem o Number
Number.parseFloat('99.50'); // 99.5
Number.parseFloat('100 Reais'); // 100
Number.parseFloat('R$ 100'); // NaN

parseInt('99.50', 10); // 99
parseInt(5.43434355555, 10); // 5
Number.parseInt('100 Reais', 10); // 100
```

### n.toFixed(decimais)
* Arredonda o número com base no total de casas decimais do argumento.

```bash
const preco = 2.99;
preco.toFixed(); // 3

const carro = 1000.455;
carro.toFixed(2) // 1000.46

const preco2 = 1499.49;
preco2.toFixed() // 1499
```

### n.toString(radix)

* Transforma o número em uma string com base no Radix. Use o 10 para o sistema decimal.

```bash
const preco = 2.99;
preco.toString(10); // '2.99'
```

### n.toLocaleString(lang, options);

* Formata o número de acordo com a língua e opções passadas.

```bash
const preco = 59.49;
preco.toLocaleString('en-US', {style: 'currency', currency: 'USD'}); // $59.49
preco.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}); // R$ 59,49
```

### Math.abs(), Math.ceil(), Math.floor() e Math.round()

* abs() retorna o valor absoluto, ou seja, transforma negativo em positivo

* ceil() arredonda para cima, retornando sempre uma integral 

* floor() arredonda para baixo

*  round() arredonda para o número integral mais próximo.

```bash
Math.abs(-5.5); // 5.5
Math.ceil(4.8334); // 5
Math.ceil(4.3); // 5
Math.floor(4.8334); // 4
Math.floor(4.3); // 4
Math.round(4.8334); // 5
Math.round(4.3); // 4
```

### Math.max(), Math.min() e Math.random();

* max() retorna o maior número de uma lista de argumentos, min() o menor número;

* random() um número aleatório entre 0 e 1;

```bash
Math.max(5,3,10,42,2); // 42
Math.min(5,3,10,42,2); // 2

Math.random(); // 0.XXX
Math.floor(Math.random() * 100); // entre 0 e 100
Math.floor(Math.random() * 500);  // entre 0 e 500

// Número random entre 72 e 32
Math.floor(Math.random() * (72 - 32 + 1)) + 32; 
Math.floor(Math.random() * (max - min + 1)) + min;
```

