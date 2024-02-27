// findNaNIndex.js
function findNaNIndex(arr) {
    const nanIndexes = [];
    
    for (let i = 0; i < arr.length; i++) {
      if (isNaN(arr[i])) {
        nanIndexes.push(i);
      }
    }
  
    return nanIndexes;
  }
  
  module.exports = findNaNIndex;