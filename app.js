const request = require("request");
const geocode = require("./utils/geocode");

const weatherUrl =
  "https://api.weatherapi.com/v1/current.json?key=dfcc4dae9fbf4332a11152309211007&q=mumbai&aqi=no";

const forecastUrl =
  "https://api.weatherapi.com/v1/forecast.json?key=dfcc4dae9fbf4332a11152309211007&q=mumbai";

// request({ url: weatherUrl, json: true }, (error, response) => {
//   const data = response.body.current;
// });

// request({ url: forecastUrl, json: true }, (error, response) => {
//   if (error) {
//     console.log("unable to connect to weather service");
//   } else if (response.body.error) {
//     console.log("unale to find location");
//   } else {
//     console.log(
//       response.body.forecast["forecastday"][0]["day"]["daily_chance_of_rain"]
//     );
//   }
// });

// request({ url: geocodeUrl, json: true }, (error, response) => {
//   if (error) {
//     console.log("unable to connect to geocode");
//   } else if (response.body.features.length === 0) {
//     console.log("unable to find location. Try another search");
//   } else {
//     const latitude = response.body.features[0]["center"][1];
//     const longitude = response.body.features[0]["center"][0];
//     console.log(latitude, longitude);
//   }
// });

//
// Goal: Create a reusable function for getting the forecast
//
// 1. Setup the "forecast" function in utils/forecast.js
// 2. Require the function in app.js and call it as shown below
// 3. The forecast function should have three potential calls to callback:
//    - Low level error, pass string for error
//    - Coordinate error, pass string for error
//    - Success, pass forecast string for data (same format as from before)

forecast(-75.7088, 44.1545, (error, data) => {
  console.log("Error", error);
  console.log("Data", data);
});

geocode("manhattan", (error, data) => {
  if (error) {
    console.log(error);
  } else {
    console.log(data);
  }
});
