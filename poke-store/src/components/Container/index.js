import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import './style.css';
import Card from './Card';
import api from '../../services/index';

const Body = styled.section`
  padding:20px;
  
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
  const getPokemon = async () => {
    try {
      const response = await api.get();
      setPokemons(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getPokemon();
  }, []);

  return (
    <Body>
      <DivFlex>
        {pokemons.results.map(({ name }) => <li>{{ name }}</li>)}
      </DivFlex>
    </Body>
  );
}
