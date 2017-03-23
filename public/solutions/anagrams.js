function allAnagrams (string) {
  var anagramList = [];
  var depth = 0;
  var generator = function(anagram, temp, depth){
    if (anagram.length === string.length){
      anagramList.push(anagram)
      console.log(anagramList)
    }
    for(var i = 0; i < temp.length; i++) {
    console.log("anagram:", anagram + temp[i], spaces(temp), "temp:", temp.slice(0,i) + temp.slice(i+1), spaces(anagram), "depth:", depth)
      generator(anagram + temp[i], temp.slice(0,i) + temp.slice(i+1), depth+1);
    }
  }

 generator('', string, depth);
 return anagramList;
}




      // console.log("AnagramList:", anagramList, "\n\n")

function spaces (string) {
  var result = '';
  for(var k = 0; k < string.length; k++) {
    result += ' ';
  }
  return result;
}

allAnagrams("abc")

    // for (var i = 0; i < options.length; i++){
    //   generator(anag + options[i],
    //   options.slice(0, i) + options.slice(i+1))
    // }
