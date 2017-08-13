var result = [];
function sumPrimes(num) {
  
  for (var i = 0 ; i <= num; i++) {
    if (i % 1 === 0 && i % 2 === 0) {
      result.push(result + i);
    }
  }
  
return result;  
//   return num;
}

sumPrimes(10);

var result = [];
var sum = 0;
function sumPrimes(num) {
//   return num;
  var i = 0;
  while (i <= num) {
    console.log(i);
//     if (i % 1 === 0 && i % 2 === 0) {
    if ( i > 1 && num % i === 0) {
//       return true;
//       return i;
//       console.log(i);
      sum += i;
      result.push(i);
    }
    
    i++;
  }
  
// return sum;
return result;
// return result.reduce(function (a, b) {
//   return a+b;
// });
//   return num;
}

sumPrimes(10);
// sumPrimes(977);
