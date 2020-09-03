import displayController from './DisplayController';

const fs = require('fs');
const path = require('path');

//jest.dontMock(fs);
//jest.dontMock(path);

describe('DisplayController', () => {
  beforeEach(() => {
    const html = fs.readFileSync(path.join(__dirname, '../../dist/index.html'), 'utf-8');
    document.documentElement.innerHTML = html;
  });

  describe('updateGameInfo', () => {
    it('should render the current player on the page', () => {
      displayController.updateGameInfo('Test');
      expect(document.querySelector('.game-info .current-player').textContent).toEqual('Test');
    });

    it('should render an empty player name when the parameter is an empty string', () => {
      displayController.updateGameInfo('');
      expect(document.querySelector('.game-info .current-player').textContent).toEqual('');
    });

    it('should render an empty name when no parameters are passed', () => {
      displayController.updateGameInfo();
      expect(document.querySelector('.game-info .current-player').textContent).toEqual('');
    });
  });

  describe('renderBoard', () => {
    it('should display the board and remove the hidden class from it', () => {
      displayController.renderBoard('Test');
      expect(document.querySelector('.grid-container').classList).not.toContain('hidden');
    });
  });
});