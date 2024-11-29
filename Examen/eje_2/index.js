const personas = [
  { nombre: "jESICA lopez", edad: 25, correo: "jesi8234@gmail.com" },
  { nombre: "maria garcia", edad: 30, correo: "maria.323-23@gmail.com" },
  { nombre: "carlos palechor", edad: 22, correo: "paelchor@gmail.com" },
];
const resp = document.querySelector("#tabla tbody");

resp.innerHTML = personas
  .map(
    (usuarios) => `
        <tr>
    <td>${usuarios.nombre}</td>
    <td>${usuarios.edad}</td>
    <td>${usuarios.correo}</td>
</tr>`
  ).join("");
