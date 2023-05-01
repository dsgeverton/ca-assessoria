// seleciona o elemento div
const logo = document.querySelector('#logo');
const icon = document.querySelector('#icon');

// adiciona o evento scroll ao objeto window
window.addEventListener('scroll', function() {
  // obt�m a posi��o vertical da janela de visualiza��o
  const scrollPosition = window.scrollY;

  // verifica se a posi��o vertical � maior que 100 pixels
  if (scrollPosition > 100) {
    // altera a cor de fundo do elemento div
    logo.style.display = 'none';
  } else {
    // se n�o, define a cor de fundo como transparente
    logo.style.display = 'block';
  }
});
