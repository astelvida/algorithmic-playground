function listFormatter(list) {
  var result = [];
  var stack = [];

  for(var i = 0; i < list.length; i++) {

    if(list[i+1] - list[i] === 1) {
      stack.push(list[i]);
    } else {
      if(stack.length >= 2) {
        var range = stack[0] + '-' + list[i];
        result.push(range);
      } else {
        stack.forEach((item) => {
          result.push(item);
        })
        result.push(list[i])
      }
      stack=[];
    }

  }

  return result;
}


console.log(listFormatter([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]));
// returns [-6,-3-1,3-5,7-11,14,15,17-20]
