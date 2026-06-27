import { loginWithSpotify } from "../services/auth";

class LoginButton extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <button>Login with Spotify</button>
        `;

        this.querySelector("button")!.onclick = () => {
            console.log("Click jala");
            loginWithSpotify();
        };
    }
}

customElements.define("login-button", LoginButton);