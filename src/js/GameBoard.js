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

export default gameBoard;
