// Set a background image on all blocks using background image sizing / position
const imageBlocks = document.querySelectorAll('[data-image]');
imageBlocks.forEach(block => {
  console.log(block);
  block.style.backgroundImage = `url(${block.dataset.image})`;
});

// Change the quote on every page load.
const quotes = [
  'The best way to find yourself is to lose yourself in the service of others.',
  'Be the change that you wish to see in the world.',
  'Live as if you were to die tomorrow. Learn as if you were to live forever.',
  'An eye for an eye will only make the whole world blind.',
  'I like your Christ, I do not like your Christians. Your Christians are so unlike your Christ.',
  'Nobody can hurt me without my permission.',
  'God has no religion.',
  'Hate the sin, love the sinner.',
  'To give pleasure to a single heart by a single act is better than a thousand heads bowing in prayer.',
  'There are people in the world so hungry, that God cannot appear to them except in the form of bread.',
  'It is unwise to be too sure of one\'s own wisdom. It is healthy to be reminded that the strongest might weaken and the wisest might err.',
  'Whatever you do will be insignificant, but it is very important that you do it.',
  'Whenever you are confronted with an opponent. Conquer him with love.',
  'Strength does not come from physical capacity. It comes from an indomitable will.'
];

const quote = document.getElementById('quote');
quote.innerText = quotes[Math.floor(Math.random() * quotes.length)];
