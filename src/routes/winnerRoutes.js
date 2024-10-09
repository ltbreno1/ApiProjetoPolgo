const express = require("express");
const router = express.Router(); //sistema de roteamento que organiza as rotas da aplicação
const winnerController = require("../controllers/winnerControllers");  

// Create
router.post("/", winnerController.createWinner); 

// Read
router.get("/", winnerController.getWinners);

// Delete
router.delete("/:id", winnerController.deleteWinner); //quando fizer uma requisição delte ele vai pegar tudo o que vier na frente do barra e vai executar a função

module.exports = router;