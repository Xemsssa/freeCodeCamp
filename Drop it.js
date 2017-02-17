
function dropElements(arr, func) {
  // Drop them elements.
  var i = 0;
  var length = arr.length;

  while (length > 0) {

   if (!func(arr[0])) {
     arr.shift(); 
   }  
     length -= 1;
  }

  return arr;
}

// dropElements([1, 2, 3], function(n) {return n < 3; });
// dropElements([1, 2, 3], function(n) {return n > 0;});
dropElements([1, 2, 3, 7, 4], function(n) {return n > 3;})