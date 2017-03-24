const Matrix = function(rows = 0, columns = 0) {
  let matrix = []
  matrix.rows = rows;   // rows
  matrix.columns = columns;   // columns

  for(var i = 0; i < rows; i++) {
    matrix[i] = [];
    for(var j = 0; j < columns; j++) {
      matrix[i][j] = 1;
    }
  }

  return matrix;
}

// export default matrix;
