function greatestCommonFactor(arr) {
  var result = []
  for(var i = 0; i < arr.length; i++) {
    // look for diviosrs up to here
    var num = arr[i];
    var limit = Math.ceil(num/2);

    var d = 2;
    var c = 0;
    var temp = [];
    while(d <= limit && num !== 0) {

      if(num % d === 0) {
        num = num/d;
        c++;

      // if we found at leats one divisor
      } else if( c !== 0) {
        temp.push(Math.pow(d,c));
        c = 0;
        d++;

      // if not just increment d
      } else {
        d++;
      }

    }

    // get MAX
    result.push(temp);
  }

  // console.log('stack', stack)

}


function gcd(a,b) {
  if(b === 0) {
    return a;
  }

  // if a is less than b swap;
  if(a < b) {
    var temp = a;
    a = b;
    b = temp;
  }

  var k = 1;
  var r = a;
  while(true) {
    if(r < b) {
      break;
    }
    r = a % ( b * k);
    k++;
  }
  return gcd(b, r);
}


function gcdofArray(arr) {
  var g = arr[0];
  for(var i = 1; i < arr.length; i++) {
    g = gcd(g, arr[i])
  }
  return g;
}

console.log(gcd(11, 121)); // --> 2




console.log(gcdofArray([46, 14, 20, 88])); // --> 2
