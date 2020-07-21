import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import './style.css';
import Card from './Card';
import api from '../../services/index';
import { FaInfoCircle, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

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
const Toast = styled.div`
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
const Footer = styled.div`
  width:100%;
  padding:10px 0px;
  text-align:center;

`;

const pageNumbers = [];
let pageRange = [];

for (let i = 1; i <= Math.ceil(903 / 24); i++) {
  pageNumbers.push(i);
}

export default function Container(props) {

  const [toast, setToast] = useState(false);
  const [page, setPage] = useState(1);

  if (page > 5 && page <= pageNumbers.length) {
    pageRange = [];
    for (let i = page - 5; i < page + 5; i++) {
      if (i <= pageNumbers.length) {
        pageRange.push(i);
      }
    }
  } else {
    pageRange = pageNumbers;
  }


  const showToast = () => {
    setToast(true);
    setTimeout(() => {
      setToast(false);
    }, 3000);
  }

  useEffect(() => {
    getPokemon();
  }, []);

  const getPokemon = async (offset) => {
    try {
      let response = await api.get(`pokemon?limit=24&offset=${offset}`);
      props.setPokemon(response.data.results);
    } catch (error) {
      console.log(error);
    }
  };
  const showMore = async (pageNumber) => {
    document.querySelector('body').scrollTo(0, 0);
    let count = (pageNumber - 1) * 24;
    setPage(pageNumber);
    getPokemon(count);
  }
  return (
    <Body>
      <DivFlex>
        {toast ? <Toast className='fadeIn'><FaInfoCircle /> Produto adicionado ao carrinho</Toast> : null}
        {
          props.pokemons ?
            props.pokemons.map((pokemon) =>
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
      <Footer>
        <>
          {
            props.pokemons ?
              <>
                <p className="lengthPage">Pagina: {page} - {pageNumbers.length}</p>
                <ul className="pagination">

                  <li className={(page <= 1) ? 'disabled' : ''} onClick={(page <= 1) ? '' : () => showMore(page - 1)}><FaChevronLeft /></li>
                  {
                    pageRange.slice(0, 10).map((response) =>
                      <li className={page === response ? 'active' : ''} onClick={() => showMore(response)}>{response}</li>
                    )
                  }
                  <li className={(page >= pageNumbers.length) ? 'disabled' : ''} onClick={(page >= pageNumbers.length) ? '' : () => showMore(page + 1)}><FaChevronRight /></li>
                </ul>
              </>
              : " - "
          }
        </>
      </Footer>
    </Body >
  );
}
