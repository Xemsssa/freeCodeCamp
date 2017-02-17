
function binaryAgent(str) {
  var digit = '';
  var result = '';
  
  var slice = str.split(" ");
//   return slice.isArray();
  
  slice.forEach(function (item) {
    digit = parseInt(item, 2);
     result += String.fromCharCode(digit);
  });
  
//   var digit = parseInt(binary, 2);
// //   return digit.charCodeAt();
//   return String.fromCharCode(digit);
  return result; 
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
