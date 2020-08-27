function countYZ(str) {
  let count = 0;
  let strLen;
  for (let i = 0; i < str.length; i++) {
    if (((str[i] === ' ') || (str[i] === ':') || (str[i] === '-'))&& ((str[i - 1] === 'y') || (str[i - 1] === 'z'))) {
      count++;
    }
    if (((str[0] === 'y') || (str[0] === 'z')) && ((str[str.length] === 'y') || (str[str.length] === 'z'))) {
      count++;
    }
    strLen = str[i];
  }
  if ((strLen === 'y') || (strLen === 'z')) {
    count+=1;
  }
  return count;
  }

console.log(countYZ('day fez'));