function palindrome(str) {
  // Code compares letters at each end of the word and moves inwards
  // once it encounters different letters in any position, it returns false
  // regular expression to clear all specail characters and spaces.
  str = str.replace(/[^a-z0-9]/gi,'');
  str = str.toLowerCase();


  var endLetter = str.length -1;
    for (var i = 0; i < str.length; i++) {
        if (str[i] !== str[endLetter]) {
            return false;
        }
        endLetter--;
    }

    return true;

}

palindrome("eye");