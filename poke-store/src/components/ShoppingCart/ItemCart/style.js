import styled from 'styled-components';

export const Item = styled.div`
  display:flex;
  flex: 1;
`
export const Flex = styled.div`
  display:flex;
  align-items: center;
  justify-content:center;
  flex: 1;
  flex-direction:row;
`
export const Info = styled.div`
  
`;
export const Image = styled.img`
  width:70%;
`;

export const Title = styled.span`
  font-size:13px;
  font-weight:bold;
  font-family:'Karla', sans-serif;
  opacity:0.8;
`;

export const H3 = styled.h3`
  font-size:19px;
  font-weight:normal;
  font-family:'Karla', sans-serif;
  padding-left:5px;
  text-align:left;
`;
export const Price = styled.h3`
  font-size:24px;
  font-weight:normal;
  font-family:'Karla', sans-serif;
  text-align:right;
  padding-right:20px;
  span{
    font-size:13px;
    font-weight:bold;
    font-family:'Karla', sans-serif;
    opacity:0.8;
  }
`
export const Delete = styled.span`
  
`