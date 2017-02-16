
function titleCase(str) {
  var array = str.split(" ");
  var word = "";
  
  array.forEach(function (item) {
    
    var firstLetter = item.slice(0,1);
    var cut = item.slice(1, item.length);
    
    cut = cut.toLowerCase();
    
    word += firstLetter.toUpperCase() + cut + ' ';
    
  });
  
 return word.slice(0, word.length - 1);
}

// titleCase("I'm a little tea pot");
titleCase("sHoRt AnD sToUt");

