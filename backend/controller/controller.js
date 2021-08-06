import inicialize from "../../frontend/components/form.js";
import { searchVideos } from "../model/model.js";
import { getAllVideosById } from "../model/model.js";
import { getAllInfoVideos } from "../model/model.js";
import nameVideos from "../../frontend/components/durationVideo.js";

export function init() {
  inicialize(getVideos);
}

async function getVideos(video) {
  const allVideos = await searchVideos(video);
  const videosID = await getAllVideosById(allVideos);
  const itens = await getAllInfoVideos(videosID);
  nameVideos(itens);
}

const time = "PT1H1M11S";

const hour = time.split("H");
const minutes = hour[1].split("M");
const seconds = minutes[1];
const allTime = `${hour[0]}:${minutes[0]}:${seconds}`;
const regex = allTime.replace(/[A-Za-z]/g, "");
console.log(regex);
