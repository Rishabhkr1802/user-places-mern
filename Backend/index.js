import express from "express";
import dotenv from "dotenv";
// import bodyParser, { urlencoded } from "body-parser";

dotenv.config();
const port = process.env.PORT;
const app = express();
// const body = bodyParser(urlencoded({extended: false}));

app.use('/', (req, res, next) => {
    console.log('node works');
});

// For default Error
app.use('/', (error, req, res, next) => {
    let err = error;
    err.code = 500;
    throw new Error(err.message || "An internal server occured"); // or return next(Error ....);
});

app.listen(port, () => console.log(`Server is running at port no:- ${port}`));