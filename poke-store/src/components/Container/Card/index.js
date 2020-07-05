import React, { useState, useEffect } from 'react';
import { FaTextHeight, FaDumbbell, FaPlus } from 'react-icons/fa';
import * as S from './style';
import axios from 'axios';

export default function Card({ name, url, setCart }) {
  const [pokemonInfo, setPokemonInfo] = useState([]);
  const idPokemon = url.split('/').slice(-2)[0];
  //Functions
  function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  const infoPokemon = async (url) => {
    let response = await axios.get(url).catch(error => console.log(error));
    setPokemonInfo(response.data);
  }
  const handleCart = (id, price) => {
    const products = { 'id': id, 'price': price };
    const oldCart = JSON.parse(localStorage.getItem('products') ? localStorage.getItem('products') : "[]");
    const returnedTarget = oldCart.concat([products]);
    localStorage.setItem('products', JSON.stringify(returnedTarget));
    setCart(Number(returnedTarget.length));

    console.log(returnedTarget.length);
  }
  //UseEffect
  useEffect(() => {
    infoPokemon(url);
  }, [url]);


  //Return
  return (
    <S.Section>
      <S.DivImage>
        <S.Image src={`https://pokeres.bastionbot.org/images/pokemon/${idPokemon}.png`} alt="Buba" />
      </S.DivImage>
      <S.NameContainer>
        <S.Title>Name:</S.Title>
        <S.H3Center>{capitalize(name)}</S.H3Center>
      </S.NameContainer>
      <S.SectionStats>
        <S.DivContainer>
          <S.Title>
            <FaTextHeight />
            <span>Height</span>
          </S.Title>
          <S.H3>{pokemonInfo.height}</S.H3>
        </S.DivContainer>
        <S.DivContainer>
          <S.Title>
            <FaDumbbell />
            <span> Weight </span>
          </S.Title>
          <S.H3>{pokemonInfo.weight}</S.H3>
        </S.DivContainer>
      </S.SectionStats>
      <S.NameContainer>
        <S.Title>Price:</S.Title>
        <S.H3Center style={S.divStyle}>${pokemonInfo.base_experience}</S.H3Center>
      </S.NameContainer>
      <S.Button onClick={() => handleCart(idPokemon, pokemonInfo.base_experience)}> Comprar <FaPlus style={{ paddingLeft: '5px', fontSize: '10px' }} /></S.Button>
    </S.Section>
  );

}