const path = require("path");
const express = require("express");
const hbs = require("hbs");
const geocode = require("../../weather-app/utils/geocode");
const forecast = require("../../weather-app/utils/forecast");

//Tudo que usar esse app é coisa do express.
const app = express();

//__dirname é  a pasta atual (src/app.js).
//Define paths for Express config.
const publicDirectoryPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");

//Partials são arquivos hbs reutilizáveis.
const partialsPath = path.join(__dirname, "../templates/partials");

//Setup handlebars engine and views location.
app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

//Setup static directory to serve *
app.use(express.static(publicDirectoryPath));

//Setup routes to serve *
app.get("", (req, res) => {
  res.render("index", {
    title: "Weather App",
    name: "Leozin",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About me",
    name: "Andrew Mead",
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    helpMessage: "This is some helpful text!",
    title: "Help",
    name: "Andrew Mead",
  });
});

app.get("/weather", (req, res) => {
  var addressQuery = req.query.address;
  if (!addressQuery) {
    return res.send({
      error: "An address is required.",
    });
  }

  geocode(addressQuery, (error, geocodeData) => {
    if (error) {
      return res.send({ error });
    }

    //Preferi não fazer destructure do forecastData.
    forecast(geocodeData.latitude, geocodeData.longitude, (error, forecastData) => {
      if (error) {
        return res.send({ error });
      }
      // console.log(location);
      // console.log(forecastData);
      res.send({ location: geocodeData.location, forecast: forecastData, address: addressQuery });
    });
  });

  //Aqui vamos exibir as informações corretas.
  //res.send({ address: req.query.address });
});

app.get("/products", (req, res) => {
  console.log(req.query);
  //req.query = pega as queries passadas, pelo navegador.
  if (!req.query.search) {
    return res.send({
      error: "You must provide a search term",
    });
  }
  res.send({
    products: [],
  });
});

app.get("/help/*", (req, res) => {
  res.render("404", {
    title: "404",
    paragraph: "Article not found.",
    name: "Leonardo Araujo",
  });
});

app.get("*", (req, res) => {
  res.render("404", {
    title: "404",
    paragraph: "Page not found.",
    name: "Leonardo Araujo",
  });
});

app.listen(3000, () => {
  console.log("Server is up on port 3000");
});
