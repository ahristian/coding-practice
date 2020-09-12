function parrotTrouble(talking, hour){
  if( hour < 7 && talking === true) {
    return true;}
  if ( hour > 20 && talking === true) {
    return true;}
  else { return false}
}

console.log(parrotTrouble(true, 6))
