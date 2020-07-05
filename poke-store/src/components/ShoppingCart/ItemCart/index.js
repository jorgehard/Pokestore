import React from 'react';
import * as S from './style';
import { FaTrashAlt } from 'react-icons/fa';
export default function ItemCart(props) {

  return (
    <S.Item style={{ borderBottom: '1px solid #f3f3f3', padding: '15px 0px' }}>
      <S.Flex style={{ flex: '2' }}>
        <S.Image src={`https://pokeres.bastionbot.org/images/pokemon/${props.id}.png`} alt="Buba" />
      </S.Flex>
      <S.Flex style={{ flex: '10' }}>
        <S.Info style={{ flex: '9' }}>
          <S.Item>
            <S.Title>
              Name:
            </S.Title>
            <S.H3>{props.name}</S.H3>
          </S.Item>
          <S.Item>
            <S.Title>
              Height
            </S.Title>
            <S.H3>11</S.H3>
          </S.Item>
          <S.Item>
            <S.Title>
              Weight
            </S.Title>
            <S.H3>112</S.H3>
          </S.Item>
        </S.Info>
        <S.Info style={{ flex: '2' }}>
          <S.Price>
            <span>Price: </span> $100
          </S.Price>
        </S.Info>
        <S.Info style={{ flex: '1', textAlign: 'right', paddingRight: '10px' }}>
          <FaTrashAlt onClick={() => { console.log('excluir') }} style={{ color: '#C82333', cursor: 'pointer' }} />
        </S.Info>
      </S.Flex>
    </S.Item>
  );
}
