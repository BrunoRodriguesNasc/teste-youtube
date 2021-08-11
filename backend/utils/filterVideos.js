export default function (videos, days) {
  if(videos === undefined){
    return [];
  }
  console.log(videos);
  console.log(days);
  const maxDays = Math.max(...days);

  const filter = videos.filter((dur) => dur <= maxDays);
  console.log(filter);
  return filter;


}
