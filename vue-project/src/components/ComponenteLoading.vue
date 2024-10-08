<template>
    <div v-if="isLoading">Cargando...</div>
    <div v-else>
      </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isLoading: true
      }
    },
    beforeRouteEnter(to, from, next) {
      // Lógica para cargar los datos
      // ...
      next(vm => {
        vm.isLoading = false
      })
    }
  }
  </script>