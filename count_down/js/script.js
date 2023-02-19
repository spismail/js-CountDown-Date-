const endDate = " 22 February 2023 10:30 AM";
document.getElementById("end_date").innerHTML = endDate;

let inputs = document.querySelectorAll("input");

//let clock

function clock() {
  let end = new Date(endDate);
  let now = new Date();
  let diff = (end - now) / 1000;

  /*
1 day = 24h
1 h = 60 min
1 m = 60 s
1 s= 1000 ms
*/
  if (diff < 0) return;

  inputs[0].value = Math.floor(diff / 3600 / 24);
  inputs[1].value = Math.floor((diff / 3600) % 24);
  inputs[2].value = Math.floor((diff / 60) % 60);
  inputs[3].value = Math.floor(diff) % 60;
}
clock();

setInterval(() => {
  clock();
}, 1000);
