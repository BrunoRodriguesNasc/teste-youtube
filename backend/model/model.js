
const request = (params, part) => {
  return fetch(
    `https://www.googleapis.com/youtube/v3/search&key={}&${params}&maxResults=10`
  );
};

async function getAllVideosById(videos) {
  try {
    const allVideosId = videos.items.map(({ id }) => {
      if (!id.videoId) {
        console.log(id);
        return request(`id=${id.channelId}`, "part=contentDetails");
      }
      console.log(id.videoId);
      return request(`id=${id.videoId}`, "part=contentDetails");
    });

    return getAllInfoVideos(allVideosId);
  } catch (error) {
    console.log(error);
  }
}

export default async function searchVideos(title) {
  const response = await request(`&q=${title}`, "part=snippet");
  const videos = await response.json();
  return getAllVideosById(videos);
}

async function getAllInfoVideos(videoId) {
  const infoVideos = await Promise.all(videoId);
  console.log(infoVideos);
}
// https://youtube.googleapis.com/youtube/v3/videos?part=contentDetails&id=L6iiw88JUOQ&maxResults=200&key=[YOUR_API_KEY] HTTP/1.1
