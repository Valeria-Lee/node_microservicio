# node_microservicio
API de registro de usuarios diseñada bajo el enfoque de microservicios.

## Descripcion.
Este es un proyecto de API RESTful para gestionar contactos. La API permite realizar operaciones CRUD: Crear, Leer, Eliminar en una lista de contactos. Esta API puede ser integrada como un microservicio para en una aplicación más grande. El proyecto está basado en Node.js utilizando Express y Firebase como base de datos (aunque se puede adaptar a otras bases de datos siempre y cuando se adapte).

## Funcionalidades
- Crear un contacto: Se puede agregar un nuevo contacto con los campos: firstname, lastname, email, y phone.
- Mostrar contactos: Muestra la lista de todos los contactos almacenados.
- Eliminar un contacto: Permite eliminar un contacto específico utilizando su id.

## Tecnologías.
- Node.js
- Express.js
- Firebase Realtime Database
- JWT (JSON Web Tokens) para autenticación
- CORS para manejo de solicitudes entre dominios

- ## Requisitos.
- **Node.js**: La ultima version de NodeJS tiene que estar instalada. Puedes descargarla desde la [pagina oficial](https://nodejs.org/) o mediante un [manejador de versiones](https://github.com/Schniz/fnm.git).
- **Firebase**: Necesitarás una cuenta de Firebase y una base de datos de Realtime Database.
  Para ello se pueden realizar los siguientes pasos:
  - Crear una cuenta en Firebase.
  - Crear un nuevo proyecto en la consola de Firebase y habilita la base de datos en tiempo real.
  - Copiar las credenciales de Firebase (apiKey, authDomain, databaseURL, etc.) y configúralas en el archivo .env.

## Instalación
1. **Clonar el repositorio**:

    ```bash
    git clone https://github.com/tuusuario/login-api-microservice.git
    cd login-api-microservice
    ```

2. **Instalar dependencias**:

    Asegúrate de estar en el directorio raíz del proyecto y ejecuta:

    ```bash
    npm install
    ```

3. **Configuración de variables de entorno**:

    Crea un archivo `.env` en la raíz del proyecto y configura las siguientes variables de entorno:

    ```env
    PORT=4000
    FIREBASE_API_KEY=tu_api_key_de_firebase
    FIREBASE_AUTH_DOMAIN=tu_auth_domain_de_firebase
    FIREBASE_DATABASE_URL=tu_database_url_de_firebase
    FIREBASE_PROJECT_ID=tu_project_id_de_firebase
    FIREBASE_STORAGE_BUCKET=tu_storage_bucket_de_firebase
    FIREBASE_MESSAGING_SENDER_ID=tu_messaging_sender_id_de_firebase
    FIREBASE_APP_ID=tu_app_id_de_firebase
    ```

    Estas variables las puedes obtener desde la consola de Firebase.

4. **Iniciar el servidor**:

    Después de instalar las dependencias y configurar las variables de entorno, puedes iniciar el servidor con:

    ```bash
    npm run dev
    ```
    El servidor se iniciará en el puerto configurado en la variable `PORT` (por defecto, 4000).

5. **Para poder utilizar la interfaz, es necesario correr la pagina que consume la API mediante abrirlo desde el navegador:**
   ```bash
   Open
   ```
   Seleccionar el navegador de su eleccion, o bien, mediante una extension como Live Server para Visual Studio Code.

