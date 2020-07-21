import React, { useState, useEffect } from 'react';
import { FaTextHeight, FaDumbbell, FaPlus } from 'react-icons/fa';
import * as S from './style';
import axios from 'axios';

export default function Card({ name, url, setCart, showToast }) {

  const idPokemon = url.split('/').slice(-2)[0];
  console.log(idPokemon);
  const [pokemonInfo, setPokemonInfo] = useState([]);
  const [pokemonImage, setPokemonImage] = useState(`https://pokeres.bastionbot.org/images/pokemon/${idPokemon}.png`);

  //Functions
  function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  const infoPokemon = async (url) => {
    let response = await axios.get(url).catch(error => console.log(error));
    setPokemonInfo(response.data);
  }
  const handleCart = (id, name, weight, height, price, pokemonImage) => {
    const oldCart = JSON.parse(localStorage.getItem('products') ? localStorage.getItem('products') : "[]");
    let count = oldCart.length;
    const products = {
      'id': count + 1,
      'item_id': Number(id),
      'name': name,
      'weight': weight,
      'height': height,
      'price': price,
      'image': pokemonImage
    };
    const returnedTarget = oldCart.concat([products]);
    localStorage.setItem('products', JSON.stringify(returnedTarget));
    setCart(Number(returnedTarget.length));
    showToast()
  }
  //UseEffect
  useEffect(() => {
    infoPokemon(url);
  }, [url]);

  const onError = (val) => {
    setPokemonImage(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${val}.png`);
  }
  return (
    <S.Section>
      <S.DivImage>
        <S.Image src={pokemonImage} onError={(val) => onError(idPokemon)} alt={name} />
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
      <S.Button onClick={() => handleCart(
        idPokemon,
        capitalize(name),
        pokemonInfo.weight,
        pokemonInfo.height,
        pokemonInfo.base_experience,
        pokemonImage
      )}> Comprar <FaPlus style={{ paddingLeft: '5px', fontSize: '10px' }} /></S.Button>
    </S.Section>
  );

}