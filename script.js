document.getElementById('calculadora').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const precioIVA = parseFloat(document.getElementById('precioIVA').value);
    const precioBase = precioIVA / 1.21;
    const precioIGIC = precioBase * 1.07;
    
    document.getElementById('resultado').innerHTML = `
        Precio sin impuestos: ${precioBase.toFixed(2)}€<br>
        Precio con IGIC (7%): ${precioIGIC.toFixed(2)}€
    `;
});
