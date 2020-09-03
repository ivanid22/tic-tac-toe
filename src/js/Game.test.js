import Game from './Game';

const fs = require('fs');
const path = require('path');

const timer = () => {
  setTimeout(() => {
    
  }, 100);
}

describe('Game', () => {
  beforeEach(() => {
    const html = fs.readFileSync(path.join(__dirname, '../../dist/index.html'), 'utf-8');
    document.documentElement.innerHTML = html;
    Game.resetGame();
    Game.getPlayer(0).setName('Player1');
    Game.getPlayer(1).setName('Player2');
  });

  describe('getPlayer', () => {
    it('should return the player object', () => {
      const player1 = Game.getPlayer(0);
      expect(player1.getName()).toEqual('Player1');
    });

    it('should return an error if not found', () => {
      expect(() => {
        Game.getPlayer(2).getName();
      }).toThrow();
    });
  });

  describe('getCurrentPlayer', () => {
    it('should return the current player', () => {
      const player1 = Game.getCurrentPlayer();
      expect(player1.getName()).toEqual('Player1');
    });
  });

  describe('updateGameState', () => {
    it('should detect a game ending move when there is a winning move', () => {
      Game.gameBoard.board = ['X', 'X', 'X', ' ', ' ', ' ', ' ', ' ', ' '];
      expect(Game.updateGameState()).toEqual('win');
    });

    it('should detect a game ending move when there is a game draw', () => {
      Game.gameBoard.board = ['X', 'O', 'O', 'O', 'X', 'X', 'X', 'O', 'O'];
      expect(Game.updateGameState()).toEqual('draw');
    });

    it('should detect if there is not an end state on the game board', () => {
      Game.gameBoard.board = ['X', 'O', 'O', 'O', 'X', 'X', 'X', 'O', ' '];
      expect(Game.updateGameState()).toEqual('none');
    });
  });

  describe('resetGame', () => {
    it('should reset the current player to the first player', () => {
      Game.resetGame();
      expect(Game.getCurrentPlayer().getName()).toEqual('Player1');
    });

    /*it('should reset the game board', () => {
      const emptyBoard = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];
      Game.resetGame();
      expect(Game.gameBoard.board).toEqual(emptyBoard);
    });*/
  });
});
