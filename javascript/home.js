document.addEventListener('DOMContentLoaded', () => {
    const modules = document.querySelectorAll('.swiper-slide');
    const nextButtons = document.querySelectorAll('.next-btn');
  
    // desbloqueia o primeiro módulo
    let currentIndex = 0;
    modules[currentIndex].classList.add('active');
  
    //  desbloquear o próximo módulo
    function unlockNextModule(index) {
      if (index < modules.length - 1) {
        modules[index].classList.remove('active');
        modules[index + 1].classList.add('active');
      }
    }
  
    // Adiciona evento nos botões "Next" para avançar para o próximo módulo
    nextButtons.forEach((button, index) => {
      button.addEventListener('click', () => {
        unlockNextModule(index);
        button.disabled = true; // Desabilita o botão após o clique
      });
    });
  });
  