let pattern = [];
let userPattern = [];
// let inputTimeout;
let patternInterval;
let strict = false;

const colors = ['green', 'red', 'yellow', 'blue'];
const sounds = {
  green: new Audio('sounds/simonSound1.mp3'),
  red: new Audio('sounds/simonSound2.mp3'),
  yellow: new Audio('sounds/simonSound3.mp3'),
  blue: new Audio('sounds/simonSound4.mp3'),
  wrongAnswer: new Audio('sounds/wrongAnswer.mp3')
};

const divs = {
  green: function() {
    return document.getElementById('green');
  },
  red: function() {
    return document.getElementById('red');
  },
  yellow: function() {
    return document.getElementById('yellow');
  },
  blue: function() {
    return document.getElementById('blue');
  }
}

const click = {
  green: function () {
    divs.green().style.backgroundColor = '#a7ffa7';
    sounds.green.play();
    setTimeout( ()=> {
      divs.green().style.backgroundColor = '#41ff41';
    }, 500);
  },
  red: function () {
    sounds.red.play();
    divs.red().style.backgroundColor = '#ff7676';
    setTimeout( ()=> {
      divs.red().style.backgroundColor = 'red';
    }, 500);
  },
  yellow: function () {
    divs.yellow().style.backgroundColor = '#fff9c4';
    sounds.yellow.play();
    setTimeout( ()=> {
      divs.yellow().style.backgroundColor = '#ffe400';
    }, 500);
  },
  blue: function () {
    divs.blue().style.backgroundColor = '#88b5ff';
    sounds.blue.play();
    setTimeout( ()=> {
      divs.blue().style.backgroundColor = '#0079ff';
    }, 500);
  }
};

function startGameplay() {
  makePattern();
  setPlayThroughInterval();
}

function makePattern() {
  let nextColor = colors[Math.floor(Math.random() * colors.length)];
  pattern.push(nextColor);
}

function setPlayThroughInterval() {
  // deactivateGameButtons();
  // for some reason deactivateGameButtons doesn't work
  let i = 0;
  patternInterval = window.setInterval(() => {
    click[pattern[i]]();
    i++

    if (i === pattern.length) {
      window.clearInterval(patternInterval);
    }
  }, 1000);
  // activateGameButtons();
}

function activateGameButtons() {
  let colorDivs = [divs.green(), divs.red(), divs.yellow(), divs.blue()];

  colorDivs.forEach(div => {
    div.addEventListener('click', gameButtonClick);
  });
}

function deactivateGameButtons() {
  let colorDivs = [divs.green(), divs.red(), divs.yellow(), divs.blue()];

  colorDivs.forEach(div => {
    div.removeEventListener('click', gameButtonClick);
  });
}

function gameButtonClick(e) {
  userPattern.push(e.target.id);
  click[e.target.id](e.target);
  // window.clearTimeout(inputTimeout);
  checkUserPattern();
}

function checkUserPattern() {
  if (userPattern.length === pattern.length) {
    if (isCurrentUserPatternCorrect()) {
      pattern.length === 20 ? handleWinCondition() : handleCorrectAnswer();
    } else {
      handleWrongAnswer();
    }
  } else {
    if (!isCurrentUserPatternCorrect()) {
      handleWrongAnswer();
    }
  }
}

function isCurrentUserPatternCorrect() {
  let verdict = true;

  for (let i = 0; i < userPattern.length; i++) {
    if (userPattern[i] !== pattern[i]) {
      verdict = false;
    }
  }

  return verdict;
}

function handleCorrectAnswer() {
  userPattern = [];
  makePattern();
  count++;
  updateCountDisplay();
  setPlayThroughInterval();
}

function handleWrongAnswer() {
  sounds.wrongAnswer.play();
  userPattern = [];

  if (strict) {
    pattern = [];
    makePattern();
  }

  setPlayThroughInterval();
}

function handleWinCondition() {
  updateCountDisplay('WIN');
  flashWin();
}

function flashWin() {
  let countDisplay = document.getElementById('count');
  let docBody = document.body;

  if (docBody.classList) { // modern browser
    countDisplay.classList.add('blink');
  } else { // IE8 support
    countDisplay.className += 'blink';
  }
  window.setTimeout(() => {
    if (docBody.classList) {
      countDisplay.classList.remove('blink');
    } else {
      countDisplay.className = '';
    }
    restartGame();
  }, 5000);
}

function restartGame() {
  count = 1;
  pattern = [];
  userPattern = [];

  if (patternInterval){
    window.clearInterval(patternInterval);
    patternInterval = 0;
  }
  updateCountDisplay();
  activateGameButtons();
  startGameplay();
}

// if the user fails to click within a certain period of time, the game will end
// function waitForUserInput() {
//   if (userPattern.length !== pattern.length) {
//     inputTimeout = window.setTimeout( () => {
//       debugger;
//       sounds.wrongAnswer.play()
//       window.clearTimeout(inputTimeout);
//     }, 5000);
//   }
// }
