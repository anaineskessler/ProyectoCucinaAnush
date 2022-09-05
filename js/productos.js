class Productos {
    constructor(nombre, precio, stock, vencimiento) {
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
        this.vencimiento = vencimiento;
    }
}

// FALTARIA MODIFICAR UN PRODUCTO


// Inicialización de Variables
const listaproductos = [];
listaproductos.push (new Productos('ravioles',  1200,  10,  '12/05/2022'));
listaproductos.push (new Productos('agnolotis', 1800,  20, '12/05/2022'));
listaproductos.push (new Productos('fideos',  900,  14,  '11/05/2022'));
listaproductos.push (new Productos('ñoquis', 800,  30,  '11/05/2022'));
listaproductos.push (new Productos('sorrentinos',  1400,  8, '12/05/2022'));

function agregarProducto(nomb,prec,st,vto) {
    listaproductos.push({nombre: nomb, precio: prec, stock: st, vencimiento: vto});
}

function buscoProducto(prod, listaproductos){
    codProd = listaproductos.find(item => item.nombre.toUpperCase() === prod.toUpperCase());
    return codProd;
}

function borrarProducto(producto,listaproductos){
    elementobuscado = buscoProducto(producto.nombre,listaproductos);
    ubicacion = listaproductos.indexOf(elementobuscado);
    // alert(JSON.stringify(ubicacion));
    let confirma = prompt("Confirma la eliminación del Producto: "+elementobuscado.nombre+ "? (S/N)");
    if (confirma.toUpperCase() ==="S") {
        listaproductos.splice(ubicacion,1);
        alert("Se eliminó el producto");
    } else {
        alert("No se eliminó el producto");
    }
}

function bajaProducto(){
    alert("~ Baja de Productos ~\n"+verProductos(listaproductos));
    let producto = prompt("Dar de Baja Productos de Nuestros Listados\n Ingrese el nombre del Producto a dar de baja: ");
    estaProducto= buscoProducto(producto,listaproductos);
    if (estaProducto === undefined) {
        alert("Ese producto no existe");
    } else {
        borrarProducto(estaProducto,listaproductos);
    }
}

function verProductos(listado) {
    let mensaje="";
    for (let index = 0; index < listado.length; index++) {
        mensaje =mensaje + " Nombre: "+listado[index].nombre + " Precio: $"+listado[index].precio +"  Stock: "+listado[index].stock + " Fecha Vto: "+listado[index].vencimiento +"\n";
    } 
    listProd="Listado de Productos \n"+mensaje;
    return listProd;
}

function altaProducto() {
    producto = prompt(`Alta de Productos \n Ingrese su nombre (Para finalizar * ): `);
    while (producto !="*") {
        let estaProducto = buscoProducto(producto,listaproductos);
        if (estaProducto === undefined) {
            alert("Producto nuevo");
            let prec = parseFloat(prompt("Ingrese el precio: $"));
            let st = parseInt(prompt("Ingrese el Stock: "));
            let vto = prompt ("Ingrese la Fecha de Vencimiento:");
            agregarProducto(producto,prec,st,vto);
            alert(verProductos(listaproductos));
        } else {
            alert("Ese producto ya se encuentra en nuestros listados");
        }
        producto = prompt(`Alta de Productos \n Ingrese su nombre (Para finalizar * ): `);
    }
}

function modificoProducto(){
    alert("~ Modificación de un Producto ~\n"+verProductos(listaproductos));
    let producto = prompt("Modificación de un Producto\n Ingrese el nombre del Producto a modificar: ");
    let estaProducto= buscoProducto(producto,listaproductos);
    if (estaProducto === undefined) {
        alert("Ese producto no existe");
    } else {
        ubicacion = listaproductos.indexOf(estaProducto);
        let prec = parseFloat(prompt("Ingrese el nuevo precio: $"));
        let st = parseInt(prompt("Ingrese el nuevo Stock: "));
        let vto = prompt ("Ingrese la nueva Fecha de Vencimiento:");
        listaproductos[ubicacion].precio=prec;
        listaproductos[ubicacion].stock=st;
        listaproductos[ubicacion].vencimiento=vto;
    }
}

function verProductosCant (listado){
    let cantBuscar = parseInt(prompt("Artículos con poco Stock \n Ingrese la cantidad tope a buscar: "));
    let mensaje="Listado de Productos con un stock menor a: "+cantBuscar+":\n";
    let listadoStock = listado.filter(item => item.stock < cantBuscar);
    if (listadoStock.length > 0) {
        for (let index = 0; index < listadoStock.length; index++) {
            mensaje =mensaje + " Nombre: "+listadoStock[index].nombre + " Stock: "+listadoStock[index].stock +"  Fecha Vencimiento "+listado[index].vencimiento+"\n";
        }
        alert(mensaje);
    }else{
        alert("No hay productos con un stock menor a : "+localidadBuscar);
    }
}

function iniciarProductos(){
    let opcion = parseInt(prompt("Menú de Productos \n 1- Alta de Producto \n 2- Baja de Producto \n 3- Modificación de un Producto \n 4- Listado de Productos General \n 5- Listado de Productos cuyo stock sea menor que .... unidades \n 0- Salir"));
    while (opcion != 0) {
        switch (opcion) {
            case 1:
                altaProducto();
                break;
            case 2:
                bajaProducto();
                break;
            case 3:
                modificoProducto();
                break;
            case 4:
                alert(verProductos(listaproductos));
                break;
            case 5:
                verProductosCant(listaproductos);
                break;
            default:
                break;
        } 
        opcion = parseInt(prompt("Menú de Productos \n 1- Alta de Producto \n 2- Baja de Producto \n 3- Modificación de un Producto \n 4- Listado de Productos General \n 5- Listado de Productos cuyo stock sea menor que .... unidades \n 0- Salir"));
    }
}
