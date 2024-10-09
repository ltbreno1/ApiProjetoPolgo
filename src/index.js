const dotenv = require("dotenv");
const express = require("express");
const mongoose = require("mongoose");
const winnerRoutes = require("./routes/winnerRoutes");
const cors = require('cors');

const corsOptions = {
    credentials: true,
    origin: '*'
}

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors(corsOptions));

mongoose.connect(process.env.MONGO_CONEXAO);

// rota exemplo
app.get("/", (req, res) => {
  return res.send("Hello World!");
});

// usando o routes
app.use("/winners", winnerRoutes);

app.listen(process.env.PORT || 3000, () => {
  console.log("excutando na porta 3000");
});

