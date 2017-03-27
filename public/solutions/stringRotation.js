// Find if one string is a rotation of the other

/*
  Trick ! concatenate str1 with itself;
  basically we can split both s1 and s2 into 2 parts:
  let x = 1st substring
  let y = 2nd substring
  if s2 is a rotation of s1 then
  s1 = 'xy' & s2 = 'yx', so s1s1 = 'xyxy'
  so we can just call isSubstring once on s1s1('xyxy') and s2('yx' if true)
*/
function stringRotation(str1, str2) {
  let length = str1.length
  if (length && length === str2.length ) {
    return isSubstring(str1+str1, str2)
  }
  return false;
}


// Helper method to check if one String (str) is a substring of the other(target)
function isSubstring(target, str) {
  for(var i = 0; i < target.length; i++) {
    if (target.substr(i, str.length) === str) {
      return true;
    }
  }
  return false;
}

console.log(stringRotation('waterbottle','erbottlewat'))
