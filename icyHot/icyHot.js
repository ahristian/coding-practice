function icyHot(temp1, temp2){
  if ( temp1 < 0 && temp2 > 100) {
    return true;}
  if ( temp1 > 100 && temp2 < 0) {
    return true;}
  else {
    return false;}
}

console.log(icyHot(120, -1));
console.log(icyHot(-1, 120));