import Vue from 'vue'
import VueRouter from 'vue-router'



Vue.use(VueRouter);

const routes = [

    // routes générales
  {path: '/', name: 'Accueil', component: () => import('../views/Accueil.vue'),},
  {path: '/abonnement', name: 'Abonnement', component: () => import('../views/Abonnement.vue'),},
  {path: '/mescours', name: 'MesCours', component: () => import('../views/MesCours.vue'),},
  {path: '/nutrition', name: 'Nutrition', component: () => import('../views/Nutrition.vue'),},
  {path: '/moncompte', name: 'MonCompte', component: () => import('../views/MonCompte.vue'),},
  {path: '/contact', name: 'Contact', component: () => import('../views/Contact.vue'),},
  {path: '/sinscrire', name: 'SInscrire', component: () => import('../views/SInscrire.vue'),},
  {path: '/politiqueconfidentialite', name: 'PolitiqueConf', component: () => import('../views/PolitiqueConfidentialite.vue'),},
  {path: '/mentionslegales', name: 'MentionsLegales', component: () => import('../views/MentionsLegales.vue'),},

    // routes inscription et achat
  {path: '/sinscrire2', name: 'SInscrireStep2', component: () => import('../views/views-purchase/SinscrireStep2.vue'),},
  {path: '/sinscrire3', name: 'SInscrireStep3', component: () => import('../views/views-purchase/SinscrireStep3.vue'),},


];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router;
