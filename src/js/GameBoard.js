const gameBoard = (() => {
  const emptyBoard = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];
  let board = emptyBoard;

  const getElement = (index) => board[index];

  const setElement = (data, index) => {
    board[index] = data;
  };

  const resetBoard = () => {
    /*board.forEach((element, index) => {
      setElement(' ', index);
    });*/
    board = emptyBoard.map((element) => element);
  };

  return {
    getElement,
    setElement,
    resetBoard,
    board,
  };
})();

export default gameBoard;
