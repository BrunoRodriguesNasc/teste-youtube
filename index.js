const button = document.querySelector(".btn-submit");
let allDays = [];
const data = [];
const video = document.querySelector("#video");

button.addEventListener("click", async (e) => {
  e.preventDefault();
  allDays = [];
  for (let i = 1; i <= 7; i++) {
    allDays.push(document.querySelector(`#day-${i}`).value);
  }
  const data = await searchVideos(video.value);
});

const request = (params,part) => {
  return fetch(`https://www.googleapis.com/youtube/v3/search?${part}&key=AIzaSyBFCFt_E5s7JM1JCFSoGgTq7Mm-1EJ41E0&${params}&maxResults=10`);
}


async function searchVideos(title) {
  const response = await request(`&q=${title}`,'part=snippet');
  const videos = await response.json();
  return getAllVideosById(videos);
}

async function getAllVideosById(videos) {
  try {
    const allVideosId = videos.items.map(({ id }) => {
     if(!id.videoId){
       console.log(id);
       return request(`id=${id.channelId}`,'part=contentDetails');
     };
     console.log(id.videoId);
     return request(`id=${id.videoId}`,'part=contentDetails');
    });

    return getAllInfoVideos(allVideosId);
  } catch (error) {
      console.log(error);
  }
}

async function getAllInfoVideos(videoId){
 const infoVideos =  await Promise.all(videoId);
 console.log(infoVideos);
}


//COMO JOGAR CONTRA FIORA - TUTORIAL DE A - Z

