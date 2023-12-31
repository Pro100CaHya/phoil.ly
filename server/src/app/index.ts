import express, { Application } from "express";
import dotenv from "dotenv";
import cors from "cors";

import { router } from "../routes/index"; 

dotenv.config();

const PORT = process.env.PORT || 8000;

const app: Application = express();

app.use(cors({
    origin: [
        "http://localhost:3000",
        "http://localhost:8080",
        "https://phoil-ly-frontend-react-app.onrender.com"
    ]
}));
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