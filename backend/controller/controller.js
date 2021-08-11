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
  const infoVideos = videosID
    .filter((ids) => ids.items != "")
    .map((id) => {
      return id.items[0].id;
    });

  await getAllWordsFromVideos(infoVideos, false);

  return await getAllInfoVideosByIdAndDays(infoVideos, allDays);
}

async function getAllInfoVideosByIdAndDays(videoId, allDays) {
  const itens = await getAllInfoVideos(videoId);  
  return await convertTimeFromVideo(itens, allDays);
}

async function getAllWordsFromVideos(infoVideos, isVideo) {
  const words = await searchVideos(infoVideos, isVideo);
  return await getTitleAndDescription(words);
}

async function setTimeTotal(convertedTime, days) {
  const filterDuration = filterVideos(convertedTime, days);

  console.log(filterDuration);
  const totalDias =  await calTime(filterDuration, days);
  return durationVideoInfo(totalDias);
}

async function setMostWord(words) {
  mostWord(filterWords(words));
}

async function getTitleAndDescription(words) {
  const titleAndDescription = words
    .filter((itens) => itens.items != "")
    .map((item) => {
      return [item.items[0].snippet.title, item.items[0].snippet.description];
    });
  return setMostWord(titleAndDescription);
}

function convertTimeFromVideo(videosDuration,days) {

  const durations = videosDuration.filter(duration => duration.items[0] !== undefined).map((duration) => {
    return duration.items[0].contentDetails.duration;
  });
  const durationsConverter = timeConverter(durations);

  return setTimeTotal(durationsConverter,days);
}

