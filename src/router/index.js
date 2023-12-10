import { createRouter, createWebHistory } from 'vue-router';
import SignIn from '../views/SignIn.vue';
import About from '../views/About.vue';
import Contact from '../views/Contact.vue';
import Register from '../views/Register.vue';
import adminpanel from '../views/AdminPanel/adminpanel.vue';
import residentpanel from '../views/UserPanel/residentpanel.vue';
import HealthRecords from '../views/HealthRecords.vue';
import dash from '../views/dashboard.vue';
import analytic from '../views/analytic.vue';
import survey from '../views/survey.vue';
import inventory from '../views/inventory.vue';
import barangay from '../views/AdminPanel/barangay.vue';
import announcement from '../views/AdminPanel/announcement.vue';
import appointment from '../views/AdminPanel/appointment.vue';
import UserAppointment from '../views/UserPanel/UserAppointment.vue';
import UserSurvey from '../views/UserSurvey.vue';
import UserInventory from '../views/UserInventory.vue';
import UserBarangay from '../views/UserBarangay.vue';
import UserAnnouncement from '../views/UserAnnouncement.vue';
import staffpanel from '../views/staff/staffpanel.vue';
import login from '../views/LoginView.vue';
import main from '../views/main.vue';

const routes = [
  { path: '/', name: 'SignIn', component: SignIn },
  { path: '/about', name: 'About', component: About },
  { path: '/contact', name: 'Contact', component: Contact },
  { path: '/register', name: 'Register', component: Register },
  { path: '/adminpanel', name: 'AdminPanel', component: adminpanel },
  { path: '/residentpanel', name: 'ResidentPanel', component: residentpanel },
  { path: '/HealthRecords', name: 'HealthRecords', component: HealthRecords },
  { path: '/dashboard', name: 'Dashboard', component: dash },
  { path: '/analytic', name: 'Analytic', component: analytic },
  { path: '/survey', name: 'Survey', component: survey },
  { path: '/inventory', name: 'Inventory', component: inventory },
  { path: '/barangay', name: 'Barangay', component: barangay },
  { path: '/announcement', name: 'Announcement', component: announcement },
  { path: '/appointment', name: 'appointment', component: appointment },
  { path: '/UserAppointment', name: 'UserAppointment', component: UserAppointment },
  { path: '/UserSurvey', name: 'UserSurvey', component: UserSurvey },
  { path: '/UserInventory', name: 'UserInventory', component: UserInventory },
  { path: '/UserBarangay', name: 'UserBarangay', component: UserBarangay },
  { path: '/UserAnnouncement', name: 'UserAnnouncement', component: UserAnnouncement },
  { path: '/staffpanel', name: 'staffpanel', component: staffpanel },
  { path: '/LoginView', name: 'login', component: login },
  { path: '/main', name: 'main', component: main, meta: {requiresAuth: true}},
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) =>{
  const isLoggedin = checkUserLogin();
  if(to.matched.some((record) =>record.meta.reruiresAuth))
  {
    if (!isLoggedin)
    {
      next("/SignIn");
    }
    else
    {
      next();
    }
  }
  else{
    next();
  }
});

function checkUserLogin() 
{
  const userToken = sessionStorage.getItem("token");
  return !!userToken;
}

export default router;
