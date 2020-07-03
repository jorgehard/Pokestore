import React from 'react';
import styled from 'styled-components';
import './style.css';
import Card from './Card';

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
  return (
    <Body>
      <DivFlex>
        <Card name="Testando" />
        <Card name="Testando" />
        <Card name="Testando" />
        <Card name="Testando" />
        <Card name="Testando" />
        <Card name="Testando" />
        <Card name="Testando" />
        <Card name="Testando" />
      </DivFlex>
    </Body>
  );
}
