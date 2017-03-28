
// var coins = [1,3,4]

function makeChange (amount, denoms, index) {
  console.log('denoms', denoms)
  if(index === denoms.length - 1) {
    return 1; // last denom
  }

  var denomAmount = denoms[index];
  var ways = 0;
  for(var i = 0; i * denomAmount <= amount; i++) {
    var amountRemaining = amount - i * denomAmount;
    ways += makeChange(amountRemaining, denoms, index+1)
  }
  return ways;
}


function coinSums (total) {
  var coins = [1,2,5,10,20,50,100,200]
  coins.reverse();
  return makeChange(total, coins, 0);

}

console.log(coinSums(17));
