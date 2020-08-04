const gameBoard = ( () => {

  const board = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];
  
  const getElement = (index) => board[index]

  const setElement = (data, index) => {
    board[index] = data
  }

  return {
    getElement,
    setElement,
    board
  }

})()

const renderBoard = () => {
  gridElements = document.querySelectorAll('.grid-element');
  gridElements.forEach((element, index) => {
    element.innerText = gameBoard.getElement(index);
    element.onclick = function() {
      element.textContent = "#";
      gameBoard.setElement('#', element.attributes[0].nodeValue);
      console.log(gameBoard.getElement(element.attributes[0].nodeValue))
      element.onclick = null;

    } 
  });
}

const Player = (name1, symbol1) => {
  const name = name1;
  const symbol = symbol1;
  const getName = () => name;
  const getSymbol = () => symbol;
  return {
    getName,
    getSymbol
  }
}

const player1 = Player('P1', 'X')
const player2 = Player('P2', 'O')

const game = ( (player1, player2) => {
  
  
})

function verify(board){
  
  const winnerPositions = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]]
  for (test of winnerPositions){
    if (board[test[0]] === board[test[1]] && 
        board[test[0]] === board[test[2]] && 
        board[test[0]] != ' ') return true;
  }
  return false;
}

window.onload = renderBoard;
