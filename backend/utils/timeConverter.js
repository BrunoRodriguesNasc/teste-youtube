export default function timeConverter(time) {
  let hour = [];
  let minutes = [];
  let seconds = [];
  let allTime = "";
  let convertWithRegex = "";

  const timeConverted = time.map((t) => {
    hour = t.split("H").length > 1 ? t.split("H") : "00";
    minutes = t.split("M").length > 1 ? t.split("M") : "00";
    allTime = `${hour[0]}:${minutes[0]}:${seconds[1]}`;
    convertWithRegex = allTime.replace(/[A-Za-z]/g, "");

    return convertWithRegex;
  });

  const convertTime = timeConverted.map((t) => {
    hours = t.split(":");
    parseHours = parseInt(hours[0]);
    parseMinutes = parseInt(hours[1]);
    return 60 * parseHours + parseMinutes;
  });

  return convertTime;
}
