function addGreenListeners() {
  let green = document.getElementById('green');

  green.addEventListener('click', () => {
    userPattern.push(green.id);
    click.green(green);
    window.clearTimeout(inputTimeout);
    checkUserPattern();
  });
}

function addRedListeners() {
  let red = document.getElementById('red');

  red.addEventListener('click', () => {
    userPattern.push(red.id);
    click.red(red);
    window.clearTimeout(inputTimeout);
    checkUserPattern();
  });
}

function addYellowListeners() {
  let yellow = document.getElementById('yellow');

  yellow.addEventListener('click', () => {
    userPattern.push(yellow.id);
    click.yellow(yellow);
    window.clearTimeout(inputTimeout);
    checkUserPattern();
  });
}

function addBlueListeners() {
  let blue = document.getElementById('blue');

  blue.addEventListener('click', () => {
    userPattern.push(blue.id);
    click.blue(blue);
    window.clearTimeout(inputTimeout);
    checkUserPattern();
  });
}
