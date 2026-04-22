const VENTAS_BASE = 5;

function calcularComision(numeroVentas, precioProducto) {
    let comision = 0;
    // Si las ventas superan la base, se paga 10% sobre el precio por cada venta extra
    if (numeroVentas > VENTAS_BASE) {
        let ventaExtra = numeroVentas - VENTAS_BASE;
        comision = ventaExtra * (precioProducto * 0.1);
    }
    return comision;
}

function calcular() {
    // 1. Recuperar valores usando la función de utilitarios.js
    let sueldoBaseStr = recuperarTexto("txtSueldoBase");
    let numeroVentasStr = recuperarTexto("txtVentas");
    let precioProductoStr = recuperarTexto("txtPrecio");

    // 2. Validaciones básicas
    if (sueldoBaseStr === "" || numeroVentasStr === "" || precioProductoStr === "") {
        alert("Por favor, completa todos los campos.");
        return;
    }

    let sueldoBase = parseFloat(sueldoBaseStr);
    let numeroVentas = parseFloat(numeroVentasStr);
    let precioProducto = parseFloat(precioProductoStr);

    if (sueldoBase < 0 || numeroVentas < 0 || precioProducto < 0) {
        alert("Los valores no pueden ser negativos.");
        return;
    }

    // 3. Lógica de cálculo
    let comision = calcularComision(numeroVentas, precioProducto);
    let total = sueldoBase + comision;

    // 4. Mostrar resultados en el HTML con formato de moneda
    document.getElementById("spSueldoBase").textContent = `$${sueldoBase.toFixed(2)}`;
    document.getElementById("spComision").textContent = `$${comision.toFixed(2)}`;
    document.getElementById("spTotal").textContent = `$${total.toFixed(2)}`;
}