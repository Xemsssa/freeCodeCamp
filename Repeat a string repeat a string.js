
function repeatStringNumTimes(str, num) {
  // repeat after me
//   return str;
  var result = "";
  
  if (num < 0 ) {
    return result;
  } else {
    for (var i = 0; i < num; i++) {
      result += str;
    }
    return result;
  }
}

repeatStringNumTimes("abc", 3);