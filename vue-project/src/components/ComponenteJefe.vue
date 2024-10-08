<script setup lang="ts">
import ComponenteImagen from './icons/IMAGENES/ComponenteImagen.vue';
</script>

<template>
   <header>
    <nav>
        <ComponenteImagen/>
      <ul>
        <li><router-link to="/">HOME</router-link></li>
        <li><a href="/Inicio">Empleados</a></li>
        <li><a href="/Inicio">Administradores</a></li>
      </ul>
    </nav>
    <hr>
  <hr id="l2">
  </header>

  <h1>¡Bienvenido Jefe!</h1>
  <p id="txt">Como Jefe de tu emprendimiento tienes control total de tu equipo y negocio</p>

  <section id="d">
    <p>
      Tienes acceso a todas las funcionalidades de la app. A continuacion, te guiaremos por algunas configuracionesclave para empezar a gestionar tu inventario de manera eficiente
    </p>
  </section>

  <img src="https://tse4.mm.bing.net/th?id=OIP.cj1yvMzi1jooos8IkKOMdAHaKO&pid=Api&P=0&h=180" alt="image" id="cara">

  <p id="jefe-name">
    Abudabi dabi
  </p>
  <div class="progress-container">
        <div class="progress-label">
            <span>Empleados</span>
            <span>150</span>
        </div>
        <div class="progress-bar">
            <div class="progress-bar-inner" style="width: 75%;"></div>
        </div>
    </div>
    <div class="progress-container">
        <div class="progress-label">
            <span>Productos</span>
            <span>500</span>
        </div>
        <div class="progress-bar">
            <div class="progress-bar-inner" style="width: 50%;"></div>
        </div>
    </div>
    <div class="progress-container">
        <div class="progress-label">
            <span>Reportes de la semana</span>
            <span>5</span>
        </div>
        <div class="progress-bar">
            <div class="progress-bar-inner" style="width: 20%;"></div>
        </div>
    </div>
    <div class="button-container">
        <button id="b1">Ver</button>
        <button><a href="/Gest" id="get">Editar</a></button>
    </div>
    <section id="c">
      <p id="in">
        Configurar Inventario
      </p>
      <img src="https://www.cheerspty.com/wp-content/uploads/2022/09/Comida-tipica-de-Panama-Que-puedes-probar-en-tu-viaje.jpg" id="patacon">
      <img src="https://noro.mx/wp-content/uploads/2023/03/Los-5-mejores-platillos-de-comida-callejera-de-Tijuana.jpg" id="taco">
      <img src="https://www.recetasnestle.com.ec/sites/default/files/2022-09/comida-francesa-crepe.jpg.jpg" id="rar">
      <img src="https://www.elmueble.com/medio/2022/05/31/arroz-basmati-salteado-con-heura-y-verduras-variadas-al-curry_969255e1_1276x861.jpg" id="cazu">
      <div class="button-container2">
        <button id="v">Ver mas</button>
        <button id="aña">Añadir Productos</button>
      </div>
    </section>
    <section id="f">
      <p id="g">
          Gestion de Usuarios  
      </p>
      <h1 id="p">Configura los premios y roles para tu equipo</h1>

      <button id="a">Añadir / Invitar Usuarios</button>
      <h2>Invita a los miembros de tu equipo y asigana roles como Administrador u empleado <br> para que puedan empezar a utilizar la app segun sus responcsabilidades</h2>
    </section>

    <div class="alert-config-container">
        <h1 class="alert-config-title">Configuración de Alertas</h1>
        <p class="alert-config-description">
            Define los niveles mínimos de stock y activa notificaciones para mantenerte informado
        </p>
        <button class="alert-config-button">Configurar Alertas</button>
    </div>

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
  
  <style scoped>

@import url('https://fonts.googleapis.com/css2?family=Jura:wght@700&display=swap');

#get{
  text-decoration: none;
  color: #8F1A2C;
}

#get:hover{
    color: #e6e6e6;
}

  #b1{
    margin-left: 192px;
  }

    body{
    font-family: 'Jura', sans-serif;
    font-weight:normal;
  }

h1, #txt {
  text-align: center;
  color: #F0947F;
}

#d {
  background-color: #8F1A2C;
  color: aliceblue;
  width: 120%; /* Asegura que la sección ocupe todo el ancho */
  padding: 20px 0; /* Añade algo de espacio arriba y abajo */
  text-align: center; /* Centra el texto dentro de la sección */
  box-sizing: border-box; /* Asegura que el padding no afecte el ancho total */
  margin-top: 20px;
  margin-left:-118px;
  border-radius: 0px 0px 50px 50px;
  
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
    width: 150px;
    text-align: center;
    font-size: 18px;
    padding: 4px;
    border-radius: 15px;
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

  #cara {
    margin-top: 54px;
    width: 300px;
    height: 350px;
    margin-left: -83px;
    border-radius: 170px 170px 170px 170px;
  }

  #jefe-name{
    margin-left: 250px;
    margin-top: -334px;
    color: #e03743;
    font-size: 34px
  }

