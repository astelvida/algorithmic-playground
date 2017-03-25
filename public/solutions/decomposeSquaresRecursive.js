function decompose(n) {
  var j = 1;

  function find(num, diff ,stack) {
    console.log('num',num, 'diff',diff, 'stack', stack)
    if( j === n-1 ) {
      return null;
    }

    if(num !== stack[stack.length-1]) {
      stack.push(num);
    } else {
      j++;
      var last0 = stack.pop();
      var last1 = stack.pop();

      // stuck here...
      return find(last1, diff - last0*last0, stack)
    }

    if(diff === 0) {
      return stack;
    }

    if(diff > 0) {
      var i = Math.floor(Math.sqrt(diff));
      return find(i, diff-i*i, stack)
    }
  }
  // j*(2*n-j) = n*n-(n-j)*(n-j)
  return find(n-j, j*(2*n-j), []);
}


console.log('RESULT-76:',decompose(76))
// console.log('RESULT-7:',decompose(7))

//=> [2, 3, 6];
// console.log(decompose(123456));
// => 1, 2, 7, 29, 496, 123455];
//
//
// // Helper function to generate numbers that can be decomposed
function getInput(arr) {
  var stack = 0;
  for(var i = 0; i < arr.length; i++) {
    stack += Math.pow(arr[i],2)
  }
  return Math.sqrt(stack);
}

// var arr = [1, 2, 7, 29, 496, 123455];
//
// console.log(getInput([1, 2, 5, 11, 75]));
// console.log(getInput([75, 12, 2, 1, 1, 1]));
