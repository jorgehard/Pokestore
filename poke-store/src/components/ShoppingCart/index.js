import React from 'react';
import './style.css';
// import { FaSearch } from 'react-icons/fa';
// import styled from 'styled-components';

export default function ShoppingCart(props) {
  return (
    <div id="modal141" className="cart">
      <div className="cart-content">
        <div className="cart-header">
          <h3>Carrinho de compras</h3>
          <span className="close" onClick={props.hideModal}>&times;</span>
        </div>
      </div>
    </div>
  );
}
