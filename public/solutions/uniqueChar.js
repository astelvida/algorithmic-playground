function uniqueChar(string) {
  var hashTab = {};
  for(var i = 0; i < string.length; i++) {
    if(!(string[i] in hashTab)) {
      hashTab[string[i]] = true;
    } else {
      return false;
    }
  }
  return true;
}


console.log(uniqueChar("abcdef")) // => true
console.log(uniqueChar("abcfef")) // => false
console.log(uniqueChar("azaz")) // => false
console.log(uniqueChar("olabirc")) // => false
console.log(uniqueChar("zacffer")) // => false