function highAndLow (numbers) {
  let newArray = [];
  newArray.push(numbers[0])
  for (let b = 0; b < numbers.length; b++) {

   if ((numbers[b] === ' ') && (numbers[b+2] === ' ')) {
    newArray.push(numbers[b+1]);
  }
    if ((numbers[b] === ' ') && (numbers[b+2] !== ',')  && (numbers[b+3] === ',')) {
      newArray.push(numbers[b+1]+ numbers[b+2]);
    }
    if ((numbers[b] === ' ') && (numbers[b+2] !== ',')  && (numbers[b+3] !== ',') && (numbers[b+4] === ',')) {
      newArray.push(numbers[b+1]+ numbers[b+2] + numbers[b+3]);
    }
    if ((numbers[b] === ' ') && (numbers[b+2] !== ',')  && (numbers[b+3] !== ',') && (numbers[b+4] !== ',') && (numbers[b+5] === ',')) {
      newArray.push(numbers[b+1]+ numbers[b+2] + numbers[b+3] + numbers[b+4]);
    }
  }
  newArray.push(numbers[numbers.length -2] + numbers[numbers.length-1]);

  console.log(newArray)

  let highNumber = 0;
  let lowNumber = 0;

  for (let i = 0; i < newArray.length; i++) {
      if (newArray[i] > highNumber) {
        highNumber = newArray[i];
      }
      if (lowNumber > newArray[i]) {
        lowNumber = newArray[i];
      }
    }
    console.log(highNumber, lowNumber)

}

highAndLow("4, 5, 29, 54, 4, 0, -214, 542, -64, 1, -3, 6, -6");