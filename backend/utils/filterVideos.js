export default function (videos, days) {
  const maxDays = Math.max(...days);

  const filter = videos.filter((dur) => dur <= maxDays);
  return filter;
}
