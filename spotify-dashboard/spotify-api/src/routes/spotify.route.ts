import { Router } from "express";
import { meController } from "../controllers/spotify.controller";
import { topArtistsController } from "../controllers/spotify.controller";
import { topTracksController } from "../controllers/spotify.controller";

const router = Router();

router.get("/me", meController);
router.get("/top-artists", topArtistsController);
router.get("/top-tracks", topTracksController);

export default router;