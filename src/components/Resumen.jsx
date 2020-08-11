import React from 'react'
import { CuadroResumen, TituloResumen, InfoSeguro, Parrafo, Total } from '../styles'
import PropTypes from 'prop-types'

const Resumen = ({ datos, total }) => {
    const { marca, ano, plan } = datos;
    if (marca === '' || ano === '' || plan === '') {
        return null;
    }

    return (
        <CuadroResumen>
            <TituloResumen>Resumen de cotización:</TituloResumen>
            <Parrafo>Marca: <InfoSeguro>{marca}</InfoSeguro></Parrafo>
            <Parrafo>Plan: <InfoSeguro>{plan}</InfoSeguro></Parrafo>
            <Parrafo>Año del perro: <InfoSeguro>{ano} </InfoSeguro></Parrafo>
            <Total>Total: S/ {total}</Total>
        </CuadroResumen>
    )
}
Resumen.propTypes = {
    datos: PropTypes.object.isRequired
    , total: PropTypes.number.isRequired
}
export default Resumen
