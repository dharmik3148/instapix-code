const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const instaRoute = require("./routes/insta.route");

app.use("/api", instaRoute);

app.use((req, res) => {
  return res.status(404).send({ status: "false" });
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});

module.exports = app;
