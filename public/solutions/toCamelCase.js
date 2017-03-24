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


// returns "theStealthWarrior"
console.log(toCamelCase("the-stealth-warrior"))

// returns "TheStealthWarrior"
console.log(toCamelCase("The_Stealth_Warrior"))
