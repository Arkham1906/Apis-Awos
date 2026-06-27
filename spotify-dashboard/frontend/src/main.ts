import "./components/spotify-profile"
import "./components/top-artists"
import "./components/button-login"

const params = new URLSearchParams(window.location.search);
const token = params.get("token");

if (token) {
    localStorage.setItem("token", token);
    window.history.replaceState({}, document.title, "/");
}