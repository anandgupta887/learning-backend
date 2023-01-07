const express = require("express");
const path = require("path");

const router = express.Router();

// /admin/add-product => GET
// thats due to filtering in app.js file
router.get("/add-product", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../", "views", "add-product.html"));
});

// /admin/add-product => POST
// thats due to filtering in app.js file
router.post("/add-product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;
