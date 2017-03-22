const unlinks = document.querySelectorAll('header a, main a');
const images = document.querySelectorAll('[data-image]');
const thumbnails = document.querySelectorAll('.thumbnail');

unlinks.forEach(link => {
  link.addEventListener('click', e => e.preventDefault());
});

images.forEach(image => {
  image.style.backgroundImage = `url(${image.dataset.image})`;
});

thumbnails.forEach(thumbnail => {
  thumbnail.addEventListener('click', e => {
    const display = document.getElementById('display');
    const image = e.currentTarget.dataset.image;
    display.dataset.image = image;
    display.style.backgroundImage = `url(${image})`;
  })
})
