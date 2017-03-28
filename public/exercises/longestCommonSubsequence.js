// import matrix from './public/helpers';
const Matrix = function(rows = 0, columns = 0) {
  let matrix = [];
  for(var i = 0; i < rows; i++) {
    matrix[i] = [];
    for(var j = 0; j < columns; j++) {
      matrix[i][j] = 0;
    }
  }
  return matrix;
}

function longestCommonSubsequence(s1, s2) {
  var l1 = s1.length;
  var l2 = s2.length;

  var matrix = new Matrix(l1 + 1, l2 + 1);

  for(var i = 1; i <= l1; i++) {
    for(var j = 1; j <= l2; j++) {
      // if a common char is found increase the best prev distance by 1 (move up diagonally)
      if(s1[i-1] === s2[j-1]) {
        matrix[i][j] = 1 + matrix[i-1][j-1];

      // if not, just get the best previous distance
      } else {
        matrix[i][j] = Math.max(matrix[i-1][j], matrix[i][j-1]);
      }

    }
  }

  // found the maximum distance
  var max = matrix[l1][l2];

  // find the subsequence by tracing back from max;
  var result = '';
  while(result.length !== max) {
    if(s1[l1-1] === s2[l2-1]) {
      result += s1[l1-1];
      l1--;
      l2--;
    } else if (matrix[l1][l2-1] > matrix[l1-1][l2]) {
      l2--;
    } else {
      l1--;
    }
  }

  return reverseStr(result);
}

// Helper method
function reverseStr(str) {
  let newStr = '';
  for(var i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }
  return newStr;
}

console.log(longestCommonSubsequence('acbcf', 'abcdaf'));
// => 4
