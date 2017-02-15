
function slasher(arr, howMany) {
  // it doesn't always pay to be first
  var result = arr.splice(howMany);
  
  return result;
}

slasher([1, 2, 3], 2);
