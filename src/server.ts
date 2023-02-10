const dotEnv = require('dotenv');
dotEnv.config();
const express = require('express');
const app = express();
const Router = require('./routes/index');
const cors = require('cors');

const corsOptions = {
    origin: "*",
    credentials: true
};

const PORT = process.env.PORT || 8000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
require('./models/index.model');

app.use(cors(corsOptions));
app.use("/", Router);

app.listen(PORT, () => {
    console.log(`Server is running on port number ${PORT}`);
})