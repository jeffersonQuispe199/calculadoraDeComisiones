const VENTAS_BASE=5;
function calcularComision(numeroVentas,PrecioProducto){
    let comision=0;
    if (numeroVentas > VENTAS_BASE){
        let ventaExtra= numeroVentas-VENTAS_BASE;
        comision = ventaExtra * (PrecioProducto*0.1);
    }
    return comision;
}
function calcular(){
 // recuperamos propiedades de la caja de texto
    let componenteSueldoBase =  document.getElementById("txtSueldoBase");
    let componenteVentas =  document.getElementById("txtVentas");
    let componentePecio =  document.getElementById("txtPrecio");
// recuperamos el valor de las cajas de texto
    let SueldoBaseStr = componenteSueldoBase.value;
    let SueldoVentasStr = componenteVentas.value;
    let PrecioPtoductoStr = componentePecio.value;
    // convertimos el texto en numeros
    let SueldoBase = parseFloat(SueldoBaseStr);
    let numeroVentas = parseFloat(SueldoVentasStr);
    let PrecioProducto = parseFloat(PrecioPtoductoStr);
    let comision=calcularComision(numeroVentas,PrecioProducto);

    let total = SueldoBase + comision;

    let spSueldoBase= document.getElementById("spSueldoBase");
    let spComision= document.getElementById("spComision");
    let spTotal= document.getElementById("spTotal");

    spSueldoBase.textContent=SueldoBase;
    spComision.textContent=comision;
    spTotal.textContent=total;








}