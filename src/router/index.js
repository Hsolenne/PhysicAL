import Vue from 'vue'
import VueRouter from 'vue-router'



Vue.use(VueRouter);

const routes = [
  {path: '/', name: 'Accueil', component: () => import('../views/Accueil.vue'),},
  {path: '/abonnement', name: 'Abonnement', component: () => import('../views/Abonnement.vue'),},
  {path: '/activite', name: 'Activites', component: () => import('../views/Activites.vue'),},
  {path: '/mescours', name: 'MesCours', component: () => import('../views/MesCours.vue'),},
  {path: '/nutrition', name: 'Nutrition', component: () => import('../views/Nutrition.vue'),},
  {path: '/moncompte', name: 'MonCompte', component: () => import('../views/MonCompte.vue'),},
  {path: '/contact', name: 'Contact', component: () => import('../views/Contact.vue'),},
  {path: '/sinscrire', name: 'SInscrire', component: () => import('../views/SInscrire.vue'),},

];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router;
