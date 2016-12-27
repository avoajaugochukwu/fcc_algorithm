function titleCase(str) {
	var newStr = str.toLowerString();
  var words = newStr.split(" ");


  for (var i = 0; i < words.length; i++) {
  	words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);

  };

  return words.join(" ");
}

titleCase("I'm a little tea pot");