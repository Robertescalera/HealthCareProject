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
import Appointment from '../views/Appointment.vue';
import UserSurvey from '../views/UserSurvey.vue';
import UserInventory from '../views/UserInventory.vue';
import UserBarangay from '../views/UserBarangay.vue';
import UserAnnouncement from '../views/UserAnnouncement.vue';
import staffpanel from '../views/staff/staffpanel.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  { path: '/contact', name: 'Contact', component: Contact },
  { path: '/register', name: 'Register', component: Register },
  { path: '/signin', name: 'SignIn', component: SignIn },
  { path: '/adminpanel', name: 'AdminPanel', component: adminpanel },
  { path: '/residentpanel', name: 'ResidentPanel', component: residentpanel },
  { path: '/HealthRecords', name: 'HealthRecords', component: HealthRecords },
  { path: '/dashboard', name: 'Dashboard', component: dash },
  { path: '/analytic', name: 'Analytic', component: analytic },
  { path: '/survey', name: 'Survey', component: survey },
  { path: '/inventory', name: 'Inventory', component: inventory },
  { path: '/barangay', name: 'Barangay', component: barangay },
  { path: '/announcement', name: 'Announcement', component: announcement },
  { path: '/Appointment', name: 'Appointment', component: Appointment },
  { path: '/UserSurvey', name: 'UserSurvey', component: UserSurvey },
  { path: '/UserInventory', name: 'UserInventory', component: UserInventory },
  { path: '/UserBarangay', name: 'UserBarangay', component: UserBarangay },
  { path: '/UserAnnouncement', name: 'UserAnnouncement', component: UserAnnouncement },
  { path: '/staffpanel', name: 'staffpanel', component: staffpanel },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
