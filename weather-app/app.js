const forecast = require("./utils/forecast");
const geocode = require("./utils/geocode");

const adress = process.argv[2];

if (!adress) {
  return console.log("Please provide an address");
}

//Data was destructured.
geocode(adress, (error, { latitude, longitude, location } = { }) => {
  if (error) {
    return console.log(error);
  }

  forecast(latitude, longitude, (error, forecastData) => {
    if (error) {
      return console.log(error);
    }
    console.log(location);
    console.log(forecastData);
  });
});


