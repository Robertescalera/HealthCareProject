import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Contact from '../views/Contact.vue';
import Register from '../views/Register.vue';
import SignIn from '../views/SignIn.vue';
import adminpanel from '../views/adminpanel.vue';
import residentpanel from '../views/residentpanel.vue';
import HealthRecords from '../views/HealthRecords.vue';
import dash from '../views/dashboard.vue';
import analytic from '../views/analytic.vue';
import survey from '../views/survey.vue';
import inventory from '../views/inventory.vue';
import barangay from '../views/barangay.vue';
import announcement from '../views/announcement.vue';
import UserHealthRecord from '../views/UserHealthRecord.vue';


const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'about', component: About },
  { path: '/contact', name: 'contact', component: Contact },
  { path: '/register', name: 'register', component: Register },
  { path: '/signin', name: 'signin', component: SignIn },
  { path: '/adminpanel', name: 'adminpanel', component: adminpanel },
  { path: '/residentpanel', name: 'residentpanel', component: residentpanel },
  { path: '/HealthRecords', name: 'HealthRecord', component: HealthRecords },
  { path: '/dashboard', name: 'dashboard', components: dash },
  {  path: '/analytic', name: 'analytic', component: analytic},
  {  path: '/survey', name: 'survey', component: survey},
  {  path: '/inventory',name: 'inventory', component: inventory},
  {  path: '/barangay', name: 'barangay', component: barangay},
  {  path: '/announcement', name: 'announcement', component: announcement},
  {  path: '/UserHealthRecord', name: 'announcement', component: UserHealthRecord},
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
