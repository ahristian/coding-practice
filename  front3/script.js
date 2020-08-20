function front3(str){
  let repeat =[];
  let newStr;
  for (let i=0; i<3; i++){
    newStr = str.charAt(i);
    repeat += newStr;
  }
  console.log(repeat.repeat(3));
}


front3( "home");