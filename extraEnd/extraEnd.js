function extraEnd(str){
  let lastTwoLetters = [];
  let repeat3X = [];

  for (let i = str.length - 2; i < str.length; i++){
    lastTwoLetters += str[i];
  }
  for (let b=0; b < 3; b++){
    repeat3X += lastTwoLetters;
  }
console.log(repeat3X);
}
extraEnd('Hello')