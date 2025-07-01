import express      from "express";
import dotenv       from "dotenv";
import cors         from "cors";
import bodyParser   from "body-parser";
import cookieParser from "cookie-parser";

import userRoutes from "./route/user-route.js";
import HttpError  from "./models/http-errors-model.js";

dotenv.config({
    path : './.env',
});

const port = process.env.PORT;
const app  = express();

app.use(cors({
    origin      : process.env.CORS_ORIGIN,
    credentials : true,
}))

app.use(bodyParser.json()); // now for new version of node this is not needed due to builtin functionality
app.use(express.json({ limit: '16kb' }));  //for form data
app.use(express.urlencoded({extended: true, limit: '16kb'})); //for data which comes from url
app.use(express.static("public")) //for file save on local server
app.use(cookieParser());


app.use('/api', userRoutes);

// Not Found Route Error
app.use((req, res, next) => {
    const error = new HttpError('Could not find this route.', 404);
    throw error;
});

// For default Error
app.use((error, req, res, next) => {
    if (res.headerSent) {
        return next(error);
    }
    res.status(error.code || 500)
    res.json({ message: error.message || 'An unknown error occurred!' });
});

app.listen(port);