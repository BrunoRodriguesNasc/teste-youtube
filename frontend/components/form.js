export default async function (getVideo) {
  const form = document.querySelector(".form-type");
  const video = document.querySelector("#video");
  let allDays = [];

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    allDays = [];
    for (let i = 1; i <= 7; i++) {
      allDays.push(document.querySelector(`#day-${i}`).value);
    }
    // await searchVideos(video.value);
    getVideo(video.value, allDays);
  });
}
