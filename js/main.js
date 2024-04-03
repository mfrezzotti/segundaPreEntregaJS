//mensaje de bienvenida al simulador de compra

let mensajeDeBienvenida = `Bienvenido a FS Car Detail Shop.
Tenemos todo lo que necesitas para tu vehículo.`;

alert(mensajeDeBienvenida);

let presentacionDeInsumos = `Nuestros productos:
1. Cera para autos - $5500.
2. Shampoo para autos - $2500.
3. Paños de microfibra - $1000.
4. Restaurador de cueros - $6000` 


alert(presentacionDeInsumos);


// Definición de productos disponibles para detailing
const productosDetailing = [
    { 
      nombre: "Cera para autos", 
      precio: 5500 
    },

    { 
      nombre: "Shampoo para autos", 
      precio: 2500 
    },

    { 
      nombre: "Paños de microfibra", 
      precio: 1000 
    },

    { nombre: "Restaurador de cueros", 
      precio: 6000 
    },
];

// Función para agregar un producto al carrito de compras
function agregarAlCarrito(carrito, producto, cantidad) {
    carrito.push({ producto, cantidad });
}

// Función para calcular el subtotal de un producto en el carrito
function calcularSubtotalProducto(item) {
    return item.producto.precio * item.cantidad;
}

// Función para calcular el total de la compra

function calcularTotalCompra(carrito) {
    let total = 0;
    carrito.forEach(item => {
        total += calcularSubtotalProducto(item);
    });
    return total;
}

// Función para mostrar el resumen del carrito de compras

function mostrarResumenCarrito(carrito) {
    console.log("Resumen del carrito de compras:");
    carrito.forEach((item, index) => {
        console.log(`${index + 1}. ${item.cantidad} x ${item.producto.nombre} - Subtotal: $${calcularSubtotalProducto(item)}`);
    });
}

// Función para eliminar un producto del carrito de compras

function eliminarProductoDelCarrito(carrito, indice) {
    carrito.splice(indice, 1);
}

//Función para mostrar los productos disponibles

function mostrarProductosDisponibles() {
    productosDetailing.forEach((producto, index) => {
        console.log(`${index + 1}. ${producto.nombre} - Precio: $${producto.precio}`);
    });
}

// Función para buscar productos por nombre
function buscarProductoPorNombre(nombre) {
    return productosDetailing.find(producto => producto.nombre.toLowerCase() === nombre.toLowerCase());
}


// Función para simular la compra de insumos para detailing

function simularCompra() {
    const carritoCompras = [];
    let continuarCompra = true;

    console.log("¡Bienvenido a FS Car Detail Shop de insumos para detailing de vehículos!");

    while (continuarCompra) {
        mostrarProductosDisponibles();

        const opcion = prompt("Ingrese el número del producto que desea comprar (o 'salir' para finalizar la compra o 'eliminar' para quitar un producto del carrito):");
        
        if (opcion.toLowerCase() === 'salir') {
            continuarCompra = false;
            continue;
        } else if (opcion.toLowerCase() === 'eliminar') {
            if (carritoCompras.length === 0) {
                console.log("El carrito de compras está vacío. No hay productos para eliminar.");
                continue;
            }
            mostrarResumenCarrito(carritoCompras);
            const indiceEliminar = parseInt(prompt("Ingrese el número del producto que desea eliminar:")) - 1;
            if (!isNaN(indiceEliminar) && indiceEliminar >= 0 && indiceEliminar < carritoCompras.length) {
                eliminarProductoDelCarrito(carritoCompras, indiceEliminar);
                console.log("Producto eliminado del carrito.");
            } else {
                console.log("Opción no válida. Por favor, seleccione un número de producto válido para eliminar.");
            }
            continue;
        }

        const indiceProducto = parseInt(opcion) - 1;
        if (indiceProducto >= 0 && indiceProducto < productosDetailing.length) {
            const productoSeleccionado = productosDetailing[indiceProducto];
            const cantidad = parseInt(prompt(`Ingrese la cantidad de ${productoSeleccionado.nombre} que desea comprar:`));
            if (!isNaN(cantidad) && cantidad > 0) {
                agregarAlCarrito(carritoCompras, productoSeleccionado, cantidad);
                console.log(`Se agregaron ${cantidad} ${productoSeleccionado.nombre} al carrito.`);
            } else {
                console.log("La cantidad ingresada no es válida.");
            }
        } else {
            console.log("Opción no válida. Por favor, seleccione un número de producto válido.");
        }
    }

    console.log("Resumen de la compra:");
    mostrarResumenCarrito(carritoCompras);
    console.log(`Total de la compra: $${calcularTotalCompra(carritoCompras)}`);
}

simularCompra();
alert("Gracias por comprar el FS Car Detail. Lo esperamos cuando quiera volver!");

