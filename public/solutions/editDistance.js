function editDistance(str1, str2) {

  var matrix = [];

  for(var i = 0; i < str1.length + 1; i++) {

    // initialize empty subArray
    matrix[i] = [];

    for(var j = 0; j < str2.length + 1; j++) {
      // initialize first row and column will refer to an empty string
      if(i === 0) {
        matrix[i][j] = j;

      } else if(j === 0) {
        matrix[i][j] = i;

        // if they're the same, just take the previous distance
      } else if(str1[i-1] === str2[j-1]) {
        matrix[i][j] = matrix[i-1][j-1];

        // if different apply recursive formula and find the min
      } else {
        matrix[i][j] = Math.min(matrix[i-1][j], matrix[i-1][j-1], matrix[i][j-1]) + 1;
      }
    }

  }

  // the last element of the array will be our solution
  return matrix[str1.length][str2.length];

}


console.log(editDistance('abcdef', 'azced'));
// => 3
console.log(editDistance('isitfridayalready?', 'itisonlymonday'))
// => 13
