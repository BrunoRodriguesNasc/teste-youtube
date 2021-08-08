export default function filterWords(words = []) {
  const wordsArray = words
    .toString()
    .replace(/([.,\/#!$%\^&\*;:{}=\-_`~()])/g, "");

  const counts = wordsArray.split(" ").reduce((allWords, words) => {
    if (words in allWords) {
      allWords[words]++;
    } else {
      allWords[words] = 1;
    }
    return allWords;
  }, {});

  const mostWord = Object.entries(counts);

  let numberMostWord = Object.values(counts);

  numberMostWord = Math.max(...numberMostWord);

  const filterArray = mostWord.sort((a, b) => {
    if (a[1] > b[1]) return -1;
    if (a[1] < b[1]) return 1;
    return 0;
  });

  return filterArray.splice(0, 5);
}