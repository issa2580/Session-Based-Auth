const express = require("express");
const session = require("express-session");
const app = express();
const port = 5000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Middleware setup
app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      maxAge: 60 * 3,
    },
  })
);

// Connexion route
app.post("signin", (req, res) => {
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

app.listen(port, () => {
  console.log("Server is running on port " + port);
});
