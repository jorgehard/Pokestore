import React from 'react';
import './style.css';
import logo from '../../assets/logo.png';
import SearchInput from '../SearchInput';
import { FaShoppingCart, FaUser } from 'react-icons/fa';

export default function Header() {
  return (
    <section className="section">
      <div className="logo">
        <img src={logo} alt="logo pokemon" />
      </div>
      <div className="inputBar">
        <SearchInput />
      </div>
      <div className="rightBar">
        <div className="icon">
          <FaShoppingCart size={28} />
        </div>
        <div className="icon">
          <FaUser size={28} />
        </div>
      </div>
    </section>
  );
}
