import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import './style.css';
import Card from './Card';
import api from '../../services/index';
import { FaInfoCircle } from 'react-icons/fa';

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
export const Toast = styled.div`
  position:fixed;
  top:12vh;
  right:10px;
  width:auto;
  background: #4DB15D;
  text-align:center;
  z-index:4;
  border-radius: 5px;
  -webkit-box-shadow: 0px 0px 8px -3px rgba(0,0,0,0.75);
  -moz-box-shadow: 0px 0px 8px -3px rgba(0,0,0,0.75);
  box-shadow: 0px 0px 8px -3px rgba(0,0,0,0.75);
  color:#f3f3f3;
  padding:15px 20px;
  overflow: none;
  :after{
    content: "";
    width: 0;
    height: 0;
    position: absolute;

    border-left: 25px solid transparent;
    border-right: 25px solid transparent;
    border-bottom: 25px solid #4DB15D;
    bottom: 35px;
    right: 10vh;
}
`
export default function Container(props) {

  const [pokemons, setPokemons] = useState([]);
  const [toast, setToast] = useState(false);

  const showToast = () => {
    setToast(true);
    setTimeout(() => {
      setToast(false);
    }, 3000);
  }

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
        {toast ? <Toast className='fadeIn'><FaInfoCircle /> Produto adicionado ao carrinho</Toast> : null}
        {
          pokemons ?
            pokemons.map((pokemon) =>
              <Card
                key={pokemon.url.split('/').slice(-2)[0]}
                url={pokemon.url}
                name={pokemon.name}
                setCart={(val) => props.setCart(val)}
                showToast={() => showToast()}
              />
            )
            : "Não existem Pokemons para serem listados"
        }
      </DivFlex>
    </Body>
  );
}
