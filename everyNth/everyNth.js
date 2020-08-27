function everyNth(str, n){
  let newString = [];
  for (let i = 0; i < str.length; i += n){
    newString += str[i];
  }
  return newString;
}
console.log(everyNth('mirabekasa', 2));