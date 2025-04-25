# AddEventListener()

Adicionar uma função ao elemento, esta chamada de **callback**, que será ativada assim que certo **evento** ocorrer neste elemento. 

```
const img = document.querySelector('img');

// elemento.addEventListener(event, callback, options)
img.addEventListener('click', function() {
  console.log('Clicou');
})
```

### Callback 
É boa prática separar a função de callback do addEventListener, ou seja, declarar uma função ao invés de passar diretamente uma função anônima

### Event 
Primeiro parametro do callback é referente ao evento que ocorreu. **event**

```
function callback(event) {
  console.log(event);
}
```

**PROPRIEDADES DO EVENT**
```
function executarCallback(event) {
  const currentTarget = event.currentTarget; // this
  const target = event.target; // onde o clique ocorreu
  const type = event.type; // tipo de evento
  const path = event.path;
  console.log(currentTarget, target, type, path);
}
```

### event.preventDefault()
Previne o comportamento padrão do evento no browser. No caso de um link externo, por exemplo, irá previnir que o link seja ativado.

### THIS
A palavra chave this é uma palavra especial de JavaScript, que pode fazer referência a diferentes objetos dependendo do contexto. No caso de eventos, ela fará referência ao elemento em que addEventListener foi adicionado.

```
const img = document.querySelector('img');

function callback(event) {
  console.log(this); // retorna a imagem
  console.log(this.getAttribute('src'));
}

img.addEventListener('click', callback);
```

### DIFERENTES EVENTOS
Existem diversos eventos como **click**, **scroll**, **resize**, **keydown**, **keyup**, **mouseenter** e mais. Eventos podem ser adicionados a diferentes elementos, como o window e document também.

Segue o site contendo mais eventos[Mozilla Eventos](https://developer.mozilla.org/en-US/docs/Web/Events)

### FOREACH E EVENTOS
O método **addEventListener** é adicionado à um único elemento, então é necessário um loop entre elementos de uma lista, para adicionarmos à cada um deles.

```
const imgs = document.querySelectorAll('img');

function imgSrc(event) {
  const src = event.currentTarget.getAttribute('src');
  console.log(src);
}

imgs.forEach((img) => {
  img.addEventListener('click', imgSrc);
});
```

### KEYBOARD 
Você pode adicionar atalhos para facilitar a navegação no seu site, através de eventos do **keyboard**.
```
function handleKeyboard(event) {
  if(event.key === 'a')
    document.body.classList.toggle('azul');
  else if(event.key === 'v')
    document.body.classList.toggle('vermelho');
}

window.addEventListener('keydown', handleKeyboard);
```