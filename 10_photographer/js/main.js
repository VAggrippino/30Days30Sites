const lightbox = document.getElementById('lightbox');
document.querySelectorAll('.photo').forEach(block => {
  block.style.backgroundImage = `url(${block.dataset.image})`;
});

$('.carousel').slick({
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 3,
  dots: true,
  infinite: true,
  arrows: true,
  variableWidth: true,
  autoplay: true,
  autoplaySpeed: 2000
});

// Show the lightbox display when clicking on an image in the carousel.
document.querySelector('.carousel').addEventListener('click', e => {
  if (e.target.tagName == 'A' && e.target.classList.contains('photo')) {
    e.preventDefault();
    const image = e.target.dataset.image;
    document.body.classList.add('showLightbox');
    lightbox.getElementsByTagName('img')[0].setAttribute('src', image);
  }
});

// Make the lightbox go away when clicked.
lightbox.addEventListener('click', e => {
  document.body.classList.remove('showLightbox');
});
