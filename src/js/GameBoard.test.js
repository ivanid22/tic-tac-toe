import gameBoard from './GameBoard';

describe('gameBoard', () => {
  describe('getElement', () => {
    it('should return the value saved on a selected position', () => {
      gameBoard.board[0] = 'X';
      expect(gameBoard.getElement(0)).toEqual('X');
    });

    it('should return undefined if the index is out of bound', () => {
      expect(gameBoard.getElement(10)).toBeUndefined();
    });
  });

  describe('setElement', () => {
    it('should save the value on selected position', () => {
      gameBoard.setElement('O', 1);
      expect(gameBoard.board[1]).toEqual('O');
    });

    it('should save the value on selected position', () => {
      expect(() => {
        gameBoard.setElement('O', 10);
      }).toThrow();
    });
  });

  describe('resetBoard', () => {
    it('should erase all elements on the board', () => {
      const emptyBoard = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];
      gameBoard.board[0] = 'X';
      gameBoard.board[6] = 'O';
      gameBoard.resetBoard();
      expect(gameBoard.board).toEqual(emptyBoard);
    });
  });
});
