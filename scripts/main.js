//Esta función sirve para cambiar la imagen al dar click en ella.
let logoFNCS = document.querySelector("img");
logoFNCS.onclick = function () {
  let miSrc = logoFNCS.getAttribute("src");
  if (miSrc === "images/logo-fncs-2023.png") {
    logoFNCS.setAttribute("src", "images/pico-fncs.png");
  } else {
    logoFNCS.setAttribute("src", "images/logo-fncs-2023.png");
  }
};

//Botón funcional para cambiar de usuario y el título de la página principal.
let miBoton = document.querySelector("button");
let miTitulo = document.querySelector("h1");

function estableceNombreUsuario() {
  let miNombre = prompt("Por favor, ingresa tu nombre.");
  if (!miNombre) {
    estableceNombreUsuario
  } else {
  localStorage.setItem("nombre", miNombre);
  miTitulo.textContent = "Bienvenido a la FNCS, " + miNombre;
  }
}

if (!localStorage.getItem("nombre")) {
  estableceNombreUsuario();
} else {
  let nombreAlmacenado = localStorage.getItem("nombre");
  miTitulo.textContent = "Bienvenido a la FNCS, " + nombreAlmacenado;
}

miBoton.onclick = function () {
  estableceNombreUsuario();
};
