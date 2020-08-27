function doubleChar(str){
  let letter = [];
  if ( str === '') {
    return str;}
  else{
    for (let i = 0; i < str.length; i++){
      letter += str[i] + str[i]
    }
    return letter;
  }
}
console.log(doubleChar('home'))