// seleciona o elemento div
const logo = document.querySelector('#logo');
const icon = document.querySelector('#icon');

// adiciona o evento scroll ao objeto window
window.addEventListener('scroll', function() {
  // obtém a posição vertical da janela de visualização
  const scrollPosition = window.scrollY;

  // verifica se a posição vertical é maior que 100 pixels
  if (scrollPosition > 100) {
    // altera a cor de fundo do elemento div
    logo.style.display = 'none';
  } else {
    // se não, define a cor de fundo como transparente
    logo.style.display = 'block';
  }
});
