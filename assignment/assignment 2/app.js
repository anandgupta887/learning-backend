const express = require("express");

const app = express();

// app.use((req, res, next) => {
//   console.log("First funnel");
//   next();
// });

// app.use((req, res, next) => {
//   console.log("Second funnel");
//   res.write("<h1>Hello</h1>");
// });

app.use("/users", (req, res, next) => {
  res.write("<h1>You are in users page</h1>");
});
app.use("/", (req, res, next) => {
    res.write('<h1>You are in home page</h1>')
});

app.listen(3000);