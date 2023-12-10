import express, { Application } from "express";
import dotenv from "dotenv";

import { router } from "../routes/index"; 

dotenv.config();

const PORT = process.env.PORT || 8000;

const app: Application = express();

app.use("/api", router);
app.use(express.json());

const start = async () => {
    try {
        app.listen(PORT, () => console.log(`server started on port ${PORT}`));
    } catch (e) {
        console.log(e);
    }
}

export {
    start
}