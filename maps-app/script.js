let map;
let marker;

document.getElementById("btn").addEventListener("click", () => {
    navigator.geolocation.getCurrentPosition((position) => {

    const lat = position.coords.latitude;
    const lng = position.coords.longitude;

    if (map) {
        map.remove();
    }

    map = L.map("map").setView([lat, lng], 15);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "© OpenStreetMap contributors"
    }).addTo(map);

    marker = L.marker([lat, lng])
        .addTo(map)
        .bindPopup("Ando aqui")
        .openPopup();

    });
});