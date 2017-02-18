
function truthCheck(collection, pre) {
//   Is everyone being true?

  var bool = [];
  var i = 0;

  while(i < collection.length) {

    if (pre in collection[i]) {
      bool.push(true);
    }
     i++;  
  }
  
  if (arr.length == collection.length) {
    return true;
  } else {
    return false;
  }
  
}

// truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");
truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");