const express = require("express");
const app = express();
const { connection } = require("./connection");
const cors = require("cors");
const bodyParser = require("body-parser");


const port = process.env.PORT || 8080;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());


connection();

app.use("/api", require("./routes"));

// For testing purposes
app.get("/", (req, res) => {
  return res.json({message:"Welcome Home Buddy!"});
});

// listening on a port.
app.listen(port, () => console.log(`App listening on port ${port}!`));

module.exports = app;
