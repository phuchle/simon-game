let pattern = [];
let userPattern = [];

function startGameplay() {
  // randomly picks a color and adds it the pattern
  // plays the pattern
  // waits for user input
  // when lengths are the same, compares patterns
  // if correct, loop back
  const colors = ['green', 'red', 'yellow', 'blue'];

  addColorButtonListeners();

}

function addColorButtonListeners() {
  addGreenListeners();
  addRedListeners();
  addYellowListeners();
  addBlueListeners();
}

function addGreenListeners() {
  let green = document.getElementById('green');
  let greenSound = new Audio('sounds/simonSound1.mp3');

  green.addEventListener('mousedown', () => {
    userPattern.push(green.id);
    green.style.backgroundColor = '#a7ffa7';
    greenSound.play();
  });
  green.addEventListener('mouseup', () => {
    green.style.backgroundColor = '#41ff41';
  });
}

function addRedListeners() {
  let red = document.getElementById('red');
  let redSound = new Audio('sounds/simonSound2.mp3');

  red.addEventListener('mousedown', () => {
    userPattern.push(red.id);
    red.style.backgroundColor = '#ff7676';
    redSound.play();
  });
  red.addEventListener('mouseup', () => {
    red.style.backgroundColor = 'red';
  });
}

 function addYellowListeners() {
  let yellow = document.getElementById('yellow');
  let yellowSound = new Audio('sounds/simonSound3.mp3');

  yellow.addEventListener('mousedown', () => {
    userPattern.push(yellow.id);
    yellow.style.backgroundColor = '#fff9c4';
    yellowSound.play();
  });
  yellow.addEventListener('mouseup', () => {
    yellow.style.backgroundColor = '#ffe400';
  });
}

function addBlueListeners() {
  let blue = document.getElementById('blue');
  let blueSound = new Audio('sounds/simonSound4.mp3');

  blue.addEventListener('mousedown', () => {
    userPattern.push(blue.id);
    blue.style.backgroundColor = '#88b5ff';
    blueSound.play();
  });
  blue.addEventListener('mouseup', () => {
    blue.style.backgroundColor = '#0079ff';
  });
}
