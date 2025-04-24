const img = document.querySelector('img')
console.log(img);

img.addEventListener('click',(event) =>{
    console.log(event.currentTarget);
})

// === CALLBACK === 
// Declarar uma função ao inves de uma function anonima 
function callback(){
    console.log('isso é um callback')
}
img.addEventListener('click', callback);

img.addEventListener('click', callback()); // nao chamar a callback desta forma, pois esta executando ela assim que é renderizada 

// === event ===
//Primeiro parametro do callback é referente ao evento que ocorreu. **event**
img.addEventListener('click',(event) =>{
    console.log(event.currentTarget);
})

// event.preventDefault()
const linkExterno =  document.querySelector('a[href^="http"]')
//linkExterno.addEventListener('click',(event) =>{
  // event.preventDefault()
   
//})

//=== Diferentes eventos ===
const h1 = document.querySelector('h1');

function callback(event) {
  //console.log(event.type, event);
}

h1.addEventListener('click', callback);
h1.addEventListener('mouseenter', callback);
window.addEventListener('scroll', callback);
window.addEventListener('resize', callback);
window.addEventListener('keydown', callback);


// === EXERCICIOS ===
// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links
const linksInternos = document.querySelectorAll('a[href^= "#"]');

linksInternos.forEach((link)=>{
   link.addEventListener('click', (event) =>{
        event.preventDefault()
        linksInternos.forEach((item) =>{
            item.classList.remove('ativo');
        })
        link.classList.add('ativo') //add a classe ativo ao item clicado 
       
   })
})

// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados
// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento
const allElements = document.body.querySelectorAll('*');
allElements.forEach((element) =>{
    element.addEventListener('click',(item)=>{
        item.target.remove()
    })
})


// Se o usuário clicar na tecla (t), aumente todo o texto do site.
function handlekeyboard(event){
    if(event.key === 't'){
        console.log(event)
      document.body.style.fontSize = '8px'    }
}

window.addEventListener('keydown', handlekeyboard)