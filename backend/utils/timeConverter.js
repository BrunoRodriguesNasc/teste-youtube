export default function timeConverter(time = []) {
  let hour = [];
  let minutes = [];
  let allTime = "";
  let parseHours = 0;
  let parseMinutes = 0;
  let convertWithRegex = "";
  const timeConverted = time.map((t) => {
    hour = t.split("H").length > 1 ? t.split("H") : "00";
    minutes = t.split("M").length > 1 ? t.split("M") : "00";
    allTime = `${hour[0]}:${minutes[0]}:${minutes[1]}`;
    convertWithRegex = allTime.replace(/[A-Za-z]/g, "");

    return convertWithRegex;
  });

  const convertTime = timeConverted.map((t) => {
    hour = t.split(":");
    parseHours = parseInt(hour[0]);
    parseMinutes = parseInt(hour[1]);
    return 60 * parseHours + parseMinutes;
  });

  return convertTime;
}
