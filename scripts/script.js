const openEditButton = document.querySelector("#editbutton");
const openProfileButton = document.querySelector("#addbutton");
const popupProfile = document.querySelector(".popup__new-profile");
const popupPlace = document.querySelector(".popup__new-place");
const popupCloseIcon = document.querySelectorAll(".popup__close-icon");

openEditButton.addEventListener("click", function () {
  popupProfile.classList.add("popup_open");
});

openProfileButton.addEventListener("click", function () {
  popupPlace.classList.add("popup_open");
});

popupCloseIcon.forEach((item) => {
  item.addEventListener("click", function () {
    popupProfile.classList.remove("popup_open");
    popupPlace.classList.remove("popup_open");
  });
});

/*
// Lo siguiente es el manipulador (handler) de entrega de formularios, aunque
// no se enviará en ningún sitio todavía

// Observa que el nombre de la función comienza con un verbo
// y describe exactamente lo que hace la función
function handleProfileFormSubmit(evt) {
  // Esta línea impide que el navegador
  // entregue el formulario en su forma predeterminada.
  evt.preventDefault();
  // Una vez hecho esto, podemos definir nuestra propia forma de entregar el formulario.
  // Lo explicaremos todo con más detalle después.

  // Busquemos los campos del formulario en el DOM
  let nameInput = // Utiliza el método querySelector()
  let jobInput = // Utiliza el método querySelector()

  // Obtén los valores de cada campo desde la propiedad de valor correspondiente

  // Selecciona los elementos donde se introducirán los valores de los campos

  // Inserta nuevos valores utilizando el textContent
  // propiedad del método querySelector()
}

// Conecta el manipulador (handler) al formulario:
// se observará el evento de entrega
formElement.addEventListener('submit', handleProfileFormSubmit); */
