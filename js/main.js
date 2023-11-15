
const productosViu = [
    {
        id: 0,
        categoria: 'Bikini',
        modelo: 'Bikini Triangulito ',
        estampado: 'Aurora',
        thumbnail: './Imagenes/aurora.png',
        precio: 15999,
    },
    {
        id: 1,
        categoria: 'Bikini',
        modelo: 'Bikini Triangulito ',
        estampado: 'Federica',
        thumbnail: './Imagenes/federica.png',
        precio: 15999,
    },
    {
        id: 2,
        categoria: 'Bikini',
        modelo: 'Bikini Triangulito ',
        estampado: 'Olivia',
        thumbnail: './Imagenes/olivia.png',
        precio: 15999,
    },
    {
        id: 3,
        categoria: 'Fitness',
        modelo: 'Calza Corta ',
        estampado: 'Andrómeda',
        thumbnail: './Imagenes/andromeda.png',
        precio: 12999,
    },
    {
        id: 4,
        categoria: 'Fitness',
        modelo: 'Calza Larga ',
        estampado: 'Libra',
        thumbnail: './Imagenes/libra.png',
        precio: 15999,
    },
    {
        id: 5,
        categoria: 'Fitness',
        modelo: 'Calza Larga ',
        estampado: 'Escorpio',
        thumbnail: './Imagenes/escorpio.png',
        precio: 15999,
    },
]; 


const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
const mainElement = document.querySelector('main');

function agregarAlCarrito(id) {
    const producto = productosViu.find((p) => p.id == id);

    if (producto) {
        carrito.push(producto);
        localStorage.setItem('carrito', JSON.stringify(carrito));
        console.log('Producto agregado al carrito:', producto);
        mostrarCarrito();
        mostrarSweetAlert();
    } else {
        console.error('Producto no encontrado');
    }

    const btnAdd = document.getElementById(`agregar-${id}`);
    btnAdd.innerHTML = 'Producto agregado';
    btnAdd.disabled = true;
}

function mostrarCarrito() {
    const carritoHtml = document.querySelector('.carrito');
    const carritoLocalStorage = JSON.parse(localStorage.getItem('carrito')) || [];

    if (carritoLocalStorage.length > 0) {
        carritoHtml.innerHTML = '';
        carritoLocalStorage.forEach((item) => {
            carritoHtml.innerHTML += `
                <section class="section5">
                    <img class="card-img-carrito" src=${item.thumbnail}>     
                    <h3 class="card-modelo-carrito"><span>${item.modelo}</span></h3>
                    <h3 class="card-estampado-carrito">${item.estampado}</h3>
                    <p class="card-precio-carrito">Precio: $ ${item.precio}</p>
                </section>`;
        });
    } else {
        carritoHtml.innerHTML = '<p>El carrito está vacío.</p>';
    }
}

function mostrarSweetAlert() {
    Swal.fire({
        position: "center",
        icon: "success",
        title: "Producto agregado con éxito",
        showConfirmButton: false,
        timer: 1500
    });
}

mostrarCarrito();

let cards = document.createElement('div');

for (const producto of productosViu) {
    const card = document.createElement('section');
    card.classList.add('section5');
    card.innerHTML = `
        <img class="card-img" src=${producto.thumbnail}>     
        <h3 class="card-modelo"><span>${producto.modelo}</span></h3>
        <h3 class="card-estampado"> ${producto.estampado}</h3>
        <p class="card-precio">Precio: $ ${producto.precio}</p>
    `;

    const btnAdd = document.createElement('button');
    btnAdd.classList.add('btn-agregaralcarrito');
    btnAdd.id = `agregar-${producto.id}`;
    btnAdd.innerText = 'Agregar al carrito';
    btnAdd.addEventListener('click', () => agregarAlCarrito(producto.id));

    card.appendChild(btnAdd);
    cards.appendChild(card);
}

mainElement.appendChild(cards);



const form = document.querySelector('#form');
const formContainer = document.querySelector('.form-container-inputs');

formContainer.innerHTML = `
    <h5>Ingrese su consulta </h5>
    <div>
        <label for="name">Nombre:</label>
        <input class="textoForm" id="name" placeholder="Ingrese su nombre" type="text">
    </div>
    <div>
        <label for="email">Email:</label>
        <input class="textoForm" id="email" placeholder="Ingrese su email" type="email">
    </div>
    <div>
        <label for="consulta">Consulta:</label>
        <input class="textoForm" id="consulta" placeholder="Ingrese su consulta" type="text">
    </div>
    <button id="save-button">Enviar</button>`;

form.appendChild(formContainer);

const saveData = () => {
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;

    if (name && email) {
        const data = {
            name,
            email,
        };
        localStorage.setItem('userData', JSON.stringify(data));
        console.log(data);
    }
};

const resUser = JSON.parse(localStorage.getItem('userData'));

const saveButton = document.querySelector('#save-button');
saveButton.addEventListener('click', saveData);
