import React, { useState, useEffect } from 'react';
import { FaTextHeight, FaDumbbell, FaPlus } from 'react-icons/fa';
import styled from 'styled-components';
import axios from 'axios';

const Section = styled.div`
  width:20%;
  margin:10px;
  display:flex;
  background:#FFF;
  border:1px solid #F2EFE2;
  flex-direction:column;
  padding:13px;
  -webkit-box-shadow: 0px 0px 5px -4px rgba(0,0,0,0.75);
  -moz-box-shadow: 0px 0px 5px -4px rgba(0,0,0,0.75);
  box-shadow: 0px 0px 5px -4px rgba(0,0,0,0.75);
`;
const DivImage = styled.div`
  border-bottom:1px solid #f3f3f3;
  text-align:center;
  background: #ffffff;
  background: -moz-linear-gradient(top, #ffffff 14%, #f3f3f3 100%);
  background: -webkit-linear-gradient(top, #ffffff 14%,#f3f3f3 100%);
  background: linear-gradient(to bottom, #ffffff 14%,#f3f3f3 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#f3f3f3',GradientType=0 );
`;
const Image = styled.img`
  width:70%;
`;
const Title = styled.span`
  font-size:11px;
  font-weight:bold;
  font-family:'Karla', sans-serif;
  opacity:0.8;
  span {
    padding-left:3px;
  }
`;

const H3Center = styled.h3`
  font-size:17px;
  font-weight:normal;
  font-family:'Karla', sans-serif;
  padding-left:5px;
  text-align:left;
  flex-grow: 6;
`;
const H3 = styled.h3`
  font-size:20px;
  font-weight:normal;
  font-family:'Karla', sans-serif;
  padding-left:5px;
  text-align:center;
  flex-grow: 6;
`;
const NameContainer = styled.div`
  display:flex;
  padding:10px 0px;
  align-items:center;
`;
const DivContainer = styled.div`
  display:flex;
  align-items:center;
  padding:10px;
  border:1px solid #f3f3f3;
  flex-grow: 6
`;
const SectionStats = styled.section`
  display:flex;
  flex-direction:row;
`
const Button = styled.button`
  background: #FDD000;
  height:30px;
  border:none;
  margin-top:10px;
  color:#FFF;
  font-weight:bold;
`;
const divStyle = {
  textAlign: 'right',
  fontWeight: 'bold',
  opacity: '0.7',
  fontSize: '18px'
}
export default function Card({ name, url, height, weight }) {
  const [pokemonInfo, setPokemonInfo] = useState([]);
  const idPokemon = url.split('/').slice(-2)[0];
  //Functions
  function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  const infoPokemon = async (url) => {
    let response = await axios.get(url).catch(error => console.log(error));
    setPokemonInfo(response.data);
  }
  //UseEffect
  useEffect(() => {
    infoPokemon(url);
  }, [url]);


  //Return
  return (
    <Section Section >
      <DivImage>
        <Image src={`https://pokeres.bastionbot.org/images/pokemon/${idPokemon}.png`} alt="Buba" />
      </DivImage>
      <NameContainer>
        <Title>Name:</Title>
        <H3Center>{capitalize(name)}</H3Center>
      </NameContainer>
      <SectionStats>
        <DivContainer>
          <Title>
            <FaTextHeight />
            <span>Height</span>
          </Title>
          <H3>{pokemonInfo.height}</H3>
        </DivContainer>
        <DivContainer>
          <Title>
            <FaDumbbell />
            <span> Weight </span>
          </Title>
          <H3>{pokemonInfo.weight}</H3>
        </DivContainer>
      </SectionStats>
      <NameContainer>
        <Title>Price:</Title>
        <H3Center style={divStyle}>${pokemonInfo.base_experience}</H3Center>
      </NameContainer>
      <Button> Comprar <FaPlus style={{ paddingLeft: '5px', fontSize: '10px' }} /></Button>
    </Section>
  );
}
