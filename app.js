const express = require("express");
const cors = require('cors');

const app = express();

app.use(express.json());

app.use(express.urlencoded({extended: true}));

app.use(cors());

app.use(cors({
    origin: 'http://localhost:5173',
}))

const users = require("./api/routes/authRoutes");
const loginUser = require("./api/routes/usersRouter")

app.use("/user",users);
app.use("/login",loginUser)


module.exports = app;