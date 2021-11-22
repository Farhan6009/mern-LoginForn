const mongoose = require("mongoose");
const database = process.env.DB;

mongoose.connect(database, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("connection successful");
}).catch((err) => {
    console.log(err);
})