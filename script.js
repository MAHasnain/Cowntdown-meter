const endDate = "1 jan 2024 00:00 AM";

// document.getElementById("end-date").innerText = endDate;
const inputs = document.querySelectorAll("input");

function clock() {
  const end = new Date(endDate);
  const now = new Date();
  const diffnc = (end - now) / 1000;

  if (diffnc < 0) return;
  inputs[0].value = Math.floor(diffnc / 3600 / 24);
  inputs[1].value = Math.floor((diffnc / 3600) % 24);
  inputs[2].value = Math.floor((diffnc / 60) % 60);
  inputs[3].value = Math.floor(diffnc) % 60;
}

clock();

setInterval(() => {
  clock();
}, 1000);
/*
    1 day = 24 hrs
    1 hr = 60 min
    60 mins = 3600 secs

*/
