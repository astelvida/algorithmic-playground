function decompose(n) {

  var j = 1;

  function find(num, diff ,stack) {
    // console.log('\nTOP,num',num, 'diff',diff, 'stack', stack)

    if(j === n-1) {
      return null;
    }

    // if we found two identical elements, go back
    if(num === stack[stack.length-1]) {
      j++;
      return find(n-j, j*(2*n-j), []);
    }

    if(diff === 0) {
      stack.push(num);
      return stack;
    }

    if(diff > 0) {
      stack.push(num);
      var i = Math.floor(Math.sqrt(diff));
      return find(i, diff-i*i, stack)
    }
  }

  return find(n-j, j*(2*n-j), []);
}


// console.log('RESULT-7:',decompose(7))
// //=> [2, 3, 6];
console.log('RESULT-76:',decompose(76))
// // => [1, 2, 5, 11, 75]
// console.log('RESULT-123456:',decompose(123456));
// => [1, 2, 7, 29, 496, 123455];


// Helper function to generate numbers that can be decomposed
function getInput(arr) {
  var result = 0;
  for(var i = 0; i < arr.length; i++) {
    result += Math.pow(arr[i],2)
  }
  return result;
  return Math.sqrt(result);
}
// console.log('short',getInput([75, 12, 3]))
// console.log('long',getInput([75, 12, 2, 1, 1, 1]));
