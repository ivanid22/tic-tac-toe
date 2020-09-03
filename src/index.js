import displayController from './js/DisplayController';
import Game from './js/Game';
import './style.css';

function restart() {
  Game.resetGame();
  displayController.renderBoard(Game.getCurrentPlayer().getName());
}

function namesSubmit(e) {
  e.preventDefault();
  const inputs = document.querySelectorAll('input');
  if ((inputs[0].value !== '') && (inputs[1].value !== '')) {
    Game.getPlayer(0).setName(inputs[0].value);
    Game.getPlayer(1).setName(inputs[1].value);
    e.target.style = 'display: none;';
    restart();
  } else {
    displayController.displayModalMessage('Error', "Names can't be empty", false);
  }
}

window.onload = () => {
  document.getElementById('players_form').addEventListener('submit', namesSubmit);
  document.querySelector('.restart').addEventListener('click', restart);
  document.querySelector('#closeModalButton').onclick = () => {
    restart();
  };
};