/*
  A Logger function
*/
function log(arg, name = 'nameleless', message='???') {
  if (arg === 'br') {
    document.write('</br>');
    return;
  }
  document.write('<p><strong>');
  document.writeln(name);
  document.write('</strong>');
  document.write('&nbsp=>&nbsp ');
  document.writeln(arg);
  document.write('<i class="comment">&nbsp&nbsp// should return ');
  document.writeln(message);
  document.write('</i>');
  document.write('</p>');
}
/*
  Write three binary functions, add , sub, and mul, that take two numbers and return their sum, difference, and product.
*/

function add(first, second) {
  return first + second;
}

function sub(first, second) {
  return first - second;
}

function mul(first, second) {
  return first * second;
}

/*
  Write a function identityf that takes an argument and returns a function that returns that argument.
*/

function identityf(n) {
  return function () {
    return n;
  };
}

const three = identityf(3);
log(three(), 'identityf', '3');   // 3

/*
  Write a function addf that adds from two invocations.
*/

function addf(x) {
  return function (y) {
    return x + y;
  };
}

log(addf(3)(4), 'addf', '7');    // 7


/*
  Write a function liftf that takes a binary function, and makes it callable with two invocations.
*/

function liftf(binary) {
  return function (arg1) {
    return function (arg2) {
      return binary(arg1, arg2);
    };
  };
}

const addfNew = liftf(add);
addfNew(3)(4);           // 7
log(liftf(mul)(5)(6), 'liftf', 30);    // 30

/*
  *** CURRY ***
  Write a function curry that takes a binary function and an
  argument, and returns a function that can take a second argument.
  TODO: curry function with variable number of args
*/

function curry(binary, n) {
  return function (arg) {
    return binary(n, arg);
  };
}

// Can use liftf function defined earlier
function curry2(binary, n) {
  return liftf(binary)(n);
}

const add3 = curry(add, 3); // i.e... 'Create a function that adds 3';
log(add3(5), 'curry', 8);  // 8
log(curry(mul, 5)(6), 'curry', 30);  // 30

/*
  *** INC ***
  Without writing any new functions, show three ways to create the inc function.
*/

const inc1 = curry(add, 1);
const inc2 = liftf(add)(1);
const inc3 = addf(1);

log(inc3(5), 'inc3 + 5', 6);
log(inc3(inc3(5)), 'inc3 + inc3 + 5', 7);

/*
  *** TWICE ***
  Write a function twice that takes a binary function and returns a
  unary function that passes its argument to the binary function twice.
*/

function twiceCurry(func) {
  return function (arg1) {
    return curry(func, arg1)(arg1);
  };
}

function twice(binary) {
  return function (arg1) {
    return binary(arg1, arg1);
  };
}


const doubl = twice(add);
log(doubl(11), 'twice double', '22');
const square = twice(mul);
log(square(11), 'twice square', '121');


/*
  *** REVERSE ***
  Write a function reverse, that reverses the arguments of a binary/any function.
*/

function reverseBinary(binary) {
  return function (arg1, arg2) {
    return binary(arg2, arg1);
  };
}

function reverse(func) {
  return function (...args) {
    return func(...args.reverse());
  };
}

const bus = reverse(sub);
log(bus(3, 2), 'reverse', -1);

/*
  *** COMPOSE UNARY ***
  Write a function composeUnary, that takes two unary functions and
  returns a unary function that calls them both.
*/

function composeUnary(unary1, unary2) {
  return function (arg1) {
    return unary2(unary1(arg1));
  };
}

log(composeUnary(doubl, square)(5), 'composeUnary', 100);


/*
  *** COMPOSE BINARY ***
  Write a function composeBinary, that takes two binary functions and
  returns a function that calls them both.
*/

function composeBinary(f, g) {
  return function (...args) {
    return g(f(args[1], args[0]), args[2]);
  };
}

log(composeBinary(add, mul)(2, 3, 7), 'composeBinary', 35);

/*
  *** LIMIT ***
  Write a function limit, that allows a binary function to be called
  a limited number of times.
*/

function limit(f, lim) {
  let c = 0;
  return function (...args) {
    if (c < lim) {
      c++;
      return f(...args);
    }
    return undefined;
  };
}

const limit1 = limit(add, 1);
log(limit1(3, 4), 'limit', 7);
log(limit1(3, 5), 'limit', 'undefined as limit is 1');


/*
  *** FROM ***
  Write a function from, that produces a generator that will produces
  a series of values.
*/

function from(seed) {
  return function () {
    return seed++;
  };
}
// since index is defined = from(0), the inner function will close // over the seed variable, so whenever wwe call index, it will not
// be reinitialised.
const indexA = from(0);
log(indexA(), 'from', 0);
log(indexA(), 'from', 1);
log(indexA(), 'from', 2);


