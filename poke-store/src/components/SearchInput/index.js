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
  background: #f2efe2;
  background: -moz-linear-gradient(top, #f2efe2 0%, #c4c4c4 50%, #f2efe2 100%);
  background: -webkit-linear-gradient(top, #f2efe2 0%,#c4c4c4 50%,#f2efe2 100%);
  background: linear-gradient(to bottom, #f2efe2 0%,#c4c4c4 50%,#f2efe2 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f2efe2', endColorstr='#f2efe2',GradientType=0 );
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
