const frutas = [
    {
        id: 1,
        nombre: "Anana",
        precio: 1250
    },
    {
        id: 2,
        nombre: "Naranja",
        precio: 850
    },
    {
        id: 3,
        nombre: "Pera",
        precio: 1100
    },
];
// Array para el carrito
const carrito = [];

// Obtener referencia al botón
const verFrutasBtn = document.getElementById("verFrutas");
verFrutasBtn.addEventListener("click", frutasDisponibles);

function frutasDisponibles() {
    const carritoDiv = document.getElementById("carrito");
    carritoDiv.innerHTML = ""; // Limpiar contenido anterior

    for (const fruta of frutas) {
        let cantidad = "";

        while (isNaN(cantidad) || cantidad.trim() === "") {
            cantidad = prompt(`¿Cuántos kilos de ${fruta.nombre} desea llevar?`);

            if (isNaN(cantidad) || cantidad.trim() === "") {
                alert("Ingrese una cantidad numérica válida.");
            }
        }

        const cantidadNumerica = parseInt(cantidad);
        if (cantidadNumerica > 0) {
            carrito.push({
                id: fruta.id,
                nombre: fruta.nombre,
                cantidad: cantidadNumerica,
                total: cantidadNumerica * fruta.precio
            });
        }
    }

    if (carrito.length > 0) {
        carritoDiv.innerHTML = "<h2>Carrito de compras:</h2>";
        for (const item of carrito) {
            carritoDiv.innerHTML += `<p>${item.cantidad} ${item.nombre} - Precio total: $${item.total.toFixed(2)}</p>`;
        }
        mostrarTotalCarrito();
    }
}

function mostrarTotalCarrito() {
    const totalCarrito = carrito.reduce((total, item) => total + item.total, 0);
    const totalDiv = document.getElementById("total");
    totalDiv.innerHTML = `<h2>Total de la compra: $${totalCarrito.toFixed(2)}</h2>`;
    totalDiv.style.display = "block";

    console.log(frutas)
}