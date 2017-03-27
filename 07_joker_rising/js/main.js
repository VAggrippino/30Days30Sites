const slogan = document.getElementById('slogan');

const slogans = [
  'Get the Joke.',
  'Get the Joke?',
  'Let\'s Put a Smile on That Face...',
  'Why So Serious?'
];

const sloganNumber = Math.floor(Math.random() * slogans.length);
slogan.innerText = slogans[sloganNumber];

const video = document.getElementById('video');
video.addEventListener('click', e => {
  const action = video.paused ? 'play' : 'pause';
  video[action]();
});
