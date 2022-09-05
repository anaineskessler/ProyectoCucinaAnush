const listaproductos = [
    {producto:'ravioles', precio: 1200},
    {producto:'sorrentinos', precio: 1500},
    {producto:'agnolotis', precio: 1800},
    {producto:'fideos', precio: 650},
    {producto:'ñoquis',precio: 750},
];

const listacliente = [
    {nombre: "Mariana Perez", direccion: "Rivadavia 45"},
    {nombre: "Gonzalo Rodriguez", direccion: "Concordia 432"},
    {nombre: "Sandra Bertolo", direccion: "Leones 344"},
    {nombre: "Andres Suarez", direccion: "Figueroa 424"},
];

//inicialización variables
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

function agregarProducto(prod,cant,prec){
    pedidoproducto.push({producto: prod,cantidad: cant, costo: prec});
} 

function agregarCliente(nomb,dir) {
    listacliente.push({nombre: nomb, direccion: dir});
}

function calculocosto(precio, cantidad) {
    costo = precio * cantidad; 
//    alert(`${costo}`);
    return costo;
}

function buscoProducto(producto, listaproductos){
    cod = listaproductos.find(listaproductos => listaproductos.producto === producto);
    return cod;
}

function buscoCliente(cliente, listacliente){
    codCli = listacliente.find(listacliente => listacliente.nombre === cliente);
    return codCli;
}

function borrarelemento(elemento,lista){
    let elementobuscado = buscoProducto(elemento,lista);
    let ubicacion = lista.indexOf(elementobuscado);
    let confirma = prompt("Confirma la eliminación de: "+JSON.stringify(elementobuscado) + "? (S/N)");
    if (confirma.toUpperCase() ==="S") {
        lista.splice(ubicacion,1);
        alert("Se eliminó el artículo del pedido");
    } else {
        alert("No se eliminó el artículo del pedido");
    }
}

function calculototal() {
    totalpedido=0;
    //alert(JSON.stringify(pedidoproducto));
    //alert(pedidoproducto.costo);
    for (let index = 0; index < pedidoproducto.length; index++) {
        totalpedido = totalpedido + pedidoproducto[index].costo;
        //alert(totalpedido);
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
//            alert("promo1");
            break;
        case 2:
            total = total - porcentaje(total,15);
//            alert("promo2");
            break;
        case 3:
            total = total - porcentaje(total,10);   
//            alert("promo3");     
            break;
        default:
            break;
    }
    return total;
}

function verlistado(listado){
    alert(JSON.stringify(listado));
}
/* 
function iniciarprograma(){
let opcion = parseInt(prompt("Elija una de las siguientes funciones \n 1- Agregar producto al pedido \n 2- Eliminar un producto del pedido \n 3- Calcular Subtotal Compra \n 4- Calcular Promoción \n 5- Ver pedido actual \n 6- Listado de Clientes \n 7- Alta de Cliente \n 0- Finalizar Pedido"));
// alert(`Cant ${nroart}`);
while (opcion != 0) {

    switch (opcion) {
        case 1:
            let producto = prompt("Ingrese el producto (ravioles, sorrentinos, agnolotis, fideos, ñoquis)");
            let cantidad = parseInt(prompt("Ingrese la cantidad"));
            buscoProducto(producto,listaproductos);
            calculocosto(cod.precio,cantidad);
            agregarProducto(producto,cantidad,costo);
            verlistado(pedidoproducto);
            nroart =nroart + 1;
            break;
        case 2:
            verlistado(pedidoproducto);
            let productoeliminar = prompt("Ingrese el producto que desea eliminar");
            borrarelemento(productoeliminar,pedidoproducto);
            verlistado(pedidoproducto);
            break;
        case 3:
            totalpedido = calculototal();
            alert(`Total del Pedido hasta el momento: $${totalpedido}`);
            break;
        case 4:
            nropromo = parseInt(prompt("Elija una de las siguientes promociones \n 1- Mediodía \n 2- Efectivo \n 3- Tarjeta un pago \n 0- Menú anterior"));
            if (totalpedido === 0) {
                totalpedido = calculototal();
            };
            total = calculopromo(totalpedido,nropromo);
            alert(`Pedido con la Promoción ${nropromo}: $ ${total}`);
            promo=true;
            break;
        case 5:
            verlistado(pedidoproducto);
            break;
        case 6:
            verlistado(listacliente);
            break;
        case 7:
            let cliente = prompt("Ingrese su nombre: ");
            let estaCliente= buscoCliente(cliente,listacliente);
            if (estaCliente === undefined) {
                alert("Cliente nuevo");
                let dir = prompt("Ingrese la dirección: ");
                agregarCliente(cliente,dir);
                alert(JSON.stringify(listacliente));
            } else {
                alert("Ese cliente ya se encuentra en nuestros listados");
            }
        default:
            break;
    } 
//    alert(`Cant ${nroart}`);
    opcion = parseInt(prompt("Elija una de las siguientes funciones \n 1- Agregar producto al pedido \n 2- Eliminar un producto del pedido \n 3- Calcular Subtotal Compra \n 4- Calcular Promoción \n 5- Ver pedido actual \n 6- Listado de Clientes \n 7-Alta de Cliente \n 0- Finalizar Pedido"));
}
totalpedido = calculototal();
if (promo & total > 0){
    verlistado(pedidoproducto);
    pedidofinal="Valor del pedido con promoción es $ "+total;
    alert(pedidofinal);
} else if (totalpedido > 0) {
    verlistado(pedidoproducto);
    pedidofinal="Valor del pedido es $ "+totalpedido;
    alert(pedidofinal);
} else {
    alert(`No hizo ningún pedido`);
}
} */