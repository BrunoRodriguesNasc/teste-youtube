"use strict";
import request from "supertest";
import processWords from "../utils/processWords";
import convertTime from "../utils/convertTime";
import calculateTime from "../utils/calculateTime";
import { searchVideos } from "../model/model.js";
import { getAllVideosById } from "../model/model.js";
import { getAllInfoVideos } from "../model/model.js";
import "babel-polyfill";

const DAYS_DURATION_FOR_VIDEO = [20, 10, 30, 10, 10, 10, 10];
const VIDEO_DURATION = [20, 10, 30, 10, 10, 10, 10];

const valueCalc = calculateTime(DAYS_DURATION_FOR_VIDEO, VIDEO_DURATION);
const TEST_MOST_WORDS = [
  "FOO FOO FOO FOO BA BA a a a a a ameixa carne carne carne",
];

const WORDS_EXPECTED = [
  ["a", 5],
  ["FOO", 4],
  ["carne", 3],
  ["BA", 2],
  ["ameixa", 1],
];
const time = ["PT5M24S", "PT3H20S"];
const expectedTime = [5, 180];

test("espera que a funcão retorne o array com os mesmos valores na mesma ordem", () => {
  expect(processWords(TEST_MOST_WORDS)).toEqual(WORDS_EXPECTED);
});

test("espera receber uma hora convertida ", async () => {
  const convert = await convertTime(time);
  expect(convert).toEqual(expectedTime);
});

test("espera que a funcão retorne o array com os mesmos valores e ordem ", () => {
  expect(processWords(TEST_MOST_WORDS)).toEqual(WORDS_EXPECTED);
});

test("valueCalc espera receber o numero 7 ", () => {
  expect(valueCalc).toBe(7);
});

test("Deve receber 5 videos ", async () => {
  await request("https://www.googleapis.com/youtube/v3")
    .get(
      "/search?part=snippet&q=sherek%202&key=AIzaSyBFCFt_E5s7JM1JCFSoGgTq7Mm-1EJ41E0&maxResults=5"
    )
    .expect(200);
});
