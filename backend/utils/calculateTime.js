export default function calculateTime(duration, days = []) {
  if (duration == [] || days == []) {
    return [];
  }
  let duracaoFaltando = 0;
  let diasVendoFilme = 0;
  let index = 0;
  let arr = [];

  for (let i = 0; i < days.length; ) {
    if (index > duration.length - 1) {
      break;
    }
    duracaoFaltando = duracaoFaltando || days[i];

    while (duracaoFaltando >= 0) {
      duracaoFaltando = duracaoFaltando - duration[index];
      if (duracaoFaltando < 0) {
        continue;
      }
      arr.push(days[i]);
      index++;
    }

    diasVendoFilme++;
    i++;
    if (i > 6) {
      i = 0;
    }
    duracaoFaltando = 0;
  }
  return diasVendoFilme;
}
