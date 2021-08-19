export default async function convertTime(times = []) {
  return convertTimeToRegex(times);
}

function convertTimeToRegex(times) {
  let hour = [];
  let minutes = [];
  let allTime = "";

  let convertWithRegex = "";
  const timeConverted = times.map((time) => {
    hour = time.split("H").length > 1 ? time.split("H") : "00";
    minutes = time.split("M").length > 1 ? time.split("M") : "00";
    allTime = `${hour[0]}:${minutes[0]}:${minutes[1]}`;
    return (convertWithRegex = allTime.replace(/[A-Za-z]/g, ""));
  });
  return timeParse(timeConverted);
}

function timeParse(times) {
  let parseHours = 0;
  let parseMinutes = 0;
  let hour = [];
  return times.map((time) => {
    hour = time.split(":");
    parseHours = parseInt(hour[0]);
    parseMinutes = parseInt(hour[1]);

    return (60 * parseHours) + parseMinutes;
  });
}
