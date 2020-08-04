const gameBoard = (() => {
  const board = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];

  const getElement = (index) => board[index];

  const setElement = (data, index) => {
    board[index] = data;
  };

  return {
    getElement,
    setElement,
    board,
  };
})();

const renderBoard = () => {
  gridElements = document.querySelectorAll('.grid-element');
  gridElements.forEach((element, index) => {
    element.innerText = gameBoard.getElement(index);
    element.onclick = function () {
      element.textContent = '#';
      gameBoard.setElement('#', element.attributes[0].nodeValue);
      console.log(gameBoard.getElement(element.attributes[0].nodeValue));
      element.onclick = null;
    };
  });
};

const Player = (name1, symbol1) => {
  const name = name1;
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
      alert(`Player ${players[currentPlayer].getName()} has won!`);
    }
    else if (gameBoard.board.every((cell) => cell === ' ' )) {
      alert('Draw game!');
    }
    else {
      currentPlayer = (currentPlayer === 0) ? 1 : 0;
      
    }
  }

  return {
    getPlayer,
    getCurrentPlayer,
  };
})();



function namesSubmit(e) {
  e.preventDefault();
  inputs = document.querySelectorAll('input');
  if((inputs[0].value != '') && (inputs[1].value != '')) {
    Game.getPlayer(0).setName(inputs[0].value);
    Game.getPlayer(1).setName(inputs[1].value);
    e.target.style = 'display: none;';
  }
  else {
    alert("Names can't be empty!")
  }
}

window.onload = () => {
  renderBoard();
  document.getElementById("players_form").addEventListener("submit", namesSubmit);
};

