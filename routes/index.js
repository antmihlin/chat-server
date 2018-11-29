const express = require("express");
const router = express.Router();
router.get("/", (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Access-Control-Allow-Credentials', 'false');
  res.send({ response: "I am alive" }).status(200);
});

router.post("/", (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Access-Control-Allow-Credentials', 'false');
  res.send({ response: "I am alive" }).status(200);
});

module.exports = router;