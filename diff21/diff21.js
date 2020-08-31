function diff21(n){
  if (n <= 21)
  {diffresult = 21 - n;
    return diffresult;}

  if (n > 21){
    absReturn= Math.abs(21 - n);
    return absReturn + absReturn;
  }
}
console.log(diff21(19))