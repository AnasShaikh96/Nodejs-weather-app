const request = require("request");

const weatherUrl =
  "https://api.weatherapi.com/v1/current.json?key=dfcc4dae9fbf4332a11152309211007&q=mumbai&aqi=no";

const forecastUrl =
  "https://api.weatherapi.com/v1/forecast.json?key=dfcc4dae9fbf4332a11152309211007&q=mumbai";

const geocodeUrl =
  "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiYW5hczk2OTkiLCJhIjoiY2txeXRicTQ0MDl6cTMwbW40bHQzMDFqeiJ9.1z_usGG57eP_PSHAAC5JjA";

request({ url: weatherUrl, json: true }, (error, response) => {
  const data = response.body.current;
});

request({ url: forecastUrl, json: true }, (error, response) => {
  console.log(
    response.body.forecast["forecastday"][0]["day"]["daily_chance_of_rain"]
  );
});

request({ url: geocodeUrl, json: true }, (error, response) => {
  const latitude = response.body.features[0]["center"][1];
  const longitude = response.body.features[0]["center"][0];
});
