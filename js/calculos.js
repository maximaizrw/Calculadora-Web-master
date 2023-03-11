//Definicion de constantes:
const IBB = 3;
const UNIDAD = 120; //Precio al vender UNIDAD.
const PORCENTAJE_CLASICA_MP = 2;
const PORCENTAJE_CLASICA_ML = 11;
const PORCENTAJE_GANANCIA_ESPERADA = 25;
const PORCENTAJE_IMPUESTO_DOLAR = 115;

function calculadoraMP() {
    let precioOriginal = parseInt(document.getElementById('precioOriginal').value);
    if (precioOriginal < 5) { precioOriginal = 5 } //Precio minimo de venta

    // Se calcula el precio con el impuesto pais + dolar 100%
    let precioEnDolar = precioOriginal + ((precioOriginal * PORCENTAJE_IMPUESTO_DOLAR) / 100);

    //**********************************************************
    // Se calcula el porcentaje de la ganancia que espero
    let gananciaEsperada = ((precioOriginal * PORCENTAJE_GANANCIA_ESPERADA) / 100);

    //*********************************************************

    let precioVenta = precioEnDolar + gananciaEsperada;
    precioVenta += (((precioVenta * PORCENTAJE_CLASICA_MP) / 100) + UNIDAD); // Sumo publicacion clasica
    precioVenta += ((precioVenta * IBB) / 100);

    let uno = ((precioVenta * PORCENTAJE_CLASICA_MP) / 100) + UNIDAD; //clasica
    let dos = ((precioVenta * IBB) / 100); //impuesto4
    let ganancia = precioVenta - uno - dos - precioEnDolar;
    let suma = gananciaEsperada - ganancia;
    precioVenta += suma;

    while (suma > 5) {
        uno = ((precioVenta * PORCENTAJE_CLASICA_MP) / 100) + UNIDAD;
        dos = ((precioVenta * IBB) / 100);
        ganancia = precioVenta - uno - dos - precioEnDolar;
        suma = Math.round(gananciaEsperada - ganancia);
        precioVenta += suma;
    }

    document.getElementById('resultadoMP').innerHTML = Math.round(precioVenta);
}

function calculadoraT() {
    // Obtener el precio de Steam del elemento del formulario
    let precioOriginal = parseInt(document.getElementById('precioOriginal').value);
    if (precioOriginal < 5) { precioOriginal = 5 } //5 Es el precio minimo

    // Calcular precio con el impuesto pais + dolar 100%
    let precioEnDolar = precioOriginal + ((precioOriginal * PORCENTAJE_IMPUESTO_DOLAR) / 100);

    //**********************************************************

    // Calcular ganancia esperada
    let gananciaEsperada = ((precioOriginal * PORCENTAJE_GANANCIA_ESPERADA) / 100);

    //*********************************************************

    let precioVenta = precioEnDolar + gananciaEsperada;

    let ganancia = precioVenta - precioEnDolar;
    let suma = gananciaEsperada - ganancia;
    precioVenta += suma;

    while (suma > 0) {
        ganancia = precioVenta - precioEnDolar;
        suma = Math.round(gananciaEsperada - ganancia);
        precioVenta += suma;
    }

    document.getElementById('resultadoT').innerHTML = Math.round(precioVenta);
}

function calculadoraML() {
    let precioOriginal = parseInt(document.getElementById('precioOriginal').value);
    if (precioOriginal < 5) { precioOriginal = 5 } //5 Es el precio minimo

    // Se calcula el precio con el impuesto pais + dolar 100%
    let precioEnDolar = precioOriginal + ((precioOriginal * PORCENTAJE_IMPUESTO_DOLAR) / 100);

    //**********************************************************
    // Se calcula el porcentaje de la ganancia que espero

    let gananciaEsperada = ((precioEnDolar * PORCENTAJE_GANANCIA_ESPERADA) / 100);

    //*********************************************************

    let precioVenta = precioEnDolar + gananciaEsperada;
    precioVenta += (((precioVenta * PORCENTAJE_CLASICA_ML) / 100) + UNIDAD); // Sumo publicacion clasica
    precioVenta += ((precioVenta * IBB) / 100);

    let uno = ((precioVenta * PORCENTAJE_CLASICA_ML) / 100) + UNIDAD; //clasica
    let dos = ((precioVenta * IBB) / 100); //impuesto4
    let ganancia = precioVenta - uno - dos - precioEnDolar;
    let suma = gananciaEsperada - ganancia;
    precioVenta += suma;

    while (suma > 0) {
        uno = ((precioVenta * PORCENTAJE_CLASICA_ML) / 100) + UNIDAD; //clasica
        dos = ((precioVenta * IBB) / 100); //impuesto4
        ganancia = precioVenta - uno - dos - precioEnDolar;
        suma = Math.round(gananciaEsperada - ganancia);
        precioVenta += suma;
    }

    document.getElementById('resultadoML').innerHTML = Math.round(precioVenta);
}