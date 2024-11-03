function createConfetti() { //essa função aq cuida dos confetes!
    const confettiContainer = document.createElement('div');
    confettiContainer.classList.add('confetti-container');
    document.body.appendChild(confettiContainer);
  
    // Cria 50 confetes
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        
        // Define as cor
        const colors = ['#FFC107', '#FF5722', '#4CAF50', '#03A9F4', '#E91E63'];
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        
        // posição aleatoria
        confetti.style.left = `${Math.random() * 100}vw`;
        confetti.style.top = `${Math.random() * 100}vh`;
        
        // Animações aleatórias
        confetti.style.animationDuration = `${Math.random() * 2 + 2}s`;
        confetti.style.animationDelay = `${Math.random() * 1}s`;
        
        confettiContainer.appendChild(confetti);
    }
  
    // Remove o confete após 5 segundos
    setTimeout(() => confettiContainer.remove(), 5000);
  }
  
  // Função que dispara o confete ao clicar no ícone
  function toggleIconWithConfetti(element) {
    createConfetti();
  }
  