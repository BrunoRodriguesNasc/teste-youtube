import inicialize from "../../frontend/components/form.js";
import { searchVideos } from "../model/model.js";
import { getAllVideosById } from "../model/model.js";
import { getAllInfoVideos } from "../model/model.js";
import convertTime from "../utils/convertTime.js";
import calculateTime from "../utils/calculateTime.js";
import durationVideoInfo from "../../frontend/components/durationVideo.js";
import filterVideos from "../utils/filterVideos.js";
import processWords from "../utils/processWords.js";
import mostWord from "../../frontend/components/mostWords.js";

export function init() {
  inicialize(getVideos);
}

async function getVideos(video, allDays) {
  const allVideos = await searchVideos(video);
  const videosID = await getAllVideosById(allVideos);
  await getAllWordsFromVideos(videosID, false);

  return await getAllInfoVideosByIdAndDays(videosID, allDays);
}

async function getAllInfoVideosByIdAndDays(videoId, allDays) {
  return await convertTimeFromVideo(await getAllInfoVideos(videoId), allDays);
}

async function getAllWordsFromVideos(infoVideos, isVideo) {
  return await getTitleAndDescription(await searchVideos(infoVideos, isVideo));
}

async function setTimeTotal(convertedTime, days) {
  const filteredVideos = filterVideos(convertedTime, days);
  const time = calculateTime(filteredVideos, days);
  return durationVideoInfo(time);
}

async function setMostWord(words) {
  return mostWord(processWords(words));
}

async function getTitleAndDescription(words) {
  return setMostWord(words);
}

async function convertTimeFromVideo(videosDuration, days) {
  const durations = await convertTime(videosDuration);
  return setTimeTotal(durations, days);
}
