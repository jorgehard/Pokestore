import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import styled from 'styled-components';
import api from '../../services';

const Input = styled.input`
  height:30px;
  width:50%;
  padding:5px 15px;
  background:#F2EFE2;
  border-top-left-radius:4px;
  border-bottom-left-radius:4px;
  border:none;
  -webkit-box-shadow: inset 0px 0px 10px -5px rgba(0,0,0,0.75);
  -moz-box-shadow: inset 0px 0px 10px -5px rgba(0,0,0,0.75);
  box-shadow: inset 0px 0px 10px -5px rgba(0,0,0,0.75);
    @media(max-width: 890px) {
      width:40%;
    }
  
  @media(max-width: 513px) {
    width:30%;
  }
`;

const Button = styled.button`
  height:40px;
  width:8%;
  border:none;
  background: #DCDBD4;
  cursor:pointer;
  color:#39444f;
`;

export default function SearchInput({ setPokemon, setPesquisa }) {

  const [pokemonName, setPokemonName] = useState('');

  const handleSubmit = async () => {
    if (pokemonName) {
      try {
        await api.get(`pokemon/${pokemonName}`).then((dados) => {
          const normalizePokemon = [
            {
              name: dados.data.name,
              url: `https://pokeapi.co/api/v2/pokemon/${dados.data.id}/`
            }
          ];
          setPokemon(normalizePokemon);
        });
      } catch (error) {
        console.log(error);
        setPokemon(false);
      }
    }
  }
  return (
    <section className="section">
      <Input type="text" value={pokemonName} onChange={e => setPokemonName(e.target.value)} placeholder="Pesquisar pokémon..." name="name" />
      <Button type="submit" onClick={() => handleSubmit()}>
        <FaSearch size={15} />
      </Button>

    </section>
  );
}
