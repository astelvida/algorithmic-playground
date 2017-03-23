var coins = [1,2,5,10,20,50,100,200];

function coinSums (target) {
  var ways = initWays(target);
  ways[0] = 1;
  for(var i = 0; i < coins.length; i++) {
    for(var j = coins[i]; j < target; j++ ) {
      debugger;
      ways[j] += ways[j - coins[i]];
    }
  }
  return ways;
}

function initWays (target) {
  var arr = [];
  for(var i = 0; i < target; i++) {
    arr.push(0);
  }
  return arr;
}


console.log(coinSums(5));
