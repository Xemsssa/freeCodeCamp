
var result = '';
function convertHTML(str) {
  
//   var entities = [/&/g, /</g, />/g, /"/g, /'/g];
//   var replace = ["&amp;", "&lt;", "&gt;", "&quot;", "&apos;"];
  
//   return entities;
//   return replace;
  
  // &colon;&rpar;
  
// 	//work but only for one  
//   result = str.replace(/&/g, "&amp;");
//   result = str.replace(/</g, "&lt;");
//   result = str.replace(/>/g, "&gt;");
//   result = str.replace(/"/g, "&quot;");
//   result = str.replace(/'/g, "&apos;");


// 	//problem with <> 
//   result = str.replace(/&/g, "&amp;");
//   result += str.replace(/</g, "&lt;");
//   result += str.replace(/>/g, "&gt;");
//   result += str.replace(/"/g, "&quot;");
//   result += str.replace(/'/g, "&apos;");

// work
result = str.replace(/&/g, "&amp;");
result = result.replace(/</g, "&lt;");
result = result.replace(/>/g, "&gt;");
result = result.replace(/"/g, "&quot;");
result = result.replace(/'/g, "&apos;");

//   for (var i = 0; i < entities.length; i++) {
//       result += result.replace(entities[i], replace[i]);
//   }
  
  return result;
//   return str;
}

// convertHTML("Dolce & Gabbana");
// convertHTML("Hamburgers < Pizza < Tacos");
convertHTML("<>");