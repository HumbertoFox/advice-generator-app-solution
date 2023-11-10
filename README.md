# Frontend Mentor - Advice generator app solution

Esta é uma solução para o [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db). 
Os desafios do Frontend Mentor ajudam você a melhorar suas habilidades de codificação criando projetos realistas.

## Layout do projeto em tela de Desktop/Notebook/Tablet/Mobile.

<div align="center">

  <img src="" width="400px"/>

</div>

### O que aprendi

```Js
  const upBotao = document.getElementById('main-button');
  const idConselho = document.getElementById('main-h2');
  const descricaoConselho = document.getElementById('main-p');

  async function getConselho() {
    const resposta = await fetch("https://api.adviceslip.com/advice");
    const getUpConselho = await resposta.json();
    const adIdUpConselho = `Advice #${getUpConselho.slip.id}`;
    const adTextUpConselho = `“${getUpConselho.slip.advice}”`;

    idConselho.innerHTML = adIdUpConselho;
    descricaoConselho.innerHTML = adTextUpConselho;
  };

  upBotao.addEventListener("click", getConselho);
```

### Construído com

- Marcação semântica HTML5
- Propriedades personalizadas CSS
- Caixa flexível
- Js com Fetch API

## Desenvolvido em:

<div>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" width="30px"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" width="30px"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" width="30px"/>
</div>
