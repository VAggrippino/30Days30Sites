// Define the list of words and pick one.
const words = [
  {'word': 'apple', 'image': 'media/simple-apple.svg'},
  {'word': 'orange', 'image': 'media/nicubunu-Orange.svg'},
  {'word': 'banana', 'image': 'media/Banana.svg'}
];
const n = Math.floor(Math.random() * words.length);

// Create the blanks
const solution = document.getElementById('solution');
const blanks = solution.querySelector('.blanks');
const clue = solution.querySelector('.clue');

for (let i = 0; i < words[n].word.length; i++) {
  const letter = words[n].word[i];
  const div = document.createElement('div');
  div.classList.add('blank');
  div.dataset.letter = letter;
  div.innerText = letter;
  blanks.appendChild(div)
}

clue.style.backgroundImage = `url(${words[n].image})`;

// Set up what happens when clicking the letters
const platform = document.getElementById('platform');
let errors = 0;
let gameOver = false;
const letters = document.querySelectorAll('.letters .letter');
letters.forEach(letter => {
  letter.addEventListener('click', e => {
    if (letter.classList.contains('used')) return false;
    if (gameOver) return false;
    const value = letter.innerText.toLowerCase();
    letter.classList.add('used');

    if (words[n].word.indexOf(value) !== -1) {
      blanks.querySelectorAll('.blank').forEach(blank => {
        if (blank.dataset.letter == value) blank.classList.add('show');
      });
    } else {
      errors++;
      platform.classList.remove('open1', 'open2', 'open3', 'open4', 'open5');
      platform.classList.add(`open${errors}`);

      if (errors == 5) {
        platform.classList.add('open');
        gameOver = true;
      }
    }
  });
});
