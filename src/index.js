function showLondonTime() {
  let londonElement = document.querySelector("#london");
  if (londonElement) {
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
}

function showNewYorkTime() {
  let newYorkElement = document.querySelector("#new-york");
  if (newYorkElement) {
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
}

function updateCity(event) {
  let selectedTimeZone = event.target.value;
  if (selectedTimeZone === "current") {
    selectedTimeZone = moment.tz.guess();
  }
  let cityName = selectedTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment()
    .tz(selectedTimeZone)
    .format("h:mm:ss [<small>]A[</small>]");
  let cityDate = moment().tz(selectedTimeZone).format("dddd Do MMM YYYY");
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city">
          <div>
            <h2>${cityName}</h2>
            <div class="current-date">${cityDate}</div>
          </div>
          <div>
            <div class="current-time">${cityTime}</div>
          </div>
          </div>
          <a href="/">All cities</a>
          `;
}

showLondonTime();
showNewYorkTime();
setInterval(showLondonTime, 1000);
setInterval(showNewYorkTime, 1000);

let citySelectElement = document.querySelector("#city-select");
citySelectElement.addEventListener("change", updateCity);
