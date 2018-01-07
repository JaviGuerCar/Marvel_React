# Práctica React_native

## V Keepcoding Mobile Development Bootcamp

La práctica consiste en crear una aplicación de superhéroes con los siguientes requisitos:

### Obligatorios: 

* La app deberá usar uno de los componentes de navegación mostrados en las diapositivas del curso (Recomendado [react-native-router-flux](https://github.com/aksonov/react-native-router-flux)).
* Deberá hacer uso de la librería Redux.
* Pantalla con un listado FlatList y datos cargados desde el web services sobre la temática elegida.
* Pantalla de vista detalle, al pulsar una celda iremos a su vista detalle, que será otra pantalla con la vista individual del elemento de la lista elegido.

### Opcionales:
* El uso de este spinner en los tiempos de carga, que tendremos que
enlazar MANUALMENTE con nuestros proyectos nativos.
[https://github.com/maxs15/react-native-spinkit](https://github.com/maxs15/react-native-spinkit).
* Un formulario de añadir personaje (aunque no esté conectado contra un webservice).

### Instalación:
* Para realizar la práctica se han utilizado dos componentes adicionales:
	* [React-native-image-picker](https://github.com/react-community/react-native-image-picker), para la gestión de las imágenes al momento de crear un nuevo personaje.
	* [React-native-spinkit](https://github.com/maxs15/react-native-spinkit), se usa en la pantalla inicial para dar feedback al usuario cuando se lanza la aplicación. Éste componente es visible sólo mientras se están obteniendo datos del API; una vez finalizada la descarga, desaparece.
* Para instalar la aplicación, hay que ejecutar el comando `npm install`, con ello se descargarán todas las dependencias necesarias para ejecutar la app.
* La aplicación está en modo debug, por tanto para ejectutarla debemos arrancar el servidor de Node, con el comando `npm start`.