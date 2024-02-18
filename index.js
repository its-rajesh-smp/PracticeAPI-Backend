import express from "express";
import cors from "cors";
import PublicRoutes from "./src/routes/publicRoutes.js";

const app = express();

// Applying middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Applying routes
app.use("/", PublicRoutes);

export default app;
