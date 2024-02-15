const express = require('express');
const mongoose = require('mongoose');
const cors = require("cors");

const orderRoutes = require("./routes/order")

const userRoutes = require("./routes/user")

const morgan = require("morgan");
const dotenv = require("dotenv");
const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan("combined"));
dotenv.config();                                                

const port = process.env.PORT || 3000;
const host = process.env.HOST || 'localhost';

async function dbconnection() {
    await mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017")
        .then(() => {
            console.log("Database connection established");
        }).catch((err) => {

            console.log(err.message);
        });
};

dbconnection();



app.use("/orders", orderRoutes)

app.use("/users", userRoutes)  

// signup









app.get('/', (req, res) => {
    res.status(200).json({ message: 'welcome from server slide' });
    console.log("welcome from server slide");

})




app.listen(port, host, () => {
    console.log(`server is listening on http://${host}:${port}`);
});