/*
  *** TO ***
  Write a function to, that takes a generator and an end value and
  returns a generator that produces number up to that limit(end).
*/

function to(generator, end) {
  return function () {
    const value = generator();
    if (value < end) {
      return value;
    }
    return undefined;
  };
}

const indexB = to(from(1), 3);
log(indexB(), 'to', 1);
log(indexB(), 'to', 2);
log(indexB(), 'to', 'undefined, as limit is 3');


/*
  *** FROM TO ***
  Write a function fromTo, that produces a generator which will
  produce values in a range (including start and excluding end).
*/

// Without using other functions
function fromTo0(start, end) {
  return function () {
    if (start !== end) {
      return start++;
    }
    return undefined;
  };
}

// Using 'from' and 'to' function declared above
function fromTo(start, end) {
  return to(from(start), end);
}

const indexC = fromTo(9, 12);
log(indexC(), 'fromTo', 9);
log(indexC(), 'fromTo', 10);
log(indexC(), 'fromTo', 11);
log(indexC(), 'fromTo', 'undefined, as range is 3');


/*
  *** ELEMENT GEN ***
  Write a function element, that takes an array and a generator and
  returns a generator that will produce elements from that array.
  If a generator is not provided, then produce all elements.
*/

// Without using other functions
function element(arr, gen) {
  if (!gen) {
    gen = fromTo(0, arr.length);
  }
  return function () {
    const index = gen();
    if (index !== undefined) {
      return arr[index];
    }
    return undefined;
  };
}


const ele = element(['a', 'b', 'c', 'd'], fromTo(1, 3));
log(ele(), 'element', 'b');
log(ele(), 'element', 'c');
log(ele(), 'element', 'undefined, as range is 1-3');
const ele2 = element(['a', 'b', 'c', 'd']);
log(ele2(), 'element no gen', 'a');
log(ele2(), 'element no gen', 'b');
log(ele2(), 'element no gen', 'c');
log(ele2(), 'element no gen', 'd');
log(ele2(), 'element no gen',
'undefined, since the entire array has been printed');
log('br');


/*
  *** COLLECT ***
  Collect takes a generator and an array and produces a function
  that will collect the results in the array.
*/

function collect(gen, arr) {
  return function () {
    const value = gen();
    if (value !== undefined) {
      arr.push(value);
    }
    return value;
  };
}


const array = [];
const collectToArray = collect(fromTo(0, 2), array);
log(collectToArray(), 'collect', '0');
log(collectToArray(), 'collect', '1');
log(collectToArray(), 'collect', 'undefined');
log(array, 'array', '[0, 1]');

/*
  *** FILTER ***
  Write a filter function that takes a generator and a predicate and
  produces a generator that produces only the values approved by the
  predicate.
*/
const logger = console.log;

function filter(gen, pred) {
  return function checkPred() {
    const value = gen();
    if (pred(value) || value === undefined) {
      return value;
    }
    return checkPred();
  };
}

const fil = filter(fromTo(0, 5),
  function third(value) {
    return (value % 3) === 0;
  });

// logger(fil());    // 0
// logger(fil());    // 3
// logger(fil());    // undefined

/*
  *** CONCAT ***
  Write a concat function that takes two generators and produces a
  generator that combines the sequences
  // TODO: write the function for any number of generators
*/

function concat(gen1, gen2) {
  return function () {
    const value1 = gen1();
    if (value1 !== undefined) {
      return value1;
    }
    return gen2();
  };
}

// const con = concat(fromTo(0, 3), fromTo(0, 2));
// logger(con());    // 0
// logger(con());    // 1
// logger(con());    // 2
// logger(con());    // 0
// logger(con());    // 1
// logger(con());    // undefined


/*
  *** REPEAT ***
  Write a repeat function that takes a generator and calls it until
  it returns undefined.
*/

function repeat() {

}

// const array2 = [];
// repeat(collect(fromTo(0, 4), array2));
// logger(array2);    // 0, 1, 2, 3


/*
  *** MAP ***
  Write a map function that takes an array and a unary function, and
  returns an array containing the result of passing each element to
  the unary function. Use the repeat function.
*/

function map() {

}

// logger(map([2, 1, 0], inc1)); // [3, 2, 1]


/*
  *** REDUCE ***
  Write a reduce function that takes an array and a binary function,
  and returns a single value.Use the repeat function.
*/

function reduce() {

}

// logger(reduce([], add));           // undefined
// logger(reduce([2], add));          // 2
// logger(reduce([2, 1, 0], add));    // 3
