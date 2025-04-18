//Creacion de master de productos a falta de base de datos
const masterProd = [
    {
        id: 1,
        nombre: "Blue eyes",
        descripcion: "This legendary dragon is a powerful engine of destruction. Virtually invincible, very few have faced this awesome creature and lived to tell the tale.",
        precio: 25.99,
        imagen: "../assets/images/Prod1.jpg",
    },
    {
        id: 2,
        nombre: "Dark Magician",
        descripcion: "The ultimate wizard in terms of attack and defense.",
        precio: 85.27,
        imagen: "../assets/images/Prod2.jpg",
    },
    {
        id: 3,
        nombre: "Red eyes",
        descripcion: "A ferocious dragon with a deadly attack.",
        precio: 123.99,
        imagen: "../assets/images/Prod3.jpg",
    },
    {
        id: 4,
        nombre: "Avatar",
        descripcion: "By sending 1 'Pot of Greed' from your hand to the Graveyard, draw 3 cards from your Deck.",
        precio: 44.27,
        imagen: "../assets/images/Prod4.jpg",
    },
    {
        id: 5,
        nombre: "Dark Paladin",
        descripcion: " Must be Fusion Summoned. When a Spell Card is activated (Quick Effect): You can discard 1 card; negate the activation, and if you do, destroy it. This card must be face-up on the field to activate and to resolve this effect. Gains 500 ATK for each Dragon monster on the field and in the GY.",
        precio: 98.89,
        imagen: "../assets/images/Prod5.jpg",
    },
    {
        id: 6,
        nombre: "Mewtwo 1",
        descripcion: "Mewtwo (Japanese: ミュウツー Mewtwo) is a Psychic-type Legendary Pokémon introduced in Generation I. While it is not known to evolve into or from any other Pokémon, Mewtwo can Mega Evolve into two different forms.",
        precio: 45.46,
        imagen: "../assets/images/Prod6.jpg",
    },
    {
        id: 7,
        nombre: "Mewtwo 2",
        descripcion: "Mewtwo (Japanese: ミュウツー Mewtwo) is a Psychic-type Legendary Pokémon introduced in Generation I. While it is not known to evolve into or from any other Pokémon, Mewtwo can Mega Evolve into two different forms.",
        precio: 45.46,
        imagen: "../assets/images/Prod7.jpg",
    },
    {
        id: 8,
        nombre: "Mewtwo 3",
        descripcion: "Mewtwo (Japanese: ミュウツー Mewtwo) is a Psychic-type Legendary Pokémon introduced in Generation I. While it is not known to evolve into or from any other Pokémon, Mewtwo can Mega Evolve into two different forms.",
        precio: 1245.46,
        imagen: "../assets/images/Prod8.jpg",
    },
    {
        id: 9,
        nombre: "Mewtwo 4",
        descripcion: "Mewtwo (Japanese: ミュウツー Mewtwo) is a Psychic-type Legendary Pokémon introduced in Generation I. While it is not known to evolve into or from any other Pokémon, Mewtwo can Mega Evolve into two different forms.",
        precio: 91.46,
        imagen: "../assets/images/Prod9.jpg",
    },
    {
        id: 10,
        nombre: "Mewtwo 5",
        descripcion: "Mewtwo (Japanese: ミュウツー Mewtwo) is a Psychic-type Legendary Pokémon introduced in Generation I. While it is not known to evolve into or from any other Pokémon, Mewtwo can Mega Evolve into two different forms.",
        precio: 55.46,
        imagen: "../assets/images/Prod10.jpg",
    },
];

document.querySelector('.cantCarrito').innerHTML = JSON.parse(localStorage.getItem("listaProd") || "[]").length;

//Logica para agregar evento de control de direccionado a detalle de producto.
const arregloProds = document.querySelectorAll('.producto');
arregloProds.forEach(function(prod)
{    
    prod.querySelector('img').addEventListener('click', function(e) {
        var elemento = e.target;
        var parentDiv = elemento.parentElement.parentElement;
        var titleP = parentDiv.querySelectorAll('p')[0];

        const producto = masterProd.find((d) => d.nombre == titleP.innerHTML)

        if (!producto) {
            console.error("Producto no encontrado en el base de datos.");
            return;
        }
        
        localStorage.setItem('imgProd', producto.imagen);
        localStorage.setItem('titleProd', producto.nombre);
        localStorage.setItem('descProd', producto.descripcion);
        localStorage.setItem('precio', producto.precio);
        });
});