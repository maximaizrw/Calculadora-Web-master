function calculadoraMP(){
    let precioSteam, precioSteamDolar, porcentajeGanancia = 0, precioVenta, clasica, ganancia, impuesto, impuesto2, uno, dos, tres, cuatro, cinco, suma;
    let impuestoGanancia = 2; // 2 impuesto ganancia + 2 de posible IBB
    let impuestoValorAgregado = 11;
    let porcentajeClasica = 2;
    let ivaProductosNuevos = 5;
    let ibb = 3;

    precioSteam = parseInt(document.getElementById('precioSteam').value);

    // Se calcula el precio con el impuesto pais + dolar 100%
    precioSteamDolar = precioSteam +((precioSteam*100)/100);

    //**********************************************************
        // Se calcula el porcentaje de la ganancia que espero
        if (precioSteam <= 500) {
            porcentajeGanancia = ((precioSteam * 23) / 100);
        } else if (precioSteam >= 500 && precioSteam < 800) {
            porcentajeGanancia = ((precioSteam * 20) / 100);
        } else if (precioSteam >= 800 && precioSteam < 1999) {
            porcentajeGanancia = ((precioSteam * 18) / 100);
        } else if (precioSteam >= 2000) {
            porcentajeGanancia = ((precioSteam * 15) / 100);
        }
        //*********************************************************

        precioVenta = precioSteamDolar + porcentajeGanancia;
        precioVenta += ((precioVenta * porcentajeClasica) / 100);
        precioVenta += ((precioVenta * impuestoGanancia) / 100);
        precioVenta += ((precioVenta * impuestoValorAgregado) / 100);
        precioVenta += ((precioVenta * ivaProductosNuevos) / 100);
        precioVenta += ((precioVenta * ibb) / 100);
        
        uno = ((precioVenta * porcentajeClasica) / 100); //clasica
        dos = ((precioVenta * 2) / 100); //impuesto
        tres = ((precioVenta * 11) / 100); //impuesto2
        cuatro = ((precioVenta * ivaProductosNuevos) / 100); //impuesto3
        cinco = ((precioVenta * ibb) / 100); //impuesto4
        ganancia = precioVenta - uno - dos - tres - cuatro - cinco - precioSteamDolar;
        suma = porcentajeGanancia - ganancia;
        precioVenta += suma;

        for (let i = 0; i < 40; i++) {	// REPITO HASTA TENER LA GANANCIA ESPERADA
            if (suma != 0) {

                uno = ((precioVenta * porcentajeClasica) / 100); //clasica
                dos = ((precioVenta * impuestoGanancia) / 100); //impuesto
                tres = ((precioVenta * impuestoValorAgregado) / 100); //impuesto2
                cuatro = ((precioVenta * ivaProductosNuevos) / 100); //impuesto3
                cinco = ((precioVenta * ibb) / 100); //impuesto4
                ganancia = precioVenta - uno - dos - tres - cuatro - cinco - precioSteamDolar;
                suma = porcentajeGanancia - ganancia;
                precioVenta += suma;

            }
        }

    document.getElementById('resultadoMP').innerHTML = Math.round(precioVenta);
}

