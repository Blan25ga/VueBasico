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

new Vue({                        // se crea una instancia de Vue y se le asigna a la variable app, que es la que se va a utilizar en el html
    el: '#app',                 // se le indica a Vue que el elemento que va a controlar es el que tiene el id app
    data: {                     // se le indica a Vue que los datos que va a utilizar son los que están en el objeto data
        saludo: 'Hello Vue!',
        number: 0,
        lista: ['uno', 'dos', 'tres'],
        activo: true,           // se puede utilizar para mostrar o no mostrar un elemento del DOM, hay un ejemplo en el html. (v-show)
        frutas: ['Manzana', 'Pera', 'Uva', 'Sandia', 'Melon'],
        html: '<p>Hola a todos, estoy pintando desde una directiva de Vue</p>',
        texto: "Saludando desde el objeto",
        full_name: "",          // se utiliza para hacer dos way data binding, hay un ejemplo en el html. (v-model)
        validation_error: "",   // se utiliza para mostrar un mensaje de error en el html, si el usuario no ingresa un nombre
        nombre: "",             // se utiliza para hacer dos way data binding, hay un ejemplo en el html. (v-model)
        text_error: false,         // se utiliza para mostrar un mensaje de error en el html, si el usuario no ingresa un texto
        text_success: false, // se utiliza para mostrar un mensaje de éxito en el html, si el usuario ingresa un texto
        sizetxt: "",
        font_texto: 10,            // se utiliza para mostrar el tamaño del texto ingresado por el usuario
    },
    methods: {                              // se le indica a Vue que los métodos que va a utilizar son los que están en el objeto methods
        saludar: function (saludito) {      //*podemos pintar un parametro, y lueo en el html poner el mensaje a la funcion.
            //console.log(this.texto)      //* se imprime en la consola el valor de la propiedad saludo (Hello Vue!)
            console.log(saludito)

            //* si se pesa el parametro, tambien psaarlo en el return o console.log
            // con el "this" , recuperamos cualquier  objeto que contiene la propiedad saludo, en este caso, al objeto data, pero se puede utilizar para hacer referencia a cualquier propiedad del objeto.
            // como asi tambien poner el mensaje que queramos.
        },
        verificarFullName: function () {      // se crea un método para verificar si el nombre y el apellido están completos
            if (this.full_name.length < 5) {  // si el nombre y el apellido están completos, se retorna true
                this.validation_error = "El nombre y el apellido deben tener al menos 5 caracteres"
            } else {                          // si el nombre y el apellido no están completos, se retorna false
                this.validation_error = ""
            }
        },
        verificarNombre: function () {       // se crea un método para verificar si el nombre está completo
            if (this.nombre === 'juan') { // si el nombre está completo, se retorna true
                this.text_success = true     // se muestra el mensaje de éxito
                this.text_error = false      // se oculta el mensaje de error
            } else {
                this.text_error = true        // se muestra el mensaje de error
                this.text_success = false      // se oculta el mensaje de éxito
            }
        },
        cambiarTexto: function () {
            this.font_texto = parseInt(this.sizetxt); // el parseInt es para que el valor que se ingresa en el input sea un numero y no un string

        }
    }
});


new Vue({
    el: '#app2',
    data: {
        num1: 0,
        num2: 10,

    },
    methods: {

    }

})