export default function (words = []) {
  const containerText = document.body.querySelector(".container-text");
  containerText.textContent = "";
  words.flatMap((wordsAndNumber) => {
    containerText.innerHTML += `
    <h2>A palavra ( ${wordsAndNumber[0]} ) apareceu em um total de ( ${wordsAndNumber[1]} ) vezes </h2>
  `;
  });
}
