function findLongestWord(str) {
var arr = [];
arr = str.split(" ");
var a = 0;
var maxLength = 0;

for (var i = 0; i < arr.length; i++) {
    if (arr[i].length > maxLength) {
        maxLength = arr[i].length;
    }
}

return maxLength;
}
findLongestWord("The quick brown fox jumped over the lazy dog");
