export default function (totalDays) {
  const containerText = document.body.querySelector(".container-text");
  containerText.innerHTML += `
    <h2 class="total_days">${totalDays} DIAS </h2>
    `;
}
