/*
  A Logger function
*/
function log(arg, name = 'nameleless', message='???') {
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
