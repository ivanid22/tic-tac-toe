import Player from './Player';

const player1 = Player('Player1', 'X');

describe('Player', () => {
  describe('getName', () => {
    it('should return the name of the player', () => {
      expect(player1.getName()).toEqual('Player1');
    });
  });

  describe('getSymbol', () => {
    it('should return the symbol of the player', () => {
      expect(player1.getSymbol()).toEqual('X');
    });
  });

  describe('setName', () => {
    it('should change the name of the player', () => {
      player1.setName('Player2');
      expect(player1.getName()).toEqual('Player2');
    });
  });
});
