const gameBoard = (() => {
  let board = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];

  const getElement = (index) => board[index];

  const setElement = (data, index) => {
    board[index] = data;
  };

  const resetBoard = () => {
    board.forEach( (element, index ) => {
      setElement(' ', index);
    });
  }

  return {
    getElement,
    setElement,
    resetBoard,
    board,
  };
})();

const renderBoard = () => {
  gridElements = document.querySelectorAll('.grid-element');
  gridContainer = document.querySelector('.grid-container');
  gridContainer.classList = "grid-container";
  gridElements.forEach((element, index) => {
    element.innerText = gameBoard.getElement(index);
    element.onclick = function () {
      element.textContent = Game.getCurrentPlayer().getSymbol(); 
      gameBoard.setElement(Game.getCurrentPlayer().getSymbol(), element.attributes[0].nodeValue);
      element.onclick = null;
      Game.updateGameState();
    };
  });
};

const Player = (name1, symbol1) => {
  let name = name1;
  const symbol = symbol1;
  const getName = () => name;
  const getSymbol = () => symbol;
  const setName = (playerName) => { name = playerName }
  return {
    getName,
    getSymbol,
    setName
  };
};

const Game = (() => {
  const players = [];
  players.push(Player('', 'X'));
  players.push(Player('', 'O'));
  let currentPlayer = 0;

  const getPlayer = (index) => players[index];
  const getCurrentPlayer = () => players[currentPlayer];

  function verify(board) {
    const winnerPositions = [[0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
  
    for (test of winnerPositions) {
      if (board[test[0]] === board[test[1]]
          && board[test[0]] === board[test[2]]
          && board[test[0]] != ' ') return true;
    }
    return false;
  }

  const updateGameState = () => {
    if(verify(gameBoard.board)) {
     console.log(`Player ${players[currentPlayer].getName()} has won!`);
     gameBoard.resetBoard();
     renderBoard();
    }
    else if (gameBoard.board.every((cell) => cell != ' ' )) {
     console.log('Draw game!');
     gameBoard.resetBoard();
     renderBoard();
    }
    else {
      currentPlayer = (currentPlayer === 0) ? 1 : 0;
    }
  }

  return {
    getPlayer,
    getCurrentPlayer,
    updateGameState
  };
})();



function namesSubmit(e) {
  e.preventDefault();
  inputs = document.querySelectorAll('input');
  if((inputs[0].value != '') && (inputs[1].value != '')) {
    Game.getPlayer(0).setName(inputs[0].value);
    Game.getPlayer(1).setName(inputs[1].value);
    e.target.style = 'display: none;';
    renderBoard();
  }
  else {
    alert("Names can't be empty!")
  }
}

window.onload = () => {
  
  document.getElementById("players_form").addEventListener("submit", namesSubmit);
};

