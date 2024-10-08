<template>
    <header>
    <nav>
      <ComponenteImagen/>
      <div class="menu-hamburguesa" id="menu-hamburguesa">
        <input type="checkbox" id="menu-toggle" >
        <label for="menu-toggle" class="menu-icon">
          <span></span>
          <span></span>
          <span></span>
        </label>
        <ul class="menu">
          <li><a href="nosotros.html">Nosotros</a></li>
          <li><router-link to="/Inicio">Iniciar Sesión</router-link></li>
          <li id="res"><router-link to="/Registro">Registrate</router-link></li>
        </ul>
      </div>
    </nav>
  </header>
  <hr>
  <hr id="l2">
  
    <ImagenInicio/>
    <div class="card">
        <p class="small-desc">
          Facil de usar, potente de utilizar
        </p>
        <hr id="car">
    </div>
    <div class="card2">
        <p class="small-desc">
          Facil de usar, potente de utilizar
        </p>
        <hr id="car2">
    </div>
    <div class="card3">
        <p class="small-desc">
          Facil de usar, potente de utilizar
        </p>
        <hr id="car2">
    </div>
    <div class="card4">
        <p class="small-desc">
          Facil de usar, potente de utilizar
        </p>
        <hr id="car">
    </div>
    <div class="card5">
        <p class="small-desc">
          Facil de usar, potente de utilizar
        </p>
        <hr id="car">
    </div>
    <div class="card6">
        <p class="small-desc">
          Facil de usar, potente de utilizar
        </p>
        <hr id="car2">
        
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
    
    <script setup>
  import ComponenteImagen from './icons/IMAGENES/ComponenteImagen.vue';
  import ImagenInicio from './icons/IMAGENES/ImagenInicio.vue';
  
  
    </script>
    
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Jura:wght@700&display=swap');
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
  
  .btn {
    background-color: #4CAF50; 
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .card-title {
    color: #262626;
    font-size: 1.5em;
    line-height: normal;
    font-weight: 700;
    margin-bottom: 0.5em;
  }
  .small-desc {
    font-size: 1em;
    font-weight: 400;
    line-height: 1.5em;
    color: #452c2c;
  }
  .card {
    display: block;
    position: relative;
    width: 200px;
    max-height: 320px;
    border-radius: 10px;
    padding: 2em 1.2em;
    margin: 12px;
    text-decoration: none;
    z-index: 1;
    overflow: hidden;
    background: linear-gradient(to bottom, #E7C8C5, #E7C8C5);
    font-family: Arial, Helvetica, sans-serif;
    margin-top: -363px;
    margin-left: 600px;
  }
  .card2 {
    display: block;
    position: relative;
    width: 200px;
    max-height: 320px;
    border-radius: 10px;
    padding: 2em 1.2em;
    margin: 12px;
    text-decoration: none;
    z-index: 1;
    overflow: hidden;
    background: linear-gradient(to bottom, #BF8B8F, #BF8B8F);
    font-family: Arial, Helvetica, sans-serif;
    margin-left: 600px;
    margin-top:23px;
  }
  .card3 {
    display: block;
    position: relative;
    width: 200px;
    max-height: 320px;
    border-radius: 10px;
    padding: 2em 1.2em;
    margin: 12px;
    text-decoration: none;
    z-index: 1;
    overflow: hidden;
    background: linear-gradient(to bottom, #BF8B8F, #BF8B8F);
    font-family: Arial, Helvetica, sans-serif;
    margin-left: 825px;
    margin-top: -323px;
  }
  .card4 {
    display: block;
    position: relative;
    width: 200px;
    max-height: 320px;
    border-radius: 10px;
    padding: 2em 1.2em;
    margin: 12px;
    text-decoration: none;
    z-index: 1;
    overflow: hidden;
    background: linear-gradient(to bottom, #E7C8C5, #E7C8C5);
    font-family: Arial, Helvetica, sans-serif;
    margin-left: 825px;
    margin-top: 22px;
  }
  .card5 {
    display: block;
    position: relative;
    width: 200px;
    max-height: 320px;
    border-radius: 10px;
    padding: 2em 1.2em;
    margin: 12px;
    text-decoration: none;
    z-index: 1;
    overflow: hidden;
    background: linear-gradient(to bottom, #E7C8C5, #E7C8C5);
    font-family: Arial, Helvetica, sans-serif;
    margin-left: 1045px;
    margin-top: -323px;
  }
  .card6 {
    display: block;
    position: relative;
    width: 200px;
    max-height: 320px;
    border-radius: 10px;
    padding: 2em 1.2em;
    margin: 12px;
    text-decoration: none;
    z-index: 1;
    overflow: hidden;
    background: linear-gradient(to bottom, #BF8B8F, #BF8B8F);
    font-family: Arial, Helvetica, sans-serif;
    margin-left: 1045px;
    margin-top: 22px;
  }
  .card:before {
    content: '';
    position: absolute;
    z-index: -1;
    top: -16px;
    right: -16px;
    background: linear-gradient(135deg, #70292F, #70292F);
    height: 32px;
    width: 32px;
    border-radius: 32px;
    transform: scale(1);
    transform-origin: 50% 50%;
    transition: transform 0.35s ease-out;
  }
  .card:hover:before {
    transform: scale(28);
  }
  .card:hover .small-desc {
    transition: all 0.5s ease-out;
    color: rgba(255, 255, 255, 0.8);
  }
  .card:hover .card-title {
    transition: all 0.5s ease-out;
    color: #ffffff;
  }
  .card2:before {
    content: '';
    position: absolute;
    z-index: -1;
    top: -16px;
    right: -16px;
    background: linear-gradient(135deg, #70292F, #70292F);
    height: 32px;
    width: 32px;
    border-radius: 32px;
    transform: scale(1);
    transform-origin: 50% 50%;
    transition: transform 0.35s ease-out;
  }
  .card2:hover:before {
    transform: scale(28);
  }
  .card2:hover .small-desc {
    transition: all 0.5s ease-out;
    color: rgba(255, 255, 255, 0.8);
  }
  .card2:hover .card-title {
    transition: all 0.5s ease-out;
    color: #ffffff;
  }
  .card3:before {
    content: '';
    position: absolute;
    z-index: -1;
    top: -16px;
    right: -16px;
    background: linear-gradient(135deg, #70292F, #70292F);
    height: 32px;
    width: 32px;
    border-radius: 32px;
    transform: scale(1);
    transform-origin: 50% 50%;
    transition: transform 0.35s ease-out;
  }
  .card3:hover:before {
    transform: scale(28);
  }
  .card3:hover .small-desc {
    transition: all 0.5s ease-out;
    color: rgba(255, 255, 255, 0.8);
  }
  .card3:hover .card-title {
    transition: all 0.5s ease-out;
    color: #ffffff;
  }
  .card4:before {
    content: '';
    position: absolute;
    z-index: -1;
    top: -16px;
    right: -16px;
    background: linear-gradient(135deg, #70292F, #70292F);
    height: 32px;
    width: 32px;
    border-radius: 32px;
    transform: scale(1);
    transform-origin: 50% 50%;
    transition: transform 0.35s ease-out;
  }
  .card4:hover:before {
    transform: scale(28);
  }
  .card4:hover .small-desc {
    transition: all 0.5s ease-out;
    color: rgba(255, 255, 255, 0.8);
  }
  .card4:hover .card-title {
    transition: all 0.5s ease-out;
    color: #ffffff;
  }
  .card5:before {
    content: '';
    position: absolute;
    z-index: -1;
    top: -16px;
    right: -16px;
    background: linear-gradient(135deg, #70292F, #70292F);
    height: 32px;
    width: 32px;
    border-radius: 32px;
    transform: scale(1);
    transform-origin: 50% 50%;
    transition: transform 0.35s ease-out;
  }
  .card5:hover:before {
    transform: scale(28);
  }
  .card5:hover .small-desc {
    transition: all 0.5s ease-out;
    color: rgba(255, 255, 255, 0.8);
  }
  .card5:hover .card-title {
    transition: all 0.5s ease-out;
    color: #ffffff;
  }
  .card6:before {
    content: '';
    position: absolute;
    z-index: -1;
    top: -16px;
    right: -16px;
    background: linear-gradient(135deg, #70292F, #70292F);
    height: 32px;
    width: 32px;
    border-radius: 32px;
    transform: scale(1);
    transform-origin: 50% 50%;
    transition: transform 0.35s ease-out;
  }
  .card6:hover:before {
    transform: scale(28);
  }
  .card6:hover .small-desc {
    transition: all 0.5s ease-out;
    color: rgba(255, 255, 255, 0.8);
  }
  .card6:hover .card-title {
    transition: all 0.5s ease-out;
    color: #ffffff;
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
  @media screen and (min-width: 280px) and (max-width: 490px){
  .menu-hamburguesa {
  position: fixed;
  top: 50px;
  right: 20px;
  z-index: 1000; /* Esto me asegura que el menu este encima del resto del contenido */
  }

  .menu-icon {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 40px;
    height: 30px;
    cursor: pointer;
  }

  .menu-icon span {
    display: block;
    height: 4px;
    background-color: #BF8B8F;
    margin-bottom: 5px;
  }

  #menu-toggle {
    display: none;
  }

  .menu {
    position: fixed;
    top: 5;
    right: -250px; 
    height: 90vh;
    width: 170px;
    background-color: #fff;
    list-style: none;
    padding: 50px 20px;
    box-shadow: -2px 0px 5px rgba(239, 179, 179, 0.716);
    transition: right 0.3s ease-in-out;
  }

  .menu li {
    margin: 20px 0;
  }

  .menu li a, .menu li router-link {
    text-decoration: none;
    color: #333;
  }

  #menu-toggle:checked + .menu-icon + .menu {
    right: 0; /*Este mueve el menu dentro de la pantalla */
  }

  /* Cambia el icono de hamburguesa a una "X" cuando está activo */
  #menu-toggle:checked + .menu-icon span:nth-child(1) {
    transform: rotate(45deg);
    position: relative;
    top: 12px;
  }

  #menu-toggle:checked + .menu-icon span:nth-child(2) {
    opacity: 0;
  }

  #menu-toggle:checked + .menu-icon span:nth-child(3) {
    transform: rotate(-45deg);
    position: relative;
    top: -8px;
  }


  nav ul {
    flex-direction: column; /* Cambia la dirección de los elementos a columna */
    justify-content: center;
    margin-left: 0;
    margin-top: 20px;
  }

  nav ul li {
    margin: 10px 0;
  }

  #l2 {
    width: 100%;
    margin-left: 0;
    margin-top: -10px;
  }

  hr {
    margin-top: -10px;
    width: 100%;
    margin-left: 0;
  }

  /* Aqui estoy alineanso las cartas para que queden de dos en dos */
  .card,
  .card2,
  .card3,
  .card4,
  .card5,
  .card6 {
    width: 47%; /* Para hacer que dos cartas quepan en una fila con margenes */
    height: 120px;
    margin: 10px 1.5%; /* Margen a los lados para separarlas y centrar en filas */
    display: inline-block; /* Las cartas deben estar en linea para que se alineen en fila */
    vertical-align: top; /* Para asegurarse de que esten alineadas correctamente en altura */
    box-sizing: border-box;
    background-color: #f8f9fa;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    text-align: center;
  }

  .small-desc {
    font-size: 10px;
    margin-bottom: 10px;
  }

  footer {
    text-align: center;
    padding: 20px 0;
  }

  .wrapper {
    display: flex;
    justify-content: center;
  }

  .wrapper li {
    margin: 0 10px;
  }
}

  </style>