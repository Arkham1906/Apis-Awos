const BASE_URL = "http://127.0.0.1:3000/api";

export async function getMe(token: string) {
    const res = await fetch(`${BASE_URL}/me`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    return res.json();
}

export async function getTopArtists(token: string) {
    const res = await fetch(`${BASE_URL}/top-artists`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    return res.json();
}

export async function getTopTracks(token: string) {
    const res = await fetch(`${BASE_URL}/top-tracks`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    return res.json();
}