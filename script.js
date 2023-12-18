
// OCULTAMIENTO DEL LOGO
document.addEventListener('DOMContentLoaded', function () {
    const logoContainer = document.querySelector('.logoNav');
    const textContainer = document.querySelector('.hidden-text');
  
    logoContainer.addEventListener('mouseenter', function () {
      textContainer.style.opacity = '1';
      textContainer.style.transform = 'translateX(0)';
    });
  
    logoContainer.addEventListener('mouseleave', function () {
      textContainer.style.opacity = '0';
      textContainer.style.transform = 'translateX(-100%)'; // Cambié aquí para que sea de izquierda a derecha
    });
  });
  
  
// ANIMACION DE HABILIDADES

document.querySelector('.marquee-container').addEventListener('mouseenter', function() {
    const marquee = document.querySelector('.marquee');
    marquee.classList.add('paused');
    
    const list = document.querySelector('.list');
    list.innerHTML = marquee.innerHTML; // Copia el contenido de marquee a la lista
    list.style.display = 'block'; // Muestra la lista
    marquee.style.display = 'none'; // Oculta el marquee
  });
  
  document.querySelector('.marquee-container').addEventListener('mouseleave', function() {
    const marquee = document.querySelector('.marquee');
    marquee.classList.remove('paused');
    
    const list = document.querySelector('.list');
    list.style.display = 'none'; // Oculta la lista
    marquee.style.display = 'flex'; // Muestra el marquee
  });
  
// FILTRO DE PROYECTOS

  document.addEventListener('DOMContentLoaded', function () {
    const filterButtons = document.querySelectorAll('#portfolio .filter-btn');
    const portfolioGrid = document.getElementById('portfolio-grid');

    filterButtons.forEach(button => {
        button.addEventListener('click', function () {
            const filterValue = this.getAttribute('data-filter');

            // Marcar el botón activo
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            // Filtrar imágenes
            portfolioGrid.querySelectorAll('.portfolio-item').forEach(item => {
                const itemFilter = item.getAttribute('data-filter');
                if (filterValue === 'all' || filterValue === itemFilter) {
                    item.classList.remove('hidden');
                } else {
                    item.classList.add('hidden');
                }
            });
        });
    });
});


