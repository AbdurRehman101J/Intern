console.time();
function Square(M) {
const matrix = [ [[8, 1, 6],[3, 5, 7],[4, 9, 2],],[[6, 1, 8],[7, 5, 3],[2, 9, 4],],
[[4, 9, 2],[3, 5, 7],[8, 1, 6],], [[2, 9, 4],[7, 5, 3],[6, 1, 8],],
[[8, 3, 4],[1, 5, 9],[6, 7, 2],], [[4, 3, 8],[9, 5, 1],[2, 7, 6],],
[[6, 7, 2],[1, 5, 9],[8, 3, 4],], [[2, 7, 6],[9, 5, 1],[4, 3, 8],],];
 let minCost = Number.MAX_SAFE_INTEGER;
for (let i = 0; i < matrix.length; i++) {
   let cost=0;
    for (let j = 0; j < 3; j++) {
      for (let k = 0; k < 3; k++) {
        cost += Math.abs(matrix[i][j][k] - M[j][k]);
      }
    }
    minCost = Math.min(minCost, cost);
  }
  return minCost;
}
const M = [[5, 3, 4],[1, 5, 8],[6, 4, 2],];
console.log(Square(M)); 
console.timeEnd();
  

