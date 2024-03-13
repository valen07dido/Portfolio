require("dotenv").config();
const {URL_FRONTEND } = process.env;
const express = require("express");
const bodyParser = require("body-parser");
const {PostMessage,getProjects} =require('./src/Handlers/Handler')
const morgan = require("morgan");
var cors = require("cors");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors({ credentials: true, origin: `${URL_FRONTEND}` }));
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

app.post("/send", PostMessage )
app.get('/projects',getProjects)

app.get('/test', (req, res) => {
  res.send('Test route is working');
});
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
