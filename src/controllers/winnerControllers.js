// controllers/winnerController.js
const Winner = require("../models/winner");

// Create
const createWinner = async (req, res) => {
  try {
    const winner = new Winner({
      name: req.body.name,
      prize: req.body.prize,
      date: req.body.date,
    });

    await winner.save();
    return res.status(201).send(winner);
  } catch (error) {
    return res.status(400).send(error);
  }
};

// Read
const getWinners = async (req, res) => {
  try {
    const winners = await Winner.find();
    return res.status(200).send(winners);
  } catch (error) {
    return res.status(500).send(error);
  }
};

// Delete
const deleteWinner = async (req, res) => {
  try {
    const winner = await Winner.findByIdAndDelete(req.params.id);
    if (!winner) {
      return res.status(404).send({ message: "Winner not found" });
    }
    return res.status(200).send(winner);
  } catch (error) {
    return res.status(500).send(error);
  }
};

module.exports = { //pra poder utilizar em outros arquivos
  createWinner,
  getWinners,
  deleteWinner,
};