<script setup lang="ts">
import ComponenteImagen from './icons/IMAGENES/ComponenteImagen.vue';
import axios from 'axios';
import Swal from 'sweetalert2';

// Define tus variables reactivas usando ref o reactive
import { ref } from 'vue';

const nombreEmprendimiento = ref('');
const tipoEmprendimiento = ref('');
const numeroEmpleados = ref('');
const nombreRegistro = ref('');
const documento = ref('');
const correoElectronico = ref('');
const contrasena = ref('');
const rol = ref('');

async function registrar() {
  // Validación básica
  if (!nombreEmprendimiento.value || !tipoEmprendimiento.value || !numeroEmpleados.value || !documento.value ||
      !nombreRegistro.value || !correoElectronico.value || !contrasena.value || !rol.value) {
    Swal.fire({
      icon: 'error',
      title: 'Campos incompletos',
      text: 'Debe llenar todos los campos para registrar.',
    });
    return;
  }

  // Validación del correo electrónico
  if (!correoElectronico.value.includes('@')) {
    Swal.fire({
      icon: 'error',
      title: 'Correo electrónico inválido',
      text: 'Por favor, ingrese un correo electrónico válido.',
    });
    return;
  }

  try {
    // Enviar los datos del formulario al backend
    const response = await axios.post('http://127.0.0.1:8000/registrate', {
      nombreEmprendimiento: nombreEmprendimiento.value,
      tipoEmprendimiento: tipoEmprendimiento.value,
      numeroEmpleados: Number(numeroEmpleados.value),
      documento: documento.value,
      nombreRegistro: nombreRegistro.value,
      correoElectronico: correoElectronico.value,
      contraseña: contrasena.value,
      rol: rol.value
    });

    // Verificar si la respuesta es exitosa
    if (response.status === 200) { // O usa response.data si tu API devuelve un objeto
      // Resetear formulario
      resetForm();

      // Mostrar mensaje de éxito
      Swal.fire({
        icon: 'success',
        title: 'Registro exitoso',
        text: 'Emprendimiento registrado correctamente.'
      });
    } else {
      // Si la respuesta no es exitosa, manejar el error aquí
      Swal.fire({
        icon: 'error',
        title: 'Error en el registro',
        text: 'Hubo un problema al registrar el emprendimiento.'
      });
    }
  } catch (error) {
    // Manejo de errores
    console.error('Error al registrar:', error.response.data);
    
    if (Array.isArray(error.response.data.detail)) {
      const errorMessages = error.response.data.detail.map(err => err.msg).join(', ');
      Swal.fire({
        icon: 'error',
        title: 'Error en el registro',
        text: errorMessages,
      });
    } else {
      const errorMessage = error.response.data.detail || 'Hubo un error al registrar. Por favor, intente de nuevo.';
      Swal.fire({
        icon: 'error',
        title: 'Error en el registro',
        text: errorMessage
      });
    }
  }
}

// Función para resetear el formulario
function resetForm() {
  nombreEmprendimiento.value = '';
  tipoEmprendimiento.value = '';
  numeroEmpleados.value = '';
  documento.value = '';
  nombreRegistro.value = '';
  correoElectronico.value = '';
  contrasena.value = '';
  rol.value = '';
}
</script>


<template>
<body>
    <header>
    <nav>
        <ComponenteImagen/>
      <ul>
        <li><router-link to="/">HOME</router-link></li>
        <li><a href="nosotros.html">Nosotros</a></li>
        <li id="res"><router-link to="/Inicio">Iniciar Sesion</router-link></li>
      </ul>
    </nav>
    <hr>
  <hr id="l2">
  </header>

  <div class="container">
    <h1>Crear cuenta</h1>
    <router-link to="/Inicio" class="login-link">¿Tienes cuenta? - Inicia Sesion</router-link>

    <div class="form-container">
      <div class="form-section">
        <h2>Información del emprendimiento</h2>
        <label for="nombre-emprendimiento">Nombre del emprendimiento:</label>
        <input type="text" id="nombre-emprendimiento" v-model="nombreEmprendimiento" />

        <label for="tipo-emprendimiento">Tipo de emprendimiento:</label>
        <input type="text" id="tipo-emprendimiento" v-model="tipoEmprendimiento" />

        <label for="numero-empleados">Número de empleados:</label>
        <input type="number" id="numero-empleados" v-model="numeroEmpleados" />
      </div>

      <div class="form-section">
        <h2>Datos del Usuario</h2>
        
        <label for="documento">Documento:</label>
        <input type="int" id="documento" v-model="documento">

        <label for="nombre-completo">Nombre Completo:</label>
        <input type="text" id="nombre-completo" v-model="nombreRegistro" />

        <label for="correo-electronico">Correo electrónico:</label>
        <input type="email" id="correo-electronico" v-model="correoElectronico" />

        <label for="contrasena">Contraseña:</label>
        <input type="password" id="contrasena" v-model="contrasena" />
      </div>

      <div class="form-section">
        <h2>Selección de Rol</h2>
        <label for="rol">Roles disponibles:</label>
        <select id="rol" v-model="rol">
          <option value="Boss">Jefe</option>
          <option value="admin">Administrador</option>
        </select>
      </div>
    </div>

    <button id="regi" @click="registrar">Registrar</button>
  </div>

        <footer>
            <p>Gestione su inventario de manera eficiente y mantenga su negocio siempre bajo control. ¡Comencemos creando su cuenta!</p>
        </footer>
