export default async function (searchVideos) {
  const form = document.querySelector(".container");
  const video = document.querySelector("#video");
  let allDays = [];

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    allDays = [];
    for (let i = 1; i <= 7; i++) {
      allDays.push(document.querySelector(`#day-${i}`).value);
    }
    await searchVideos(video.value);
  });
  
}