function calculadoraT(){
    let precioSteam, precioSteamDolar, porcentajeGanancia = 0, precioVenta, ganancia, suma;


    precioSteam = parseInt(document.getElementById('precioSteam').value);

    // Se calcula el precio con el impuesto pais + dolar 100%
    precioSteamDolar = precioSteam +((precioSteam*100)/100);

    //**********************************************************
        // Se calcula el porcentaje de la ganancia que espero
        if (precioSteam <= 500) {
            porcentajeGanancia = ((precioSteam * 23) / 100);
        } else if (precioSteam >= 500 && precioSteam < 800) {
            porcentajeGanancia = ((precioSteam * 20) / 100);
        } else if (precioSteam >= 800 && precioSteam < 1999) {
            porcentajeGanancia = ((precioSteam * 18) / 100);
        } else if (precioSteam >= 2000) {
            porcentajeGanancia = ((precioSteam * 15) / 100);
        }
        //*********************************************************

        precioVenta = precioSteamDolar + porcentajeGanancia;
         
         ganancia = precioVenta - precioSteamDolar;
         suma = porcentajeGanancia - ganancia;
         precioVenta += suma;

        for (let i = 0; i < 40; i++) {	// REPITO HASTA TENER LA GANANCIA ESPERADA
            if (suma != 0) {

                ganancia = precioVenta - precioSteamDolar;
                suma = porcentajeGanancia - ganancia;
                precioVenta += suma;

            }
        }

    document.getElementById('resultadoT').innerHTML = Math.round(precioVenta);
}

function calculadoraML(){
    let precioSteam, precioSteamDolar, porcentajeGanancia = 0, precioVenta, ganancia, uno, dos, tres, cuatro, cinco, suma;
    let unidad = 60;
    let impuestoGanancia = 2;
    let impuestoValorAgregado = 11;
    let porcentajeClasica = 11;
    let ivaProductosNuevos = 5;
    let ibb = 3;

    precioSteam = parseInt(document.getElementById('precioSteam').value);

    // Se calcula el precio con el impuesto pais + dolar 100%
    precioSteamDolar = precioSteam +((precioSteam*100)/100);

    //**********************************************************
        // Se calcula el porcentaje de la ganancia que espero
        if (precioSteam <= 500) {
            porcentajeGanancia = ((precioSteam * 23) / 100);
        } else if (precioSteam >= 500 && precioSteam < 800) {
            porcentajeGanancia = ((precioSteam * 20) / 100);
        } else if (precioSteam >= 800 && precioSteam < 1999) {
            porcentajeGanancia = ((precioSteam * 18) / 100);
        } else if (precioSteam >= 2000) {
            porcentajeGanancia = ((precioSteam * 15) / 100);
        }
        //*********************************************************

        precioVenta = precioSteamDolar + porcentajeGanancia;
        precioVenta += (((precioVenta * porcentajeClasica) / 100) + unidad); // Sumo publicacion clasica
        precioVenta += ((precioVenta * impuestoGanancia) / 100);
        precioVenta += ((precioVenta * impuestoValorAgregado) / 100);
        precioVenta += ((precioVenta * ivaProductosNuevos) / 100);
        precioVenta += ((precioVenta * ibb) / 100);

        uno = ((precioVenta * porcentajeClasica) / 100) + unidad; //clasica
        dos = ((precioVenta * impuestoGanancia) / 100); //impuesto
        tres = ((precioVenta * impuestoValorAgregado) / 100); //impuesto2
        cuatro = ((precioVenta * ivaProductosNuevos) / 100); //impuesto3
        cinco = ((precioVenta * ibb) / 100); //impuesto4
        ganancia = precioVenta - uno - dos - tres - cuatro - cinco - precioSteamDolar;
        suma = porcentajeGanancia - ganancia;
        precioVenta += suma;

        for (let i = 0; i < 40; i++) {	// REPITO HASTA TENER LA GANANCIA ESPERADA
            if (suma != 0) {

                uno = ((precioVenta * porcentajeClasica) / 100) + unidad; //clasica
                dos = ((precioVenta * impuestoGanancia) / 100); //impuesto
                tres = ((precioVenta * impuestoValorAgregado) / 100); //impuesto2
                cuatro = ((precioVenta * ivaProductosNuevos) / 100); //impuesto3
                cinco = ((precioVenta * ibb) / 100); //impuesto4
                ganancia = precioVenta - uno - dos - tres - cuatro - cinco - precioSteamDolar;
                suma = porcentajeGanancia - ganancia;
                precioVenta += suma;
            }
        }

    document.getElementById('resultadoML').innerHTML = Math.round(precioVenta);
}