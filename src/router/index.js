import Vue from 'vue'
import VueRouter from 'vue-router'
import NotFound from '../views/NotFound.vue'
import Simple from '../views/Simple.vue'
import Avanzado from '../views/Avanzado.vue'

Vue.config.productionTip = false
Vue.use(VueRouter)

const routes =[
    {
        path:'/administrador/simple',
        name: 'simple',
        component: Simple
    },
    {
        path:'/administrador/avanzado',
        name: 'avanzado',
        component: Avanzado
    },
    {
        path: '/',
        name: 'Inicio',
        component:()=> import('../views/Inicio.vue')
    },
    {
        path:'/inicio',
        name:'Raiz',
        redirect:'/'
    },
    {
        path:'/home',
        name:'Home',
        redirect:'/'
    },
    {
        path:'/portada',
        name:'Portada',
        redirect:'/'
    },
    {
        path: '/contacto',
        alias:['/contactame'],
        component:()=> import('../views/Contacto.vue')
        
    },
    {
        path:'/sobremi',
        name:'SobreMi',
        component:()=> import('../views/SobreMi.vue'),
        alias:['/acerca']
        
    },
    {
        path: '/post/1',
        name: 'Articulo',
        component:()=> import('../views/Articulo.vue')
    },
   
    {
        path: '/*',
        name: 'NotFound',
        component: NotFound
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router