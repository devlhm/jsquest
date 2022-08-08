const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const verifyJWT = require("./src/middlewares/verifyJWT.js");
const bodyParser = require("body-parser");
const morgan = require('morgan');
dotenv.config({ path: "./src/config/.env" });

const userRouter = require("./src/routes/user.js");
const chapterRouter = require("./src/routes/chapter.js");
const solutionRouter = require("./src/routes/solution.js");

const PORT = process.env.PORT || 3001;
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(morgan("dev"));

app.use("/user", userRouter);
app.use("/chapter", chapterRouter);
app.use("/solution", solutionRouter);

app.get("/verify-token", verifyJWT, (req, res) => {res.status(200).send();});

app.listen(PORT, () => console.log(`Server is listening at port ${PORT}!`));
