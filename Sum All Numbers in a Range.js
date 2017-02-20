
function sumAll(arr) {
  var max = 0;
  var sumAll = 0;

  max = Math.max(arr[0], arr[1]);
  min = Math.min(arr[0], arr[1]);

  var i = min;
  while (i <= max) {
    sumAll += i;
    i++;
  }
  
  return sumAll;  
//   return 1;
}

sumAll([1, 4]);
