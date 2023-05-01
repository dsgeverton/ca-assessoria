// seleciona o elemento div
const logo = document.querySelector('#logo');
const icon = document.querySelector('#icon');
icon.style.display = 'none';

icon.addEventListener('transitionend', () => {
    const logoBox = document.querySelector('.logo');
    console.log('oi')
    if (logo.style.display === 'none') {
        logoBox.classList.add('transition');
    } else {
        logoBox.classList.remove('transition');
    }
});

// adiciona o evento scroll ao objeto window
window.addEventListener('scroll', function () {
    // obtém a posição vertical da janela de visualização
    const logoBox = document.querySelector('.logo');
    const scrollPosition = window.scrollY;
    // verifica se a posição vertical é maior que 100 pixels
    if (scrollPosition >= 1) {
        // altera a cor de fundo do elemento div
        logoBox.classList.add('transition');

        logo.classList.add('hide')
        
        icon.style.display = 'block';
    } else {
        // se não, define a cor de fundo como transparente
        logoBox.classList.remove('transition');
        logo.classList.remove('hide')
        icon.style.display = 'none';
    }
});
