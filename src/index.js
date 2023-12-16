function showLondonTime() {
  let londonElement = document.querySelector("#london");
  let londonDateElement = londonElement.querySelector(".current-date");
  let londonTimeELement = londonElement.querySelector(".current-time");
  let londonCurrentDate = moment()
    .tz("Europe/London")
    .format("dddd Do MMM YYYY");

  let londonCurrentTime = moment()
    .tz("Europe/London")
    .format("h:mm:ss [<small>]A[</small>]");
  londonDateElement.innerHTML = londonCurrentDate;
  londonTimeELement.innerHTML = londonCurrentTime;
}

function showNewYorkTime() {
  let newYorkElement = document.querySelector("#new-york");
  let newYorkDateElement = newYorkElement.querySelector(".current-date");
  let newYorkTimeElement = newYorkElement.querySelector(".current-time");
  let newYorkCurrentDate = moment()
    .tz("America/New_York")
    .format("dddd Do MMM YYYY");
  let newYorkCurrentTime = moment()
    .tz("America/New_York")
    .format("h:mm:ss [<small>]A[</small>]");

  newYorkDateElement.innerHTML = newYorkCurrentDate;
  newYorkTimeElement.innerHTML = newYorkCurrentTime;
}

showLondonTime();
showNewYorkTime();
setInterval(showLondonTime, 1000);
setInterval(showNewYorkTime, 1000);
