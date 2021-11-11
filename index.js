const express = require("express");
const axios = require("axios");
var cors = require("cors");

const app = express();
app.use(cors());

app.get("*", function (req, res) {
  console.log("Request", req.method, req.url);

  // let baseUrl = "https://earthquake.usgs.gov";
  let baseUrl = "https://api.logair.unige.ch";
  let url = baseUrl + req.url;
  console.log("url", url);
  axios
    .get(url)
    .then((response) => {
      console.log("response:", response.data);
      res.json(response.data);
    })
    .catch((error) => {
      console.log("error", error);
    });
});

const server = app.listen(3000);
