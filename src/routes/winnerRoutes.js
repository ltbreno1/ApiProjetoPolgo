const express = require("express");
const router = express.Router(); 
const winnerController = require("../controllers/winnerControllers");  

// Create
router.post("/", winnerController.createWinner); 

// Read
router.get("/", winnerController.getWinners);

// Delete
router.delete("/:id", winnerController.deleteWinner); 

module.exports = router;
