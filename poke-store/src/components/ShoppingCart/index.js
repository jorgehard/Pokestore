import React from 'react';
import ItemCart from './ItemCart';
import './style.css';
import styled from 'styled-components';

const Button = styled.button`
  width:50%;
  height:10vh;
  background:#28A745;
  border:none;
  cursor:pointer;
  color:#f3f3f3;
  font-size:18px;
  font-family:'Karla', sans-serif;
`
export default function ShoppingCart(props) {
  return (
    <div id="modal141" className="cart">
      <div className="cart-content">
        <div className="cart-header">
          <h3>Carrinho de compras</h3>
          <span className="close" onClick={props.hideModal}>&times;</span>
        </div>
        <div className="cart-body">
          <ItemCart name="Bulbasaur" id="1" />
          <ItemCart name="Charmander" id="4" />
        </div>
        <div className="cart-footer">
          <Button>Finalizar Compra</Button>
        </div>
      </div>
    </div>
  );
}
