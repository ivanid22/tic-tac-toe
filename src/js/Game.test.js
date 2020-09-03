import Game from './Game';

const fs = require('fs');
const path = require('path');

describe('Game', () => {
  beforeEach(() => {
    const html = fs.readFileSync(path.join(__dirname, '../../dist/index.html'), 'utf-8');
    document.documentElement.innerHTML = html;
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
    const currentPlayer = 0;
    

    it('should return the current player', () => {
      const player1 = Game.getCurrentPlayer();
      expect(player1.getName()).toEqual('Player1');
    });
  });
});
