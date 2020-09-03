const gameBoard = (() => {
  const board = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];

  const getElement = (index) => board[index];

  const setElement = (data, index) => {
    if (index >= 0 && index < board.length) board[index] = data;
    else throw new Error('Index out of bounds');
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
