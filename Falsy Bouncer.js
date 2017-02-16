
function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  result = arr.filter(Boolean);
  
  return result;
}

bouncer([7, "ate", "", false, 9]);