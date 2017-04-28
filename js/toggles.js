function togglePower() {
  let toggle = false;
  let countDisplay = document.getElementById('count');
  let startButton = document.getElementById('start-button');
  let strictButton = document.getElementById('strict-button');

  let powerStatus = document.getElementById('power-status');
  let startStatus = document.getElementById('start-status');
  let strictStatus = document.getElementById('strict-status');

  let toggleStartButton = startToggle(startStatus);
  let toggleStrictButton = strictToggle(strictStatus);

  return function() {
    if (toggle) {
      // clear any caches
      if (startStatus.style.backgroundColor === 'red') {
        toggleStartButton(startStatus);
      }
      if (strictStatus.style.backgroundColor === 'red') {
        toggleStrictButton(strictStatus);
      }

      powerDown(countDisplay, powerStatus);

      startButton.removeEventListener('click', toggleStartButton);
      strictButton.removeEventListener('click', toggleStrictButton);

      toggle = false;
    } else {
      //
      powerUp(countDisplay, powerStatus);

      startButton.addEventListener('click', toggleStartButton);
      strictButton.addEventListener('click', toggleStrictButton);

      toggle = true;
    }
  };
}

function powerDown(countDisplay, powerStatus) {
  count = 0;
  countDisplay.style.color = '#950000'
  countDisplay.innerText = '-';
  powerStatus.style.backgroundColor = '#333';
}

function powerUp(countDisplay, powerStatus) {
  countDisplay.style.color = 'red';

  powerStatus.style.backgroundColor = 'red';
}

function startToggle(startStatus) {
  let startSwitch = false;

  return function() {
    if (startSwitch) {
      startStatus.style.backgroundColor = '#333';
      startSwitch = false;
    } else {
      startStatus.style.backgroundColor = 'red';
      startGameplay();
      startSwitch = true;
    }
  }
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
