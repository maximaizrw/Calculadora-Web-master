function copyResult(T, MP) {
    let transferencia = T.innerText;
    let mercadopago = MP.innerText;

    // Crea un elemento de texto temporal y lo selecciona
    const temp = document.createElement('textarea');
    temp.value = "Mercadopago: $" + mercadopago + " // Transferencia: $" + transferencia;
    document.body.appendChild(temp);
    temp.select();

    // Ejecuta el comando de copiar
    document.execCommand('copy');

    // Elimina el elemento de texto temporal
    document.body.removeChild(temp);

}
