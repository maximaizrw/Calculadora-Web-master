//Definicion de constantes:
const IBB = 3;
const UNIDAD = 150; //Precio al vender UNIDAD.
const PORCENTAJE_CLASICA_MP = 0.03;
const PORCENTAJE_CLASICA_ML = 0.13;
const PORCENTAJE_GANANCIA_ESPERADA = 0.45;
const PORCENTAJE_IMPUESTO_DOLAR = 0.75;

function calculadoraMP() {

    let precioOriginal = parseInt(document.getElementById('precioOriginal').value);
    if (precioOriginal < 5) { precioOriginal = 5 } //Precio minimo de venta

    // Se calcula el precio con el impuesto pais + dolar 100%

    let precioEnDolar = precioOriginal + (precioOriginal * PORCENTAJE_IMPUESTO_DOLAR);


    //**********************************************************
    // Se calcula el porcentaje de la ganancia que espero
    let gananciaEsperada = precioEnDolar * PORCENTAJE_GANANCIA_ESPERADA;

    //*********************************************************

    let totalCostos = precioEnDolar + gananciaEsperada;
    console.log("Total costos: " + totalCostos);
    let totalCostosPorcentaje = 1 * (1 - PORCENTAJE_CLASICA_MP);
    console.log("Total costos porcentaje: " + totalCostosPorcentaje);

    precioVenta = totalCostos / totalCostosPorcentaje;

    document.getElementById('resultadoMP').innerHTML = Math.round(precioVenta);
}

function calculadoraT() {
    let precioOriginal = parseInt(document.getElementById('precioOriginal').value);
    if (precioOriginal < 5) { precioOriginal = 5 } //Precio minimo de venta

    // Se calcula el precio con el impuesto pais + dolar 100%

    let precioEnDolar = precioOriginal + (precioOriginal * PORCENTAJE_IMPUESTO_DOLAR);


    //**********************************************************
    // Se calcula el porcentaje de la ganancia que espero
    let gananciaEsperada = precioEnDolar * PORCENTAJE_GANANCIA_ESPERADA;

    //*********************************************************

    let totalCostos = precioEnDolar + gananciaEsperada;
    console.log("Total costos: " + totalCostos);
    let totalCostosPorcentaje = 1 * (1 - 0);
    console.log("Total costos porcentaje: " + totalCostosPorcentaje);

    precioVenta = totalCostos / totalCostosPorcentaje;
    document.getElementById('resultadoT').innerHTML = Math.round(precioVenta);
}

function calculadoraML() {

    let precioOriginal = parseInt(document.getElementById('precioOriginal').value);
    if (precioOriginal < 5) { precioOriginal = 5 } //Precio minimo de venta

    // Se calcula el precio con el impuesto pais + dolar 100%

    let precioEnDolar = precioOriginal + (precioOriginal * PORCENTAJE_IMPUESTO_DOLAR);


    //**********************************************************
    // Se calcula el porcentaje de la ganancia que espero
    let gananciaEsperada = precioEnDolar * PORCENTAJE_GANANCIA_ESPERADA;

    //*********************************************************

    let totalCostos = precioEnDolar + gananciaEsperada + UNIDAD;
    console.log("Total costos: " + totalCostos);
    let totalCostosPorcentaje = 1 * (1 - PORCENTAJE_CLASICA_ML);
    console.log("Total costos porcentaje: " + totalCostosPorcentaje);

    precioVenta = totalCostos / totalCostosPorcentaje;
    document.getElementById('resultadoML').innerHTML = Math.round(precioVenta);
}