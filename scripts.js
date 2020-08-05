const $ = window.jQuery;

const gameBoard = (() => {
  const board = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];

  const getElement = (index) => board[index];

  const setElement = (data, index) => {
    board[index] = data;
  };

  const resetBoard = () => {
    board.forEach((element, index) => {
      setElement(' ', index);
    });
  };

  return {
    getElement,
    setElement,
    resetBoard,
    board,
  };
})();

const Player = (name1, symbol1) => {
  let name = name1;
  const symbol = symbol1;
  const getName = () => name;
  const getSymbol = () => symbol;
  const setName = (playerName) => { name = playerName; };
  return {
    getName,
    getSymbol,
    setName,
  };
};

const displayController = (() => {
  const updateGameInfo = (name) => {
    const gameInfo = document.querySelector('.game-info');
    gameInfo.classList = 'game-info';
    document.querySelector('.game-info .current-player').textContent = name;
  };

  const renderBoard = (name) => {
    const gridContainer = document.querySelector('.grid-container');
    gridContainer.classList = 'grid-container';
    updateGameInfo(name);
  };

  const displayModalMessage = (title, message) => {
    document.querySelector('#messageModalLabel').innerText = title;
    document.querySelector('#modalBodyMessage').innerText = message;
    $('#messageModal').modal();
  };

  return {
    displayModalMessage,
    renderBoard,
    updateGameInfo,
  };
})();

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
        gameBoard.setElement(Game.getCurrentPlayer().getSymbol(), element.attributes[0].nodeValue);
        element.onclick = null;
        Game.updateGameState();
      };
    });
  };

  function verify(board) {
    const winnerPositions = [[0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
    let over = false;

    winnerPositions.forEach(test => {
      if (board[test[0]] === board[test[1]]
        && board[test[0]] === board[test[2]]
        && board[test[0]] !== ' ') over = true;
    });
    return over;
  }

  const updateGameState = () => {
    if (verify(gameBoard.board)) {
      displayController.displayModalMessage('Game over', `Player ${players[currentPlayer].getName()} has won!`, true);
    } else if (gameBoard.board.every((cell) => cell !== ' ')) {
      displayController.displayModalMessage('Game over', 'Draw game!', true);
    } else {
      currentPlayer = (currentPlayer === 0) ? 1 : 0;
    }
    displayController.updateGameInfo(players[currentPlayer].getName());
  };

  return {
    getPlayer,
    getCurrentPlayer,
    updateGameState,
    resetGame,
  };
})();

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