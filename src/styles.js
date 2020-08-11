import styled from '@emotion/styled'

const yellow = '#ffee02'
const black = '#0a0a0a'
const white = '#fff'

export const ContenedorApp = styled.div`
padding: 0 1em;
`;

export const Wrapper = styled.div`
  max-width:400px;
  margin:0 auto;
  
  padding: 1em 0;
  
`;


export const Titulo = styled.h1`
  text-align:center;
  font-family:sans-serif;
  color:${black};
  text-decoration:underline  .2em ${yellow};
  
`;

export const Formulario = styled.div`
  width:100%;
  padding:1em 0;
  font-family:sans-serif;
`;

export const FormItem = styled.div`
  width:100%;
  display:block;
  margin:1em 0;

`;

export const Label = styled.label`
  width:100%;
  display:block;
  margin-bottom:.4em;
  font-family:1rem;
  font-weight:600;
  margin-left:1rem;
`;

export const Select = styled.select`
  appearance: none;
	-webkit-appearance: none;
	-moz-appearance: none;
  width:100%;
  display:block;
  border:none;
  border:2px solid ${black};
  border-radius:2rem;
  padding:.5rem 1rem;
  

`;
export const ContentRadio = styled.div`
  display:flex;
  justify-content:space-around;
`
export const ItemRadio = styled.div`

`
export const InputRadio = styled.input``


export const Button = styled.button`
  width:100%;
  display:block;
  border:none;
  border-radius:2rem;
  font-family:1rem;
  padding:.5rem 0;
  font-weight:bold;
  letter-spacing:.5px;
  background-color:${yellow};
  color:${black};
  &:hover{
    border:3px solid ${yellow};
    background-color:${white};
    
  }`;


export const Error = styled.p`
  color:${black};
  font-weight:bold;
  text-align:center;
  padding:.5em .2em;
  background-color:${yellow};
  font-family:sans-serif;

`;

export const CuadroResumen = styled.div`
border:3px solid ${yellow};
`

export const TituloResumen = styled.h2`
  text-align:center;
  font-family:sans-serif;
  color:${black};
  
`;

export const Parrafo = styled.p`
  padding-left:1rem;
  font-family:sans-serif;
`
export const InfoSeguro = styled.strong`
  color:${black};
  font-family:sans-serif;
  font-weight:600;
  
`;

export const Total = styled.h2`
  padding-left:1rem;
  font-family:sans-serif;
`;