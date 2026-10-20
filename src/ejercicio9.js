function calcularPrecio(base, descuento) {
    let precioFinal = base;
    if (descuento) {
        // Normalizamos el descuento: si es mayor que 1 (ej: 60) lo tratamos como porcentaje (60% -> 0.60)
        let factorDescuento = descuento > 1 ? descuento / 100 : descuento;
        precioFinal = base - base * factorDescuento;
    }
    return precioFinal.toFixed(2);
}

console.log(calcularPrecio(100, 0.2)); // 80.00
console.log(calcularPrecio(100, 60));  // 40.00
