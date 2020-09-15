function makeTags(tag, word){
  if (( tag === 'i') || (tag === 'cite')) {
    return '<i>' + word + '</i>';
  }
  else {
    return word;
  }
}

console.log(makeTags('i', 'Yay'))

