// Rotate a matrix by 90 degrees;
function rotateMatrixInPlace(matrix) {

  for(var layer = 0; layer < Math.floor(matrix.length/2); layer++) {

    var first = layer;
    last = matrix.length - layer - 1;

    for(var i = first; i < last; i++) {
      // save first element to swap
      var top = matrix[first][i];

      // top = left
      matrix[first][i] = matrix[last - i][first]

      // left = bottom
      matrix[last - i][first] = matrix[last][last - i];

      // bottom = right;
      matrix[last][last - i] = matrix[i][last]

      // right = top;
      matrix[i][last] = top;
    }
  }

	return matrix;
}




console.log(rotateMatrixInPlace([[1,2,3],[4,5,6],[7,8,9]]));
// => [[7,4,1],[8,5,2],[9,6,3]];
console.log(rotateMatrixInPlace([[1,2,3,'x'],[4,5,6, 'y'],[7,8,9,'z'], [10,11,12,'t']]));
