var count = 1;

var addPowerListener = () => {
  var powerButton = document.getElementById('power-button');
  var togglePowerButton = togglePower();
  powerButton.addEventListener('click', togglePowerButton);
}

document.addEventListener('DOMContentLoaded', addPowerListener);
