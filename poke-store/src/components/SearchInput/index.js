import React from 'react';
import { FaSearch } from 'react-icons/fa';
import styled from 'styled-components';

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
`;

const Button = styled.button`
  height:40px;
  width:8%;
  border:none;
  background: #DCDBD4;
  cursor:pointer;
  color:#39444f;
`;

export default function SearchInput() {
  return (
    <section className="section">
      <Input type="text" placeholder="Pesquisar pokémon..." name="name" />
      <Button type="submit">
        <FaSearch size={15} />
      </Button>
    </section>
  );
}
