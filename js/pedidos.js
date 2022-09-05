/* const listaproductos = [
    {producto:'ravioles', precio: 1200},
    {producto:'sorrentinos', precio: 1500},
    {producto:'agnolotis', precio: 1800},
    {producto:'fideos', precio: 650},
    {producto:'ñoquis',precio: 750},
];
 */


// NO ESTA ANDANDO BORRAR UN PRODUCTO DEL PEDIDO
// NO PERMITIR INGRESAR CANTIDAD CERO EN UN PEDIDO


class Productos {
    constructor(nombre, precio, stock, vencimiento) {
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
        this.vencimiento = vencimiento;
    }
}
// Inicialización de Variables
const listaproductos = [];
listaproductos.push (new Productos('ravioles',  1200,  10,  '12/05/2022'));
listaproductos.push (new Productos('agnolotis', 1800,  20, '12/05/2022'));
listaproductos.push (new Productos('fideos',  900,  14,  '11/05/2022'));
listaproductos.push (new Productos('ñoquis', 800,  30,  '11/05/2022'));
listaproductos.push (new Productos('sorrentinos',  1400,  8, '12/05/2022'));

let pedidoproducto =[];
let listadopedido =[];
let nroart = 0;
let costo = 0;
let totalpedido = 0;
let promo =false;
let nropromo = 0;
let total=0;
let pedidofinal='';
let cod= 0;
let cliente ='';
let mensaje="";
let promocion="";
let pedido="";

function agregarProducto(prod,cant,prec){
    pedidoproducto.push({producto: prod,cantidad: cant, costo: prec});
} 

function calculocosto(precio, cantidad) {
    costo = precio * cantidad; 
    return costo;
}

function buscoProducto(producto, listaproductos){
    cod = listaproductos.find(item => item.nombre.toUpperCase() === producto.toUpperCase());
    return cod;
}

function borrarelemento(elemento,lista){
    let elementobuscado = buscoProducto(elemento,lista);
    let ubicacion = lista.indexOf(elementobuscado);
    let confirma = prompt("Confirma la eliminación del artículo: "+elementobuscado.nombre + "? (S/N)");
    if (confirma.toUpperCase() ==="S") {
        lista.splice(ubicacion,1);
        alert("Se eliminó el artículo del pedido");
    } else {
        alert("No se eliminó el artículo del pedido");
    }
}

function calculototal() {
    totalpedido=0;

    for (let index = 0; index < pedidoproducto.length; index++) {
        totalpedido = totalpedido + pedidoproducto[index].costo;
    }
    return totalpedido;
}

function porcentaje(valor,porc) {
    let importe = valor*porc/100;
    return importe;
}

// Mediodía: 25% Descuento, Efectivo: 15% Descuento, Tarjeta 1 pago: 10% Descuento
function calculopromo(total,nropromo) {
    switch (nropromo) {
        case 1:
            total = total - porcentaje(total,25);
            promocion ="Mediodía 25% descuento";
            break;
        case 2:
            total = total - porcentaje(total,15);
            promocion ="Efectivo 15% descuento";
            break;
        case 3:
            total = total - porcentaje(total,10);   
            promocion ="Tarjeta 1 pago 10% descuento";
            break;
        default:
            break;
    }
    return total;
}

function verpedido(listado) {
    mensaje="";
    for (let index = 0; index < listado.length; index++) {
        mensaje =mensaje + " Producto: "+listado[index].producto + " Cantidad: "+listado[index].cantidad + " Costo: $"+listado[index].costo +"\n";
    } 
    pedido="Pedido hasta el momento \n"+mensaje;
    return pedido;
}

function crearPedido() {
    let producto = prompt("Ingrese el producto cuando quiera finalizar ingrese * \n Productos: ravioles, sorrentinos, agnolotis, fideos, ñoquis");
    while (producto != "*") {
        let estaproducto=buscoProducto(producto,listaproductos);
        if (estaproducto === undefined) {
            alert("Ese artículo no está a la venta");
        } else {
            let cantidad = parseInt(prompt("Ingrese la cantidad"));
            calculocosto(cod.precio,cantidad);
            agregarProducto(producto,cantidad,costo);
            pedido=verpedido(pedidoproducto);
            alert(pedido);
            nroart =nroart + 1;
        }
        producto = prompt("Ingrese el producto cuando quiera finalizar ingrese * \n Productos: ravioles, sorrentinos, agnolotis, fideos, ñoquis");
    }
}

function iniciar_pedido(){
let opcion = parseInt(prompt("~ Armado del Pedido ~ \n Elija una de las siguientes opciones: \n 1- Agregar producto al pedido \n 2- Eliminar un producto del pedido \n 3- Calcular Subtotal Compra \n 4- Calcular Promoción \n 5- Ver pedido actual \n 0- Finalizar Pedido"));
while (opcion != 0) {

    switch (opcion) {
        case 1:
            crearPedido();
            break;
        case 2:
            pedido=verpedido(pedidoproducto);
            alert(pedido);
            let productoeliminar = prompt("Ingrese el producto que desea eliminar");
            borrarelemento(productoeliminar,pedidoproducto);
            pedido=verpedido(pedidoproducto);
            alert(pedido);
            break;
        case 3:
            if (promocion!=""){
                    promocion="";
            };
            totalpedido = calculototal();
            alert(`Total del Pedido hasta el momento SIN promoción: $${totalpedido}`);
            break;
        case 4:
            nropromo = parseInt(prompt("Elija una de las siguientes promociones \n 1- Mediodía \n 2- Efectivo \n 3- Tarjeta un pago \n 0- Menú anterior"));
            if (totalpedido === 0) {
                totalpedido = calculototal();
            };
            if (nropromo >3){
                alert("Esa promoción no existe");
            }else {
                total = calculopromo(totalpedido,nropromo);
                pedido=verpedido(pedidoproducto);
                alert(pedido+` Pedido con la Promoción ${promocion} es: $ ${total}`);
                promo=true;
                break;
            }
        case 5:
            if (promocion===""){            
                pedido=verpedido(pedidoproducto);
                totalpedido = calculototal();
                alert(pedido+"\n"+" Importe hasta el momento: $"+totalpedido);
            } else {
                pedido=verpedido(pedidoproducto);
                alert(pedido+"\n"+" Promoción Elegida "+promocion+" Importe: $"+total);
            }
            break;
        default:
            break;
    } 
    opcion = parseInt(prompt("~ Armado del Pedido ~ \n Elija una de las siguientes opciones:  \n 1- Agregar producto al pedido \n 2- Eliminar un producto del pedido \n 3- Calcular Subtotal Compra \n 4- Calcular Promoción \n 5- Ver pedido actual \n 0- Finalizar Pedido"));
}
totalpedido = calculototal();
if (promocion != "" & total > 0){
    pedido=verpedido(pedidoproducto);
    pedidofinal="Valor del pedido con la promoción "+ promocion+ " es $ "+total;
    alert(pedido+"\n"+pedidofinal);
} else if (totalpedido > 0) {
    pedido=verpedido(pedidoproducto);
    pedidofinal="Valor del pedido es $ "+totalpedido;
    alert(pedido+"\n"+pedidofinal);
} else {
    alert(`No hizo ningún pedido`);
}
listadopedido=[];
}