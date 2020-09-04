import gameBoard from './GameBoard';
import Player from './Player';
import displayController from './DisplayController';

const Game = (() => {
  const players = [];
  players.push(Player('', 'X'));
  players.push(Player('', 'O'));
  let currentPlayer = 0;

  const getPlayer = (index) => players[index];
  const getCurrentPlayer = () => players[currentPlayer];
  const resetGame = () => {
    gameBoard.resetBoard();
    currentPlayer = 0;
    const gridElements = document.querySelectorAll('.grid-element');
    gridElements.forEach((element, index) => {
      element.innerText = gameBoard.getElement(index);
      element.onclick = () => {
        element.textContent = Game.getCurrentPlayer().getSymbol();
        gameBoard.setElement(
          Game.getCurrentPlayer().getSymbol(),
          element.attributes[0].nodeValue,
        );
        element.onclick = null;
        Game.updateGameState();
      };
    });
  };

  function verify(board) {
    const winnerPositions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    let over = false;

    winnerPositions.forEach((test) => {
      if (board[test[0]] === board[test[1]]
        && board[test[0]] === board[test[2]]
        && board[test[0]] !== ' '
      ) over = true;
    });
    return over;
  }

  const updateGameState = () => {
    let endState = 'none';
    if (verify(gameBoard.board)) {
      displayController.displayModalMessage(
        'Game over',
        `Player ${players[currentPlayer].getName()} has won!`,
        true,
      );
      endState = 'win';
    } else if (gameBoard.board.every((cell) => cell !== ' ')) {
      displayController.displayModalMessage('Game over', 'Draw game!', true);
      endState = 'draw';
    } else {
      currentPlayer = currentPlayer === 0 ? 1 : 0;
    }
    displayController.updateGameInfo(players[currentPlayer].getName());
    return endState;
  };

  return {
    getPlayer,
    getCurrentPlayer,
    updateGameState,
    resetGame,
    gameBoard,
  };
})();

export default Game;