.progress-container {
    width: 80%;
    max-width: 400px;
    margin-bottom: 20px;
    margin-left: 250px;
    margin-top: 23px;
}

.progress-label {
    display: flex;
    justify-content: space-between;
    margin-bottom: 5px;
    font-size: 14px;
}

.progress-bar {
    background-color: #f2d2d0;
    border-radius: 10px;
    overflow: hidden;
    height: 15px;
    position: relative;
}

.progress-bar-inner {
    height: 100%;
    background-color: #8F1A2C;
    width: 50%; /* Ajusta el ancho según el progreso */
}

.button-container {
    display: flex;
    justify-content: space-between;
    width: 80%;
    max-width: 400px;
    margin-left: 150px;
    margin-top: 23px
}

.button-container button {
    background-color: #f2d2d0;
    color: #8F1A2C;
    border: none;
    border-radius: 10px;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.button-container button:hover {
    background-color: #8F1A2C;
    color: white;
}
  
#c{
  background-color: #8F1A2C;
  width: 600px;
  height: 350px;
  margin-left: 740px;
  margin-top: -300px;
  border-radius: 50px;
}

#patacon {
  width: 100px;
  height: 100px;
  border-radius: 50px;
  margin-left: 30px;
  margin-top: 10px;
}
#taco{
  width: 100px;
  height: 100px;
  border-radius: 50px;
  margin-left: 45px;

}
#rar{
  width: 100px;
  height: 100px;
  border-radius: 50px;
  margin-left: 45px;

}
#cazu{
  width: 100px;
  height: 100px;
  border-radius: 50px;
  margin-left: 55px;

}

#in {
  color: #F2937E;
  padding: 34px;
  margin-left: 154px;
  font-size: 23px;
}

.button-container2 {
    display: flex;
    justify-content: space-between;
    width: 80%;
    max-width: 400px;
    margin-left: 120px;
    margin-top: 53px
}
.button-container2 button {
    background-color: #f2d2d0;
    color: #8F1A2C;
    border: none;
    border-radius: 10px;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.button-container2 button:hover {
    background-color: #501720;
    color: white;
}

#g{
  color: #F0947F;
  font-size: 29px;
  margin-top: 10px;
  margin-left: -40px;
}
#p{
  margin-left: -990px;
  color: #8F1A2C;
  text-decoration: underline;
}
#a{
  background-color: #f2d2d0;
    color: #8F1A2C;
    border: none;
    border-radius: 10px;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    margin-left: 34px;
    margin-top: 24px;
    margin-left: -19px
}
h2{
  margin-left: -112px;
  font-size: 15px;
  margin-top: 10px;
  color: #8F1A2C;
}

/* Estilo del contenedor principal */
.alert-config-container {
        background-color: #a95a5a; /* Color de fondo del contenedor */
        padding: 20px;
        border-radius: 30px 30px 30px 30px; /* Bordes redondeados en la parte superior */
        text-align: center; /* Centrar el texto */
        width: 60%; /* Ancho del contenedor */
        margin: 0 auto; /* Centrar el contenedor en la página */
        margin-left: 600px;
        margin-top: -190px;
    }

    /* Estilo del título con línea personalizada debajo */
    .alert-config-title {
        font-size: 24px;
        color: #fff;
        position: relative;
        display: inline-block;
        margin-bottom: 20px;
    }

    .alert-config-title::after {
        content: '';
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: -10px;
        width: 60%; /* Ancho de la línea */
        height: 3px; /* Grosor de la línea */
        background-color: #600d0d; /* Color de la línea */
    }

    /* Estilo del texto de descripción */
    .alert-config-description {
        font-size: 16px;
        color: #ffe0e0; /* Color del texto de descripción */
        margin-bottom: 30px;
    }

    /* Estilo del botón */
    .alert-config-button {
        background-color: #fff;
        color: #a95a5a;
        padding: 10px 30px;
        border: none;
        border-radius: 20px; /* Bordes redondeados del botón */
        font-size: 16px;
        cursor: pointer;
        transition: background-color 0.3s;
    }

    .alert-config-button:hover {
        background-color: #e6e6e6; /* Color de fondo al pasar el ratón */
    }

    footer {
      background-color: #ffffff;
      padding: 20px;
      text-align: center;
      margin-top: 94px;
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