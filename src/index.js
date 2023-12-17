function showCitiesTime() {
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
  let sydneyElement = document.querySelector("#sydney");
  if (sydneyElement) {
    let sydneyDateElement = sydneyElement.querySelector(".current-date");
    let sydneyTimeElement = sydneyElement.querySelector(".current-time");
    let sydneyCurrentDate = moment()
      .tz("Australia/Sydney")
      .format("dddd Do MMM YYYY");
    let sydneyCurrentTime = moment()
      .tz("Australia/Sydney")
      .format("h:mm:ss [<small>]A[</small>]");

    sydneyDateElement.innerHTML = sydneyCurrentDate;
    sydneyTimeElement.innerHTML = sydneyCurrentTime;
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

showCitiesTime();
setInterval(showCitiesTime, 1000);

let citySelectElement = document.querySelector("#city-select");
citySelectElement.addEventListener("change", updateCity);
