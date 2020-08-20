function frontBack(str){
  let newString, lastString, newStr;
  let stringLength = str.length;
  let repeat =[];
  if (stringLength < 1) {
    return str;
  }
  if (stringLength < 3) {
    return str.charAt(1) + str.charAt(0);
  }
  if (stringLength > 2) {
    for (var i = 2; i < stringLength; i++){
      lastString = str[i];
      newStr = str.charAt(i-1);
      repeat += newStr;
    }
    newString =  lastString + repeat + str.charAt(0);
  }
   return newString;
}
console.log(frontBack("a"));
console.log(frontBack("ab"));
console.log(frontBack("cat"));
console.log(frontBack("aavj"));
console.log(frontBack("chocholalte"));