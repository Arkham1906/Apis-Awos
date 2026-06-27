import { getMe } from "../services/api";

class SpotifyProfile extends HTMLElement {
    async connectedCallback() {
        const token = localStorage.getItem("token");

        if (!token) {
            this.innerHTML = `<p>No token dado</p>`;
            return;
        }

        try {
            const data = await getMe(token);

            this.innerHTML = `
                <div>
                    <h2>${data.display_name}</h2>
                    <p>${data.email}</p>
                </div>
            `;
        } catch (err) {
            console.error(err);
            this.innerHTML = `<p>Error cargando perfil</p>`;
        }
    }
}

customElements.define("spotify-profile", SpotifyProfile);