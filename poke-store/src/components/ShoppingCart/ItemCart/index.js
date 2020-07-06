import React from 'react';
import * as S from './style';
import { FaTrashAlt } from 'react-icons/fa';
export default function ItemCart(props) {

  return (
    <S.Item style={{ borderBottom: '1px solid #f3f3f3', padding: '15px 0px' }}>
      <S.Flex style={{ flex: '2' }}>
        <S.Image src={props.image} alt="Buba" />
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
            <S.H3>{props.height}</S.H3>
          </S.Item>
          <S.Item>
            <S.Title>
              Weight
            </S.Title>
            <S.H3>{props.weight}</S.H3>
          </S.Item>
        </S.Info>
        <S.Info style={{ flex: '2' }}>
          <S.Price>
            <span>Price: </span> ${props.price}
          </S.Price>
        </S.Info>
        <S.Info style={{ flex: '1', textAlign: 'right', paddingRight: '10px' }}>
          <FaTrashAlt onClick={() => { console.log('excluir', props.item) }} style={{ color: '#C82333', cursor: 'pointer' }} />
        </S.Info>
      </S.Flex>
    </S.Item>
  );
}
