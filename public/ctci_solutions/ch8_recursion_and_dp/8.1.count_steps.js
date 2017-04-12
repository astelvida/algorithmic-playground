function countSteps(n) {

  const ways = [];

  function count(n) {
    console.log(ways, n)
    if (n === 0) {
      return 1;
    }

    if (n < 0) {
      return 0;
    }
    if(ways[n] !== undefined) {
      return ways[n];
    }
    ways[n] = count(n-1) + count(n-2) + count(n-3);
    // console.log(`ways[${n}]=`, ways[n]);
    return ways[n];
  }

  return count(n);
}

console.log('4',countSteps(20))
