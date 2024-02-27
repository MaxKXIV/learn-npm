// winnersObject.js
function winnersObject(matches) {
    const winners = {};
  
    matches.forEach(match => {
      const winner = match.winner;
      const loser = match.loser;
  
      if (!winners[winner]) {
        winners[winner] = [];
      }
  
      if (!winners[loser]) {
        winners[loser] = [];
      }
  
      winners[winner].push(loser);
    });
  
    return winners;
  }
  
  module.exports = winnersObject;