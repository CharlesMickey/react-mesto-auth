import React from "react";
import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import DeletePlacePopup from "./DeletePlacePopup.js";
import ImagePopup from "./ImagePopup.js";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";
import { api } from "../utils/api.js";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";

function App() {
  const [cards, setCards] = React.useState([]);
  const [currentUser, setCurrentUser] = React.useState({});
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(
    false
  );
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(
    false
  );
  const [cardDelete, setCardDelete] = React.useState({});
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isDeletePlacePopupOpen, setIsDeletePlacePopupOpen] = React.useState(
    false
  );
  const [selectedCard, setSelectedCard] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    api
      .userInfo()
      .then((res) => {
        setCurrentUser(res);
      })
      .catch((err) => {
        console.log(`${err}`);
      });
  }, []);

  function handleAddPlaceSubmit(newCard) {
    setIsLoading(true);
    api
      .addNewCard(newCard)
      .then((newCard) => {
        closeAllPopups();
        setCards([newCard, ...cards]);
      })
      .catch((err) => {
        console.log(`${err}`);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  function handleUpdateAvatar(newAvatar) {
    setIsLoading(true);
    api
      .editAvatar(newAvatar)
      .then((newAvatar) => {
        setCurrentUser(newAvatar);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(`${err}`);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  function handleUpdateUser(data) {
    setIsLoading(true);
    api
      .editProfile(data)
      .then((data) => {
        setCurrentUser(data);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(`${err}`);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleDeletePlaceClick() {
    setIsDeletePlacePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function closeAllPopups() {
    setIsDeletePlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard(null);
  }

  React.useEffect(() => {
    api
      .getInitialCards()
      .then((res) => {
        setCards(res);
      })
      .catch((err) => {
        console.log(`${err}`);
      });
  }, []);

  function handleCardLike(card) {
    const isLiked = card.likes.some((like) => like._id === currentUser._id);

    api
      .putOrRemoveLike(card._id, isLiked)
      .then((newCard) => {
        setCards((cards) =>
          cards.map((cardItem) =>
            cardItem._id === card._id ? newCard : cardItem
          )
        );
      })
      .catch((err) => {
        console.log(`${err}`);
      });
  }

  function handleCardDelete() {
    setIsLoading(true);
    api
      .deleteCard(cardDelete._id)
      .then(() => {
        closeAllPopups();
        setCards((cards) =>
          cards.filter((cardItem) =>
            cardItem._id === cardDelete._id ? false : true
          )
        );
      })
      .catch((err) => {
        console.log(`${err}`);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  function closePopupEsc(e) {
    if (e.key === "Escape") {
      closeAllPopups();
    }
  }

  function closePopupClickOnOverlay(e) {
    if (e.target.matches(".popup")) {
      closeAllPopups();
    }
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div
        className="page"
        onKeyDown={closePopupEsc}
        tabIndex="0"
        onClick={closePopupClickOnOverlay}
      >
        <Header />
        <Main
          cards={cards}
          onCardLike={handleCardLike}
          setCardDelete={setCardDelete}
          onEditAvatar={handleEditAvatarClick}
          onEditProfile={handleEditProfileClick}
          onDeleteCardPopupOpen={handleDeletePlaceClick}
          onEditPlace={handleAddPlaceClick}
          onCardClick={handleCardClick}
        />
        <Footer />
        <EditAvatarPopup
          isLoading={isLoading}
          onUpdateAvatar={handleUpdateAvatar}
          onClose={closeAllPopups}
          isOpen={isEditAvatarPopupOpen}
        />
        <EditProfilePopup
          isLoading={isLoading}
          onUpdateUser={handleUpdateUser}
          onClose={closeAllPopups}
          isOpen={isEditProfilePopupOpen}
        />
        <AddPlacePopup
          isLoading={isLoading}
          onAddPlaceSubmit={handleAddPlaceSubmit}
          onClose={closeAllPopups}
          isOpen={isAddPlacePopupOpen}
        />
        <DeletePlacePopup
          isLoading={isLoading}
          onDeleteCard={handleCardDelete}
          onClose={closeAllPopups}
          isOpen={isDeletePlacePopupOpen}
        />
        <ImagePopup onClose={closeAllPopups} card={selectedCard} />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
