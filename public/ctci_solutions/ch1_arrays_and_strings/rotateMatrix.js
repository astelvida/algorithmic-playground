// Rotate a matrix by 90 degrees;
function rotateMatrix(matrix) {

	// create an empty matrix of same length
	let length = matrix.length - 1;
	const result = matrix.map((row) => row.map((item) => 0));
	// transpose the matrix
	for(var i = 0; i < matrix.length; i++) {
		for(var j = 0; j < matrix.length; j++) {
			result[j][length] = matrix[i][j];
		}
		length--;
	}

	return result;
}




console.log(rotateMatrix([[1,2,3],[4,5,6],[7,8,9]]));
// => [[7,4,1],[8,5,2],[9,6,3]];
console.log(rotateMatrix([[1,2,3,'x'],[4,5,6, 'y'],[7,8,9,'z'], [10,11,12,'t']]));
