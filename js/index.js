function addPowerListener() {
  let powerButton = document.getElementById('power-button');
  let togglePowerButton = togglePower();
  powerButton.addEventListener('click', togglePowerButton);
}

document.addEventListener('DOMContentLoaded', addPowerListener);
