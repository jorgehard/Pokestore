import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import './style.css';
import Card from './Card';
import api from '../../services/index';
import axios from 'axios';

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

  const getInfoPokemon = async (url) => {
    return await axios.get(url).then(response => response.data).catch(error => console.log(error));
  }

  return (
    <Body>
      <DivFlex>
        {
          pokemons ?
            pokemons.map((pokemon) =>
              <>

                {getInfoPokemon(pokemon.url)}




                {console.log(pokemon.url)}
                <Card url={pokemon.url} name={pokemon.name} />
              </>
            )
            : "Não existem Pokemons para serem listados"
        }
      </DivFlex>
    </Body>
  );
}
