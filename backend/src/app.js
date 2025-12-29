import express from "express";
import cors from "cors";
import errorMiddleware from "./middlewares/error.middleware.js";
import authRoutesReg from "./routes/auth.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutesReg);

app.use(errorMiddleware);

export default app;
