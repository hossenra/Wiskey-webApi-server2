const express = require('express')
const cors = require("cors");
const app = express();
app.use(cors());
require("dotenv").config();
const port = process.env.PORT || 3033;
const {readdirSync} = require("fs");


readdirSync("./routes").map((file) => app.use("/", require("./routes/"+file)))


app.get('/', (req, res) => {
  res.send('Main page')
});


app.listen(port, () => {
  console.log(`Wiskey web-api server is listening on port: ${port}`)
});