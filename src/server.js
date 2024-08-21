const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./helper/db");

require("dotenv").config();

app.use(express.json());
app.use(cors());

const testRoute = require("./routes/testRouter");

app.use("/test", testRoute);


const PORT = process.env.PORT;
app.listen(PORT, async () => {
  try {
      await connection;
      console.log(`Running on server ${PORT}`);
  }
  catch (ex) {
      console.log(ex);
  }
});