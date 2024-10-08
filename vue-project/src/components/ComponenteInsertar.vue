<template>
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
          <label for="rolUsuario">Rol de Usuario</label>
          <select v-model="usuario.rolUsuario" required>
            <option value="administrador">Administrador</option>
            <option value="jefe">Jefe</option>
            <option value="empleado">Empleado</option>
          </select>
        </div>
        <div class="form-group">
          <label for="password">Contraseña</label>
          <input type="password" v-model="usuario.password" required />
        </div>
        <button type="submit">Registrar</button>
        
      </form>
    </div>
  </template>
  
  <script>

  import axios from "axios";
  
  export default {
    data() {
      return {
        usuario: {
          documento: "",
          nombre_usuario: "",
          rolUsuario: "empleado",  // Valor predeterminado
          password: ""
        },
      };
    },
    methods: {
      async registrarUsuario() {
        try {
          const response = await axios.post("http://localhost:8000/usuario", this.usuario);
          console("Usuario registrado exitosamente.");
          this.limpiarFormulario();
          return response
        } catch (error) {
          console("Error al registrar usuario: " + error.response.data.detail);
        }
      },
      limpiarFormulario() {
        this.usuario = {
          documento: "",
          nombre_usuario: "",
          rolUsuario: "empleado",
          password: ""
        };
      }
    },
  };
  </script>
  
  <style>
  .register-form {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
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
    box-sizing: border-box;
  }
  button {
    padding: 10px 20px;
    background-color: #4caf50;
    color: white;
    border: none;
    cursor: pointer;
  }
  button:hover {
    background-color: #45a049;
  }
  </style>  