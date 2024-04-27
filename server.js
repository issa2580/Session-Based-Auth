const express = require("express");
const session = require("express-session");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Database connection
const URL = process.env.MONGODB_URL;
mongoose
  .connect(URL, {
    /*
        useFindAndModify: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useNewUrlParser: true,
    */
  })
  .then(() => console.log("connection successful"))
  .catch((err) => console.log("connection failed"));

// Middleware setup
app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      maxAge: 60 * 24,
    },
  })
);

// Connexion route
app.post("/signin", (req, res) => {
  const { username, password } = req.body;
  const user = users.find(
    (user) => user.username === username && user.password === password
  );
  if (user) {
    req.session.userId = user.id;
    res.send("Login successfully");
  } else {
    res.status(401).send("Invalid credentials");
  }
});

// Protected route
app.get("/home", (req, res) => {
  if (req.session.userId) {
    res.send("Welcome " + req.session.userId);
  } else {
    res.status(401).send("Please sign in");
  }
});

// Logout route
app.get("/signout", (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      res.status(500).send("Error while logging out");
    } else {
      res.redirect("/");
    }
  });
});

app.listen(port, () => {
  console.log("Server is running on port " + port);
});
