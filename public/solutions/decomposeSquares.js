function decompose(n) {
  var input = n*n;
  var j = 1;
  var i = n-j;
  var result = [];

  while(j !== 0) {
    diff = input - i * i;
    if(diff === 0) {
      result.push(i);
      return result.reverse();
    } else if(diff < 0) {
      i--;
    } else if( diff > 0) {
      input = input - i * i;
      result.push(i);
      i--;
    }
    if( i <= 0) {
      j++;
      i = n - j;
    }
  }
  return result;
}


console.log(decompose(7))
//=> [2, 3, 6];
console.log(decompose(123456));
// => 1, 2, 7, 29, 496, 123455];


// Helper function to generate numbers that can be decomposed
function getInput(arr) {
  var result = 0;
  for(var i = 0; i < arr.length; i++) {
    result += Math.pow(arr[i],2)
  }
  return Math.sqrt(result);
}

var arr = [1, 2, 7, 29, 496, 123455];

// console.log(getInput(arr));
