function countHi(str){
  let count =0;
  for (let i=0; i<str.length; i++){
    if ((str[i] === 'h') && ( str[i+1] === 'i')){
      count ++;
    }
  }
  return count;
}
console.log(countHi('there hi how about hi?'));