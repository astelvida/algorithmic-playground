function largestContiguousSum(arr) {

  var max = 0;  // keeps track of the overall max
  var maxNow = 0; // keeps track of the max at curr element

  for (var i = 0; i < arr.length; i++) {

    maxNow += arr[i];

    // if max at curr element is less than 0, we need to reinitialize maxNow to 0 as there is now contiguous sum
    if (maxNow < 0) {
      maxNow = 0;
    }

    if (maxNow > max) {
      max = maxNow;
    }

  }
  return max;
}


console.log(largestContiguousSum([-2, -3, 4, -1, -2, 1, 5, -16, 9, 10, 11]));

console.log(largestContiguousSum([-2, -3, 4, -1, -2, 1, 5 ]))
