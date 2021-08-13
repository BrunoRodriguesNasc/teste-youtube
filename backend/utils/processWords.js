export default function processWords(words = []) {
  return filterAndOrderWords(
    transformToArray(
      countTotalWords(
        wordsToArray(
          words
            .filter((itens) => itens.items != "")
            .map((item) => {
              return [
                item.items[0].snippet.title,
                item.items[0].snippet.description,
              ];
            })
        )
      )
    )
  );
}

function wordsToArray(words) {
  const PONCTUATION_REGEX = /([.,\/#!$%\^&\*;:{}=\-_`~()])/g;
  return words.toString().replace(PONCTUATION_REGEX, "");
}

function countTotalWords(wordsArray) {
  return wordsArray.split(" ").reduce((allWords, words) => {
    if (words in allWords) {
      allWords[words]++;
    } else {
      allWords[words] = 1;
    }
    return allWords;
  }, {});
}

function transformToArray(countWords) {
  return Object.entries(countWords);
}

function filterAndOrderWords(words) {
  return words
    .filter((word) => word[0] !== "")
    .sort((a, b) => {
      if (a[1] > b[1]) return -1;
      if (a[1] < b[1]) return 1;
      return 0;
    })
    .splice(0, 5);
}
