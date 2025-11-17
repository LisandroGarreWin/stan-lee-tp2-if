// lista de imágenes de la galería
const imagenes = [
  'img/spiderman-portada.jpg',
  'img/fantastic4-portada.jpg',
  'img/ironman-portada.jpg',
  'img/xmen-portada.jpg',
  'img/blackpanther-portada.jpg',
  'img/avengers-portada.jpg'
];

// referencia al contenedor del carrusel
const carouselInner = document.querySelector('#galeriaCarousel .carousel-inner');
// miniaturas clickeables
const galeriaItems = document.querySelectorAll('.galeria-item');

// click en cada miniatura
galeriaItems.forEach((item) => {
  item.addEventListener('click', () => {
    const index = parseInt(item.getAttribute('data-index'));
    carouselInner.innerHTML = '';

    // insertar todas las imágenes en el carrusel
    imagenes.forEach((src, i) => {
      const activeClass = i === index ? 'active' : '';
      const div = document.createElement('div');
      div.className = `carousel-item ${activeClass}`;
      div.innerHTML = `<img src="${src}" class="d-block mx-auto img-fluid img-galeria object-fit-contain">`;
      carouselInner.appendChild(div);
    });
  });
});
