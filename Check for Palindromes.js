
function palindrome(str) {
  // Good luck!
  str = str.toLowerCase().replace(/ /gi, '').replace(/\./, '').replace(/,/, '').replace(/_/, '');
  
//   for ( var i = 0; i < str.length; i++) {
//     if (str[i] == str[str.length - i]) {
//       continue;
//     }
//     return true;
//   }
  if (str[0] == str[str.length - 1]) {
    return true;
  }
  return false;
}



palindrome("My age is 0, 0 si ega ym.");
