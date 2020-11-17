function catDog(str){

  let cat = 'cat';
  let dog = 'dog';
  let countCat = 0;
  let countDog = 0;

  for (let i = 0; i < str.length; i++) {
    if ((str[i] === cat[0]) && (str[i+1] === cat[1]) && (str[i+2] === cat[2])) {
      countCat ++;
    }
    if ((str[i] === dog[0]) && (str[i+1] === dog[1]) && (str[i+2] === dog[2])) {
      countDog ++;
    }
  }
  console.log(countCat);
  console.log(countDog);
  if (countCat === countDog) {
    console.log(true);
  }
  else {
    console.log(false);
  }
}
catDog('1cat1cadodog')