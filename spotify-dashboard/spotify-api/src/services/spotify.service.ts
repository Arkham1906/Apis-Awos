export async function getMe(accessToken: string) {
    const response = await fetch("https://api.spotify.com/v1/me", {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    });

    return response.json();
}
export async function getTopArtists(accessToken: string) {
    const response = await fetch(
        "https://api.spotify.com/v1/me/top/artists?limit=10",
        {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        }
    );

    return response.json();
}

export async function getTopTracks(accessToken: string) {
    const response = await fetch(
        "https://api.spotify.com/v1/me/top/tracks?limit=40",
        {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        }
    );

    return response.json();
}