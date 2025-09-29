function ejecutarTarea() {
    const tarea = document.getElementById("tarea").value;
    const entrada = parseInt(document.getElementById("entrada").value);
    const resultado = document.getElementById("resultado");
    let mensaje = "";

    if (isNaN(entrada)) {
        resultado.innerHTML = "<p>⚠️ Ingresa un número válido.</p>";
        return;
    }

    switch (tarea) {
        case "parImpar":
            mensaje = verificarParImpar(entrada);
            break;
        case "conteo":
            mensaje = contarHasta(entrada);
            break;
        case "clasificar":
            mensaje = clasificarNumero(entrada);
            break;
        default:
            mensaje = "<p>❓ Tarea no reconocida.</p>";
    }

    resultado.innerHTML = mensaje;
}

function verificarParImpar(num) {
    if (num % 2 === 0) {
        return `<p>✅ El número ${num} es PAR.</p>`;
    } else {
        return `<p>✅ El número ${num} es IMPAR.</p>`;
    }
}

function contarHasta(limite) {
    let i = 1;
    let lista = "<p>🔁 Conteo:</p><ul>";
    while (i <= limite) {
        lista += `<li>${i}</li>`;
        i++;
    }
    lista += "</ul>";
    return lista;
}

function clasificarNumero(num) {
    let tipo = "";
    switch (true) {
        case (num >= 1 && num <= 3):
            tipo = "Bajo";
            break;
        case (num >= 4 && num <= 7):
            tipo = "Medio";
            break;
        case (num >= 8):
            tipo = "Alto";
            break;
        default:
            tipo = "Desconocido";
    }
    return `<p>📊 Clasificación: ${tipo}</p>`;
}