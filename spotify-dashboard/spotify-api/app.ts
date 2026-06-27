import express from "express";
import spotifyRoutes from "./src/routes/spotify.route";
import authRoutes from "./src/routes/auth.route";

const app = express();
app.use("/auth", authRoutes);
app.use("/spotify", spotifyRoutes);

export { app };