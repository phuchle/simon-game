var startGameplay = () => {
  // randomly picks a beginning sequence
  addColorButtonListeners();
}

var addColorButtonListeners = () => {
  addGreenListeners();
  addRedListeners();
  addYellowListeners();
  addBlueListeners();
}

var addGreenListeners = () => {
  var green = document.getElementById('green');
  var greenSound = new Audio('sounds/simonSound1.mp3');

  green.addEventListener('mousedown', () => {
    green.style.backgroundColor = '#a7ffa7';
    greenSound.play();
  });
  green.addEventListener('mouseup', () => {
    green.style.backgroundColor = '#41ff41';
  });
}

var addRedListeners = () => {
  var red = document.getElementById('red');
  var redSound = new Audio('sounds/simonSound2.mp3');

  red.addEventListener('mousedown', () => {
    red.style.backgroundColor = '#ff7676';
    redSound.play();
  });
  red.addEventListener('mouseup', () => {
    red.style.backgroundColor = 'red';
  });
}

var addYellowListeners = () => {
  var yellow = document.getElementById('yellow');
  var yellowSound = new Audio('sounds/simonSound3.mp3');

  yellow.addEventListener('mousedown', () => {
    yellow.style.backgroundColor = '#fff9c4';
    yellowSound.play();
  });
  yellow.addEventListener('mouseup', () => {
    yellow.style.backgroundColor = '#ffe400';
  });
}

var addBlueListeners = () => {
  var blue = document.getElementById('blue');
  var blueSound = new Audio('sounds/simonSound4.mp3');

  blue.addEventListener('mousedown', () => {
    blue.style.backgroundColor = '#88b5ff';
    blueSound.play();
  });
  blue.addEventListener('mouseup', () => {
    blue.style.backgroundColor = '#0062ff';
  });
}
