/*
  A Logger function
*/
function log(arg, name = 'nameleless') {
  document.write('<p><strong>');
  document.writeln(name);
  document.write('</strong>');
  document.write('&nbsp=>&nbsp ');
  document.writeln(arg);
  document.write('</p>');
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
log(three(), 'identityf');   // 3
