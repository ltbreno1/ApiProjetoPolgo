const mongoose = require("mongoose");

const winnerSchema = new mongoose.Schema({
  name: String,
  prize: String,
  date: String,
});

const Winner = mongoose.model("Winner", winnerSchema);

module.exports = Winner;