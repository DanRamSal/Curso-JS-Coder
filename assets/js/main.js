const arregloProds = document.querySelectorAll('.producto');

arregloProds.forEach(function(prod)
{    
    prod.querySelector('img').addEventListener('click', function(e) {
        var elemento = e.target;
        var parentDiv = elemento.parentElement.parentElement;
        var titleP = parentDiv.querySelectorAll('p')[0];
        var descP = parentDiv.querySelectorAll('p')[1];
        localStorage.setItem('imgProd', elemento.src);
        localStorage.setItem('titleProd', titleP.innerHTML);
        localStorage.setItem('descProd', descP.innerHTML);
        });
});

document.querySelector('.cantCarrito').innerHTML = JSON.parse(localStorage.getItem("listaProd") || "[]").length;

try{
document.querySelector('.imgProdDet').src = localStorage.getItem('imgProd');
document.querySelector('#titleProd').innerHTML = localStorage.getItem('titleProd');
document.querySelector('#descProd').innerHTML = localStorage.getItem('descProd');
}
catch(e){}


function agregarACarrito()
{
    const prods = JSON.parse(localStorage.getItem("listaProd") || "[]"); 
    const nuevoObj = {'titulo' : document.querySelector('h1').innerHTML};
    prods.push(nuevoObj);

    localStorage.setItem("listaProd", JSON.stringify(prods)); 
    document.querySelector('.cantCarrito').innerHTML = JSON.parse(localStorage.getItem("listaProd") || "[]").length;
}