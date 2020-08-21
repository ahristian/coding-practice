function front3(str){
  let repeat =[];
  for (let i=0; i<3; i++){
    repeat += str.charAt(i);

  }
  console.log(repeat.repeat(3));
}


front3( "home");