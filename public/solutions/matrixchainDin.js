const Matrix = function(rows = 0, columns = 0) {
  let matrix = []
  matrix.rows = rows;   // rows
  matrix.columns = columns;   // columns

  for(var i = 0; i < rows; i++) {
    matrix[i] = [];
    for(var j = 0; j < columns; j++) {
      matrix[i][j] = -1;
    }
  }

  return matrix;
}

function matrixChain(p) {
  var memo = new Matrix(p.length, p.length)

  var count = function(i, j) {
    if(i === j) {
      memo[i][j] = 0;
      return 0;
    }

    // if value is saved - just return it
    if(memo[i][j] !== -1) {
      return memo[i][j];
    }

    // code below will only be excuted if value is not yet computed

    var min = Number.MAX_SAFE_INTEGER;

    for(var k = i; k < j; k++) {
      var result = count(i, k) + count(k+1, j) + p[i-1] * p[k] * p[j];
      if(result < min) {
        min = result;
      }
    }
    memo[i][j] = min;
    return min;
  }

  return count(1, p.length - 1);
}

console.log(matrixChain([4,10,3,12,20,7]))
// => 1344;
