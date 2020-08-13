function generateHashtag(str) {
  const words = str
    .split(' ')
    .map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .filter((word) => {
      return word !== '';
    });

  const newWords = words.join('');

  if (newWords.length > 140 || newWords === '' || str === '') {
    return false;
  }
  return '#' + newWords;
}
