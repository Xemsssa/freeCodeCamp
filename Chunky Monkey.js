
function chunkArrayInGroups(arr, size) {
  var result = [];
  var firstpart = [];
  var secondpart = [];
  // Break it up.
  firstpart = arr.slice(0, size);
  secondpart = arr.slice(size, arr.length);
  
  result.push(firstpart);
  result.push(secondpart);
  
  return result;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
