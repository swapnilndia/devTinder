const express = require("express");
const app = express();
const User = require("./models/user");
const { connectDB } = require("./config/database");

app.use(express.json());
app.post("/user", async (req, res) => {
  const user = new User(req.body);
  await user.save();
  if (user) {
    res.status(201).json(user);
  } else {
    res.status(400).json({ error: "Something went wrong" });
  }
});

connectDB()
  .then(() => {
    console.log("Database connection established...");
    app.listen(7777, () => {
      console.log("Server is listening at port 7777");
    });
  })
  .catch((err) => {
    console.log("Database cannot be established...");
  });
