function toCamelCase(str){
  var i = 0;
  var newStr = '';

  while(i !== str.length) {
    if(str[i] !== '-' && str[i] !== '_' ) {
      newStr += str[i];
    } else {
      i++;
      newStr += str[i].toUpperCase();
    }
    i++;
  }

  return newStr;
}


// regex solution
function toCamelCase(str){
  var regExp=/[-_]\w/ig;
  return str.replace(regExp,function(match){
        return match.charAt(1).toUpperCase();
   });
}

// returns "theStealthWarrior"
console.log(toCamelCase("the-stealth-warrior"))

// returns "TheStealthWarrior"
console.log(toCamelCase("The_Stealth_Warrior"))
