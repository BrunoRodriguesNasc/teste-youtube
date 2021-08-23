async function request(params) {
  let response = await fetch(
    `https://www.googleapis.com/youtube/v3/${params}&key=AIzaSyBFCFt_E5s7JM1JCFSoGgTq7Mm-1EJ41E0&maxResults=5`
  );
  return response.json();
}

export async function getAllVideosById(videos) {
  try {
    const allVideosId = videos.items.map(async (item) => {
      if (!item.id.videoId) {
        return await request(
          `videos?&id=${item.id.channelId}&part=contentDetails`
        );
      }
      return await request(`videos?&id=${item.id.videoId}&part=contentDetails`);
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
      async (item) => await request(`videos?id=${item}&part=snippet `)
    );
    return await Promise.all(response);
  }

  response = await request(`search?part=snippet&q=${video}`);
  return response;
}

export async function getAllInfoVideos(videoId = []) {
  const videosToSearch = videoId.map((id) => {
    return request(`videos?&id=${id}&part=contentDetails`);
  });
  const infoVideos = await Promise.all(videosToSearch);

  return infoVideos;
}
