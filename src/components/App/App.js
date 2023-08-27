import './App.css';
import React from 'react';
import { useState } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Promo from '../Promo/Promo';
import Spikers from '../Spikers/Spikers';
import MenuPopup from '../MenuPopup/MenuPopup';


function App() {

  const [isMenuPopupOpened, setIsMenuPopupOpened] = useState(false);

  // Работа с попапом
  function handleMenuClick() {
    setIsMenuPopupOpened(!isMenuPopupOpened)
  }

  function closePopup() {
    setIsMenuPopupOpened(false);
  }

  return (
    <div className="App">
      <Header onMenuClick={handleMenuClick} />
      <Promo />
      <Spikers />
      <Footer />
      <MenuPopup onClose={closePopup} onMenuClick={handleMenuClick} isPopupOpen={isMenuPopupOpened} />
    </div>
  );
}

export default App;