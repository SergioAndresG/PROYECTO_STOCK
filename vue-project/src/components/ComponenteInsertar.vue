<template>
  <hr>
  <hr id="l2">
    <div class="register-form">
      <h2>Registrar Usuario</h2>
      <form @submit.prevent="registrarUsuario">
        <div class="form-group">
          <label for="documento">Documento</label>
          <input type="text" v-model="usuario.documento" required />
        </div>
        <div class="form-group">
          <label for="nombre_usuario">Nombre de Usuario</label>
          <input type="text" v-model="usuario.nombre_usuario" required />
        </div>
        <div class="form-group">
          <label for="correoElectronico">Correo Electronico</label>
          <input type="email" v-model="usuario.correoElectronico" required />
        </div>
        <div class="form-group">
          <label for="nombreEmprendimiento">Nombre del Emprendimiento</label>
          <input type="text" v-model="usuario.nombreEmprendimiento" required />
        </div>
        <div class="form-group">
          <label for="rolUsuario">Rol de Usuario</label>
          <select v-model="usuario.rol_id" required> 
            <option value="1">Administrador</option>
            <option value="2">Jefe</option>
            <option value="3">Empleado</option>
          </select>
        </div>
        <div class="form-group">
          <label for="password">Contraseña</label>
          <input type="password" v-model="usuario.contraseña" required />
        </div>
        <button type="submit">Registrar</button>
        
      </form>
    </div>
<div class="container">
  <div class="cloud front">
    <span class="left-front"></span>
    <span class="right-front"></span>
  </div>
  <span class="sun sunshine"></span>
  <span class="sun"></span>
  <div class="cloud back">
    <span class="left-back"></span>
    <span class="right-back"></span>
  </div>
</div>

<hr id="l3">
<hr id="l4">

<footer>
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
  
  <script setup lang="ts">
  import { ref } from "vue";  // Necesitamos `ref` para declarar variables reactivas
  import axios from "axios";
  
  // Declarar la estructura del usuario como un objeto reactivo
  const usuario = ref({
    documento: "",
    nombre_usuario: "",
    rol_id: "empleado", // Valor predeterminado
    contraseña: "",
    correoElectronico: "",
    nombreEmprendimiento: ""
  });
  
  // Definir la función para registrar el usuario
  const registrarUsuario = async () => {
    try {
      // Hacer la solicitud POST al backend
      const response = await axios.post("http://localhost:8000/usuario", usuario.value);
      console.log("Usuario registrado exitosamente.");
      limpiarFormulario(); // Llamar a la función para limpiar el formulario
      return response;  // Retornar la respuesta si es necesario
    } catch (error) {
      console.error("Error al registrar usuario: ", error.response?.data?.detail || error.message);
    }
  };
  
  // Definir la función para limpiar el formulario
  const limpiarFormulario = () => {
    usuario.value = {
      documento: "",
      nombre_usuario: "",
      rol_id: "empleado",
      contraseña: "",
      correoElectronico: "",
      nombreEmprendimiento: ""
    };
  };

  
  </script>

  
  <style scoped>
  body::before {
        content: '';
        background-image: url('https://img.freepik.com/free-vector/background-flat-autumn-landscape_23-2148243078.jpg?t=st=1728669712~exp=1728673312~hmac=9fa26a8ab9217e2cd35e7c4785514a058e953c75d2a3361bdf63f1675802bc7c&w=996');
        background-size: cover;
        background-position: center;
        position: fixed;
        border-radius: 50px;
        top: 60px;
        left: 380px;
        height: 650px;
        width: 50vw;
        z-index: -1; 
        opacity: 0.7;
    }
  body{
    font-family: 'Jura', sans-serif;
    font-weight:normal;
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

  .register-form {
    max-width: 400px;
    margin: 0 auto;
    padding: 40px;
    border-radius: 40px;
    margin-top: 50px;
    background-color: #8f1a2c87;
    color: #ffffff;
  }
  .form-group {
    margin-bottom: 15px;
  }
  label {
    display: block;
    margin-bottom: 5px;
  }
  input,
  select {
    width: 100%;
    padding: 8px;
    border-radius: 50px;
    box-sizing: border-box;
  }
  button {
    padding: 10px 20px;
    background-color: #e03743;
    color: white;
    border: none;
    cursor: pointer;
    border-radius: 25px;
    transition: background-color, 0.3s;
  }
  button:hover {
    background-color: #8F1A2C;
  }
  #l3{
    margin-top: 300px;
    width: 800px;
    margin-left: 16%;
  }
  #l4{
    margin-top: 9px;
  }
  /* From Uiverse.io by zanina-yassine */ 
.container {
  width: 250px;
  height: 250px;
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -500px;
  margin-left: 83px;
}

.cloud {
  width: 250px;
}

.front {
  padding-top: 45px;
  margin-left: 25px;
  display: inline;
  position: absolute;
  z-index: 11;
  animation: clouds 8s infinite;
  animation-timing-function: ease-in-out;
}

.back {
  margin-top: -30px;
  margin-left: 150px;
  z-index: 12;
  animation: clouds 12s infinite;
  animation-timing-function: ease-in-out;
}

.right-front {
  width: 45px;
  height: 45px;
  border-radius: 50% 50% 50% 0%;
  background-color: #4c9beb;
  display: inline-block;
  margin-left: -25px;
  z-index: 5;
}

.left-front {
  width: 65px;
  height: 65px;
  border-radius: 50% 50% 0% 50%;
  background-color: #4c9beb;
  display: inline-block;
  z-index: 5;
}

.right-back {
  width: 50px;
  height: 50px;
  border-radius: 50% 50% 50% 0%;
  background-color: #4c9beb;
  display: inline-block;
  margin-left: -20px;
  z-index: 5;
}

.left-back {
  width: 30px;
  height: 30px;
  border-radius: 50% 50% 0% 50%;
  background-color: #4c9beb;
  display: inline-block;
  z-index: 5;
}

.sun {
  width: 120px;
  height: 120px;
  background: -webkit-linear-gradient(to right, #fcbb04, #fffc00);
  background: linear-gradient(to right, #fcbb04, #fffc00);
  border-radius: 60px;
  display: inline;
  position: absolute;
}

.sunshine {
  animation: sunshines 2s infinite;
}

@keyframes sunshines {
  0% {
    transform: scale(1);
    opacity: 0.6;
  }

  100% {
    transform: scale(1.4);
    opacity: 0;
  }
}

@keyframes clouds {
  0% {
    transform: translateX(15px);
  }

  50% {
    transform: translateX(0px);
  }

  100% {
    transform: translateX(15px);
  }
}

footer {
      padding: 20px;
      text-align: center;
      margin-top: 24px;
  }
  
  footer nav ul {
      list-style: none;
      display: inline-block;
  }
  
  footer nav li {
      display: inline;
      margin: 0 10px;
  }
  
  footer a {
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
  #c{
    color: #333;
    margin-left: -1px;
  }
  </style>  