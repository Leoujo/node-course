const request = require("request");


const forecast = (latitude, longitude, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=98ebc888bc59210beebc4f35a2a9a992&query=${latitude},${longitude}`;

  //url é a mesma coisa que url:url
  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather service!");
    } else if (body.error) {
      callback("Unable to find location");
    } else {
      var data = body.current;

      callback(
        undefined,
        `${data.weather_descriptions[0]}. It's currently ${data.temperature} degress out. But it feels like ${data.feelslike}.`
      );
    }
  });
};

module.exports = forecast;
