import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
    margin:0;
    padding:0;
    outline:0;

}
*:focus{
    outline:0;

}
html, body, #root{
    height:100%;

}
body{
    background-color: #000;
    -webkit-font-smoothing: antialiased;
    min-height:100%;
   width:100%;
  position:relative;
}

body, input, button {
    font-family: 'Montserrat', sans-serif;
    
}

a{
    text-decoration: none;
}

ul{
    list-style: none;
}
button{
    cursor: pointer;
}

`;