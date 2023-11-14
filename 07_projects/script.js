const insert = document.getElementById('insert');
const Paragraph = document.querySelector('#paragraph');
const messageElement = document.querySelector('#message');

// Rest of your code...

function generateRandomParagraph(
  words,
  minSentences,
  maxSentences,
  minWords,
  maxWords
) {
  const paragraphLength =
    Math.floor(Math.random() * (maxSentences - minSentences + 1)) +
    minSentences;
  const paragraph = [];

  for (let i = 0; i < paragraphLength; i++) {
    const sentenceLength =
      Math.floor(Math.random() * (maxWords - minWords + 1)) + minWords;
    const sentence = [];

    for (let j = 0; j < sentenceLength; j++) {
      const randomIndex = Math.floor(Math.random() * words.length);
      sentence.push(words[randomIndex]);
    }

    paragraph.push(sentence.join(' ') + '.');
  }

  return paragraph.join(' ');
}

// Example usage:
const words = [
  'Lorem',
  'ipsum',
  'dolor',
  'sit',
  'amet',
  'consectetur',
  'adipiscing',
  'elit',
  'sed',
  'do',
  'eiusmod',
  'tempor',
  'incididunt',
  'ut',
  'labore',
  'et',
  'dolore',
  'magna',
  'aliqua',
  'Ut',
  'enim',
  'ad',
  'minim',
  'veniam',
  'quis',
  'nostrud',
  'exercitation',
  'ullamco',
  'laboris',
  'nisi',
  'ut',
  'aliquip',
  'ex',
  'ea',
  'commodo',
];

const minSentences = 1;
const maxSentences = 1;
const minWords = 1;
const maxWords = 2;

let randomParagraph = generateRandomParagraph(
  words,
  minSentences,
  maxSentences,
  minWords,
  maxWords
);
// console.log('para', typeof randomParagraph);
Paragraph.innerHTML = randomParagraph;
Paragraph.style.font = 'bold 20px arial,serif';

let keys = '';
let preKey = '';
let playGame = true;

if (playGame) {
  window.addEventListener('keydown', (e) => {
    // console.log(playGame);
    // console.log('i m in of event');
    if (!playGame) {
      // If the game is over, do nothing with key input
      return;
    } else if (e.key === 'Backspace') {
      keys = keys.slice(0, -1);
    } else if (e.key === 'Shift') {
      // Do nothing with Shift key
    } else if (e.key === 'Enter') {
      // Do nothing with Shift key
    } else {
      keys += e.key;
      message();
    }

    insert.innerHTML = `
    <div class='color'>
    <table>
    <tr>
      <th>Key</th>
      <th>Keycode</th> 
      <th>Code</th>
    </tr>
    <tr>
      <td>${e.key === ' ' ? 'Space' : e.key}</td>
      <td>${e.keyCode}</td> 
      <td>${e.code}</td>
    </tr>
    
  </table>
    </div>
    <p id="hmm">typing ${keys}</p>
  `;

    // console.log(randomParagraph);
    // console.log(keys);
  });
}

// Rest of your code...
function message() {
  console.log('hi', randomParagraph)
  console.log('hi', keys)
  if (randomParagraph === keys) {
    // console.log('i m in')
    messageElement.innerHTML = `oy yeah, naugty naughty ho rahe ho. </br> <button id="startGame">Play Again</button>`;
    endGame();
  }
}

function endGame() {

  playGame = false;
  newGame();
}

function newGame() {
  const startGame=document.querySelector('#startGame');
  startGame.addEventListener('click', function (e){
     randomParagraph = generateRandomParagraph(
      words,
      minSentences,
      maxSentences,
      minWords,
      maxWords
    );
    console.log('para', typeof randomParagraph);
    Paragraph.innerHTML = randomParagraph;
    Paragraph.style.font = 'bold 20px arial,serif';[]
    document.querySelector('#hmm').innerHTML='';
    messageElement.innerHTML='';
    insert.innerHTML=`
    <div class="key">Practice by typing the above sentences and increase your typing accuracy.`;
    keys='';
    playGame=true;
  });
}
