import inicialize from "../../frontend/components/form.js";
import { searchVideos } from "../model/model.js";
import { getAllVideosById } from "../model/model.js";
import { getAllInfoVideos } from "../model/model.js";
import timeConverter from "../utils/timeConverter.js";
import calTime from "../utils/calTime.js";
import durationVideoInfo from "../../frontend/components/durationVideo.js";
import filterVideos from "../utils/filterVideos.js";
import filterWords from "../utils/filterWords.js";
import mostWord from "../../frontend/components/mostWords.js";

export function init() {
  inicialize(getVideos);
}

async function getVideos(video, allDays) {
  const allVideos = await searchVideos(video);
  const videosID = await getAllVideosById(allVideos);
  const infoVideos = videosID.map((id) => {
    if (id.items.length == 0) {
      return "";
    }
    return id.items[0].id;
  });
  const words = await searchVideos(infoVideos, false);
  const itens = await getAllInfoVideos(videosID);

  const convertedTime = itens.map((duration) => {
    let content = [];
    content.push(duration[0] ? duration[0].contentDetails.duration : []);

    return timeConverter(content);
  });

  const titleAndDescription = words.map((item) => {
    return [item.items[0].snippet.title, item.items[0].snippet.description];
  });

  setMostWord(titleAndDescription);
  return setTimeTotal(convertedTime, allDays);
}

async function setTimeTotal(convertedTime, days) {
  const filterDuration = filterVideos(convertedTime, days);

  const totalDias = await calTime(filterDuration, days);
  durationVideoInfo(totalDias);
}

async function setMostWord(words) {
  mostWord(filterWords(words));
}
