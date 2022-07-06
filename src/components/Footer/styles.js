import styled from 'styled-components';

export const Container=styled.footer`
background-color: #0676D9;

display: flex;
justify-content: center;
margin-top: 40px;
width:100%;
position:absolute;
`;

export const FooterContainer=styled.div`
display:flex;
margin-left:20px;
justify-content: space-between;
align-items: center;
width: 100%;
max-width:958px;

margin:0;
img{ width:240px;}
li{
    font-weight:bold;

}
a{
    color: white;
}
`;
