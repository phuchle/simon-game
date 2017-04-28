var togglePower = () => {
  var toggle = false;
  var countDisplay = document.getElementById('count');
  var startButton = document.getElementById('start-button');
  var strictButton = document.getElementById('strict-button');

  var powerStatus = document.getElementById('power-status');
  var startStatus = document.getElementById('start-status');
  var strictStatus = document.getElementById('strict-status');

  var toggleStartButton = startToggle(startStatus);
  var toggleStrictButton = strictToggle(strictStatus);

  return () => {
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

var powerDown = (countDisplay, powerStatus) => {
  count = 0;
  countDisplay.style.color = '#950000'
  countDisplay.innerText = '-';
  powerStatus.style.backgroundColor = '#333';
}

var powerUp = (countDisplay, powerStatus) => {
  countDisplay.style.color = 'red';

  powerStatus.style.backgroundColor = 'red';
}

var startToggle = (startStatus) => {
  var startSwitch = false;

  return () => {
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

var strictToggle = (strictStatus) => {
  var strictSwitch = false;

  return () => {
    if (strictSwitch) {
      strictStatus.style.backgroundColor = '#333';
      strictSwitch = false;
    } else {
      strictStatus.style.backgroundColor = 'red';
      strictSwitch = true;
    }
  }
}
