
const productosViu = [
    {
        id: 0,
        categoria: 'Bikinis',
        modelo: 'Triangulito ',
        estampado: 'Aurora',
        thumbnail: './Imagenes/aurora.png',
        precio: 15999,
    },
    {
        id: 1,
        categoria: 'Bikinis',
        modelo: 'Triangulito ',
        estampado: 'Federica',
        thumbnail: './Imagenes/federica.png',
        precio: 15999,
    },
    {
        id: 2,
        categoria: 'Bikinis',
        modelo: 'Triangulito ',
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

const mainElement = document.querySelector('main');

let cards = document.createElement('div');

for (const producto of productosViu) {
    cards.innerHTML += `
                    <section class="section3">
                        <img src=${producto.thumbnail}>
                    
                        
                        <h3><span>${producto.modelo}</span></h3>
                        
                        <h3> ${producto.estampado}</h3>
                        <p>Precio:${producto.precio}</p>
                        <a data-id=${producto.id} class="card-link">Seleccionar Producto</a>
                        </section>`;
}

mainElement.appendChild(cards);


const form = document.querySelector('#form');
const formContainer = document.querySelector('.form-container-inputs');


formContainer.innerHTML = `
    <h5>Ingrese su consulta </h5>
    <div>
        
        <label  for="name">Nombre:</label>
        <input class= ¨textoForm¨ id="name" placeholder="Ingrese su nombre" type="text">
    </div>
    <div>
        <label for="email">Email:</label>
        <input class= ¨textoForm¨ id="email" placeholder="Ingrese su email" type="email">
    </div>
    <div>
        <label for="consulta">Consulta:</label>
        <input class= ¨textoForm¨ id="consulta" placeholder="Ingrese su consulta" type="text">
    </div>
    <button id="save-button">Enviar</button>
    `;

    

form.appendChild(formContainer);

const saveData = () => {
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;

    if (name && email) {
        const data = {
            name, 
            email,
        }
        localStorage.setItem('userData', JSON.stringify(data));
        console.log(data)
    }
}
const resUser = JSON.parse(localStorage.getItem('userData'));
console.log (resUser)

const saveButton = document.querySelector('#save-button');
    saveButton.addEventListener('click', saveData);