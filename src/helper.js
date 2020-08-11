// obtiene la diferencia de años
export const obtenerDiferenciaAno = (ano) => new Date().getFullYear() - ano;

//calcular el total a pagar
export const calcularMarca = (marca) => {
    let incremento;

    switch (marca) {
        case 'americano':
            incremento = 1.15
            break;
        case 'asiatico':
            incremento = 1.05
            break;
        case 'europeo':
            incremento = 1.30;
            break;

        default:
            break;
    }

    return incremento;
}

//calcular tipo de seguro

export const obtenerPlan = (plan) => plan === 'basico' ? 1.20 : 1.50;