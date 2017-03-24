/*
  Creates and returns a new debounced version of the passed function which will postpone its execution until after wait milliseconds have elapsed since the last time it was invoked. Useful for implementing behavior that should only happen after the input has stopped arriving.

  At the end of the wait interval, the function will be called with the arguments that were passed most recently to the debounced function.

  Pass true for the immediate argument to cause debounce to trigger the function on the leading instead of the trailing edge of the wait interval.
*/


function debounce(func, wait) {
  var outer = this;
  var prevCall;
  var currCall;
  var stack = [];
  var timeoutId;

  return function(...args) {
    var inner = this;
    prevCall = currCall || Date.now();
    currCall = Date.now();

    var timeSinceLastCall = currCall - prevCall;
    if(timeSinceLastCall >  wait) {}
    // if first time called...
    if(!timeoutId && timeSinceLastCall >  wait) {
      timeoutId = setTimeout(function() {
        func.apply(outer, args);
      }, wait);
    } else {
      outer.clearTimeout(timeoutId);
      console.log('timeSinceLastCall:', timeSinceLastCall, 'with args:', args[0])
      timeoutId = setTimeout(function() {
        func.apply(outer, args);
      }, wait - timeSinceLastCall);
    }
  }
}
// callback with args
// let sum = 0;
// const increment = function(num) {
//   sum += num;
//   console.log('num:', num, 'sum:', sum)
// }
// debounced2 = _.debounce(increment, 100);
// debounced2(1);
// debounced2(2);
// debounced2(3);
// debounced2(4); // Called once here
//
// setTimeout(debounced2.bind(this, 5), 80)
// setTimeout(debounced2.bind(this, 6), 120)
// setTimeout(debounced2.bind(this, 7), 250) // Called second time here
// setTimeout(debounced2.bind(this, 8), 300)
// setTimeout(debounced2.bind(this, 9), 400)
// Expect the function to have been called twice - i.e.sum = 2;

// RESULT:
// num: 5
// sum: 5
// num: 9
// sum: 14


// SIMPLE CASE - no args
let counter = 0;
const countCalls = function() {
  counter++;
  console.log('CALLED', counter)
}

debounced = _.debounce(countCalls, 100);
// debounced();
// debounced();
// debounced();
// debounced();
// debounced();
// debounced(); // Called once here
// 
// setTimeout(() => debounced(), 210) // Called second time here
// setTimeout(() => debounced(), 250)
// setTimeout(() => debounced(), 270)
// setTimeout(() => debounced(), 350)
setTimeout(() => debounced(), 400)
setTimeout(() => debounced(), 650)

// Expect the function to have been called twice - i.e.counter = 2;
