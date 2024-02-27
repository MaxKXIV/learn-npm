// biggestLoser.js
function biggestLoser(matches) {
    const loserPointsTotal = {};
  
    matches.forEach(match => {
      const winner = match.winner;
      const loser = match.loser;
      const loserPoints = match.loser_points;
  
      loserPointsTotal[loser] = (loserPointsTotal[loser] || 0) + loserPoints;
      loserPointsTotal[winner] = (loserPointsTotal[winner] || 0) - loserPoints;
    });
  
    let maxLoser = null;
    let maxPoints = Number.NEGATIVE_INFINITY;
  
    for (const loser in loserPointsTotal) {
      if (loserPointsTotal[loser] > maxPoints) {
        maxPoints = loserPointsTotal[loser];
        maxLoser = loser;
      }
    }
  
    return maxLoser;
  }
  
  module.exports = biggestLoser;