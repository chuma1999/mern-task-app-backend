const express = require("express");
const connectDB = require("./config/connectDB");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const Task = require("./model/taskModel");
const taskRoutes = require("./routes/taskRoute");
const cors = require("cors");

dotenv.config();
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "https://mern-task-app-frontend-q1v0.onrender.com"
    ]
  })
);
app.use("/api/tasks", taskRoutes);

// Routes
app.get("/", (req, res) => {
  res.send("<h1>Welcome to the Home Page</h1>");
});

const PORT = process.env.PORT || 5000;

// Connect to MongoDB and start the server

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });

// mongodb+srv://clive1999:<db_password>@cluster0.lbj5chl.mongodb.net/?appName=Cluster0
