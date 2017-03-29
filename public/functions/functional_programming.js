/*
  Write a function
*/

function funcName() {

}
// log(funcName(), 'funcName');    // 7



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

function twice(func) {
  return function (arg1) {
    return curry(func, arg1)(arg1);
  };
}

const doubl = twice(add);
log(doubl(11), 'twice double', '22');
const square = twice(mul);
log(square(11), 'twice square', '121');

/*
  *** CURRY ***
  Write a function curry that takes a binary function and an
  argument, and returns a function that can take a second argument.
*/
