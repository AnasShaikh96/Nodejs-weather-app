const request = require("request");

const weatherUrl =
  "https://api.weatherapi.com/v1/current.json?key=dfcc4dae9fbf4332a11152309211007&q=mumbai&aqi=no";

const forecastUrl =
  "https://api.weatherapi.com/v1/forecast.json?key=dfcc4dae9fbf4332a11152309211007&q=mumbai";

const geocodeUrl =
  "https://api.mapbox.com/geocoding/v5/mapbox.places/mumbai.json?access_token=pk.eyJ1IjoiYW5hczk2OTkiLCJhIjoiY2txeXRicTQ0MDl6cTMwbW40bHQzMDFqeiJ9.1z_usGG57eP_PSHAAC5JjA";

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

request({ url: geocodeUrl, json: true }, (error, response) => {
  if (error) {
    console.log("unable to connect to geocode");
  } else if (response.body.features.length === 0) {
    console.log("unable to find location. Try another search");
  } else {
    const latitude = response.body.features[0]["center"][1];
    const longitude = response.body.features[0]["center"][0];
    console.log(latitude, longitude);
  }
});
