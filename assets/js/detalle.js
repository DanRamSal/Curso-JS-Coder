document.querySelector('.cantCarrito').innerHTML = JSON.parse(localStorage.getItem("listaProd") || "[]").length;

try{
    document.querySelector('.imgProdDet').src = localStorage.getItem('imgProd');
    document.querySelector('#titleProd').innerHTML = localStorage.getItem('titleProd');
    document.querySelector('#descProd').innerHTML = localStorage.getItem('descProd');
    document.querySelector('#precio').innerHTML = localStorage.getItem('precio');
}
catch(e){
    console.log("Error al cargar producot seleccionado");
    console.log(e);
}

//Evento para agregar a carrito en pantalla de detalle de producto. 
function agregarACarrito()
{
    const prods = JSON.parse(localStorage.getItem("listaProd") || "[]"); 
    const nuevoObj = {'nombre' : document.querySelector('h1').innerHTML};
    prods.push(nuevoObj);

    localStorage.setItem("listaProd", JSON.stringify(prods)); 
    document.querySelector('.cantCarrito').innerHTML = JSON.parse(localStorage.getItem("listaProd") || "[]").length;

     //Mensaje de toastify para confirmacion.
     Toastify({
        text: "Producto agregado al carrito",
        duration: 3000,
        close: true,
        gravity: "top",
        position: "right",
        backgroundColor: "#3273a8",
        offset: {
            x: 50, 
            y: 80 
          },
        stopOnFocus: true,
    }).showToast();
}