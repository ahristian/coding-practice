function backAround(str){
  let lastLetter, newWord;
  for (let i = 0; i < str.length; i++){
    lastLetter = str[i];
  }
  newWord = lastLetter + str + lastLetter;
  return newWord;
}
console.log(backAround('car'));