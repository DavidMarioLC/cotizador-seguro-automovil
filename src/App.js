import React, { useState } from 'react';
import { ContenedorApp, Wrapper, Titulo } from './styles'
import Form from './components/Form'
import Resumen from './components/Resumen'
import Loader from './components/Loader/Loader'


function App() {

  const [resumen, guardarResumen] = useState({})
  const { datos, cotizacion } = resumen;

  const [cargando, setCargando] = useState(false)

  return (
    <ContenedorApp>
      <Wrapper>
        <Titulo>Cotizador de seguros</Titulo>
        <Form guardarResumen={guardarResumen} setCargando={setCargando} />
        {cargando && <Loader />}

        {datos && <Resumen datos={datos} total={cotizacion} />}
      </Wrapper>
    </ContenedorApp>
  );
}

export default App;
