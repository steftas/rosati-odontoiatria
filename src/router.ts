import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Terapia from './views/Terapia.vue';
import Protesi from './views/Protesi.vue';
import Innovazione from './views/Innovazione.vue';
import Pubblicazioni from './views/Pubblicazioni.vue';
import Contatti from './views/Contatti.vue';
import Attivita from './views/Attivita.vue';
import AttivitaById from './views/AttivitaById.vue';
import Areapazienti from './views/Areapazienti.vue';
import Login from './views/Login.vue';
import Miglioramento from './views/Miglioramento.vue';
import Amici from './views/Amici.vue';
import AmiciSZ from './views/AmiciSZ.vue';
import firebase from 'firebase';

import Adminlogin from './views/Adminlogin.vue';
import Adminattivita from './views/Adminattivita.vue';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '*',
      redirect: '/home',
    },
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
    },
    {
      path: '/terapia',
      name: 'terapia',
      component: Terapia,
    },
    {
      path: '/protesi',
      name: 'protesi',
      component: Protesi,
    },
    {
      path: '/innovazione',
      name: 'innovazione',
      component: Innovazione,
    },
    {
      path: '/pubblicazioni',
      name: 'pubblicazioni',
      component: Pubblicazioni,
    },
    {
      path: '/attivita',
      name: 'attivita',
      component: Attivita,
    },
    {
      path: '/attivita/:id',
      name: 'attivitaById',
      component: AttivitaById,
    },
    {
      path: '/area-pazienti',
      name: 'areapazienti',
      component: Areapazienti,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/contatti',
      name: 'contatti',
      component: Contatti,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/admin-login',
      name: 'admin-login',
      component: Adminlogin,
    },
    {
      path: '/admin-attivita',
      name: 'adminattivita',
      component: Adminattivita,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/miglioramento',
      name: 'miglioramento',
      component: Miglioramento,
    },
    {
      path: '/amici',
      redirect: '/amici-ud',
    },
    {
      path: '/amici-ud',
      name: 'amici-ud',
      component: Amici,
    },
    {
      path: '/amici-sz',
      name: 'amici-sz',
      component: AmiciSZ,
    },
  ],
});

router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser;
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);

  if (requiresAuth && !currentUser) {
    next('login');
  } else {
    next();
  }
});

export default router;
