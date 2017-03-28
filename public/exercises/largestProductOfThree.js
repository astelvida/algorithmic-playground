function largestProductOfThree(arr) {

  var max1 = Math.max(arr[0], arr[1]);
  var max2 = Math.min(arr[0], arr[1]);

  var min1 = Math.min(arr[0], arr[1]);
  var min2 = Math.max(arr[0], arr[1]);

  var largest = arr[0] * arr[1] * arr[2];

  for (var i = 2; i < arr.length; i++) {

    var p1 = max1 * max2 * arr[i];

    if(arr[i] > max1) {
      var temp = max1;
      max1 = arr[i];
      max2 = temp;
    } else if(arr[i] > max2) {
      max2 = arr[i];
    }

    if(arr[i] < min1) {
      var temp = min1;
      min1 = arr[i];
      min2 = temp;
    } else if (arr[i] < min2) {
      min2 = arr[i];
    }

    // we need this at the end because the curr max might have changed
    var p2 = min1 * min2 * max1;
    largest = Math.max(largest, p1, p2);

  }
  return largest;
}

console.log('RESULT:', largestProductOfThree([-5, -1, -3, -2, -4]))
// console.log('\n\n\nNEXT')
console.log('RESULT:', largestProductOfThree([2, 4, -5, 3, -10]))
console.log(largestProductOfThree([2, 1, 3, 7, 5]));
// console.log(largestProductOfThree([0,2,3]))
