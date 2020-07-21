import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './style.css';
import logo from '../../assets/logo.png';
import SearchInput from '../SearchInput';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import ShoppingCart from '../ShoppingCart';
import ModalFinish from '../ModalFinish';

export default function Header(props) {
  const [showCart, setShowCart] = useState(false);
  const [showFinish, setShowFinish] = useState(false);

  const showModal = () => setShowCart(true);
  const hideModal = () => setShowCart(false);
  //Finish Modal
  const hideModalFinish = () => setShowFinish(false);
  const showModalFinish = () => {
    setShowFinish(true);
    setTimeout(() => {
      setShowFinish(false);
    }, 4000);
  }

  return (
    <>
      <section className="section">
        <div className="logo">
          <Link to="/catalogo">
            <img src={logo} alt="logo pokemon" />
          </Link>
        </div>
        <div className="inputBar">
          <SearchInput setPesquisa={(val) => props.setPesquisa(val)} setPokemon={(val) => props.setPokemon(val)} />
        </div>
        <div className="rightBar">
          <div className="icon" onClick={showModal}>
            <FaShoppingCart size={28} />
            <span>{props.countCart}</span>
          </div>
          <div className="icon">
            <a href="https://github.com/jorgehard/Pokestore/" style={{ textDecoration: 'none', color: '#f3f3f3' }}>
              <FaUser size={28} />
            </a>
          </div>
        </div>
      </section>
      {showCart ?
        <ShoppingCart
          setCart={(val) => props.setCart(val)}
          hideModal={() => hideModal()}
          showModalFinish={() => showModalFinish()}
        /> : null}
      {showFinish ?
        <ModalFinish
          hideModalFinish={() => hideModalFinish()}
        /> : null}

    </>
  );
}
