### OuterHtml, InnerHtml e InnerText

Propriedades que retornam uma string contendo o html ou texto. 
Possivel atribuir um novo valor para as mesmas **element.innerText = 'novo Texto'**

```bash
const menu = document.querySelector('.menu');

menu.outerHTML; // todo o html do elemento incluindo as tags
menu.innerHTML; // html interno - somente as tags
menu.innerText; // texto, sem tags

menu.innerText = '<p>Texto</p>'; // a tag vai como texto
menu.innerHTML = '<p>Texto</p>'; // a tag é renderizada
```

### TRASVERSING 
como navegar pelo DOM, utilizando suas propriedades e metodos. 

```bash
const lista = document.querySelector('.animais-lista');

lista.parentElement; // pai
lista.parentElement.parentElement; // pai do pai
lista.previousElementSibling; // elemento acima que esteja no mesmo nivel 
lista.nextElementSibling; // elemento abaixo que esteja no mesmo nivel

lista.children; // HTMLCollection com os filhos
lista.children[0]; // primeiro filho
lista.children[--lista.children.length]; // último filho

lista.querySelectorAll('li'); // todas as LI's
lista.querySelector('li:last-child'); // último filho
```
### Element vs Node

**Element's represetam um elemento html**, ou seja, uma **tag**. 
**Node representa um nó**, e pode ser um elemento (Element), texto, comentário, quebra de linha e mais.

```bash
const lista = document.querySelector('.animais-lista');

lista.previousElementSibling; // elemento acima
lista.previousSibling; // node acima - ou seja irá tambem selecionar espaços, comentarios...

lista.firstChild; // primeiro node child
lista.childNodes; // todos os node child
```
### Manipulando Elementos

Possivel mover elementos no dom com metodos de Node.



```bash
const lista = document.querySelector('.animais-lista');
const contato = document.querySelector('.contato');
const titulo = contato.querySelector('.titulo');

contato.appendChild(lista); // move lista para o final de contato
contato.insertBefore(lista, titulo); // insere a lista antes de titulo
contato.removeChild(titulo); // remove titulo de contato
contato.replaceChild(lista, titulo); // substitui titulo por lista
```

### Novos Elementos 

Cria um novo elemento com o metodo createElement()

```bash
const animais = document.querySelector('.animais');

const novoH1 = document.createElement('h1');
novoH1.innerText = 'Novo Título';
novoH1.classList.add('titulo');

animais.appendChild(novoH1);
```

 