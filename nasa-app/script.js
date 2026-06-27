const btn = document.getElementById("load");
const content = document.getElementById("main");

btn.addEventListener("click", async () => {
    const res = await fetch("https://api.nasa.gov/planetary/apod?api_key=GBLqts4f3yo0iQCFJGfuUbxegby0PzfZhFwKEnY4");
    const data = await res.json();

    content.innerHTML = `
        <h2>${data.title}</h2>
        <p>${data.date}</p>
        <img src="${data.url}" alt="NASA image" />
        <p>${data.explanation}</p>
    `;
});