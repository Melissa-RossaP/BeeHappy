let beeClickCount = 0; // cliques da abelha

function createConfetti() { // criar confetes
    const confettiContainer = document.createElement('div');
    confettiContainer.classList.add('confetti-container');
    document.body.appendChild(confettiContainer);
  
    // Cria 50 confetes
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        
        // Define as cores
        const colors = ['#FFC107', '#FF5722', '#4CAF50', '#03A9F4', '#E91E63'];
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        
        // Posição aleatória
        confetti.style.left = `${Math.random() * 100}vw`;
        confetti.style.top = `${Math.random() * 100}vh`;
        
        // Animações aleatórias
        confetti.style.animationDuration = `${Math.random() * 2 + 2}s`;
        confetti.style.animationDelay = `${Math.random() * 1}s`;
        
        confettiContainer.appendChild(confetti);
    }
  
    // Remove após 5 segundos
    setTimeout(() => confettiContainer.remove(), 5000);
}

// lida com cliques na abelha
function handleBeeClick() {
    beeClickCount++; // Incrementa o contador da abelha

    createConfetti(); // função de confete para a abelha

    if (beeClickCount >= 6) { // Verifica se já foram 6 cliques
        window.open("https://youtu.be/dQw4w9WgXcQ?si=RM120nasrOWEM8_l", "_blank"); // Abre o link do vídeo em uma nova aba
        beeClickCount = 0; // Reseta o contador de cliques
    }
}

// lida com cliques nos outros ícones
function handleOtherClicks() {
    createConfetti(); // Chama confete para outros ícones
}



// Função para esconder e mostrar a sidebar
function toggleSidebar() {
    var sidebar = document.getElementById("sidebar");
    
    // Alterna a classe 'hidden' para esconder/mostrar a sidebar
    sidebar.classList.toggle("hidden");
}


// Função para alternar a exibição da mini aba de informações
function toggleInfo() {
    var infoBox = document.getElementById('infoBox');
    // Verifica o estado da exibição da aba
    if (infoBox.style.display === 'none' || infoBox.style.display === '') {
      infoBox.style.display = 'block';   // Exibe a aba
    } else {
      infoBox.style.display = 'none';    // Esconde a aba
    }
  }



// Função para abrir a aba de cadastro
function abrirCadastro() {
    var cadastro = document.getElementById('cadastro');
    cadastro.style.display = 'block';
  }
  
  // Função de cadastro
  function cadastrar(event) {
    event.preventDefault();  // Impede o envio padrão do formulário
  
    // Obtemos o valor do nome e e-mail
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
  
    // Armazenar os dados no sessionStorage
sessionStorage.setItem('nome', nome);
sessionStorage.setItem('email', email);

// Recuperar o nome do usuário do sessionStorage
var nome = sessionStorage.getItem('nome');

  
    // Fechar a aba de cadastro após o cadastro
    document.getElementById('cadastro').style.display = 'none';
  
    // Mostrar mensagem com o nome do usuário
    mostrarPerfil();
  }
  
  // Função para mostrar o perfil
  function mostrarPerfil() {
    var nome = localStorage.getItem('nome');
    
    // Se o nome do usuário estiver armazenado, mostramos uma mensagem personalizada
    if (nome) {
      var mensagem = document.getElementById('mensagem');
      mensagem.textContent = 'Olá, ' + nome + '!';
      mensagem.style.display = 'block';  // Exibe a mensagem
    } else {
      // Caso o nome não esteja armazenado, pede para o usuário se cadastrar
      var mensagem = document.getElementById('mensagem');
      mensagem.textContent = 'Por favor, cadastre-se!';
      mensagem.style.display = 'block';
      abrirCadastro();  // Abre o cadastro se ainda não tiver sido feito
    }
  }
  
  function exibirMensagem() {
    const nomeUsuario = localStorage.getItem("nome"); // Obtém o nome do usuário do localStorage
    const mensagem = document.getElementById("mensagem");
    
    if (nomeUsuario) {
      mensagem.innerHTML = `Olá, ${nomeUsuario}!`; // Exibe a mensagem com o nome
      mensagem.style.display = "block"; // Torna a mensagem visível
    }
  
    // Esconde a mensagem após 3 segundos
    setTimeout(() => {
      mensagem.style.display = "none";
    }, 3000); // 3000 milissegundos = 3 segundos
  }
  
  // Chame a função exibirMensagem quando o perfil for clicado
  document.querySelector('.Perfil .icon').addEventListener('click', exibirMensagem);
  