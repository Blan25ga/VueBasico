/*
-Para trabajar con Vue.js, se debe importar la librería de Vue.js
-Luego, se debe crear una instancia de Vue.js, la cual se encargará de manejar el DOM, y de hacer que el DOM se actualice cuando se cambien los datos.
//*Esto se hace en un index.js, el cual se encargará de manejar la lógica de la aplicación.

Esta instancia de Vue.js se crea con la función Vue(), la cual recibe un objeto con las propiedades que se desean manejar.
 de lasiguiente manera: //? new Vue({}). hay un ejemplp debajo
-En este objeto, se debe especificar el elemento del DOM que se desea manejar, y los datos que se desean manejar.
de la siguiente manera: //* el: '#app',
                        //* data: { saludo: 'Hola mundo' } 

-En este caso, se desea manejar el elemento con id 'app', y el dato 'saludo'. Este se encuentra en el index.html, y se encuentra en el elemento div.

-Crear una instancia de Vue para cada objeto, sedeben especificar los datos que se desean manejar, y el elemento del DOM que se desea manejar.
//* como en el ejemplo que esta debajo.
- Se debe realizar por cada id un objeto de Vue, para que cada id tenga sus propios datos y su propio elemento del DOM que manejar.

*/

//? codigo

new Vue({ // se crea una instancia de Vue y se le asigna a la variable app, que es la que se va a utilizar en el html
    el: '#app', // se le indica a Vue que el elemento que va a controlar es el que tiene el id app
    data: { // se le indica a Vue que los datos que va a utilizar son los que están en el objeto data
        saludo: 'Hello Vue!',
        number: 0,
        lista: ['uno', 'dos', 'tres'],
        activo: true, // se puede utilizar para mostrar o no mostrar un elemento del DOM, hay un ejemplo en el html. (v-show)
        frutas: ['Manzana', 'Pera', 'Uva', 'Sandia', 'Melon'],
        html: '<p>Hola a todos, estoy pintando desde una directiva de Vue</p>',
        nombre: ""
    },
    methods: { // se le indica a Vue que los métodos que va a utilizar son los que están en el objeto methods
        saludar: function () {
            console.log(this.saludo) // se imprime en la consola el valor de la propiedad saludo (Hello Vue!)
            // this hace referencia al objeto que contiene la propiedad saludo, en este caso, al objeto data, pero se puede utilizar para hacer referencia a cualquier propiedad del objeto.
            // comoasi tambien poner el mensaje que queramos.
        }
    },

})

