let pattern = [];
let userPattern = [];
let inputTimeout;

const colors = ['green', 'red', 'yellow', 'blue'];
const sounds = {
  green: new Audio('sounds/simonSound1.mp3'),
  red: new Audio('sounds/simonSound2.mp3'),
  yellow: new Audio('sounds/simonSound3.mp3'),
  blue: new Audio('sounds/simonSound4.mp3'),
  wrongAnswer: new Audio('sounds/wrongAnswer.mp3')
};

const click = {
  green: function (target) {
    target.style.backgroundColor = '#a7ffa7';
    sounds.green.play();
    setTimeout( ()=> {
      target.style.backgroundColor = '#41ff41';
    }, 500);
  },
  red: function (target) {
    sounds.red.play();
    target.style.backgroundColor = '#ff7676';
    setTimeout( ()=> {
      target.style.backgroundColor = 'red';
    }, 500);
  },
  yellow: function (target) {
    target.style.backgroundColor = '#fff9c4';
    sounds.yellow.play();
    setTimeout( ()=> {
      target.style.backgroundColor = '#ffe400';
    }, 500);
  },
  blue: function (target) {
    target.style.backgroundColor = '#88b5ff';
    sounds.blue.play();
    setTimeout( ()=> {
      target.style.backgroundColor = '#0079ff';
    }, 500);
  }
};

function startGameplay() {
  // randomly picks a color and adds it the pattern
  // plays the pattern
  // waits for user input
  // when lengths are the same, compares patterns
  // if correct, loop back
  activateGameButtons();
  makePattern();
}

function makePattern() {
  let nextColor = colors[Math.floor(Math.random() * colors.length)];
  pattern.push(nextColor);
  setPlayThroughInterval();
}

function setPlayThroughInterval() {
  let playThroughCount = 0;

  let playThrough = window.setInterval( () => {
    let targetColor = pattern[playThroughCount];
    var targetButton = document.getElementById(targetColor);
    click[targetColor](targetButton);

    playThroughCount++;

    if (playThroughCount === pattern.length) {
      window.clearInterval(playThrough);
    }
  }, 1000);
}

function activateGameButtons() {
  addGameButtonLights();
  addGreenListeners();
  addRedListeners();
  addYellowListeners();
  addBlueListeners();
}

function checkUserPattern() {
  // if (userPattern.length === pattern.length) {
  //   window.clearTimeout(inputTimeout);

    if (isCurrentUserPatternCorrect()) {
      userPattern = [];
      makePattern();
      updateCountDisplay(count++);
      setPlayThroughInterval();
    } else {
      sounds.wrongAnswer.play();
      setPlayThroughInterval();
    }
}
// }

function isCurrentUserPatternCorrect() {
  let verdict = true;

  for (let i = 0; i < userPattern.length; i++) {
    if (userPattern[i] !== pattern[i]) {
      verdict = false;
    }
  }

  return verdict;
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
