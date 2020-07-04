import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import './style.css';
import Card from './Card';
import api from '../../services/index';

const Body = styled.section`
  padding:20px;
  position:relative;
  top:10vh;
`;
const DivFlex = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  flex-wrap: wrap;
  div.div-3{
    width:23%;
    margin:10px;
    border:1px solid;
  }
`;

export default function Container() {

  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    getPokemon();
  }, []);

  const getPokemon = async () => {
    try {
      let response = await api.get();
      setPokemons(response.data.results);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Body>
      <DivFlex>
        {
          pokemons ?
            pokemons.map((pokemon) =>
              <Card
                key={pokemon.url.split('/').slice(-2)[0]}
                url={pokemon.url}
                name={pokemon.name}
              />
            )
            : "Não existem Pokemons para serem listados"
        }
      </DivFlex>
    </Body>
  );
}
