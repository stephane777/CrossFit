const express = require("express");
const router = express.Router();

// const fs = require('node:fs');

// try {
//   const data = fs.readFileSync('/Users/steph/test.txt', 'utf8');
//   console.log(data);
// } catch (err) {
//   console.error(err);
// }

router.get("/", (req, res) => {
  res.send("Get all workouts");
});

router.get("/:workoutId", (req, res) => {
  res.send("Get an existing workout");
});

router.post("/", (req, res) => {

  res.send("Create a new workout");
});

router.patch("/:workoutId", (req, res) => {
  res.send("Update an existing workout");
});

router.delete("/:workoutId", (req, res) => {
  res.send("Delete an existing workout");
});

module.exports = router;