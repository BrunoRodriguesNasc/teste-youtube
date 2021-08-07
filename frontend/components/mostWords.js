export default function (words = []) {
  words.flatMap((wordsAndNumber) => {
    document.body.innerHTML += `
    <h2>A palavra  ${wordsAndNumber[0]} apareceu em um total de ${wordsAndNumber[1]} vezes </h2>
  `;
  });
}
