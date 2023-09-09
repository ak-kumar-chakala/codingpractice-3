const express = require("express");
const addDays = require("date-fns/addDays");

const app = express();
app.listen(3000);

let present_date = new Date();

let updated_date = addDays(present_date, 100);

let date_string = `${updated_date.getDate()}/${
  updated_date.getMonth() + 1
}/${updated_date.getFullYear()}`;

app.get("/", (request, response) => {
  response.send(date_string);
});

module.exports = app;
