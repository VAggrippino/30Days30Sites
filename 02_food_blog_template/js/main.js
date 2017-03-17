const topNavToggle = document.getElementById('topNavToggle');

document.querySelectorAll('[data-img]').forEach(element => {
  console.log(element.dataset.img);
  element.style.backgroundImage = `url(${element.dataset.img})`;
});

topNavToggle.addEventListener('click', e => {
  e.currentTarget.parentNode.classList.toggle('open');
});

document.querySelectorAll('header a').forEach(link => {
  link.addEventListener('click', e => e.preventDefault());
});

document.querySelectorAll('main a').forEach(link => {
  link.addEventListener('click', e => e.preventDefault());
});
