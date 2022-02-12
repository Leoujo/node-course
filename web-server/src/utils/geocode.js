const request = require("request");

const geocode = (adress, callback) => {
  //Isso aqui converte caractéres como ? em códigos. impedindo de crashar a aplicação.
  var adressURI = encodeURIComponent(adress);
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${adressURI}.json?access_token=pk.eyJ1IjoibGVvdWpvIiwiYSI6ImNremJ3dzJtMTJpMG0ycG5mM3I2MjdqbjYifQ.PNDdwSyhr0mb-TR0uJsr8w`;

  //url é a mesma coisa que url:url
  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to location services!");
    } else if (body.features.length === 0) {
      callback("Unable to find location. Try another search!");
    } else {
      callback(undefined, {
        latitude: body.features[0].center[1],
        longitude: body.features[0].center[0],
        location: body.features[0].place_name,
      });
    }
  });
};

module.exports = geocode;
