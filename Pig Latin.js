var result = '';
function translatePigLatin(str) {
  
  var vowel = ['a', 'e', 'i' , 'o', 'u'];
  var firstLetter = '';
  // check if begin with vowel
  if (vowel.indexOf(str[0]) !== -1) {
//     return str[0];
    result = str + 'way';
  } else {
    firstLetter = str[0];
    
    result = str.slice(1) + firstLetter + "ay";
  }

  //  need to write 
  // else {
  //   firstLetter = str.slice(0, 2);
    
  //   result = str.slice(2) + firstLetter + "ay";
  // }

    
  return result;
//   return str;
}

// translatePigLatin("consonant");
// translatePigLatin("eight");
// translatePigLatin("algorithm");
translatePigLatin("glove");