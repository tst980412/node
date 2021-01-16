const express = require("express");
const dotenv = require("dotenv");
const app = express();
dotenv.config({
  path: "./config/config.env",
});

const api = require("./routes/api");
app.use("/api", api);

// 引入morgan中间件
const morgan = require("morgan");
// 使用morgan中间件
app.use(morgan("dev"));
//引入颜色模块
var colors = require("colors");
const PORT = process.env.PORT || 3000;
// app.listen(
//   PORT,
//   console.log(`Server rnning in ${process.env.NODE_ENV} mode on port ${PORT}`)
// );
app.listen(
  PORT,
  console.log(
    `Server rnning in ${process.env.NODE_ENV} mode on port ${PORT}`.magenta.bold
  )
);
