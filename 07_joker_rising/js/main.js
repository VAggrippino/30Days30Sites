// Load a different slogan each time the page loads.
const slogan = document.getElementById('slogan');
const slogans = [
  'Get the Joke.',
  'Get the Joke?',
  'Let\'s Put a Smile on That Face...',
  'Why So Serious?'
];

const sloganNumber = Math.floor(Math.random() * slogans.length);
slogan.innerText = slogans[sloganNumber];

// Add click handling for the video.
const trailer = document.getElementById('trailer');
trailer.addEventListener('click', e => {
  const video = trailer.getElementsByTagName('video')[0];
  const action = video.paused ? 'play' : 'pause';
  trailer.classList.add(action);
  video[action]();
});

// Remove the play / pause class from the trailer so that the indicator properly
// disappears.
trailer.addEventListener('animationend', e => {
  trailer.classList.remove('pause', 'play');
});

// Lightbox Options
// from http://lokeshdhakar.com/projects/lightbox2/
lightbox.option({
  "disableScrolling": true
});
