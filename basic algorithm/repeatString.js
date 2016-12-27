function repeatStringNumTimes(str, num) {
  // repeat after me
  // var letters = str.split("");
  var i = 0;
  var newStr = "";
  while (i < num) {
  	newStr += str;
  	i++;
  }
  console.log(newStr);
  return newStr;
}

repeatStringNumTimes("abc", 3);