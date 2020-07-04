import React, { useState, useEffect } from 'react';
import './style.css';
import logo from '../../assets/logo.png';
import SearchInput from '../SearchInput';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import ShoppingCart from '../ShoppingCart';

export default function Header() {
  const [showCart, setShowCart] = useState(false);
  const showModal = () => setShowCart(true);
  const hideModal = () => setShowCart(false);

  return (
    <>
      <section className="section">
        <div className="logo">
          <img src={logo} alt="logo pokemon" />
        </div>
        <div className="inputBar">
          <SearchInput />
        </div>
        <div className="rightBar">
          <div className="icon" onClick={showModal}>
            <FaShoppingCart size={28} />
          </div>
          <div className="icon">
            <FaUser size={28} />
          </div>
        </div>
      </section>
      {showCart ? <ShoppingCart hideModal={() => hideModal()} /> : null}
    </>
  );
}
