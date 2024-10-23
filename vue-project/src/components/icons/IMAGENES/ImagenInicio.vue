<template>
    <div class="contenedor">
      <img src="https://e84bh8b3dtf.exactdn.com/wp-content/uploads/2020/08/User-Management-e1598275803473.png?strip=all&lossy=1&w=1920&ssl=1" class="imagen" alt="imagen 1">
    </div>
</template>
  
  <style scoped>
  .imagen {
    display: flex;
    height: 450px;
    width: 690px; 
    border-radius: 300px 0px 0px 0px;
    z-index: -1;
  }
  .contenedor{
    display: flex;
  }
  @media screen and (min-width: 280px) and (max-width: 490px){
    .imagen {
    display: flex;
    height: 150px;
    width: 280px; 
    border-radius: 300px 0px 0px 0px;
    z-index: -1;
    margin-top: 10px;
    margin-left: -0px;
  }
  .contenedor{
    display: flex;
  }
  }
  </style>