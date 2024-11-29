function Ejercicio_4() {
  const mlista = document.getElementById("lista");
  fetch("https://jsonplaceholder.typicode.com/posts").then((response) => {
    if (!response.ok) {
      throw new Error(`no hay datos: ${response}`);
      }
    return response.json();
    })
    .then((posts) => {
      mlista.innerHTML = posts
        .map((post) => `<li>${post.id}</li> 
        <h5>${post.title}</h5>`).join("");
    }).catch((error) => {
      console.error("error:", error);
      mlista.innerHTML = `<li>error</li>`;
    });
}
Ejercicio_4();
