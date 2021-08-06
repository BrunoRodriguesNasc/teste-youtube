import inicialize from "../../frontend/components/form.js";
import { searchVideos } from "../model/model.js";
import { getAllVideosById } from "../model/model.js";
import { getAllInfoVideos } from "../model/model.js";
import nameVideos from "../../frontend/components/nameVideos.js";

export function init() {
  inicialize(getVideos);
}

async function getVideos(video) {
  const allVideos = await searchVideos(video);
  const videosID = await getAllVideosById(allVideos);
  const itens = await getAllInfoVideos(videosID);
  nameVideos(itens);
}
