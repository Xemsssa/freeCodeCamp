
function mutation(arr) {
//   return arr;
  var maxLength = 0 ;
  var bool = '';
  var word = "blue";
  
  arr[1] = arr[1].toLowerCase();
  //  console.log(arr[0][0]);
//   console.log(arr);
  
//   console.log(word.indexOf('blue'));
  
//   if (arr[0][0] == arr[1][0]) {
//     return true;
//   }
  
//   return arr[0][0].indexOf(arr[1][]);
//   if (arr[0].length > arr[1].length) {
//     maxLength = arr[0].length;
//   } else {
//      maxLength = arr[1].length;
//   }
   
   for (var i = 0; i <= arr[0].length; i++) {
      for(var j = 0; j <= arr[1].length; j++) {
       if (arr[0][i] == arr[1][j]) {
          bool = true; 
       } else {
           bool = false;
       }
      } 
    }
  
//     for (var i = 0; i < maxLength; i++) {
//       for(var j = 0; j < maxLength; j++) {
//        if (arr[0][i] == arr[1][j]) {
//           bool = true; 
//        } else {
//            bool = false;
//        }
//       } 
//     }
  return bool;
  
}

mutation(["hello", "hey"]);
// mutation(["hello", "Hello"]);


//

function mutation(arr) {
//   return arr;
  var maxLength = 0 ;
  var bool = '';
  var word = "blue";
  var pat= "";
  
  arr[1] = arr[1].toLowerCase();
  
  var i = 0;
  
  if (arr[0].length > arr[1].length) {
      maxLength = arr[0].length;
    } else {
      maxLength = arr[1].length;
    } 
  }

  while (i <= maxLength) {
    if (arr[0].indexOf(arr[1][i]) !== -1) {
      bool = true;
    } else {
      bool = false;
    }
    i++;
  
  }
  
  return bool; 
  
}
mutation(["hello", "neo"]);