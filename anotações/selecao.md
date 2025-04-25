### Seletor ID 
**getElementById** selecinar e retorna elementos do DOM 
```bash
const naveVariavel = document.getElementById('seletor')

```
### Seletor Classe e Tag

**getElementsByClassName** e **getElementsByTagName** selecionam e retornam uma lista de elementos do DOM. A lista retornada está ao vivo, significa que se elementos forem adicionados, ela será automaticamente atualizada

```bash
// Seleciona pela classe, retorna uma HTMLCollection

const gridSection = document.getElementsByClassName('grid-section');
const contato = document.getElementsByClassName('grid-section contato');
```

### seletor Geral Unico 

**querySelector** - retorna o primeiro elemento que combinas com o seu seletor CSS. 

```bash
const linkInterno = document.querySelector([href^="#"]');

//neste caso ira pegar o primeiro elemento que iniciar com #; <
    
```

### Seletor Geral Lista

**querySelectorAll** retornar todos os elementos compativeis com o seletor CSS em uma NodeList.

### Transformando ArrayLike em um Array

```bash
 Array.from(Passe aqui o arrayLike)

```