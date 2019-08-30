import FPS from './paginasCategorias/FPS.vue'
import Terror from './paginasCategorias/Terror.vue'
import RPG from './paginasCategorias/RPG.vue'
import Aventura from './paginasCategorias/Aventura.vue'
import MaisVendidos from './paginasCategorias/MaisVendidos.vue'
import Luta from './paginasCategorias/Luta.vue'
import Login from './menuSecundario/login.vue'
import MyCart from './menuSecundario/MyCart.vue'
import Payment from './components/Compras/Payment.vue'

export const routes = [
    { path: '/', name: 'MaisVendidos', component: MaisVendidos},
    { path: '/luta', name: 'Luta', component: Luta},
    { path: '/fps', name: 'FPS', component: FPS},
    { path: '/terror', name: 'Terror', component: Terror},
    { path: '/rpg', name: 'RPG', component: RPG},
    { path: '/aventura', name: 'Aventura', component: Aventura},
    { path: '/login|register', name: 'Login', component: Login},
    { path: '/cart', name: 'Cart', component: MyCart},
    { path: '/payment', name: 'Payment', component: Payment},
]