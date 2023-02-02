const express = require("express");
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");
const Task = require("./models/taskModel");
const taskRoutes = require("./routes/taskRoute");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 8000;

//.Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: ["https://mern-task-app-omn9.onrender.com/"],
  })
);
app.use(taskRoutes);

//.Conecting to DB and running the server
mongoose
  .set("strictQuery", false)
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on ${PORT}`);
    });
  })
  .catch((err) => console.log(err));

//.Middleware exemple
// const logger = (req, res, next) => {
//   console.log("Middleware ran");
//   console.log(req.method);
//   next();
// };
