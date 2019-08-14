const express = require("express"); // get express
const connectDB = require("./config/db");

const app = express(); // intilize app var

// connect database

//connectDB();

// Init MIddleware

app.use(express.json({ extended: false }));

app.get("/", (req, res) => res.send("API RUnning")); // end point

// define routes

app.use("/api/auth", require("./routes/auth"));
// app.use("/api/users", require("./routes/api/users"));

// app.use("/api/profile", require("./routes/api/profile"));
// app.use("/api/post", require("./routes/api/post"));

// defining the port
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Serveur started on port ${PORT}`));
