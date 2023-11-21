import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import About from '@/views/About.vue';
import Contact from '@/views/Contact.vue';
import Register from '@/views/Register.vue';
import SignIn from '@/views/SignIn.vue';
import adminpanel from '@/views/adminpanel.vue';
import residentpanel from '@/views/residentpanel.vue';
import HealthRecords from '@/views/HealthRecords.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/contact', component: Contact },
  { path: '/register', component: Register },
  { path: '/signin', component: SignIn },
  { path: '/adminpanel', component: adminpanel },
  { path: '/residentpanel', component: residentpanel },
  { path: '/HealthRecords', component: HealthRecords },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
