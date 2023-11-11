const upBotao = document.getElementById('main-button');
const idConselho = document.getElementById('main-h1');
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