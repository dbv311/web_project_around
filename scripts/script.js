const openEditButton = document.querySelector("#editbutton");
const openProfileButton = document.querySelector("#addbutton");
const popupProfile = document.querySelector(".popup__new-profile");
const popupPlace = document.querySelector(".popup__new-place");
const popupCloseIcon = document.querySelectorAll(".popup__close-icon");
/*const formElement = document.querySelector(".popup__container");*/

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
function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  let profileText = document.querySelector(".profile__text");
  let profileTitle = document.querySelector(".profile__title");

  /*let nameInput = formElement.querySelector(".popup__input-name");
  let aboutMeInput = formElement.querySelector(".popup__input-about");

  aboutMeInput.value = profileText.textContent;
  nameInput.value = profileTitle.textContent;
}

profileText.value = "";
aboutMeInput.value = "";

formElement.addEventListener("submit", handleProfileFormSubmit);*/
