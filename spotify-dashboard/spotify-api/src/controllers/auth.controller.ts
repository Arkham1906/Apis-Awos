import { getSpotifyLoginURL, exchangeCodeForToken } from "../services/auth.service";
import { setAccessToken } from "../config/token";

export function loginController(req, res) {
    const url = getSpotifyLoginURL();
    console.log(url);

    return res.redirect(url);
}

export async function callbackController(req, res) {
    try {
        const code = req.query.code as string;

        const tokenData = await exchangeCodeForToken(code);

        setAccessToken(tokenData.access_token);
        return res.json({
            message: "Login successful",
            expires_in: tokenData.expires_in
        });
    } catch (error) {
        return res.status(500).json({
            message: "Error exchanging code for token"
        });
    }
}