unction confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
//   var lastLetter = str.substr(-1 );
  
//   if (lastLetter == target){
// //     return true;
//     return lastLetter;
//   } else {
// //     return false;
//      return lastLetter;
//   }

//   return str;
 if (str.substr(-target.length)  == target) {
   return true;
 } else {
   return false;
 }
}

// confirmEnding("Bastian", "n");

confirmEnding("He has to give me a new name", "name");