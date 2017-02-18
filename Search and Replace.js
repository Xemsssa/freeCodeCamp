
// var result = '';
// var index = 0;
function myReplace(str, before, after) {
  
var result = '';
var index = 0;

if (str.indexOf(before) !== -1) {
	 index = str.indexOf(before);

	 if  (str[index] == str[index].toUpperCase()) {
	   after = after[0].toUpperCase() + after.slice(1);
	 }
    
     result = str.replace(before, after);
}
 
  return result;
//   return str;
}

// myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
// myReplace("Let us go to the store", "store", "mall");
myReplace("Let us get back to more Coding", "Coding", "algorithms")