
function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
//   return collection[0];
//   return collection.length;
  
  for (var i = 0; i < collection.length; i++) {

//         return collection[i];
//        if (collection[i].hasOwnProperty(source)) {
       if (source in collection[i]) {
//          return collection;
          return true;
       } else {
         return  false;
       }
  }
  
  // Only change code above this line
  return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
