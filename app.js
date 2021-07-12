const request = require("request");
const forecast = require("./utils/forecast");
const geocode = require("./utils/geocode");

const weatherUrl =
  "https://api.weatherapi.com/v1/current.json?key=dfcc4dae9fbf4332a11152309211007&q=mumbai&aqi=no";

const forecastUrl =
  "https://api.weatherapi.com/v1/forecast.json?key=dfcc4dae9fbf4332a11152309211007&q=mumbai";

// request({ url: weatherUrl, json: true }, (error, response) => {
//   const data = response.body.current;
// });

forecast(-75.7088, 44.1545, (error, data) => {
  console.log("Error", error);
  console.log("Data", data);
});

// geocode("manhattan", (error, data) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(data);
//   }
// });
