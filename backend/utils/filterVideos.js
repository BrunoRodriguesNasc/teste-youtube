export default function (videos, days) {
  if (videos === undefined) {
    return [];
  }
  const maxDays = Math.max(...days);

  const filter = videos.filter((dur) => dur <= maxDays);
  return filter;
}
