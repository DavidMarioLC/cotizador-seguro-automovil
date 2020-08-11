import React, { useState } from 'react'
import { Formulario, FormItem, Label, Select, ContentRadio, ItemRadio, InputRadio, Button, Error } from '../styles'
import { obtenerDiferenciaAno, calcularMarca, obtenerPlan } from '../helper'

import PropTypes from 'prop-types'

const Form = ({ guardarResumen, setCargando }) => {

    const [datos, guardarDatos] = useState({
        marca: '',
        ano: '',
        plan: ''
    })
    const { marca, ano, plan } = datos;

    const [mostrarError, setError] = useState(false)

    const handleChange = e => {
        guardarDatos({
            ...datos,
            [e.target.name]: e.target.value
        })
    }

    const cotizarSeguro = e => {
        e.preventDefault()
        //validar
        if (marca.trim() === '' || ano.trim() === '' || plan.trim() === '') {
            setError(true)
            return;
        }
        setError(false)
        //base 2000
        let base = 2000;

        //obtener diferencia de  años
        const diferenciaAno = obtenerDiferenciaAno(ano)


        //por cada año  hay  que restar el 3%
        base -= ((diferenciaAno * 3) * base) / 100;

        //americano 15%
        //asiatico 5%
        //Europeo 30%
        base = calcularMarca(marca) * base

        //basico +20%

        //completo 50%
        const incremento = obtenerPlan(plan)
        base = parseFloat(incremento * base).toFixed(2)

        setCargando(true)

        setTimeout(() => {
            setCargando(false)
            guardarResumen({
                cotizacion: base,
                datos
            })

        }, 1000);
    }




    return (
        <Formulario>
            {mostrarError && <Error>Todos los campos deben ser llenados.</Error>}
            <form onSubmit={cotizarSeguro}>

                <FormItem>
                    <Label>Marca</Label>
                    <Select name="marca" value={marca} onChange={handleChange}>
                        <option value="">-- Seleccione --</option>
                        <option value="americano">Americano</option>
                        <option value="europeo">Europeo</option>
                        <option value="asiatico">Asíatico</option>
                    </Select>
                </FormItem>
                <FormItem>
                    <Label>Año</Label>
                    <Select name="ano" value={ano} onChange={handleChange}>
                        <option value="">-- Seleccione --</option>
                        <option value="2021">2021</option>
                        <option value="2020">2020</option>
                        <option value="2019">2019</option>
                        <option value="2018">2018</option>
                        <option value="2017">2017</option>
                        <option value="2016">2016</option>
                        <option value="2015">2015</option>
                        <option value="2014">2014</option>
                        <option value="2013">2013</option>
                        <option value="2012">2012</option>
                    </Select>
                </FormItem>
                <FormItem>
                    <Label>Plan</Label>
                    <ContentRadio>
                        <ItemRadio>
                            <InputRadio name="plan" type="radio" value="basico" checked={plan === "basico"} onChange={handleChange} /> Basico
                        </ItemRadio>
                        <ItemRadio>
                            <InputRadio name="plan" type="radio" value="completo" checked={plan === "completo"} onChange={handleChange} /> Completo
                        </ItemRadio>
                    </ContentRadio>
                </FormItem>
                <Button type="submit">Cotizar</Button>
            </form>
        </Formulario>
    )
}
Form.propTypes = {
    guardarResumen: PropTypes.func.isRequired,
    setCargando: PropTypes.func.isRequired
}
export default Form
