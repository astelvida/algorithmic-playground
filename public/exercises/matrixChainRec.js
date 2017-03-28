function matrixChain(p) {

  var count = function(i, j) {
    if(i === j) {
      return 0;
    }

    var min = null;

    for(var k = i; k < j; k++) {
      var result = count(i, k) + count(k+1, j) + p[i-1] * p[k] * p[j];
      if(!min || result < min) {
        min = result;
      }
    }
    return min;
  }

  return count(1, p.length - 1);
}

console.log(matrixChain([4,10,3,12,20,7]))
// => 1344;
