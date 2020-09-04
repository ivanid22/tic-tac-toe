import displayController from './DisplayController';

const fs = require('fs');
const path = require('path');

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

  describe('displayModalMessage', () => {
    it('should display a modal message', () => {
      displayController.displayModalMessage('test title', 'test message');
      expect(document.querySelector('#messageModalLabel').innerText).toEqual('test title');
    });

    it('should not display a message when the params are empty', () => {
      displayController.displayModalMessage();
      expect(document.querySelector('#messageModalLabel').innerText).toBeFalsy();
    });
  });
});