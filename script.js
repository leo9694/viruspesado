const naoAceitaBtn = document.getElementById('nao-aceita-btn');
const body = document.querySelector('body');

naoAceitaBtn.addEventListener('mouseover', () => {
    const newX = Math.floor(Math.random() * (window.innerWidth - naoAceitaBtn.offsetWidth));
    const newY = Math.floor(Math.random() * (window.innerHeight - naoAceitaBtn.offsetHeight));
    naoAceitaBtn.style.position = 'absolute';
    naoAceitaBtn.style.left = newX + 'px';
    naoAceitaBtn.style.top = newY + 'px';
});

const aceitaBtn = document.getElementById('aceita-btn');
const confeteContainer = document.getElementById('confete');

aceitaBtn.addEventListener('click', () => {
    for (let i = 0; i < 100; i++) { // Adiciona 50 confetes ao clicar no botão
        const confete = document.createElement('div');
        confete.className = 'confete';
        confete.style.left = Math.random() * 100 + 'vw'; // Posição horizontal aleatória
        confete.style.animationDelay = Math.random() * 1 + 's'; // Atraso aleatório para a animação
        confeteContainer.appendChild(confete);
        setTimeout(() => { // Remove o confete após a animação
            confete.remove();
        }, 10000); // Tempo da animação
    }
});


