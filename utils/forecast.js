const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url =
    "https://api.weatherapi.com/v1/forecast.json?key=dfcc4dae9fbf4332a11152309211007&q=" +
    latitude +
    "," +
    longitude;
  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("unable to connect to forecast services", undefined);
    } else if (body.error) {
      callback("unable to find location", undefined);
    } else {
      callback(undefined, body.forecast["forecastday"][0]["day"]["mintemp_c"]);
    }
  });
};

module.exports = forecast;
