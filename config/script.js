// JavaScript para exibir uma mensagem ao clicar em uma imagem
document.querySelectorAll('.galeria img').forEach(img => {
    img.addEventListener('click', () => {
        alert('Você clicou em uma imagem!');
    });
});
