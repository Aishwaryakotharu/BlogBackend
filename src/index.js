require("./config/db");
const express = require("express");
const bodyParser = require("body-parser");
const postRouter = require("./routers/postRouter");
const authorRouter = require("./routers/authorRouter");
const adminRouter = require("./routers/adminRouter");

const app = express();

app.set("trust proxy", 1); // trust first proxy
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Blog Backend running!");
});

app.use("/post", postRouter);
app.use("/authors", authorRouter);
app.use("/admin", adminRouter);

const server = app.listen(8080, () => {
  console.log("Server running on port: " + server.address().port);
});