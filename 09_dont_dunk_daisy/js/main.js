//document.getElementById('sound-intro').play();

// Define the list of words and pick one.
const words = [
  {'word': 'apple', 'image': 'media/simple-apple.svg'},
  {'word': 'orange', 'image': 'media/nicubunu-Orange.svg'},
  {'word': 'banana', 'image': 'media/Banana.svg'},
  {'word': 'eyes', 'image': 'media/eyes.svg'},
  {'word': 'clown', 'image': 'media/johnny-automatic-big-earred-clown.svg'},
  {'word': 'baby', 'image': 'media/papapishu-Baby-girl-lying.svg'},
  {'word': 'ears', 'image': 'media/Ears.svg'}
];
const n = Math.floor(Math.random() * words.length);

// Create the blanks
const solution = document.getElementById('solution');
const answer = document.getElementById('answer');
const clue = solution.querySelector('.clue');

for (let i = 0; i < words[n].word.length; i++) {
  const letter = words[n].word[i];
  const div = document.createElement('div');
  div.classList.add('blank');
  div.dataset.letter = letter;
  div.innerText = letter;
  answer.appendChild(div)
}

clue.style.backgroundImage = `url(${words[n].image})`;

// Set up what happens when clicking the letters
const platform = document.getElementById('platform');
let errors = 0;
let gameOver = false;
const letters = document.querySelectorAll('.letters .letter');
const blanks = answer.querySelectorAll('.blank');
letters.forEach(letter => {
  letter.addEventListener('click', e => {
    if (letter.classList.contains('used')) return false;
    if (gameOver) return false;
    const value = letter.innerText.toLowerCase();
    letter.classList.add('used');

    if (words[n].word.indexOf(value) !== -1) {
      letter.classList.add('right');
      document.getElementById('sound-Right').play();
      blanks.forEach(blank => {
        if (blank.dataset.letter == value) blank.classList.add('show');
      });

      let win = true;
      blanks.forEach(blank => {
        if (!blank.classList.contains('show')) win = false;
      });
      if (win) {
        document.getElementById('sound-Win').play();
        document.querySelector('.winner').style.display = 'flex';
        gameOver = true;
      }

    } else {
      document.getElementById('sound-Wrong').play();
      errors++;
      platform.classList.remove('open1', 'open2', 'open3', 'open4', 'open5');
      platform.classList.add(`open${errors}`);
      letter.classList.add('wrong');

      if (errors == 3) {
        document.getElementById('sound-WetCat').play();
        platform.classList.add('open');
        gameOver = true;
      }
    }
  });
});
