function doubleX(str){
  if (str.length > 0) {
    for (let i=0; i<str.length; i++){
      if ((str[i] === 'x') && (str[i + 1] === 'x')){
        return true;}
      else {
        return false;
      }
    }
  }
  else {return false;}
}
console.log(doubleX('axx'))