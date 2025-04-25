### ForEach()

Constantemente vamos selecionar uma lista de itens do dom. A melhor forma para interagirmos com os mesmos é utilizando o método forEach.

```bash
const imgs = document.querySelectorAll('img');

imgs.forEach(function(item){
  console.log(item);
});

```

### Parametros do ForEach
O primeiro parâmetro é o callback, ou seja, a função que será ativada a cada item. Esse função pode receber três parâmetros: **valorAtual**, **index** e **array**;

Veja o exemplo abaixo: 

```bash
const imgs = document.querySelectorAll('img');

imgs.forEach(function(valorAtual, index, array){
  console.log(valorAtual); // o item atual no loop
  console.log(index); // o número do index
  console.log(array); // a Array completa
});

```

### Arrow Function

Sintaxe curta em relação a function expression. Basta remover a palavra chave function e adicionar a fat arrow **=>** após os argumentos.

Veja o exemplo:

```bash
const imgs = document.querySelectorAll('img');

imgs.forEach((item) => {
  console.log(item);
});

```

### Parametro e parênteses 

```bash
const imgs = document.querySelectorAll('img');

// parâmetro único não precisa de parênteses
imgs.forEach((item) => {
  console.log(item);
});

// multiplos parâmetros precisam de parênteses
imgs.forEach((item, index) => {
  console.log(item, index);
});

// sem parâmetro precisa dos parênteses, mesmo vazio
let i = 0;
imgs.forEach(() => {
  console.log(i++);
});

```