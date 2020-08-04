const gameBoard = ( () => {

  const board = ['X', 'O', 'X', 'X', 'O', 'X', 'X', 'O', 'X'];
  
  const getElement = (index) => board[index]

  const setElement = (data, index) => {
    board[index] = data
  }

  return {
    getElement,
    setElement
  }

})()

const renderBoard = () => {
  gridElements = document.querySelectorAll('.grid-element');
  gridElements.forEach((element, index) => {
    element.innerText = gameBoard.getElement(index);
  });
}

window.onload = renderBoard;
