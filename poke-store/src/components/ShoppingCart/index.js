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
`;
const Null = styled.div`
  display:block;
  width:100%;
  font-size:15px;
  font-family:'Karla', sans-serif;
  text-align:center;
  padding:20px 0px;
`;
const PriceTotal = styled.div`
  padding:20px 0px;
  width:100%;
  text-align:right;
  font-size:21px;
  font-weight:weight;
  font-family:'Karla', sans-serif;
`;
export default function ShoppingCart(props) {
  const cart = JSON.parse(localStorage.getItem('products') ? localStorage.getItem('products') : "[]");
  let totalCart = 0;

  const finalizaCompra = () => {
    props.hideModal();
    props.setCart(0);
    localStorage.removeItem('products');
    console.log('finalizando');
  }
  return (
    <div id="modal141" className="cart" >
      <div className="cart-content">
        <div className="cart-header">
          <h3>Carrinho de compras</h3>
          <span className="close" onClick={props.hideModal}>&times;</span>
        </div>
        <div className="cart-body">
          {
            cart.length > 0 ?
              cart.map(({ id, item_id, name, height, weight, price, image }) => {
                totalCart += price;
                return <ItemCart setCart={(val) => props.setCart(val)} key={id} idUnique={id} item={item_id} name={name} height={height} weight={weight} price={price} image={image} />
              })
              :
              <Null>Nenhum item encontrado</Null>
          }
          <PriceTotal> Total : ${totalCart}</PriceTotal>
        </div>
        <div className="cart-footer">
          {
            cart.length > 0 ?
              <Button onClick={() => finalizaCompra()}>Finalizar Compra</Button>
              :
              <Button style={{ opacity: '0.7', cursor: 'not-allowed' }}>Finalizar Compra</Button>
          }
        </div>
      </div>
    </div >
  );
}
