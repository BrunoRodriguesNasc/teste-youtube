export default function (name) {
  // console.log(name);
  return name.map((items) => {
    // return (document.body.innerHTML += `<h2>${contentDetails.duration}</h2>`);
    console.log(items[0].contentDetails.duration);
  });
}
