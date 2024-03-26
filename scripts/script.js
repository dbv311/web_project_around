const openEditButton = document.querySelector("#editbutton");
const openProfileButton = document.querySelector("#addbutton");
const popupProfile = document.querySelector(".popup_profile");
const popupPlace = document.querySelector(".popup_place");
const popupCloseIcon = document.querySelectorAll(".popup__close-icon");
const formElement = document.querySelector(".popup__container");

const profileText = document.querySelector(".profile__text");
const profileTitle = document.querySelector(".profile__title");

const nameInput = formElement.querySelector(".popup__input-name");
const aboutMeInput = formElement.querySelector(".popup__input-about");

const placeInput = formElement.querySelector(".popup__input-place");
const linkInput = formElement.querySelector(".popup__input-link");

const elementsArea = document.querySelector(".elements");

const initialCards = [
  {
    name: "Torres del Paine",
    link: "https://images.unsplash.com/photo-1596423668247-f94229f7c679?q=80&w=2781&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Glaciar Grey",
    link: "https://images.unsplash.com/photo-1539671790472-55c39141b1a7?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Laguna Azul",
    link: "https://images.unsplash.com/photo-1478827121442-6450491fc0d2?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Guanacos",
    link: "https://images.unsplash.com/photo-1588426657789-142b72fc41ec?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Glaciar Serrano",
    link: "https://images.unsplash.com/photo-1630890688101-535ae66a1314?q=80&w=2848&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Puerto Natales",
    link: "https://images.unsplash.com/photo-1698710747402-bf1bcd890afb?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

openEditButton.addEventListener("click", function () {
  popupProfile.classList.add("popup_open");
});

openProfileButton.addEventListener("click", function () {
  popupPlace.classList.add("popup_open");
  aboutMeInput.value = profileText.textContent;
  nameInput.value = profileTitle.textContent;
});

popupCloseIcon.forEach((item) => {
  item.addEventListener("click", function () {
    popupProfile.classList.remove("popup_open");
    popupPlace.classList.remove("popup_open");
  });
});

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileText.textContent = aboutMeInput.value;
  profileTitle.textContent = nameInput.value;
  popupProfile.classList.remove("popup_open");
}

formElement.addEventListener("submit", handleProfileFormSubmit);

initialCards.forEach((item) => {
  const template = document.querySelector("#element-card");
  const templateNode = template.content.querySelector(".element");
  const cardNode = templateNode.cloneNode(true);

  cardNode.querySelector(".element__image").src = item.link;
  cardNode.querySelector(".element__image").alt = "Imagen de " + item.name;
  cardNode.querySelector(".element__text").textContent = item.name;

  elementsArea.append(cardNode);
});

function handleAddCard(evt) {
  evt.preventDefault();
  const template = document.querySelector("#element-card");
  const templateNode = template.content.querySelector(".element");
  const cardNode = templateNode.cloneNode(true);

  cardNode.querySelector(".element__image").src = linkInput.value;
  cardNode.querySelector(".element__image").alt =
    "Imagen de " + placeInput.value;
  cardNode.querySelector(".element__text").textContent = placeInput.value;

  elementsArea.prepend(cardNode);
}

formElement.addEventListener("submit", handleAddCard);
