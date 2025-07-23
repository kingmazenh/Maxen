let roles = [
  '🐺 ذئب',
  '🧙‍♂️ العراف',
  '🛡️ الحارس',
  '❤️ المحب',
  '👨‍🌾 قروي',
  '👨‍🌾 قروي',
  '👨‍🌾 قروي'
];

let assignedRoles = [];
let currentIndex = 0;

function startGame() {
  const count = parseInt(document.getElementById('playerCount').value);
  if (count < 3) return alert('الحد الأدنى 3 لاعبين');

  assignedRoles = shuffleRoles(count);
  currentIndex = 0;
  document.getElementById('setup').style.display = 'none';
  document.getElementById('game').style.display = 'block';
  updatePlayerNumber();
}

function shuffleRoles(count) {
  let selected = roles.slice(0, count);
  while (selected.length < count) selected.push('👨‍🌾 قروي');
  return selected.sort(() => Math.random() - 0.5);
}

function showRole() {
  document.getElementById('roleDisplay').textContent = assignedRoles[currentIndex];
  document.getElementById('nextBtn').style.display = 'inline-block';
}

function nextPlayer() {
  currentIndex++;
  if (currentIndex >= assignedRoles.length) {
    document.getElementById('game').style.display = 'none';
    document.getElementById('end').style.display = 'block';
  } else {
    document.getElementById('roleDisplay').textContent = '';
    document.getElementById('nextBtn').style.display = 'none';
    updatePlayerNumber();
  }
}

function updatePlayerNumber() {
  document.getElementById('currentPlayer').textContent = currentIndex + 1;
}

function restart() {
  document.getElementById('setup').style.display = 'block';
  document.getElementById('game').style.display = 'none';
  document.getElementById('end').style.display = 'none';
}
