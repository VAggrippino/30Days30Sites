const slogan = document.getElementById('slogan');

const slogans = [
  'Get the Joke.',
  'Get the Joke?',
  'Let\'s Put a Smile on That Face...',
  'Why So Serious?'
];

const sloganNumber = Math.floor(Math.random() * slogans.length);
slogan.innerText = slogans[sloganNumber];

const trailer = document.getElementById('trailer');
trailer.addEventListener('click', e => {
  const video = trailer.getElementsByTagName('video')[0];
  const action = video.paused ? 'play' : 'pause';
  trailer.classList.add(action);
  video[action]();
});

trailer.addEventListener('animationend', e => {
  trailer.classList.remove('pause', 'play');
});
