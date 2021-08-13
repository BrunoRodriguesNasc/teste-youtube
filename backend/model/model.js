async function request(params, part, type) {
  let response = await fetch(
    `https://www.googleapis.com/youtube/v3/${type}?${part}&key=AIzaSyBFCFt_E5s7JM1JCFSoGgTq7Mm-1EJ41E0${params}&maxResult=200`
  );
  return response.json();
}

export async function getAllVideosById(videos) {
  try {
    const allVideosId = videos.items.map(async (item) => {
      if (!item.id.videoId) {
        return await request(
          `&id=${item.id.channelId}`,
          "part=contentDetails",
          "videos"
        );
      }
      return await request(
        `&id=${item.id.videoId}`,
        "part=contentDetails",
        "videos"
      );
    });

    const videosPerId = await Promise.all(allVideosId);
    return videosPerId;
  } catch (error) {
    console.log(error);
  }
}

export async function searchVideos(video, isVideo = true) {
  let response = "";

  if (!isVideo) {
    response = video.map(
      async (item) => await request(`&id=${item}`, "part=snippet", "videos")
    );
    return await Promise.all(response);
  }

  response = await request(`&q=${video}`, "part=snippet", "search");
  return response;
}

export async function getAllInfoVideos(videoId = []) {
  const videosToSearch = videoId.map((id) => {
    return request(`&id=${id}`, "part=contentDetails", "videos");
  });
  const infoVideos = await Promise.all(videosToSearch);

  return infoVideos;
}
// https://youtube.googleapis.com/youtube/v3/videos?part=contentDetails&id=L6iiw88JUOQ&maxResults=200&key=[YOUR_API_KEY] HTTP/1.1
