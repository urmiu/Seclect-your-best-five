function playerName(selectedName) {
    let player = document.getElementById(selectedName);
    let playerInnerTextName = player.innerText;
    return playerInnerTextName;
  }
  
  function getInputValue(inputValuePrice) {
    let inputedPrice = document.getElementById(inputValuePrice);
    let inputeValue = parseInt(inputedPrice.value);
  
    return inputeValue;
}
 players("player-1", "player-1-name");
players("player-2", "player-2-name");
players("player-3", "player-3-name");
players("player-4", "player-4-name");
players("player-5", "player-5-name");
players("player-6", "player-6-name");
players("player-7", "player-7-name");
players("player-8", "player-8-name");
players("player-9", "player-9-name"); 