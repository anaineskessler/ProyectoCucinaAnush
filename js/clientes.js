class Cliente {
    constructor(nombre, direccion, localidad, telefono) {
        this.nombre = nombre;
        this.direccion = direccion;
        this.localidad = localidad;
        this.telefono = telefono;
    }
}
//inicialización variables
let codCli= 0;
let cliente ='';
let estaCliente="";
let listCli="";
let elementobuscado="";
let ubicacion=0;

const listacliente = [];
listacliente.push(new Cliente("Mariana Perez", "Rivadavia 45", "Morón", "0114654-6542"));
listacliente.push(new Cliente("Gonzalo Ríos", "Concordia 42","CABA","0115588-78542"));
listacliente.push(new Cliente("Sandra Bertolo", "Leones 34","Morón","0113654-8956"));
listacliente.push(new Cliente("Andres Suarez", "Figueroa 24","CABA","0115652-5544"));

function agregarCliente(nomb,dir,loc,tel) {
    listacliente.push({nombre: nomb, direccion: dir, localidad: loc, telefono: tel});
}

function buscoCliente(cliente, listacliente){
    codCli = listacliente.find(item => item.nombre.toUpperCase() === cliente.toUpperCase());
    return codCli;
}

function borrarCliente(cliente,listacliente){
    elementobuscado = buscoCliente(cliente.nombre,listacliente);
    ubicacion = listacliente.indexOf(elementobuscado);
    // alert(JSON.stringify(ubicacion));
    let confirma = prompt("Confirma la eliminación del Cliente: "+elementobuscado.nombre+ "? (S/N)");
    if (confirma.toUpperCase() ==="S") {
        listacliente.splice(ubicacion,1);
        alert("Se eliminó el cliente");
    } else {
        alert("No se eliminó el cliente");
    }
}

function bajaCliente(){
    alert("~ Baja de Clientes ~\n"+verClientes(listacliente));
    cliente = prompt("Dar de Baja Clientes de Nuestros Listados\n Ingrese su nombre del Cliente a dar de baja: ");
    estaCliente= buscoCliente(cliente,listacliente);
    if (estaCliente === undefined) {
        alert("Ese cliente no existe");
    } else {
        borrarCliente(estaCliente,listacliente);
    }
}

function verClientes(listado) {
    let mensaje="";
    for (let index = 0; index < listado.length; index++) {
        mensaje =mensaje + " Nombre: "+listado[index].nombre + " Dir: "+listado[index].direccion +"  Loc: "+listado[index].localidad + " Tel: "+listado[index].telefono +"\n";
    } 
    listCli="Listado de Clientes \n"+mensaje;
    return listCli;
}

function verClientesLocalidad (listado){
    let localidadBuscar = prompt("Clientes por Localidad \n Ingrese la localidad a buscar los clientes: ");
    let mensaje="Listado de Clientes de la localidad: "+localidadBuscar.toUpperCase()+":\n";
    let listadoLocalidad = listado.filter(item => item.localidad.toUpperCase() === localidadBuscar.toUpperCase());
    if (listadoLocalidad.length > 0) {
        for (let index = 0; index < listadoLocalidad.length; index++) {
            mensaje =mensaje + " Nombre: "+listadoLocalidad[index].nombre + " Dir: "+listadoLocalidad[index].direccion +"  Loc: "+listadoLocalidad[index].localidad + " Tel: "+listadoLocalidad[index].telefono +"\n";
        }
        alert(mensaje);
    }else{
        alert("No hay clientes en la localidad: "+localidadBuscar);
    }
}

function altaCliente() {
    cliente = prompt(`Alta de Clientes \n Ingrese su nombre (Para finalizar "*"): `);
    while (cliente !="*") {
        estaCliente= buscoCliente(cliente,listacliente);
        if (estaCliente === undefined) {
            alert("Cliente nuevo");
            let dir = prompt("Ingrese la dirección: ");
            let loc = prompt("Ingrese la Localidad: ");
            let tel = prompt ("Ingrese el teléfono:");
            agregarCliente(cliente,dir,loc,tel);
            alert(verClientes(listacliente));
        } else {
            alert("Ese cliente ya se encuentra en nuestros listados");
        }
        cliente = prompt(`Alta de Clientes \n Ingrese su nombre (Para finalizar "*"): `);
    }
}

function iniciarClientes(){
    let opcion = parseInt(prompt("Menú de Clientes \n 1- Alta de Cliente \n 2- Baja de Cliente \n 3- Listado de Clientes General \n 4- Listado de Clientes de una Localidad \n 0- Salir"));
    while (opcion != 0) {
        switch (opcion) {
            case 1:
                altaCliente();
                break;
            case 2:
                bajaCliente();
                break;
            case 3:
                alert(verClientes(listacliente));
                break;
            case 4:
                verClientesLocalidad(listacliente);
                break;
            default:
                break;
        } 
        opcion = parseInt(prompt("Menú de Clientes \n 1- Alta de Cliente \n 2- Baja de Cliente \n 3- Listado de Clientes \n 4- Listado de Clientes de una Localidad \n 0- Salir"));
    }
}
