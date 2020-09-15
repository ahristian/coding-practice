function makeOutWord(out, word) {
  if (out.length === 4) {
    for (let i = 0; i < out.length; i++) {
      return out[0] + out[1] + word + out[2] + out[3];
    }
  }
}
  console.log(makeOutWord('[[]]', 'word'));