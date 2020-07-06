import React from 'react';
import * as S from './style';
import { FaTrashAlt } from 'react-icons/fa';
export default function ItemCart(props) {
  //props.setCart(1);
  const deleteItem = (idUnique) => {
    const oldCart = JSON.parse(localStorage.getItem('products') ? localStorage.getItem('products') : "[]");
    let newResult = oldCart.filter((value) => value.id !== idUnique);
    let count = newResult.length;
    localStorage.setItem('products', JSON.stringify(newResult));
    props.setCart(Number(count));

  }
  return (
    <S.Item style={{ borderBottom: '1px solid #f3f3f3', padding: '15px 0px' }}>
      {console.log(props.idUnique)}
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
          <FaTrashAlt onClick={() => deleteItem(props.idUnique)} style={{ color: '#C82333', cursor: 'pointer' }} />
        </S.Info>
      </S.Flex>
    </S.Item>
  );
}
