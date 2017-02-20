
// was proble with var result scope
// var result = [];
function steamrollArray(arr) {
  var result = [];
  // I'm a steamroller, baby

  var funct = function (item) {
    if (!Array.isArray(item)) {
      result.push(item);
    } else {
      item.forEach(function(i) {
        funct(i);
      });
    }
  };
  
  arr.forEach(funct);
  
  return result;
//   return arr;
}

// steamrollArray([1, [2], [3, [[4]]]]);
steamrollArray([[["a"]], [["b"]]]);