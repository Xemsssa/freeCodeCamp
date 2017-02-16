// solve
// var result = '';
function convertHTML(str) {
	var result = '';

	// work
	result = str.replace(/&/g, "&amp;");
	result = result.replace(/</g, "&lt;");
	result = result.replace(/>/g, "&gt;");
	result = result.replace(/"/g, "&quot;");
	result = result.replace(/'/g, "&apos;");
  
    return result;
//   return str;
}

// convertHTML("Dolce & Gabbana");
// convertHTML("Hamburgers < Pizza < Tacos");
convertHTML("<>");