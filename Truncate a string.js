
function truncateString(str, num) {
  // Clear out that junk in your trunk
  
  if (str.length >num) {
    
     if (num <= 3) {
       
       if(num == 2 ) {
         
         return str.slice(0, -str.length + num) + "...";
       
       } else {
         
         return str.slice(0, -num) + "..." ;
         
       }
       
     }
 
  } else if (str.length == num) {

    return str;

  }  else if (str.length + 2 == num) {

    return str;

  }

    return str.slice(0, num-3) + "...";

}

// truncateString("A-tisket a-tasket A green and yellow basket", 11);
// truncateString("A-", 1);
truncateString("Absolutely Longer", 2);