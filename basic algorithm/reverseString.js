function reverseString(str) {
	// convert string to array for easy manipulation
  var newStr = str.split("");
  var nextNewStr = (newStr.reverse());
  // reverse string using in-built array function
  nextNewStr = nextNewStr.join("");
  
  return nextNewStr;
}

reverseString("hello");