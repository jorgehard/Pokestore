import React, { useState } from 'react';
import '../../styles/Catalogo.css';
import Header from '../../components/Header';
import Container from '../../components/Container';

export default function Catalogo() {
  let val = JSON.parse(localStorage.getItem('products') ? localStorage.getItem('products') : "[]");

  const [pokemons, setPokemons] = useState();
  const [countCart, setCountCart] = useState(val.length);

  const setPokemon = (val) => {
    setPokemons(val);
  }

  const setCart = (val) => {
    setCountCart(val);
  }

  return (
    <>
      <Header setPokemon={(val) => setPokemon(val)} setCart={(val) => setCart(val)} countCart={countCart} />


      <Container pokemons={pokemons} setPokemon={(val) => setPokemon(val)} setCart={(val) => setCart(val)} />
    </>
  );
}