</body>
<footer class="f2">
      <p>&copy; 2024 </p>
      
  <ul class="wrapper">
    <li class="icon facebook">
      <span class="tooltip">Facebook</span>
      <svg
        viewBox="0 0 320 512"
        height="1.2em"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
        ></path>
      </svg>
    </li>
    <li class="icon twitter">
      <span class="tooltip">Twitter</span>
      <svg
        height="1.8em"
        fill="currentColor"
        viewBox="0 0 48 48"
        xmlns="http://www.w3.org/2000/svg"
        class="twitter"
      >
        <path
          d="M42,12.429c-1.323,0.586-2.746,0.977-4.247,1.162c1.526-0.906,2.7-2.351,3.251-4.058c-1.428,0.837-3.01,1.452-4.693,1.776C34.967,9.884,33.05,9,30.926,9c-4.08,0-7.387,3.278-7.387,7.32c0,0.572,0.067,1.129,0.193,1.67c-6.138-0.308-11.582-3.226-15.224-7.654c-0.64,1.082-1,2.349-1,3.686c0,2.541,1.301,4.778,3.285,6.096c-1.211-0.037-2.351-0.374-3.349-0.914c0,0.022,0,0.055,0,0.086c0,3.551,2.547,6.508,5.923,7.181c-0.617,0.169-1.269,0.263-1.941,0.263c-0.477,0-0.942-0.054-1.392-0.135c0.94,2.902,3.667,5.023,6.898,5.086c-2.528,1.96-5.712,3.134-9.174,3.134c-0.598,0-1.183-0.034-1.761-0.104C9.268,36.786,13.152,38,17.321,38c13.585,0,21.017-11.156,21.017-20.834c0-0.317-0.01-0.633-0.025-0.945C39.763,15.197,41.013,13.905,42,12.429"
        ></path>
      </svg>
    </li>
    <li class="icon instagram">
      <span class="tooltip">Instagram</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="1.2em"
        fill="currentColor"
        class="bi bi-instagram"
        viewBox="0 0 16 16"
      >
        <path
          d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"
        ></path>
      </svg>
    </li>
  </ul>
  
  </footer>
</template>

<style scoped>
body{
    font-family: 'Jura', sans-serif;
    font-weight:normal;
  }
  
  header {
    padding: 20px;
  }
  
  #car2{
    border-top: 2px solid #8F1A2C;
    width: 175px;
    margin-top: 16px;
  }
  
  #car{
    border-top: 2px solid #F0947F;
    width: 175px;
    margin-top: 16px;
  }
  
  ul li {
    text-decoration: none;
    border-bottom: 5px solid #F2937E;
    transition: border-bottom-color 0.3s ease-in-out;
    border-radius: 5px;
  }
  
  ul li:hover {
    border-bottom-color: rgb(17, 0, 255);
  }
  
  nav ul {
    list-style: none;
    display: flex;
    justify-content: space-around;
    margin-left: 314px;
    margin-top: -73px;
  }
  
  nav li a {
    text-decoration: none;
    color: #333;
    padding: 10px;
  }
  
  #res:hover {
    background-color: #ff9178;
    color: aliceblue;
  }
  
  #res{
    transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
    background-color: #e03743;
    text-decoration: none;
    border-bottom: 0px;
    text-align: center;
    font-size: 18px;
    padding: 4px;
    border-radius: 15px;
    width: 204px;
  }
  
  hr {
    border-top: 2px solid #333; /* Ajusta el grosor y color según tus necesidades */
    margin: 20px 0; /* Ajusta el margen superior e inferior */
    margin-top: 54px;
    width: 1300px;
    margin-left: -5%;
  }
  
  #l2 {
    margin-top: 10px;
    width: 800px;
    margin-left: 16%;
  }


.container {
    padding: 20px;
    border-radius: 8px;
    width: 800px;
    text-align: center;
    margin-left: 210px;

}

h1 {
    font-size: 24px;
    color: #D98C75;
}

.login-link {
    color: #8C3420;
    text-decoration: none;
    font-size: 14px;
}
.form-container {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
}
.form-section {
    width: 30%;
}
h2 {
    font-size: 18px;
    color: #D98C75;
    margin-bottom: 10px;
}
label {
    display: block;
    margin-bottom: 5px;
    font-size: 14px;
    color: #8C3420;
}
input, select {
    width: 100%;
    padding: 8px;
    margin-bottom: 10px;
    border-radius: 4px;
    border: 1px solid #ccc;
    background-color: #F2F2F2;
    color: #592E25;
}

