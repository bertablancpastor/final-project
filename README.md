
# **ToDo App**

[Click para acceder a la web](https://final-project-glgj6lj0j-bertablancpastor.vercel.app/auth/login)

## Descripcion

![Pagina Home](/public/buttons/Captura.PNG)

Aquí os presento el proyecto final del bootcamp Front End Development de Ironhack. Consiste en crear una pagina web de ToDo's.

Es una aplicacion hecha con el framework de JavaScript Vue.js. La pàgina permite crear-te una cuenta, loguearte y desloguearte.
Una vez dentro de la pàgina pues añadir tareas con un titulo y una descripción. Una vez la tarea esta creada se puede editar, marcar como completada o eliminar. 
La pagina esta conectada a Supabase, una aplicación web que te hace las funcionalidades de Back End, creandote la base de datos.
Toda la pagina tiene la version responsive aplciada para mobile  y para desktop.

## Requisitos:

Para este proyecto vamos a desarrollar una aplicación ToDo (para hacer un seguimiento de tareas que tenemos pendientes) que deberá cumplir como mínimo los siguientes puntos:
* Los usuarios podrán crearse una cuenta (Sign Up, Log In y Log Out).
* Los usuarios podrán crear tareas, editarlas, marcarlas/desmarcarlas como completadas y borrarlas.
* La aplicación estará vinculada a Supabase y guardará ahí toda la data de tareas y usuarios.
* Usaremos las stores de Pinia para conectarnos con el backend y manejar el estado de la app.
* Usaremos Vue Router para poder navegar por nuestra página evitando hacer refresh.
* Crearemos el styling en UN solo archivo (lo tenéis creado en assets/style.css). Si este está correctamente insertado en main.js, no tendréis problema accediendo a las clases y los ids de vuestros componentes.
* El diseño de la página será propio.
* La página será responsive y tendrá al menos dos versiones: mobile y desktop.
* La app estará deployeada en Vercel.
* Las operaciones asíncronas estarán correctamente manejadas con promises o async/await.
* Mantendréis una ruta de trabajo en el readme del repo, que actualizaréis cada día.
* Usaréis un trello para seguir el progreso de vuestro proyecto.

## Seguimiento del proyecto:
## [Mi Trello](https://trello.com/b/NkJzfJXW/final-project)

### 05/12/2022:
* Preparar el README con la descripcion del proyecto
* Leer toda la documentación y entender-la
* Entender la logica que se debe aplicar

### 06/12/2022:
* Implentar la logica para el Sign Up, Sign In y Sing Out
* Preparar la tienda task.js para poder conectar los botones con la base de datos
* Implementar la funcionalidad de addTask 
* Hacer el fetch de las tareas de Supabase al cargar la pagina y cada vez que se ejecute alguna accion de cambio

### 07/12/2022:
* Implementar la funcionalidad de taskItem
* Añadir funcionalidad al boton toggle que permite cambiar el estado de la tarea
* Cuando el usuario clique en el boton de toggle y cambie el estado de la tarea a "Hecha", esta se tacha
* Añadir funcionalidad al boton de cambiar el nombre que permite al usuario cambiar el titulo de la tarea
* Añadir funcionalidad al boton de borrar la tarea
* Implentar HTML y CSS del Sign Up y Sing In
* Añadir el diseño HTML y CSS del componente taskItem
* Empezar con el diseño HTML y CSS del componente addTask
* Subir el proyecto a Vercel para que este disponible para todo el mundo

### 08/12/2022:
* Seguir con el diseño del CSS de los componentes taskItem y addTask
* Implentar los componentes del Footer
* Añadir el diseño HTML y CSS del componente Footer
* Añadir el diseño HTML y CSS del view Account
* Modificar el fav icon
* Adaptar el diseño a la version movil, en este caso solo hay solo media query que se activa a partir de 747px para abajo

### 09/12/2022:
* Implementar menu hamburguesa para versiones moviles
* Implemntar la funcionalidad de ocultar/mostrar contraseña en el Sign In
* Implementar ordenar tarea segun si estan finalizadas o no. Las finalizadas se colocaran al final

### 12/12/2022:
* Implementar perfil de usuario conectado con supabase

### 13/12/2022:
* Implementar perfil de usuario conectado con supabase
* Implementar diseño HTML y CSS del Perfil de Usuario conectado a supabase

### 14/12/2022:

### 15/12/2022:
* Repaso de la pagina y todas sus funcionalidades
* Preparar la presentación del proyecto

### 16/12/2022:
* Preparar la presentacion del proyecto
* Presentación del proyecto