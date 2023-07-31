let productos = [
    {
        id: 1,
        nombreProducto: "Termo negro",
        descripcion: "sdadad",
        precio: 20000,
        imagen: "./assets/amarillo.jpg",
        cantidad: 0
    },
    {
        id: 2,
        nombreProducto: "Termo verde",
        descripcion: "sdadad",
        precio: 20000,
        imagen: "./assets/amarillo.jpg",
        cantidad: 0 
    },
    {
        id: 3,
        nombreProducto: "Termo blanco",
        descripcion: "sdadad",
        precio: 20000,
        imagen: "./assets/amarillo.jpg",
        cantidad: 0 
    },
    {
        id: 4,
        nombreProducto: "Termo rosa",
        descripcion: "sdadad",
        precio: 20000,
        imagen: "./assets/amarillo.jpg",
        cantidad: 0 
    },
    {
        id: 5,
        nombreProducto: "Termo rojo",
        descripcion: "sdadad",
        precio: 20000,
        imagen: "./assets/amarillo.jpg",
        cantidad: 0 
    },
    {
        id: 6,
        nombreProducto: "Termo azul",
        descripcion: "sdadad",
        precio: 20000,
        imagen: "./assets/amarillo.jpg",
        cantidad: 0 
    },
];

let productCards = document.getElementById("productCards");
let carrito = [];


for (let i = 0; i < productos.length; i++) {
    let producto = productos[i];
    let cardBootstrap = `
    <div class="col-md-4 mb-4">
        <div class="card">
            <img src="${producto.imagen}" class="card-img-top" alt="Imagen del producto">
            <div class="card-body">
                <h5 class="card-title">${producto.nombreProducto}</h5>
                <p class="card-text">Precio: ${producto.precio.toFixed(2)}</p>
                <input type="number" class="form-control mb-2" placeholder="Cantidad" value="${producto.cantidad}" min="1">
                <button class="btn btn-agregar-carrito" data-producto-id="${producto.id}">Agregar al carrito</button>
            </div>
        </div>
    </div>
    `;
    productCards.innerHTML += cardBootstrap;
}

let cantidadInputs = document.querySelectorAll('input[type="number"]')

for (let i = 0; i < cantidadInputs.length; i++) {
    let input = cantidadInputs[i]
    input.addEventListener("input", actualizarCantidad)   
}

let agregarButtons = document.getElementsByClassName("btn-agregar-carrito")

for (let i = 0; i < agregarButtons.length; i++) {
    let button = agregarButtons[i];
    button.addEventListener("click", agregarAlCarrito);
}

function actualizarCantidad(event) {
    let input = event.target;
    let productoId = input.getAttribute("data-producto-id");
    let cantidad = parseInt(input.value)

    let producto = productos.find((producto) => producto.id == parseInt(productoId));
    producto.cantidad = cantidad
}
console.log(actualizarCantidad)


function agregarAlCarrito(event) {
    let button = event.target;
    let productoId = button.getAttribute("data-producto-id");

    let producto = productos.find((producto) => producto.id == parseInt(productoId));
    let productoEnCarrito = carrito.find((item) => item.id == producto.id);

    if (productoEnCarrito) {
        productoEnCarrito += producto.cantidad;
    } else {
        carrito.push({ ...producto });
    }

    console.log("Producto agregado al carrito. ID: " + productoId);
    console.log("Carrito", carrito);
}