#regi{
    transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
    background-color: #e03743;
    text-decoration: none;
    text-align: center;
    font-size: 18px;
    padding: 4px;
    border-radius: 15px;
    width: 204px;
    margin-top: 23px;
}

#regi:hover {
    background-color: #ff9178;
    color: aliceblue;
  }

footer {
    background-color: #8C3420;
    padding: 10px;
    border-radius: 4px;
    color: #000000;
    margin-top: 70px;
}

/*Inicio de animacion de fondo*/
.loader {
    position: absolute;
    top: 60%;
    left: 685px;
    width: 150px;
    height: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: -1;
}

.loader .face {
  position: absolute;
  border-radius: 50%;
  border-style: solid;
  animation: animate023845 3s linear infinite;
}

.loader .face:nth-child(1) {
  z-index: -1;
  width: 100%;
  height: 100%;
  color: #8C3420;
  border-color: currentColor transparent transparent currentColor;
  border-width: 0.4em 0.3em 0em 0em;
  --deg: -45deg;
  animation-direction: normal;
}

.loader .face:nth-child(2) {
    z-index: -1;
  width: 70%;
  height: 70%;
  color: #D98C75;
  border-color: currentColor currentColor transparent transparent; 
  /*En esta linea se configuara el tamaño de las lineas */
  border-width: 0.2em 0em 0em 0.2em;
  --deg: -135deg;
  animation-direction: reverse;
}
/*Aca se configura el tamaño de los circulos */
.loader .face .circle {
  z-index: -1;
  position: absolute;
  width: 50%;
  height: 0.1em;
  top: 50%;
  left: 50%;
  background-color: transparent;
  transform: rotate(var(--deg));
  transform-origin: left;
}
/*Aca se comfigura posicionamiento de los circulos */
.loader .face .circle::before {
  z-index: -1;
  position: absolute;
  top: -0.5em;
  right: -0.5em;
  content: '';
  width: 1em;
  height: 1em;
  background-color: currentColor;
  border-radius: 50%;
  box-shadow: 0 0 2em,
                0 0 4em,
                0 0 6em,
                0 0 8em,
                0 0 10em,
                0 0 0 0.5em rgba(255, 255, 0, 0.1);
}

@keyframes animate023845 {
  to {
    transform: rotate(1turn);
  }
}

  
.f2 {
      background-color: #ffffff;
      padding: 20px;
      text-align: center;
      margin-top: 94px;
  }
  
  .f2 nav ul {
      list-style: none;
      display: inline-block;
  }
  
  .f2 nav li {
      display: inline;
      margin: 0 10px;
  }
  
  .f2 a {
      text-decoration: none;
      color: #333;
  }
  
  /* From Uiverse.io by david-mohseni */ 
  .wrapper {
    display: inline-flex;
    list-style: none;
    height: 120px;
    width: 100%;
    padding-top: 40px;
    font-family: "Poppins", sans-serif;
    justify-content: center;
    margin-left: -32px;
  }
  
  .wrapper .icon {
    position: relative;
    background: #fff;
    border-radius: 50%;
    margin: 10px;
    width: 50px;
    height: 50px;
    font-size: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition: all 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }
  
  .wrapper .tooltip {
    position: absolute;
    top: 0;
    font-size: 14px;
    background: #fff;
    color: #fff;
    padding: 5px 8px;
    border-radius: 5px;
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
    opacity: 0;
    pointer-events: none;
    transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }
  
  .wrapper .tooltip::before {
    position: absolute;
    content: "";
    height: 8px;
    width: 8px;
    background: #fff;
    bottom: -3px;
    left: 50%;
    transform: translate(-50%) rotate(45deg);
    transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }
  
  .wrapper .icon:hover .tooltip {
    top: -45px;
    opacity: 1;
    visibility: visible;
    pointer-events: auto;
  }
  
  .wrapper .icon:hover span,
  .wrapper .icon:hover .tooltip {
    text-shadow: 0px -1px 0px rgba(0, 0, 0, 0.1);
  }
  
  .wrapper .facebook:hover,
  .wrapper .facebook:hover .tooltip,
  .wrapper .facebook:hover .tooltip::before {
    background: #1877f2;
    color: #fff;
  }
  
  .wrapper .twitter:hover,
  .wrapper .twitter:hover .tooltip,
  .wrapper .twitter:hover .tooltip::before {
    background: #1da1f2;
    color: #fff;
  }
  
  .wrapper .instagram:hover,
  .wrapper .instagram:hover .tooltip,
  .wrapper .instagram:hover .tooltip::before {
    background: #e4405f;
    color: #fff;
  }


</style>