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

app.listen(port, () => {
  console.log("Server is running on port " + port);
});
