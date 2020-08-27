function withoutString(base, remove){
  let arrayBase = [];
  for (let i=0; i<base.length; i++){

    if ((base[i] === remove[0]) && (base[i + 1] === remove[1]) && (base[i + 2] === remove[2])) {
      arrayBase += '';}
    if ((base[i] === remove[0]) && (base[i + 1] === remove[1])) {
      arrayBase += '';}
    if (base[i] === remove[0]) {
      arrayBase += '';}
    else {
      arrayBase += base[i];
    }
  }
  return arrayBase;
}
console.log(withoutString('Hello there', 'e'))