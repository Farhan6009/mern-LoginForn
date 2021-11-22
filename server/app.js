require("dotenv").config();
const express = require("express")
const app = express();
var cors = require('cors')
const route = require("./routes/auth");

require("./db/conn")
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(route)


app.listen(port, () => {
    console.log(`connection to the port ${port}`);
})