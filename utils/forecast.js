const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url =
    "https://api.weatherapi.com/v1/forecast.json?key=dfcc4dae9fbf4332a11152309211007&q=" +
    latitude +
    "," +
    longitude;
  request({ url, json: true }, (error, response) => {
    if (error) {
      callback("unable to connect to forecast services", undefined);
    } else if (response.body.error) {
      callback("unable to find location", undefined);
    } else {
      callback(undefined, {
        location: response.body.location.name,
      });
    }
  });
};

module.exports = forecast;
