// complete
// TODO getIndexToIns([2, 5, 10], 15) should return 3.
function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  var index = 0;

  arr.sort(function(a, b) {
      return a - b;
  });

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] >= num) {
      return i;
    }
   
  }

  arr.push(15);
  return arr.indexOf(num);
}

// getIndexToIns([40, 60], 50);
// getIndexToIns([3, 10, 5], 3);
getIndexToIns([2, 5, 10], 15);