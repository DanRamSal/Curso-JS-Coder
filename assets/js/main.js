const arregloProds = document.querySelectorAll('.producto');

arregloProds.forEach(function(prod)
{    
    prod.querySelector('img').addEventListener('click', function(e) {
        var elemento = e.target;
        localStorage.setItem('imgProd', elemento.src);
        })
});

document.querySelector('.imgProdDet').src = localStorage.getItem('imgProd');