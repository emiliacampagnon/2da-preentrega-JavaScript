let userName = prompt ("Ingresá tu nombre")

function login () {
    
    let SingUpPass = prompt ('Ingrese una nueva contraseña');
    let ingresar = false;
    let intentos = 3;
    
    for (let i = intentos; i > 0 ; i--) {
        let logInPass = prompt('Ingresá la contraseña, Tenés ' + i + ' intento/s.');
        if (SingUpPass === logInPass) {
            alert('Bienvenido/a ' +userName);
            ingresar = true;
            break;
        } else {
            alert('Error, Te quedan ' + (i - 1) + ' intento/s.');
        }
    }
}

if (login ()) {
    
}

const productos = [
    {
        id: 0,
        categoria: 'Bikinis',
        modelo: 'Triangulito',
        estampado: 'Julia',
        talle: 1,
        precio: 15999
    },
    {
        id: 1,
        categoria: 'Bikinis',
        modelo: 'Triangulito',
        estampado: 'Julia',
        talle: 2,
        precio: 15999,
    },
    {
        id: 2,
        categoria: 'Fitness',
        modelo: 'calza corta',
        estampado: 'Andrómeda',
        talle: 1,
        precio: 12999,
    },
    {
        id: 3,
        categoria: 'Fitness',
        modelo: 'calza corta',
        estampado: 'Andrómeda',
        talle: 2,
        precio: 12999,
    },
    {
        id: 4,
        categoria: 'Urban',
        modelo: 'Hoodie',
        estampado: 'xx Black',
        talle: 1,
        precio: 15999,
    },
    {
        id: 5,
        categoria: 'Urban',
        modelo: 'Hoodie',
        estampado: 'xx Black',
        talle: 2,
        precio: 15999,
    },
]; 



const mostrarProductos = () => {
    let mensaje = "\n Productos disponibles: \n";

    productos.map((producto) => {
        mensaje += ` \n Categoría: ${producto.categoria} \n Modelo: ${producto.modelo} \n Estampado: ${producto.estampado} \n Talle: ${producto.talle} \n Precio: $${producto.precio} \n -------------------------------- \n`
        });

        alert (mensaje);


}

mostrarProductos ();
   
let opcionesEnvio = prompt ('Elegí la opción de envío para tu pedido: \n1- Envío en Córdoba Capital \n2- Envío a la provincia de Córdoba \n3- Envío al resto del país \n4- Otro')

    switch (opcionesEnvio) {
        case '1':
        alert('El costo de envío en Córdoba capital es de $1599')
        alert('El envío demora entre 1 y 2 días hábiles')
        
        
            break;

        case '2':
            alert('El costo de envío en la provincia de Córdoba es de $2500')
            alert('El envío demora entre 2 y 4 días hábiles')
            
            break;
        
        case '3':
        alert('El costo de envío al resto del país es $3500')
        alert('El envío demora entre 3 y 5 días hábiles')
        
        break;

        case '4':
        alert('Por favor comunicate por Whatsapp al 3515038688 para que podamos resolver tu consulta')
        
        break;
    }

alert('Gracias por tu compra, te enviaremos al mail el codigo de seguimiento de tu envío.')