
function coinsSolutionsDp (sum) {
  var coins = [1,3,4];
  var solutions = 0;
  var memo = [1];

  function count (i) {

    if( i < 0) {
      return 0;
    }

    if(memo[i] > 0) {
      return memo[i];
    } else {
      memo[i] = 0;
    }

    for(var j = 0; j < coins.length; j++) {
      memo[i] += count(i-coins[j])
    }
    return memo[i];
  }

  return count(sum);
}



console.log(coinsSolutionsDp(5));
