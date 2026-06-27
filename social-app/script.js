const feed = document.getElementById("main");
const btn = document.getElementById("load");

btn.addEventListener("click", async () => {

    feed.innerHTML = "Cargando publicaciones";

    const res = await fetch("https://dummyjson.com/posts");
    const data = await res.json();

    feed.innerHTML = "";

    data.posts.forEach(post => {

        feed.innerHTML += `
        <div class="post">
            <h3>${post.title}</h3>
            <p>${post.body}</p>
            <p> Likes: ${post.reactions.likes}</p>
            <p> Dislikes: ${post.reactions.dislikes}</p>
        </div>
        `;
    });

});