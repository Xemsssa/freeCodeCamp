function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor

//   return str;
 if (str.substr(-target.length) == target) {
   return true;
 } else {
   return false;
 }
}

// confirmEnding("Bastian", "n");
confirmEnding("He has to give me a new name", "name");