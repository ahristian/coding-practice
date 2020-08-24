function front22(str){
  if (str.length < 2) {
    return str + str + str;}
  else {
    let first2, newStr;
    for (let i = 0; i < 1; i++) {
      first2 = str[i];
      first2 += str[i + 1];
    }
    newStr = first2 + str + first2;
    return newStr;
  }
}
console.log(front22("ha"))