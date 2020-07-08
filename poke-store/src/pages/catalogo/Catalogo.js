import React, { useState } from 'react';
import '../../styles/Catalogo.css';
import Header from '../../components/Header';
import Container from '../../components/Container';

export default function Catalogo() {
  let val = JSON.parse(localStorage.getItem('products') ? localStorage.getItem('products') : "[]");

  const [countCart, setCountCart] = useState(val.length);
  const setCart = (val) => {
    setCountCart(val);
  }

  return (
    <>
      <Header setCart={(val) => setCart(val)} countCart={countCart} />
      <Container setCart={(val) => setCart(val)} />
    </>
  );
}
