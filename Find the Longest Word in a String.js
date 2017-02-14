
function findLongestWord(str) {
  
  var array = str.split(' ');
  var max = 0;
//   return array.length;
  
  array.forEach(function (item) {
    if (max <= item.length) {
      max = item.length;
    } 
  });
  
  return max;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
