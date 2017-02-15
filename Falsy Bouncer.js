var res = [];

function compare(item) {
     
  var falsy = [false, null, 0, "", undefined];
  
  var bool = true;
  var i = 0;
  
  while (i <= falsy.length) {
    if (falsy[i] == item) {
      
      bool = false;
    }
     i++;
  }
  return bool;

  
  
}

function bouncer(arr) {
  
  // Don't show a false ID to this bouncer.
  res = arr.filter(compare);
  console.log(res);
  return res;
  
}

// bouncer([7, "ate", "", false, 9]);
// bouncer(["a", "b", "c"]);
bouncer([false, null, 0, NaN, undefined, ""]);


function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  result = arr.filter(Boolean);
  
  
  return result;
}

bouncer([7, "ate", "", false, 9]);