const displayController = (() => {
  const updateGameInfo = (name) => {
    const gameInfo = document.querySelector('.game-info');
    gameInfo.classList.remove('hidden');
    document.querySelector('.game-info .current-player').textContent = name;
  };

  const renderBoard = (name) => {
    const gridContainer = document.querySelector('.grid-container');
    gridContainer.classList.remove('hidden');
    updateGameInfo(name);
  };

  const displayModalMessage = (title, message) => {
    document.querySelector('#messageModalLabel').innerText = title;
    document.querySelector('#modalBodyMessage').innerText = message;
    // eslint-disable-next-line no-undef
    $('#messageModal').modal();
  };

  return {
    displayModalMessage,
    renderBoard,
    updateGameInfo,
  };
})();

export default displayController;
