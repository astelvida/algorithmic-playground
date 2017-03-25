function weakNumbers(n) {
  //coding and coding..
  var arr = [];
  var max = [0,0];

  for(var num = 1; num <= n; num++) {
    var d = 2;
    var c = 1;
    var weakness = 0;
    var temp = [];
    while(d <= num) {
      if(num % d === 0) {
        c++;
      }
      d++;
    }


    for(var i = 0; i < arr.length; i++) {
      if(arr[i][1] > c) {
        weakness++;
      }
    }

    if(max[0] < weakness) {
      max[0] = weakness;
      max[1] = 1;
    } else if (max[0] === weakness) {
      max[1]++;
    }

    console.log('num',num,'max', max)

    temp.push(num, c, weakness);
    arr.push(temp);
  }
  console.log(arr)
  return max;
}

console.log(weakNumbers(9))


// 1: d(1) = 1, weakness(1) = 0;
// 2: d(2) = 2, weakness(2) = 0;
// 3: d(3) = 2, weakness(3) = 0;
// 4: d(4) = 3, weakness(4) = 0;
// 5: d(5) = 2, weakness(5) = 1;
// 6: d(6) = 4, weakness(6) = 0;
// 7: d(7) = 2, weakness(7) = 2;
// 8: d(8) = 4, weakness(8) = 0;
// 9: d(9) = 3, weakness(9) = 2.
