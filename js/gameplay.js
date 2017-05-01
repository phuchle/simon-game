let pattern = [];
let userPattern = [];
let waitForUserInput;

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

function addGameButtonLights() {
  colors.forEach(color => {
    let docBody = document.body;
    let targetButton = document.getElementById(color);

    if (docBody.classList) { // modern browser
      targetButton.classList.add('clickable');
    } else { // IE8 support
      targetButton.className += 'clickable';
    }
  });
}

function removeGameButtonLights() {
  colors.forEach(color => {
    let targetButton = document.getElementById(color);

    targetButton.className = '';
  });
}

function addGreenListeners() {
  let green = document.getElementById('green');

  green.addEventListener('click', () => {
    userPattern.push(green.id);
    click.green(green);
    checkUserPattern();
  });
}

function addRedListeners() {
  let red = document.getElementById('red');

  red.addEventListener('click', () => {
    userPattern.push(red.id);
    click.red(red);
    checkUserPattern();
  });
}

function addYellowListeners() {
  let yellow = document.getElementById('yellow');

  yellow.addEventListener('click', () => {
    userPattern.push(yellow.id);
    click.yellow(yellow);
    checkUserPattern();
  });
}

function addBlueListeners() {
  let blue = document.getElementById('blue');

  blue.addEventListener('click', () => {
    userPattern.push(blue.id);
    click.blue(blue);
    checkUserPattern();
  });
}

function checkUserPattern() {
  if (userPattern.length !== pattern.length) {
    waitForUserInput = window.setTimeout( () => {
      debugger;
      sounds.wrongAnswer.play()
      window.clearInterval(waitForUserInput);
      setPlayThroughInterval();
      checkUserPattern();
    }, 2000);
  } else {
    window.clearInterval(waitForUserInput);
    if (isCurrentUserPatternCorrect()) {
      makePattern();
      setPlayThroughInterval();
      checkUserPattern();
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
  console.log(verdict);
  return verdict;
}
