"use strict";
import processWords from "./processWords";
import "babel-polyfill";

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
test("should ", () => {
  expect(processWords(TEST_MOST_WORDS)).toEqual(WORDS_EXPECTED);
});

console.log(WORDS_EXPECTED);
