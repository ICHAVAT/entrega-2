class Producto {
    constructor(nombre, precio, categoria) {
        this.nombre = nombre;
        this.precio = parseFloat(precio);
        this.categoria = categoria;

    }

}

const productos = [
    new Producto("computadora Portatil", 20000, "computacion"),
    new Producto("play station", 150000, "consolas"),
    new Producto("iphone 11", 120000, "smart phones"),
    new Producto("iphone 12", 130000, "smart phones"),
    new Producto("x box 360", 30000, "consolas"),
    new Producto("computadora escritorio", 40000, "computacion"),
    new Producto("switch", 90000, "consolas")

]
function crear_string(array) {
    let info = ""

    array.forEach(elemento => {
        info += "nombre " + elemento.nombre + "\nPrecio: $" + elemento.precio + "\nCategoria: " + elemento.categoria + "\n\n"

    })
    return info;
}

let continuar = true;

while (continuar) {
    let nuevo_producto = prompt("ingrese un nuevo producto, tienen que ingresar los datos: \n(producto-precio-categoria) separados por un - \nEjemplo: play station 1 - 5000 - consola\n si no quiere ingresar precione X ");

    if (nuevo_producto.toLowerCase() == "x") {
        continuar = false;
        break;
    }
    alert("el producto se agrego correctamente")
    let datos = nuevo_producto.split("-")
    const producto_agregado = new Producto(datos[0], datos[1], datos[2]);
    productos.push(producto_agregado);
    console.log(productos);

}

let desicion = prompt("elija una opcion: \n1-Agregar mas productos \n2- ver los productos agregados por mi \n3- ver todos los productos filtrado por precio \n4- filtrar por nombre \n5- precione X para finalizar")

while (desicion.toLowerCase() !== "x") {
    let array_ordenado = productos.slice(0);

    switch (desicion) {


        case "1":
            continuar = true;
            while (continuar) {
                let nuevo_producto = prompt("ingrese un nuevo producto, tienen que ingresar los datos producto-precio-categoria separados por un - \nEJ: play station 1 - 5000 - consola\n si no quiere ingresar precione X ");

                if (nuevo_producto.toLowerCase() == "x") {
                    continuar = false;
                    break;
                }
                alert("el producto se agrego correctamente")
                let datos = nuevo_producto.split("-")
                const producto_agregado = new Producto(datos[0], datos[1], datos[2]);
                productos.push(producto_agregado);


            }
            break;

        case "2":
            const productos_agregados = productos.slice(7);
            alert(crear_string(productos_agregados));
            break;

        case "3":
            const nombre_Ascendente = array_ordenado.sort((a, b) => a.precio - b.precio);
            alert(crear_string(nombre_Ascendente));
            break

        case "4":
            let producto_elejido = prompt("eleji el nombre del producto ( ejemplo: x box , play station, iphone")

            const filtrado = productos.filter((Producto) => Producto.nombre.toLowerCase().includes(producto_elejido.toLocaleLowerCase()))

            if (filtrado.length == 0) {
                alert("lo sentimos no se encontro ningun producto")

            } else {
                const imprimir = filtrado.map((Producto) => Producto.nombre); 
                alert("los productos con ese nombre son:\n- " + imprimir.join("\n- "))
            }
            break;

        default:
            alert("no ingresaste una opcion valida")
            break;
    }



    desicion = prompt("elija una opcion: \n1-Agregar mas productos \n2- ver los productos agregados por mi \n3- ver todos los productos filtrado por precio \n4- filtrar por nombre \n5- precione X para finalizar")

}


