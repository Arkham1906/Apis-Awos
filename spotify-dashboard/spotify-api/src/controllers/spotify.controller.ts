import { getMe } from "../services/spotify.service";
import { getTopTracks } from "../services/spotify.service";
import { getTopArtists } from "../services/spotify.service";
import { accessToken } from "../config/token";

export async function meController(req, res) {
    if (!accessToken) {
        return res.status(401).json({ error: "No token" });
    }
    const data = await getMe(accessToken);

    return res.json(data);
}

export async function topArtistsController(req, res) {
    if (!accessToken) {
        return res.status(401).json({ error: "No token" });
    }

    const data = await getTopArtists(accessToken);

    return res.json(data);
}

export async function topTracksController(req, res) {
    if (!accessToken) {
        return res.status(401).json({ error: "No token" });
    }

    const data = await getTopTracks(accessToken);

    return res.json(data);
}