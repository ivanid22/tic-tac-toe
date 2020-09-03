const Player = (name1, symbol1) => {
  let name = name1;
  const symbol = symbol1;
  const getName = () => name;
  const getSymbol = () => symbol;
  const setName = (playerName) => {
    name = playerName;
  };
  return {
    getName,
    getSymbol,
    setName,
  };
};

export default Player;
