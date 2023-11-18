document.getElementById('calculadora').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const precioIVA = parseFloat(document.getElementById('precioIVA').value);
    const precioBase = precioIVA / 1.21;
    const cantidadIVA = precioIVA - precioBase;
    const precioIGIC = precioBase * 1.07;
    const cantidadIGIC = precioIGIC - precioBase;
    
    document.querySelector('.precioBase').textContent = `Precio sin impuestos: ${precioBase.toFixed(2)}€`;
    document.querySelector('.cantidadIVA').textContent = `Cantidad correspondiente al IVA: ${cantidadIVA.toFixed(2)}€`;
    document.querySelector('.precioIGIC').textContent = `Precio con IGIC (7%): ${precioIGIC.toFixed(2)}€`;
    document.querySelector('.cantidadIGIC').textContent = `Cantidad correspondiente al IGIC: ${cantidadIGIC.toFixed(2)}€`;
});
