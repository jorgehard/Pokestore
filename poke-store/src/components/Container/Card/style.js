import styled from 'styled-components';

export const Section = styled.div`
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
export const DivImage = styled.div`
  border-bottom:1px solid #f3f3f3;
  text-align:center;
  background: #ffffff;
  background: -moz-linear-gradient(top, #ffffff 14%, #f3f3f3 100%);
  background: -webkit-linear-gradient(top, #ffffff 14%,#f3f3f3 100%);
  background: linear-gradient(to bottom, #ffffff 14%,#f3f3f3 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#f3f3f3',GradientType=0 );
`;
export const Image = styled.img`
  width:70%;
`;
export const Title = styled.span`
  font-size:11px;
  font-weight:bold;
  font-family:'Karla', sans-serif;
  opacity:0.8;
  span {
    padding-left:3px;
  }
`;

export const H3Center = styled.h3`
  font-size:17px;
  font-weight:normal;
  font-family:'Karla', sans-serif;
  padding-left:5px;
  text-align:left;
  flex-grow: 6;
`;
export const H3 = styled.h3`
  font-size:20px;
  font-weight:normal;
  font-family:'Karla', sans-serif;
  padding-left:5px;
  text-align:center;
  flex-grow: 6;
`;
export const NameContainer = styled.div`
  display:flex;
  padding:10px 0px;
  align-items:center;
`;
export const DivContainer = styled.div`
  display:flex;
  align-items:center;
  padding:10px;
  border:1px solid #f3f3f3;
  flex-grow: 6
`;
export const SectionStats = styled.section`
  display:flex;
  flex-direction:row;
`
export const Button = styled.button`
  background: #FDD000;
  height:30px;
  border:none;
  margin-top:10px;
  color:#FFF;
  font-weight:bold;
  cursor:pointer;
  :hover{
    background: #fdd000;
    background: -moz-linear-gradient(top, #fdd000 1%, #f7ed33 50%, #fdd000 100%);
    background: -webkit-linear-gradient(top, #fdd000 1%,#f7ed33 50%,#fdd000 100%);
    background: linear-gradient(to bottom, #fdd000 1%,#f7ed33 50%,#fdd000 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#fdd000', endColorstr='#fdd000',GradientType=0 );
  }
`;
export const divStyle = {
  textAlign: 'right',
  fontWeight: 'bold',
  opacity: '0.7',
  fontSize: '18px'
}
