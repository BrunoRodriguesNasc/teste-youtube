export default async function (getVideo) {
  const form = document.querySelector(".form-type");
  const video = document.querySelector("#video");
  let allDays = [];

  let durations = [
    "0:30:30",
    "0:20:30",
    "0:30:30",
    "0:40:30",
    "0:50:30",
    "0:20:30",
    "0:30:30",
    "0:30:30",
    "1:10:30",
  ];

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    allDays = [];
    for (let i = 1; i <= 7; i++) {
      allDays.push(document.querySelector(`#day-${i}`).value);
    }
    // await searchVideos(video.value);
    getVideo(durations, allDays);
  });
}
