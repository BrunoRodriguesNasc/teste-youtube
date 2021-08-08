import inicialize from "../../frontend/components/form.js";
import { searchVideos } from "../model/model.js";
import { getAllVideosById } from "../model/model.js";
import { getAllInfoVideos } from "../model/model.js";
import timeConverter from "../utils/timeConverter.js";
import calcTimeTotal from "../model/calcTimeTotal.js";
import durationVideoInfo from "../../frontend/components/durationVideo.js";
import filterVideos from "../utils/filterVideos.js";
import filterWords from "../utils/filterWords.js";
import mostWord from "../../frontend/components/mostWords.js";
import test from "../../test.json";

export function init() {
  inicialize(getVideos);
}

const obj = test.items;

async function getVideos(video, allDays) {
  // const allVideos = await searchVideos(video);
  // const videosID = await getAllVideosById(allVideos);
  // const infoVideos = videosID.map((id) => {
  //   return id.items[0].id;
  // });
  // const words = await searchVideos(infoVideos, false);
  // const itens = await getAllInfoVideos(videosID);

  // const convertedTime = itens.map((duration) => {
  //   let content = duration[0].contentDetails ? duration[0].contentDetails : [];

  //   return timeConverter(content);
  // });

  const titleAndDescription = obj.map((item) => {
    return [item.snippet.title, item.snippet.description];
  });

  setMostWord(titleAndDescription);
  // return setTimeTotal(convertedTime, allDays);
}

async function setTimeTotal(convertedTime, days) {
  const filterDuration = filterVideos(convertedTime, days);

  const totalDias = await calcTimeTotal(filterDuration, days);
  durationVideoInfo(totalDias);
}

async function setMostWord(words) {
  mostWord(filterWords(words));
}
