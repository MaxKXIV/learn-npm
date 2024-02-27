// participants.js
function participants(matches) {
    const playerSet = new Set();
  
    matches.forEach(match => {
      playerSet.add(match.winner);
      playerSet.add(match.loser);
    });
  
    return Array.from(playerSet);
  }
  
  module.exports = participants;