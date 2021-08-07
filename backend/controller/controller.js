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

let words = [
  `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio,
eum suscipit maiores impedit magni debitis aperiam hic facilis sequi
voluptatum dolores! Possimus tempore ex aliquid dolores similique rerum
blanditiis saepe! Lorem, ipsum dolor sit amet consectetur adipisicing
elit. Distinctio, eum suscipit maiores impedit magni debitis aperiam hic
facilis sequi voluptatum dolores! Possimus tempore ex aliquid dolores
similique rerum blanditiis saepe! Lorem, ipsum dolor sit amet
consectetur adipisicing elit. Distinctio, eum suscipit maiores impedit
magni debitis aperiam hic facilis sequi voluptatum dolores! Possimus
tempore ex aliquid dolores similique rerum blanditiis saepe!`,
];

export function init() {
  inicialize(getVideos);
}

async function getVideos(video, allDays) {
  // const allVideos = await searchVideos(video);
  // const videosID = await getAllVideosById(allVideos);
  // const itens = await getAllInfoVideos(videosID);
  // const convertedTime = itens.map((duration) => {
  //   return timeConverter(duration[0].contentDetails.duration);
  // });
  // setTimeTotal(convertedTime, allDays);
  setMostWord(words);
}

async function setTimeTotal(convertedTime, days) {
  const filterDuration = filterVideos(convertedTime, days);
  const totalDias = await calcTimeTotal(filterDuration, days);
  durationVideoInfo(totalDias);
}

async function setMostWord(words) {
  mostWord(filterWords(words));
}
