function countCode(str){
let codeWord = "code";
let count = 0;
for (let i=0; i < str.length; i++) {
  if ((str[i] === codeWord[0]) && (str[i+1] === codeWord[1]) && (str[i+3] === codeWord[3])){
    count ++;
  }
}
console.log(count);
}
countCode('codexxcode');