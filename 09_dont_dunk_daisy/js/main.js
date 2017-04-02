// Define the list of words and pick one.
const words = [
  {'word': 'apple', 'image': 'media/simple-apple.svg'},
  {'word': 'orange', 'image': 'media/nicubunu-Orange.svg'},
  {'word': 'banana', 'image': 'media/Banana.svg'}
];
const n = Math.floor(Math.random() * words.length);

const solution = document.getElementById('solution');
const blanks = solution.querySelector('.blanks');
const clue = solution.querySelector('.clue');

for (let i = 0; i < words[n].word.length; i++) {
  const letter = words[n].word[i];
  const div = document.createElement('div');
  div.classList.add('blank');
  div.innerText = letter;
  blanks.appendChild(div)
}

clue.style.backgroundImage = `url(${words[n].image})`;
