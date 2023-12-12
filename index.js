const express = require("express");
const app = express();
const PORT = 3000;

global.DEBUG = true;
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true })); // For gathering information from forms/text inputs

// Get method for sample home page. In our app home page will be the welcome page, and ask users to either login or register.
app.get("/", (req, res) => {
  res.render("index");
});

// Get method for login page
app.get("/login", (req, res) => {
  res.render("login");
});

// Get method for register page
app.get("/register", (req, res) => {
  res.render("register");
});

// Implementing the search routes
const searchRoutes = require("./routes/search");
app.use("/search", searchRoutes);

// Implementing the search bar routes
const searchBarRoutes = require("./routes/searchBar");
app.use("/searchBar", searchBarRoutes);

// Implementing the Mongo routes
const mongoRoutes = require("./routes/mongo");
app.use("/mongo", mongoRoutes);

// Implementing the auth routes
const authRouter = require("./routes/auth");
app.use("/auth", authRouter);

// render 404 page for any other route
app.use((req, res) => {
  res.status(404).render("404");
});

// Event listener for app to listen on port 3000.
app.listen(PORT, () => {
  console.log(`Search app listening at http://localhost:${PORT}`);
});
