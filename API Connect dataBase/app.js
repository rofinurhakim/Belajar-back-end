const express = require("express");
const app = express();
const port = 8000;
const cors = require("cors");
const booksRoute = require("./routes/books");
const db = require("./models/index");
const authorRouter = require ('./routes/author')

const whiteList = ["https://g0ig5.csb.app", "http://localhost:8000"];
const corsConfig = {
  origin: (origin, callback) => {
    if (whiteList.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};
app.use(cors(corsConfig));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Route book
app.use("/api/books", booksRoute);
app.use ('/api/author', authorRouter)

db.sequelize.sync({}).then(() => {
  console.log(`Database resync`);
});

app.listen(port, () => {
  console.log(`App running on http://localhost:${port}`);
});