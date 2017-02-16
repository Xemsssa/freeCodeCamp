// solve

// function chunkArrayInGroups(arr, size) {
//   var result = [];
//   var firstpart = [];
//   var secondpart = [];
//   // Break it up.
//   firstpart = arr.slice(0, size);
//   secondpart = arr.slice(size, arr.length);
  
//   result.push(firstpart);
//   result.push(secondpart);
  
//   return result;
// }

// chunkArrayInGroups(["a", "b", "c", "d"], 2);


function chunkArrayInGroups(arr, size) {
  var result = [];
  var firstpart = [];
  var secondpart = [];
  // Break it up.
 
  firstpart = arr.slice();

  var i = 0; 
  while(i < firstpart.length) {

     firstpartSlice = firstpart.slice(i, i+size);
     result.push(firstpartSlice);
    
    // was problem 
    i += size;
  }
 
  return result;
}

// chunkArrayInGroups(["a", "b", "c", "d"], 2);
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2);