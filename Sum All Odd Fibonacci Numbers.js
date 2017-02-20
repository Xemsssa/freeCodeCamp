// was problem with var fib scope
// var fib = 0;
function sumFibs(num) {
  var fib = 0;
  var firstNumber = 0;
  var i = 1 ;
  
  while (i <= num) {
    
    if (i % 2 != 0 ) {
      fib += i;
    }
      i += firstNumber;
      firstNumber = i - firstNumber;
  };
  
  return fib;
}

// sumFibs(4);
// sumFibs(75025);
// sumFibs(75024);
sumFibs(1000);