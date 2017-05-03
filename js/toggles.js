// count that is displayed on simon board
let count = 1;

function togglePower() {
  let toggle = false;
  let countDisplay = document.getElementById('count');
  let startButton = document.getElementById('start-button');
  let strictButton = document.getElementById('strict-button');

  let powerStatus = document.getElementById('power-status');
  let startStatus = document.getElementById('start-status');
  let strictStatus = document.getElementById('strict-status');

  let toggleStrictButton = strictToggle(strictStatus);

  return function() {
    if (toggle) {
      if (strictStatus.style.backgroundColor === 'red') {
        toggleStrictButton(strictStatus);
      }

      powerDown(countDisplay, powerStatus, startStatus);

      startButton.removeEventListener('click', startToggle);
      strictButton.removeEventListener('click', toggleStrictButton);

      toggle = false;
    } else {
      //
      powerUp(countDisplay, powerStatus);

      startButton.addEventListener('click', startToggle);
      startButton.status = startStatus;
      strictButton.addEventListener('click', toggleStrictButton);

      toggle = true;
    }
  };
}

function powerDown(countDisplay, powerStatus, startSTatus) {
  count = 1;
  countDisplay.style.color = '#950000'
  countDisplay.innerText = '-';
  powerStatus.style.backgroundColor = '#333';
  startStatus.style.backgroundColor = '#333';
}

function powerUp(countDisplay, powerStatus) {
  countDisplay.style.color = 'red';

  powerStatus.style.backgroundColor = 'red';
}

function startToggle(evt) {
  evt.target.status.style.backgroundColor = 'red';
  count = 1;
  pattern = [];
  userPattern = [];
  
  if (patternInterval){
    window.clearInterval(patternInterval);
    patternInterval = 0;
  }
  updateCountDisplay();
  startGameplay();
}

function strictToggle(strictStatus) {
  let strictSwitch = false;

  return function() {
    if (strictSwitch) {
      strictStatus.style.backgroundColor = '#333';
      strictSwitch = false;
    } else {
      strictStatus.style.backgroundColor = 'red';
      strictSwitch = true;
    }
  }
}

function updateCountDisplay() {
  let countDisplay = document.getElementById('count');

  countDisplay.innerText = count;
}
