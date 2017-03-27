function zeroMatrix (matrix) {

  // using an object for increased performance
  var rows = {};
  var columns = {};

  for(var i = 0; i < matrix.length; i++) {
    for(var j = 0; j < matrix[0].length; j++) {
      if(matrix[i][j] === 0) {
        rows[i] = true;
        columns[j] = true;
      }
    }
  }

  var nullifyColumn = function (col) {
    for(var i = 0; i < matrix.length; i++) {
      matrix[i][col] = 0;
    }
  }

  var nullifyRow = function (row) {
    for(var j = 0; j < matrix[0].length; j++) {
      matrix[row][j] = 0;
    }
  }

  for(var row in rows){
    nullifyRow(row);
  }

  for(var column in columns){
    nullifyColumn(column);
  }

  return matrix;
};





var arr = [
  [1,2,3,4],
  [5,6,0,8],
  [9,10,11,12]
];
console.log(zeroMatrix(arr))
