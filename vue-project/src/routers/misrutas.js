import ComponenteInicioSesion from "@/components/ComponenteInicioSesion.vue";
import { createRouter, createWebHistory } from "vue-router";
import ComponenteHome from "@/components/ComponenteHome.vue";
import ComponenteRegistro from "@/components/ComponenteRegistro.vue";
import ComponenteJefe from "@/components/ComponenteJefe.vue";
import ComponenteAdmin from "@/components/ComponenteAdmin.vue";
import ComponenteEmp from "@/components/ComponenteEmp.vue";
import ComponenteGestion from "@/components/ComponenteGestion.vue";
import ComponenteInsertar from "@/components/ComponenteInsertar.vue";

const routes = [
    {
        path:'/',
        name: 'Home',
        component: ComponenteHome
    },
    {
        path: '/Inicio',
        name: 'Inicio',
        component: ComponenteInicioSesion
    },
    {
        path:'/Registro',
        name: 'Registro',
        component: ComponenteRegistro
    },
    {
        path: '/Jefe',
        name: 'Jefe',
        component: ComponenteJefe
    },
    {
        path: '/Admin',
        name: 'Admin',
        component: ComponenteAdmin
    },
    {
        path: '/Emp',
        name: 'Emp',
        component: ComponenteEmp
    },
    {
        path: '/Gest',
        name: 'Gest',
        component: ComponenteGestion
    }, 
    {
        path: '/Insert',
        name: 'Insert',
        component: ComponenteInsertar
    }

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;