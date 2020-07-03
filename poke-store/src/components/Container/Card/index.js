import React from 'react';
import { FaTextHeight, FaDumbbell, FaPlus } from 'react-icons/fa';
import styled from 'styled-components';

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
export default function Card({ name }) {
  return (
    <Section>
      <DivImage>
        <Image src="https://pokeres.bastionbot.org/images/pokemon/2.png" alt="Buba" />
      </DivImage>
      <NameContainer>
        <Title>Name:</Title>
        <H3Center>Bulbasaur</H3Center>
      </NameContainer>
      <SectionStats>
        <DivContainer>
          <Title>

            <FaTextHeight />
            <span>Height</span>

          </Title>
          <H3>11</H3>
        </DivContainer>
        <DivContainer>
          <Title>
            <FaDumbbell />
            <span> Weight </span>
          </Title>
          <H3>51</H3>
        </DivContainer>
      </SectionStats>
      <NameContainer>
        <Title>Price:</Title>
        <H3Center style={divStyle}>$35.00</H3Center>
      </NameContainer>
      <Button> Comprar <FaPlus style={{ paddingLeft: '5px', fontSize: '10px' }} /></Button>
    </Section >
  );
}
