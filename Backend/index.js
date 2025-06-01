import express    from "express";
import dotenv     from "dotenv";
import bodyParser from "body-parser";

import userRoutes from "./route/user-route.js";
import HttpError  from "./models/http-errors-model.js";

dotenv.config();
const port = process.env.PORT;
const app  = express();
app.use(bodyParser.json());

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