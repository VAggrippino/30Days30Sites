document.querySelectorAll('[data-image]').forEach(block => {
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
