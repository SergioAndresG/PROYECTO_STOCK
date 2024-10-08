<template>
    <div class="contenedor">
      <img src="c:\Users\Sergio Garcia\Downloads\WhatsApp Image 2024-08-28 at 8.55.33 PM.jpeg" class="imagen" alt="imagen 1">
    </div>
</template>
  
  <style>
  .imagen {
    display: flex;
    height: 130px;
    width: 250px; 
  }
  .contenedor{
    display: flex;
  }
  @media screen and (min-width: 280px) and (max-width: 490px){
    .imagen {
    display: flex;
    height: 80px;
    width: 150px; 
    margin-left: -49px;
    margin-top: -30px;
  }
  .contenedor{
    display: flex;
  }
  }
  </style>